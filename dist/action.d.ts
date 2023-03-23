import { TableFilterType, TableProps, TableRecord, TableSortType } from './types'
type SetData = {
  type: 'set-data'
  payload: {
    data: TableRecord[]
    selectableItemIds?: number[]
    selected?: number[]
  }
}
type ToggleSelectedAction = {
  type: 'toggle-selected'
  payload: {
    id: number
  }
}
type SetSelectedAction = {
  type: 'set-selected'
  payload: {
    ids: number[]
  }
}
type ToggleSelectedAllAction = {
  type: 'toggle-select-all'
}
type SortAction = {
  type: 'set-sort'
  payload: TableSortType
}
type SetFilterAction<T extends TableRecord = TableRecord> = {
  type: 'set-filter'
  payload: TableFilterType<T>
}
type SetFiltersAction<T extends TableRecord = TableRecord> = {
  type: 'set-filters'
  payload: TableFilterType<T>[]
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
export type SetPagination = {
  type: 'set-pagination'
  payload: {
    page?: number
    perPage?: number
    total?: number
    from?: number
    to?: number
  }
}
type Initialize<T extends TableRecord = TableRecord> = {
  type: 'initialize'
  payload: TableProps<T>
}
export type TableAction<T extends TableRecord = TableRecord> =
  | SetData
  | SetSelectedAction
  | ToggleSelectedAction
  | ToggleSelectedAllAction
  | SortAction
  | SetFilterAction<T>
  | SetFiltersAction<T>
  | GoToPageAction
  | NextPageAction
  | PrevPageAction
  | SetPagination
  | Initialize<T>
export {}
