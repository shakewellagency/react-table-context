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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.createTableReducer = exports.initialState = void 0
exports.initialState = {
  columns: [],
  data: [],
  page: 1,
}
var createTableReducer = function () {
  return function (state, action) {
    var _a, _b
    switch (action.type) {
      case 'toggle-selected': {
        var temp = __spreadArray([], (_a = state.selected) !== null && _a !== void 0 ? _a : [], true)
        if (temp.includes(action.payload.id)) temp.splice(temp.indexOf(action.payload.id), 1)
        else temp.push(action.payload.id)
        return __assign(__assign({}, state), { selected: temp, isAllSelected: temp.length === state.data.length })
      }
      case 'toggle-select-all':
        if (state.isAllSelected) return __assign(__assign({}, state), { selected: [], isAllSelected: false })
        return __assign(__assign({}, state), {
          selected: state.data.map(function (x) {
            return x.id
          }),
          isAllSelected: true,
        })
      case 'set-sort':
        return __assign(__assign({}, state), { sort: action.payload.sort })
      case 'set-filter': {
        var filters = __spreadArray([], (_b = state.filters) !== null && _b !== void 0 ? _b : [], true)
        var index = filters.findIndex(function (x) {
          return x.key == action.payload.key
        })
        if (index >= 0) {
          filters[index].value = action.payload.value
        } else {
          filters.push(action.payload)
        }
        return __assign(__assign({}, state), { filters: filters })
      }
      case 'go-to-page':
        return __assign(__assign({}, state), { page: action.payload.page })
      case 'next-page':
        return __assign(__assign({}, state), { page: state.page ? state.page + 1 : 1 })
      case 'prev-page':
        return __assign(__assign({}, state), { page: state.page ? state.page - 1 : 1 })
      case 'set-per-page':
        return __assign(__assign({}, state), { perPage: action.payload.perPage })
      default:
        throw Error
    }
  }
}
exports.createTableReducer = createTableReducer
//# sourceMappingURL=store.js.map
