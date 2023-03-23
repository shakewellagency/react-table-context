import { TableState } from './types'
import { SetPagination, TableAction } from './action'

export const initialState: TableState = {
  initialized: false,
  columns: [],
  data: [],
  selectableItemIds: [],
  selected: [],
  page: 1,
  hasPrevPage: false,
  hasNextPage: false,
  total: 0,
  perPage: 0,
  lastPage: 0,
}

const setPagination = (state: TableState, action: SetPagination['payload']): TableState => {
  const page = action.page ?? state.page
  const total = action.total ?? state.total
  const perPage = action.perPage ?? state.perPage
  const from = action.from !== undefined ? action.from : state.from
  const to = action.to !== undefined ? action.to : state.to
  const lastPage = Math.ceil(total / perPage)

  return {
    ...state,
    page,
    perPage,
    total,
    lastPage,
    from,
    to,
    hasPrevPage: page > 1,
    hasNextPage: !!lastPage && page < lastPage,
  }
}

export const reducer = (state: TableState, action: TableAction): TableState => {
  switch (action.type) {
    case 'initialize':
      return { ...state, ...action.payload, initialized: true }
    case 'set-data': {
      const selectableItemIds = action.payload.selectableItemIds ?? action.payload.data.map((x) => x.id)
      const selected = action.payload.selected ?? []
      return {
        ...state,
        data: action.payload.data,
        selectableItemIds,
        selected: action.payload.selected ?? [],
        isAllSelected: !!selectableItemIds.length && selected.length == selectableItemIds.length,
      }
    }
    case 'set-selected':
      return {
        ...state,
        selected: action.payload.ids,
        isAllSelected: action.payload.ids.length === state.selectableItemIds.length,
      }
    case 'toggle-selected': {
      const temp = [...(state.selected ?? [])]
      if (temp.includes(action.payload.id)) temp.splice(temp.indexOf(action.payload.id), 1)
      else temp.push(action.payload.id)
      return {
        ...state,
        selected: temp,
        isAllSelected: temp.length === state.selectableItemIds.length,
      }
    }
    case 'toggle-select-all':
      if (state.isAllSelected) return { ...state, selected: [], isAllSelected: false }

      return { ...state, selected: state.selectableItemIds, isAllSelected: true }
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
    case 'set-filters':
      return { ...state, filters: action.payload }
    case 'go-to-page':
      return setPagination(state, { page: action.payload.page })

    case 'next-page':
      return setPagination(state, { page: (state.page ?? 0) + 1 })

    case 'prev-page':
      return setPagination(state, { page: state.page ? state.page - 1 : 1 })

    case 'set-pagination':
      return setPagination(state, action.payload)

    default:
      throw Error
  }
}
