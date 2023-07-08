import { ReactNode } from 'react';

export type ColumnType<T> = {
  key: string;
  title: string;
  width?: number;
  render?: (column: ColumnType<T>, item: T) => ReactNode;
};

export type ColumnsType<T> = ColumnType<T>[];
