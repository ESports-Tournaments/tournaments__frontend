import clsx from 'clsx';

import style from './Table.module.scss';
import { ColumnsType } from './types';

type Props<T> = {
  columns: ColumnsType<T>;
};

export default function TableHeader<T>({ columns }: Props<T>) {
  return (
    <tr className={style.tableRow}>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-head-cell-${columnIndex}`}
          className={clsx(style.tableCell, style.tableCellHead)}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
}
