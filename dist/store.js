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
exports.reducer = exports.initialState = void 0
exports.initialState = {
  initialized: false,
  columns: [],
  data: [],
  selectableItemIds: [],
  selected: [],
  page: 1,
  hasPrevPage: false,
  hasNextPage: false,
  total: 0,
  perPage: 0,
  lastPage: 0,
}
var setPagination = function (state, action) {
  var _a, _b, _c
  var page = (_a = action.page) !== null && _a !== void 0 ? _a : state.page
  var total = (_b = action.total) !== null && _b !== void 0 ? _b : state.total
  var perPage = (_c = action.perPage) !== null && _c !== void 0 ? _c : state.perPage
  var from = action.from !== undefined ? action.from : state.from
  var to = action.to !== undefined ? action.to : state.to
  var lastPage = Math.ceil(total / perPage)
  return __assign(__assign({}, state), {
    page: page,
    perPage: perPage,
    total: total,
    lastPage: lastPage,
    from: from,
    to: to,
    hasPrevPage: page > 1,
    hasNextPage: !!lastPage && page < lastPage,
  })
}
var reducer = function (state, action) {
  var _a, _b, _c, _d
  switch (action.type) {
    case 'initialize':
      return __assign(__assign(__assign({}, state), action.payload), { initialized: true })
    case 'set-data': {
      var selectableItemIds =
        (_a = action.payload.selectableItemIds) !== null && _a !== void 0
          ? _a
          : action.payload.data.map(function (x) {
              return x.id
            })
      return __assign(__assign({}, state), { data: action.payload.data, selectableItemIds: selectableItemIds })
    }
    case 'set-selected':
      return __assign(__assign({}, state), {
        selected: action.payload.ids,
        isAllSelected: action.payload.ids.length === state.selectableItemIds.length,
      })
    case 'toggle-selected': {
      var temp = __spreadArray([], (_b = state.selected) !== null && _b !== void 0 ? _b : [], true)
      if (temp.includes(action.payload.id)) temp.splice(temp.indexOf(action.payload.id), 1)
      else temp.push(action.payload.id)
      return __assign(__assign({}, state), {
        selected: temp,
        isAllSelected: temp.length === state.selectableItemIds.length,
      })
    }
    case 'toggle-select-all':
      if (state.isAllSelected) return __assign(__assign({}, state), { selected: [], isAllSelected: false })
      return __assign(__assign({}, state), { selected: state.selectableItemIds, isAllSelected: true })
    case 'set-sort':
      return __assign(__assign({}, state), { sort: action.payload })
    case 'set-filter': {
      var filters = __spreadArray([], (_c = state.filters) !== null && _c !== void 0 ? _c : [], true)
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
    case 'set-filters':
      return __assign(__assign({}, state), { filters: action.payload })
    case 'go-to-page':
      return setPagination(state, { page: action.payload.page })
    case 'next-page':
      return setPagination(state, { page: ((_d = state.page) !== null && _d !== void 0 ? _d : 0) + 1 })
    case 'prev-page':
      return setPagination(state, { page: state.page ? state.page - 1 : 1 })
    case 'set-pagination':
      return setPagination(state, action.payload)
    default:
      throw Error
  }
}
exports.reducer = reducer
//# sourceMappingURL=store.js.map
