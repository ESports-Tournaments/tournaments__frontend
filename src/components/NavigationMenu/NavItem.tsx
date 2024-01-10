import { Content, Item, List, Sub, Trigger } from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import { FC, KeyboardEvent, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from './ListItem';
import style from './NavigationMenu.module.scss';

export type NavItemProps = {
  label: string;
  path: string;
  dropdown?: NavItemProps[];
};

const NavItem: FC<NavItemProps> = ({ label, path, dropdown }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      ref.current?.focus();
    }
  };

  return (
    <Item className={style.menuItem}>
      <Trigger className={style.menuTrigger} onKeyDown={handleKeyDown}>
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
      </Trigger>
      {dropdown && (
        <Content className={style.menuContent}>
          <Sub className={style.subMenu}>
            <List className={style.list}>
              {dropdown.map((dropdownItem) => (
                <ListItem
                  key={dropdownItem.label}
                  label={dropdownItem.label}
                  path={dropdownItem.path}
                  href={path}
                />
              ))}
            </List>
          </Sub>
        </Content>
      )}
    </Item>
  );
};
export default NavItem;
