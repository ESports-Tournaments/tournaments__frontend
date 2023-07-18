import * as Navigation from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import { FC, forwardRef, KeyboardEvent, PropsWithChildren, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import style from './NavigationMenu.module.scss';

type NavigationMenuProps = {
  items: NavItemProps[];
};

type NavItemProps = {
  label: string;
  path: string;
  dropdown?: NavItemProps[];
};

type ListItemProps = {
  path: string;
  label: string;
  className?: string;
  href: string;
};

const NavigationMenu: FC<NavigationMenuProps> = ({ items }) => {
  return (
    <Navigation.Root className={style.menuRoot}>
      <Navigation.List className={style.menuList}>
        {items.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </Navigation.List>
    </Navigation.Root>
  );
};

const NavItem: FC<NavItemProps> = ({ label, path, dropdown }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      ref.current?.focus();
    }
  };

  return (
    <Navigation.Item className={style.menuItem}>
      <Navigation.Trigger className={style.menuTrigger} onKeyDown={handleKeyDown}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            clsx(style.menuLink, {
              [style.menuLinkActive]: isActive,
            })
          }
          ref={ref}
        >
          {label}
        </NavLink>
      </Navigation.Trigger>
      {dropdown && (
        <Navigation.Content className={style.menuContent}>
          <Navigation.Sub className={style.subMenu}>
            <Navigation.List className={style.list}>
              {dropdown.map((dropdownItem) => (
                <ListItem
                  key={dropdownItem.label}
                  label={dropdownItem.label}
                  path={dropdownItem.path}
                  href={path}
                />
              ))}
            </Navigation.List>
          </Navigation.Sub>
        </Navigation.Content>
      )}
    </Navigation.Item>
  );
};

const ListItem = forwardRef<HTMLAnchorElement, PropsWithChildren<ListItemProps>>(
  ({ children, className, label, path, href }, forwardedRef) => (
    <li className={style.listItem}>
      <Navigation.Link asChild>
        <Link
          to={`${href}${path}`}
          className={clsx(style.listItemLink, className)}
          ref={forwardedRef}
        >
          <div className={style.listItemHeading}>{label}</div>
          <p className={style.listItemText}>{children}</p>
        </Link>
      </Navigation.Link>
    </li>
  ),
);

export default NavigationMenu;
