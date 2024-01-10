import { List, Root } from '@radix-ui/react-navigation-menu';
import { FC } from 'react';

import style from './NavigationMenu.module.scss';
import NavItem, { NavItemProps } from './NavItem';

type NavigationMenuProps = {
  items: NavItemProps[];
};

const NavigationMenu: FC<NavigationMenuProps> = ({ items }) => {
  return (
    <Root className={style.menuRoot}>
      <List className={style.menuList}>
        {items.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </List>
    </Root>
  );
};

export default NavigationMenu;
