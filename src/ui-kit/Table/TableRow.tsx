import style from './Table.module.scss';
import TableRowCell from './TableRowCell';
import { ColumnsType } from './types';

type Props<T> = {
  data: readonly T[];
  columns: ColumnsType<T>;
};

export default function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`} className={style.tableRow}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
}
