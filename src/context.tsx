import { createContext, useContext, useEffect, useReducer } from 'react'
import { TableContextProps, TableProps, TableRecord, TableState } from './types'
import { createTableReducer, initialState } from './store'
import { TableAction } from './action'

export const TableContext = createContext<TableContextProps | undefined>(undefined)

export const TableContextProvider = <T extends TableRecord = TableRecord>({
  children,
  ...props
}: React.PropsWithChildren<TableProps<T>>) => {
  const [state, dispatch] = useReducer<React.Reducer<TableState<T>, TableAction>>(createTableReducer<T>(), {
    ...initialState,
    ...props,
  })

  useEffect(() => {
    dispatch({
      type: 'set-pagination',
      payload: { page: props.initialPage, perPage: props.perPage, total: props.total },
    })
  }, [props.initialPage, props.total, props.perPage])

  return <TableContext.Provider value={{ state: state as TableState, dispatch }}>{children}</TableContext.Provider>
}

export function useTableContext<T extends TableRecord = TableRecord>(): TableContextProps<T> {
  const context = useContext(TableContext)

  if (typeof context === 'undefined') throw new Error('useTableContext must be inside a TableProvider with a value')

  return context as TableContextProps<T>
}
