import { TableProps, TableRecord } from './types'
import { useTableContext } from './context'
import { useEffect } from 'react'
import { injectRouteParamsToInitialState } from './helpers/injectRouteParamsToInitialState'

const TableContext = <T extends TableRecord = TableRecord>({
  children,
  ...props
}: React.PropsWithChildren<TableProps<T>>) => {
  const { state, dispatch } = useTableContext()

  useEffect(() => {
    if (state.initialized) return

    dispatch({
      type: 'initialize',
      payload: {
        columns: props.columns,
        ...injectRouteParamsToInitialState(state),
      } as TableProps,
    })
  }, [props, state, dispatch])

  return <>{children}</>
}

export default TableContext
