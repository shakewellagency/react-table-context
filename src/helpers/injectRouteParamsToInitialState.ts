import { TablePaginationProps } from '../types'
import { getQueryParams } from './getQueryParams'
import { PAGINATION_ROUTE_KEYS } from '../consts'

export function injectRouteParamsToInitialState(defaultValues: Pick<TablePaginationProps, 'page' | 'perPage'>) {
  const query = getQueryParams()
  const page = query.get(PAGINATION_ROUTE_KEYS.page)
  const perPage = query.get(PAGINATION_ROUTE_KEYS.perPage)

  return {
    page: page !== undefined && page && parseInt(page) ? parseInt(page) : defaultValues.page,
    perPage: perPage !== undefined && perPage && parseInt(perPage) ? parseInt(perPage) : defaultValues.perPage,
  }
}
