import { TableRecord, TableState } from './types'
import { SetPagination, TableAction } from './action'

export const initialState: TableState = {
  columns: [],
  data: [],
  page: 1,
  hasPrevPage: false,
  hasNextPage: false,
  total: 0,
  perPage: 0,
  lastPage: 0,
}

const setPagination = <T extends TableRecord = TableRecord>(
  state: TableState<T>,
  action: SetPagination['payload'],
): TableState<T> => {
  const page = action.page ?? state.page
  const total = state.total ?? action.total
  const perPage = state.perPage ?? action.perPage
  const lastPage = Math.ceil(total / perPage)

  return {
    ...state,
    page,
    perPage,
    total,
    lastPage,
    hasPrevPage: page > 1,
    hasNextPage: !!state.lastPage && page < state.lastPage,
  }
}

export const createTableReducer = <T extends TableRecord = TableRecord>() => {
  return (state: TableState<T>, action: TableAction): TableState<T> => {
    switch (action.type) {
      case 'toggle-selected': {
        const temp = [...(state.selected ?? [])]
        if (temp.includes(action.payload.id)) temp.splice(temp.indexOf(action.payload.id), 1)
        else temp.push(action.payload.id)
        return {
          ...state,
          selected: temp,
          isAllSelected: temp.length === state.data.length,
        }
      }
      case 'toggle-select-all':
        if (state.isAllSelected) return { ...state, selected: [], isAllSelected: false }

        return { ...state, selected: state.data.map((x) => x.id), isAllSelected: true }
      case 'set-sort':
        return { ...state, sort: action.payload }
      case 'set-filter': {
        const filters = [...(state.filters ?? [])]
        const index = filters.findIndex((x) => x.key == action.payload.key)
        if (index >= 0) {
          filters[index].value = action.payload.value
        } else {
          filters.push(action.payload)
        }
        return { ...state, filters }
      }
      case 'go-to-page':
        return setPagination<T>(state, { page: action.payload.page })

      case 'next-page':
        return setPagination<T>(state, { page: (state.page ?? 0) + 1 })

      case 'prev-page':
        return setPagination<T>(state, { page: state.page ? state.page - 1 : 1 })

      case 'set-pagination':
        return setPagination<T>(state, action.payload)

      default:
        throw Error
    }
  }
}
