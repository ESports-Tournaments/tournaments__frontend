import { Key } from 'react';

import { ColumnsType, DefaultRecordType, RowKey } from './interface';
import style from './Table.module.scss';
import TableRowCell from './TableRowCell';

type Props<T> = {
  data: readonly T[];
  columns: ColumnsType<T>;
  rowKey?: RowKey<T>;
};

export default function TableRow<T extends DefaultRecordType>({
  data,
  columns,
  rowKey,
}: Props<T>): JSX.Element {
  function getRowKey(record: T, index: number) {
    if (typeof rowKey === 'function') {
      return rowKey(record, index);
    }

    if (typeof rowKey === 'string') {
      return record[rowKey] as Key;
    }

    return `table-row-${index}`;
  }

  return (
    <>
      {data.map((item, itemIndex) => {
        const key = getRowKey(item, itemIndex);

        return (
          <tr key={key} className={style.tableRow}>
            {columns.map((column) => (
              <TableRowCell key={column.key} item={item} column={column} />
            ))}
          </tr>
        );
      })}
    </>
  );
}
