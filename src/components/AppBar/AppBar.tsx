import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from '~/components/MobileMenu';
import NavItem from '~/components/NavItem';

import style from './AppBar.module.scss';
import { NAV_ITEMS } from './const';

export const AppBar: FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
    document.body.classList.remove('mobileMenuOpened');
  };

  const openMenu = () => {
    setMenuOpened(true);
    document.body.classList.add('mobileMenuOpened');
  };

  return (
    <div className={style.root}>
      <div className={clsx(style.container)}>
        <div className={style.left}>
          <button
            type="button"
            className={style.mobileMenuToggle}
            onClick={menuOpened ? closeMenu : openMenu}
          >
            <Icon
              icon={menuOpened ? 'ic:round-close' : 'ic:twotone-menu'}
              width={30}
              height={30}
            />
          </button>

          <Link className={style.logo} to="/">
            Play
          </Link>

          <nav className={style.menu}>
            <ul className={style.navigation}>
              {NAV_ITEMS.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </ul>
          </nav>
        </div>
        <Link to="/profile" className={style.userAvatar}>
          <div className={style.avatar} />
        </Link>
      </div>

      {menuOpened && <MobileMenu onClose={closeMenu} />}
    </div>
  );
};
