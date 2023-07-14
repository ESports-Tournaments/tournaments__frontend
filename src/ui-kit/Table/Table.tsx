import { ColumnsType, DefaultRecordType, RowKey } from './interface';
import style from './Table.module.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

type Props<T> = {
  data: readonly T[];
  columns: ColumnsType<T>;
  rowKey?: RowKey<T>;
};

export default function Table<T extends DefaultRecordType>({ columns, data }: Props<T>) {
  return (
    <div className={style.tableWrapper}>
      <table className={style.table}>
        <thead>
          <TableHeader columns={columns} />
        </thead>

        <tbody>
          <TableRow data={data} columns={columns} />
        </tbody>
      </table>
    </div>
  );
}
