/// <reference types="react" />
import { TableProps, TableRecord } from './types'
declare const TableContext: <T extends TableRecord = TableRecord>({
  children,
  ...props
}: import('react').PropsWithChildren<TableProps<T>>) => JSX.Element
export default TableContext
