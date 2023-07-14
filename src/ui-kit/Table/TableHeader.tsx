import clsx from 'clsx';

import { ColumnsType } from './interface';
import style from './Table.module.scss';

type Props<T> = {
  columns: ColumnsType<T>;
};

export default function TableHeader<T>({ columns }: Props<T>) {
  return (
    <tr className={style.tableRow}>
      {columns.map((column) => (
        <th key={column.key} className={clsx(style.tableCell, style.tableCellHead)}>
          {column.title}
        </th>
      ))}
    </tr>
  );
}
