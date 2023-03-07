import { getQueryParams } from './getQueryParams'
import { TablePaginationProps } from '../types'
import { PAGINATION_ROUTE_KEYS } from '../consts'

export const injectPaginationToRouteParams = (pagination: Pick<TablePaginationProps, 'page' | 'perPage'>) => {
  const query = getQueryParams()

  for (const key of Object.keys(pagination ?? {}) as Array<keyof Pick<TablePaginationProps, 'page' | 'perPage'>>) {
    const value = pagination[key]
    if (value !== undefined && value) query.set(PAGINATION_ROUTE_KEYS[key], value.toString())
  }

  const url = new URL(window.location.href).pathname + '?' + query.toString()

  window.history.pushState({ path: url }, '', url)
}
