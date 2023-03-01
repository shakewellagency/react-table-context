import { TableProps, TableRecord, TableState } from './types'
import { useTableContext } from './context'
import { useEffect } from 'react'

const TableContext = <T extends TableRecord = TableRecord>({
  children,
  ...props
}: React.PropsWithChildren<TableProps<T>>) => {
  const { state, dispatch } = useTableContext()

  useEffect(() => {
    if (state.initialized) return

    dispatch({ type: 'initialize', payload: props as TableState })
  }, [props, state.initialized, dispatch])

  return <>{children}</>
}

export default TableContext
