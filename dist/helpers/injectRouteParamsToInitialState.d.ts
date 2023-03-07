import { TablePaginationProps } from '../types'
export declare function injectRouteParamsToInitialState(
  defaultValues: Pick<TablePaginationProps, 'page' | 'perPage'>,
): {
  page: number
  perPage: number
}
