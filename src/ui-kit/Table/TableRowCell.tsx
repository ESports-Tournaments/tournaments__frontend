import get from 'lodash.get';

import { ColumnType } from './interface';
import style from './Table.module.scss';

type Props<T> = {
  item: T;
  column: ColumnType<T>;
};

export default function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);

  return (
    <td className={style.tableCellBody}>
      {column.render ? column.render(column, item) : value}
    </td>
  );
}
