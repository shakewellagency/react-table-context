import { TableRecord, TableState } from './types'
import { TableAction } from './action'

export const initialState: TableState = {
  columns: [],
  data: [],
  page: 1,
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
        return { ...state, sort: action.payload.sort }
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
        return { ...state, page: action.payload.page }
      case 'next-page':
        return { ...state, page: state.page ? state.page + 1 : 1 }
      case 'prev-page':
        return { ...state, page: state.page ? state.page - 1 : 1 }
      case 'set-per-page':
        return { ...state, perPage: action.payload.perPage }
      default:
        throw Error
    }
  }
}
