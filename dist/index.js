'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.injectRouteParamsToInitialState =
  exports.getPropByString =
  exports.useTableContext =
  exports.TableContextProvider =
    void 0
var context_1 = require('./context')
Object.defineProperty(exports, 'TableContextProvider', {
  enumerable: true,
  get: function () {
    return context_1.TableContextProvider
  },
})
Object.defineProperty(exports, 'useTableContext', {
  enumerable: true,
  get: function () {
    return context_1.useTableContext
  },
})
var getPropByString_1 = require('./helpers/getPropByString')
Object.defineProperty(exports, 'getPropByString', {
  enumerable: true,
  get: function () {
    return getPropByString_1.getPropByString
  },
})
var injectRouteParamsToInitialState_1 = require('./helpers/injectRouteParamsToInitialState')
Object.defineProperty(exports, 'injectRouteParamsToInitialState', {
  enumerable: true,
  get: function () {
    return injectRouteParamsToInitialState_1.injectRouteParamsToInitialState
  },
})
//# sourceMappingURL=index.js.map
