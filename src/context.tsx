import { createContext, useContext, useReducer } from 'react'
import { TableContextProps, TableRecord, TableState } from './types'
import { initialState, reducer } from './store'
import { TableAction } from './action'
import { injectRouteParamsToInitialState } from './helpers/injectRouteParamsToInitialState'

export const TableContext = createContext<TableContextProps | undefined>(undefined)

export const TableContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer<React.Reducer<TableState, TableAction>>(
    reducer,
    injectRouteParamsToInitialState(initialState),
  )

  return <TableContext.Provider value={{ state: state as TableState, dispatch }}>{children}</TableContext.Provider>
}

export function useTableContext<T extends TableRecord = TableRecord>(): TableContextProps<T> {
  const context = useContext(TableContext)

  if (typeof context === 'undefined') throw new Error('useTableContext must be inside a TableProvider with a value')

  return context as TableContextProps<T>
}
