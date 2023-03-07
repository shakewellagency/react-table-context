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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]]
      }
    return t
  }
Object.defineProperty(exports, '__esModule', { value: true })
var jsx_runtime_1 = require('react/jsx-runtime')
var context_1 = require('./context')
var react_1 = require('react')
var injectRouteParamsToInitialState_1 = require('./helpers/injectRouteParamsToInitialState')
var TableContext = function (_a) {
  var children = _a.children,
    props = __rest(_a, ['children'])
  var _b = (0, context_1.useTableContext)(),
    state = _b.state,
    dispatch = _b.dispatch
  ;(0, react_1.useEffect)(
    function () {
      if (state.initialized) return
      dispatch({
        type: 'initialize',
        payload: __assign(
          { columns: props.columns },
          (0, injectRouteParamsToInitialState_1.injectRouteParamsToInitialState)(state),
        ),
      })
    },
    [props, state, dispatch],
  )
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children })
}
exports.default = TableContext
//# sourceMappingURL=TableContext.js.map
