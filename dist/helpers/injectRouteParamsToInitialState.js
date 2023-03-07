'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.injectRouteParamsToInitialState = void 0
var getQueryParams_1 = require('./getQueryParams')
var consts_1 = require('../consts')
function injectRouteParamsToInitialState(defaultValues) {
  var query = (0, getQueryParams_1.getQueryParams)()
  var page = query.get(consts_1.PAGINATION_ROUTE_KEYS.page)
  var perPage = query.get(consts_1.PAGINATION_ROUTE_KEYS.perPage)
  return {
    page: page !== undefined && page && parseInt(page) ? parseInt(page) : defaultValues.page,
    perPage: perPage !== undefined && perPage && parseInt(perPage) ? parseInt(perPage) : defaultValues.perPage,
  }
}
exports.injectRouteParamsToInitialState = injectRouteParamsToInitialState
//# sourceMappingURL=injectRouteParamsToInitialState.js.map
