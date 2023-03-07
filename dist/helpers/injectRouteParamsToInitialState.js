'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.injectRouteParamsToInitialState = void 0
var getQueryParams_1 = require('./getQueryParams')
var consts_1 = require('../consts')
function injectRouteParamsToInitialState(initialState) {
  var query = (0, getQueryParams_1.getQueryParams)()
  var page = query.get(consts_1.PAGINATION_ROUTE_KEYS.page)
  var perPage = query.get(consts_1.PAGINATION_ROUTE_KEYS.perPage)
  var routeParams = {
    page: page !== undefined && page && parseInt(page) ? parseInt(page) : initialState.page,
    perPage: perPage !== undefined && perPage && parseInt(perPage) ? parseInt(perPage) : initialState.perPage,
  }
  return __assign(__assign({}, initialState), routeParams)
}
exports.injectRouteParamsToInitialState = injectRouteParamsToInitialState
//# sourceMappingURL=injectRouteParamsToInitialState.js.map
