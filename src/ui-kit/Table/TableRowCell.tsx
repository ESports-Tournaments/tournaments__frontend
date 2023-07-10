import { ColumnType, DefaultRecordType } from './interface';
import style from './Table.module.scss';

type Props<T> = {
  item: T;
  column: ColumnType<T>;
};

export default function TableRowCell<T extends DefaultRecordType>({
  item,
  column,
}: Props<T>): JSX.Element {
  const value = item[column.key];

  return (
    <td className={style.tableCellBody}>
      {column.render ? column.render(column, item) : item[column.key]}
    </td>
  );
}
