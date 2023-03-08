import { TablePaginationProps } from '../types'
export declare function injectRouteParamsToValues(defaultValues: Pick<TablePaginationProps, 'page' | 'perPage'>): {
  page: number
  perPage: number
}
