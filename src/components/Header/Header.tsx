import clsx from 'clsx';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { MENU_ITEMS } from './const';
import style from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={style.root}>
      <nav className={style.container}>
        {MENU_ITEMS.map(({ disabled, label, path }) => (
          <NavLink
            key={label}
            className={({ isActive }) =>
              clsx(style.menuItem, {
                [style.disabled]: disabled,
                [style.active]: isActive,
              })
            }
            to={path}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
