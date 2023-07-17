import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import style from './NavItem.module.scss';

type NavItemProps = {
  label: string;
  path: string;
  dropdown?: NavItemProps[];
};

const NavItem: FC<NavItemProps> = ({ label, path, dropdown }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const menuItemRef = useRef<HTMLLIElement>(null);
  const menuLinkRef = useRef<HTMLAnchorElement>(null);
  const dropdownLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    menuItemRef.current?.addEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    dropdownLinkRef.current?.focus();
  }, [activeIndex]);

  useEffect(() => {
    if (openDropdown) {
      setActiveIndex(-1);
    }
  }, [openDropdown]);

  const handleMouseEnter = () => {
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpenDropdown(false);
    }

    if (event.key === ' ') {
      event.preventDefault();
      setOpenDropdown(!openDropdown);
    }

    if (openDropdown) handleDropdownKeyDown(event);
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prevIndex) => {
        if (dropdown && prevIndex < dropdown.length - 1) {
          return prevIndex + 1;
        }
        return 0;
      });
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();

      setActiveIndex((prevIndex) => {
        if (dropdown && prevIndex > 0) {
          return prevIndex - 1;
        }
        return -1;
      });
    }

    if (event.key === 'ArrowUp' && !activeIndex) {
      event.preventDefault();
      menuLinkRef.current?.focus();
    }
  };

  return (
    <li
      className={clsx(style.navItem, {
        [style.navItemOpen]: openDropdown,
      })}
      ref={menuItemRef}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          clsx(style.navLink, {
            [style.navLinkActive]: isActive,
            [style.navLinkFocus]: activeIndex === -1,
          })
        }
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        tabIndex={0}
        ref={menuLinkRef}
      >
        {label}
      </NavLink>

      {openDropdown && dropdown && (
        <ul className={clsx(style.dropdown)}>
          {dropdown.map((dropdownItem, index) => (
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
                className={clsx(style.dropdownLink, {
                  [style.dropdownLinkActive]: index === activeIndex,
                })}
                onClick={() => setOpenDropdown(false)}
                ref={index === activeIndex ? dropdownLinkRef : undefined}
                onKeyDown={handleDropdownKeyDown}
              >
                {dropdownItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
