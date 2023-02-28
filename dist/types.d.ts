/// <reference types="react" />
import { TableAction } from './action';
export type TableRecord = {
    id: number;
} & Record<string, unknown>;
export type TableProps<T extends TableRecord = TableRecord> = {
    columns: TableColumnType<T>[];
    data: T[];
    isSelectable?: boolean;
    selected?: number[];
    initialPage?: number;
    perPage?: number;
    total?: number;
};
export type TableColumnType<T extends TableRecord = TableRecord> = {
    title: string;
    key: keyof T;
    dataIndex: keyof T;
};
export type TableFilterType<T extends TableRecord = TableRecord> = {
    key: keyof T;
    value: string | Record<string, unknown>;
};
export type TableSortOrder = 'asc' | 'desc';
export type TableSortType<T extends TableRecord = TableRecord> = {
    key: keyof T;
    order: TableSortOrder;
};
export type TableState<T extends TableRecord = TableRecord> = TableProps<T> & {
    page: number;
    perPage: number;
    total: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    lastPage: number;
    isAllSelected?: boolean;
    sort?: TableSortType;
    filters?: TableFilterType[];
};
export type TableContextProps<T extends TableRecord = TableRecord> = {
    state: TableState<T>;
    dispatch: React.Dispatch<TableAction<T>>;
};
