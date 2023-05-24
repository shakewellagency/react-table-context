import { TableAction } from './action'

export type TableRecordID = string | number

export type TableRecord = { id: TableRecordID } & Record<string, unknown>

export type TableProps<T extends TableRecord = TableRecord> = {
  columns: TableColumnType<T>[]
}

type ColumnRenderFunction<T extends TableRecord = TableRecord> = (
  item: T,
  column: TableColumnType<T>,
) => string | React.ReactElement

type ColumnRenderActionsFunction<T extends TableRecord = TableRecord> = (item: T) => string | React.ReactElement

export type TableColumnType<T extends TableRecord = TableRecord> =
  | ({
      title: string
      key: keyof T
      className?: string
      type?: undefined
      renderActions?: ColumnRenderActionsFunction<T>
    } & (
      | { dataIndex: DotNestedKeys<T>; render?: ColumnRenderFunction<T> }
      | { dataIndex?: DotNestedKeys<T>; render: ColumnRenderFunction<T> }
    ))
  | {
      title?: string
      key?: keyof T
      className?: string
      dataIndex?: DotNestedKeys<T>
      type: 'action'
      render?: ColumnRenderFunction<T>
      renderActions?: ColumnRenderActionsFunction<T>
    }

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`
type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never

export type TableFilterType<T extends TableRecord = TableRecord, Value = unknown> = {
  key: keyof T
  value: Value
}

export type TableSortOrder = 'asc' | 'desc'

export type TableSortType<T extends TableRecord = TableRecord> = {
  key: keyof T
  order: TableSortOrder
}

export type TablePaginationProps = {
  page: number
  perPage: number
  total: number
  from?: number
  to?: number
  hasPrevPage: boolean
  hasNextPage: boolean
  lastPage: number
}

export type TableState<T extends TableRecord = TableRecord> = TableProps<T> &
  TablePaginationProps & {
    data: T[]
    initialized: boolean
    selectableItemIds: TableRecordID[]
    selected: TableRecordID[]
    isAllSelected?: boolean
    sort?: TableSortType<T>
    filters?: TableFilterType<T>[]
  }

export type TableContextProps<T extends TableRecord = TableRecord> = {
  state: TableState<T>
  dispatch: React.Dispatch<TableAction<T>>
}
