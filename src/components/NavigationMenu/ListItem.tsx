import { Link as NavigationLink } from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './NavigationMenu.module.scss';

type ListItemProps = {
  path: string;
  label: string;
  className?: string;
  href: string;
};

const ListItem: FC<ListItemProps> = ({ className, label, path, href }) => (
  <li className={style.listItem}>
    <NavigationLink asChild>
      <Link
        to={`${href}${path}`}
        className={clsx(style.listItemLink, className, {
          [style.listItemLinkSeparator]:
            label === 'Платные' || label === 'Облачные' || label === 'База игр',
          [style.listItemLinkIcon]: label === 'Простые',
        })}
      >
        {label}
      </Link>
    </NavigationLink>
  </li>
);

export default ListItem;
