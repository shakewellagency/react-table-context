import { TableAction } from './action'

export type TableRecord = { id: number } & Record<string, unknown>

export type TableProps<T extends TableRecord = TableRecord> = {
  columns: TableColumnType<T>[]
  data: T[]
  isSelectable?: boolean
  selected?: number[]
  initialPage?: number
  perPage?: number
  total?: number
}

type DefaultColumnType<T extends TableRecord = TableRecord> = {
  title: string
  key: keyof T
  dataIndex: DotNestedKeys<T>
}

export type TableColumnType<T extends TableRecord = TableRecord> =
  | (DefaultColumnType<T> & {
      render?: (item: T, column: DefaultColumnType<T>, index: number) => string | React.ReactElement
    })
  | {
      type: 'action'
      render: (item: T, index: number) => string | React.ReactElement
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

export type TableFilterType<T extends TableRecord = TableRecord> = {
  key: keyof T
  value: string | Record<string, unknown>
}

export type TableSortOrder = 'asc' | 'desc'

export type TableSortType<T extends TableRecord = TableRecord> = {
  key: keyof T
  order: TableSortOrder
}

export type TableState<T extends TableRecord = TableRecord> = TableProps<T> & {
  page: number
  perPage: number
  total: number
  hasPrevPage: boolean
  hasNextPage: boolean
  lastPage: number
  isAllSelected?: boolean
  sort?: TableSortType
  filters?: TableFilterType[]
}

export type TableContextProps<T extends TableRecord = TableRecord> = {
  state: TableState<T>
  dispatch: React.Dispatch<TableAction<T>>
}
