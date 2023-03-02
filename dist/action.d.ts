import { TableFilterType, TableProps, TableRecord, TableSortType } from './types';
type ToggleSelectedAction = {
    type: 'toggle-selected';
    payload: {
        id: number;
    };
};
type ToggleSelectedAllAction = {
    type: 'toggle-select-all';
};
type SortAction = {
    type: 'set-sort';
    payload: TableSortType;
};
type SetFilterAction<T extends TableRecord = TableRecord> = {
    type: 'set-filter';
    payload: TableFilterType<T>;
};
type SetFiltersAction<T extends TableRecord = TableRecord> = {
    type: 'set-filters';
    payload: TableFilterType<T>[];
};
type GoToPageAction = {
    type: 'go-to-page';
    payload: {
        page: number;
    };
};
type NextPageAction = {
    type: 'next-page';
};
type PrevPageAction = {
    type: 'prev-page';
};
export type SetPagination = {
    type: 'set-pagination';
    payload: {
        page?: number;
        perPage?: number;
        total?: number;
    };
};
type Initialize<T extends TableRecord = TableRecord> = {
    type: 'initialize';
    payload: TableProps<T>;
};
export type TableAction<T extends TableRecord = TableRecord> = ToggleSelectedAction | ToggleSelectedAllAction | SortAction | SetFilterAction<T> | SetFiltersAction<T> | GoToPageAction | NextPageAction | PrevPageAction | SetPagination | Initialize<T>;
export {};
