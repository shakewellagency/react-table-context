import { TableFilterType, TableRecord, TableSortType } from './types'

type ToggleSelectedAction = {
  type: 'toggle-selected'
  payload: {
    id: number
  }
}

type ToggleSelectedAllAction = {
  type: 'toggle-select-all'
}

type SortAction = {
  type: 'set-sort'
  payload: {
    sort?: TableSortType
  }
}

type SetFilterAction<T extends TableRecord = TableRecord> = {
  type: 'set-filter'
  payload: TableFilterType<T>
}

type GoToPageAction = {
  type: 'go-to-page'
  payload: { page: number }
}

type NextPageAction = { type: 'next-page' }

type PrevPageAction = { type: 'prev-page' }

export type SetPagination = { type: 'set-pagination'; payload: { page?: number; perPage?: number; total?: number } }

export type TableAction<T extends TableRecord = TableRecord> =
  | ToggleSelectedAction
  | ToggleSelectedAllAction
  | SortAction
  | SetFilterAction<T>
  | GoToPageAction
  | NextPageAction
  | PrevPageAction
  | SetPagination
