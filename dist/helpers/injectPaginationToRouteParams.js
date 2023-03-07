'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.injectPaginationToRouteParams = void 0
var getQueryParams_1 = require('./getQueryParams')
var consts_1 = require('../consts')
var injectPaginationToRouteParams = function (pagination) {
  var query = (0, getQueryParams_1.getQueryParams)()
  for (
    var _i = 0, _a = Object.keys(pagination !== null && pagination !== void 0 ? pagination : {});
    _i < _a.length;
    _i++
  ) {
    var key = _a[_i]
    var value = pagination[key]
    if (value !== undefined && value) query.set(consts_1.PAGINATION_ROUTE_KEYS[key], value.toString())
  }
  var url = new URL(window.location.href).pathname + '?' + query.toString()
  window.history.pushState({ path: url }, '', url)
}
exports.injectPaginationToRouteParams = injectPaginationToRouteParams
//# sourceMappingURL=injectPaginationToRouteParams.js.map
