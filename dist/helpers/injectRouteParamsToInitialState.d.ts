import { TableState } from '../types'
export declare function injectRouteParamsToInitialState(initialState: TableState): {
  page: number
  perPage: number
  columns: import('../types').TableColumnType<import('../types').TableRecord>[]
  total: number
  from?: number | undefined
  to?: number | undefined
  hasPrevPage: boolean
  hasNextPage: boolean
  lastPage: number
  data: import('../types').TableRecord[]
  initialized: boolean
  selectableItemIds: number[]
  selected: number[]
  isAllSelected?: boolean | undefined
  sort?: import('../types').TableSortType<import('../types').TableRecord> | undefined
  filters?: import('../types').TableFilterType<import('../types').TableRecord, unknown>[] | undefined
}
