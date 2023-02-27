'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getPropByString = exports.useTableContext = exports.TableContextProvider = exports.TableContext = void 0
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
var TableContext_1 = __importDefault(require('./TableContext'))
Object.defineProperty(exports, 'TableContext', {
  enumerable: true,
  get: function () {
    return TableContext_1.default
  },
})
//# sourceMappingURL=index.js.map
