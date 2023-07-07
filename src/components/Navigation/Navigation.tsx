import clsx from 'clsx';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import style from './Navigation.module.scss';

type NavItem = {
  label: string;
  path: string;
  dropdown?: NavItem[];
};

type NavProps = {
  items: NavItem[];
};

type NavRef = {
  closeDropdowns: () => void;
};

const Navigation = forwardRef<NavRef, NavProps>(({ items }, ref) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useImperativeHandle(ref, () => ({
    closeDropdowns: () => {
      setOpenDropdown(null);
    },
  }));

  const handleMouseEnter = (index: number) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className={style.menu}>
      <ul className={style.navigation}>
        {items.map(({ label, path, dropdown }, index) => (
          <li
            key={label}
            className={clsx(style.navigationItem, {
              [style.navigationItemOpen]: openDropdown === index,
            })}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                clsx(style.navigationLink, {
                  [style.navigationLinkActive]: isActive,
                })
              }
            >
              {label}
            </NavLink>
            {dropdown && (
              <ul className={style.dropdown} ref={dropdownRef}>
                {dropdown.map((dropdownItem) => (
                  <li
                    key={dropdownItem.label}
                    className={clsx(style.dropdownItem, {
                      [style.dropdownItemSeparator]:
                        dropdownItem.label === 'Платные' ||
                        dropdownItem.label === 'Облачные' ||
                        dropdownItem.label === 'База игр',
                      [style.dropdownItemIcon]: dropdownItem.label === 'Простые',
                    })}
                  >
                    <Link
                      to={`${path}${dropdownItem.path}`}
                      className={style.dropdownLink}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {dropdownItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
