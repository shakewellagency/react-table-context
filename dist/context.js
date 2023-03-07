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
exports.useTableContext = exports.TableContextProvider = exports.TableContext = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var store_1 = require('./store')
exports.TableContext = (0, react_1.createContext)(undefined)
var TableContextProvider = function (_a) {
  var children = _a.children
  var _b = (0, react_1.useReducer)(store_1.reducer, store_1.initialState),
    state = _b[0],
    dispatch = _b[1]
  return (0, jsx_runtime_1.jsx)(
    exports.TableContext.Provider,
    __assign({ value: { state: state, dispatch: dispatch } }, { children: children }),
  )
}
exports.TableContextProvider = TableContextProvider
function useTableContext() {
  var context = (0, react_1.useContext)(exports.TableContext)
  if (typeof context === 'undefined') throw new Error('useTableContext must be inside a TableProvider with a value')
  return context
}
exports.useTableContext = useTableContext
//# sourceMappingURL=context.js.map
