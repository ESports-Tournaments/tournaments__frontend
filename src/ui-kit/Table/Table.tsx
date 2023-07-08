import style from './Table.module.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { ColumnsType } from './types';

type Props<T> = {
  data: readonly T[];
  columns: ColumnsType<T>;
};

export default function Table<T>({ columns, data }: Props<T>) {
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
