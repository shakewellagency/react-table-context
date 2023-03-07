import { TablePaginationProps, TablePaginationRouteKeys } from './types'

export const PAGINATION_ROUTE_KEYS: Record<
  keyof Pick<TablePaginationProps, 'page' | 'perPage'>,
  TablePaginationRouteKeys
> = {
  page: 'page',
  perPage: 'per_page',
}
