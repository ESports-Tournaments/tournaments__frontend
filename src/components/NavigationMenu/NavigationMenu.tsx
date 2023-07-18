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
    <Navigation.Root className={style.NavigationMenuRoot}>
      <Navigation.List className={style.NavigationMenuList}>
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
    <Navigation.Item className={style.NavigationMenuItem}>
      <Navigation.Trigger
        className={style.NavigationMenuTrigger}
        onKeyDown={handleKeyDown}
      >
        <NavLink
          to={path}
          className={({ isActive }) =>
            clsx(style.NavigationMenuLink, {
              [style.NavigationMenuLinkActive]: isActive,
            })
          }
          ref={ref}
        >
          {label}
        </NavLink>
      </Navigation.Trigger>
      {dropdown && (
        <Navigation.Content className={style.NavigationMenuContent}>
          <Navigation.Sub className={style.Sub}>
            <Navigation.List className={style.List}>
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
    <li className={style.ListItem}>
      <Navigation.Link asChild>
        <Link
          to={`${href}${path}`}
          className={clsx(style.ListItemLink, className)}
          ref={forwardedRef}
        >
          <div className={style.ListItemHeading}>{label}</div>
          <p className={style.ListItemText}>{children}</p>
        </Link>
      </Navigation.Link>
    </li>
  ),
);

export default NavigationMenu;
