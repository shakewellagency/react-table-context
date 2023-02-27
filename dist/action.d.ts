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
  payload: {
    page: number
  }
}
type NextPageAction = {
  type: 'next-page'
}
type PrevPageAction = {
  type: 'prev-page'
}
type SetPerPageAction = {
  type: 'set-per-page'
  payload: {
    perPage: number
  }
}
export type TableAction<T extends TableRecord = TableRecord> =
  | ToggleSelectedAction
  | ToggleSelectedAllAction
  | SortAction
  | SetFilterAction<T>
  | GoToPageAction
  | NextPageAction
  | PrevPageAction
  | SetPerPageAction
export {}
