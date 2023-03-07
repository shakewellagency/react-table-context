import { TableState } from '../types'
import { getQueryParams } from './getQueryParams'
import { PAGINATION_ROUTE_KEYS } from '../consts'

export function injectRouteParamsToInitialState(initialState: TableState) {
  const query = getQueryParams()
  const page = query.get(PAGINATION_ROUTE_KEYS.page)
  const perPage = query.get(PAGINATION_ROUTE_KEYS.perPage)

  const routeParams = {
    page: page !== undefined && page && parseInt(page) ? parseInt(page) : initialState.page,
    perPage: perPage !== undefined && perPage && parseInt(perPage) ? parseInt(perPage) : initialState.perPage,
  }

  return {
    ...initialState,
    ...routeParams,
  }
}
