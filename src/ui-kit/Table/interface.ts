import { ReactNode } from 'react';

export type ColumnType<T> = {
  /**
   * Уникальный идентификатор столбца.
   * Он используется для идентификации столбца в массиве данных и для связи соответствующего значения для каждого объекта данных.
   */
  key: string;
  /** Название или описание столбца, которое будет отображаться в заголовке столбца в таблице. */
  title: string;
  /**
   * Функция, которая позволяет определить, как отображать содержимое ячейки столбца.
   * Функция принимает два параметра: `column` - объект столбца и `item` - объект данных, соответствующий строке таблицы.
   * Функция должна вернуть `ReactNode`, что позволяет использовать любой элемент React для отображения содержимого ячейки (например, текст, ссылку или кнопку).
   */
  render?: (column: ColumnType<T>, item: T) => ReactNode;
};

export type ColumnsType<T> = ColumnType<T>[];

export type DefaultRecordType = Record<string, unknown>;

export type RowKey<T> = string | ((record: T, index: number) => string);
