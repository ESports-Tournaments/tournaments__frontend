import clsx from 'clsx';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

const MENU_ITEMS = [
  { label: 'Все турниры', path: '/', disabled: false },
  { label: 'Напарники', path: '/a', disabled: true },
  { label: 'Рейтинги', path: '/b', disabled: true },
  { label: 'Турнирные новости', path: '/c', disabled: true },
  { label: 'Видео', path: '/d', disabled: true },
];

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
