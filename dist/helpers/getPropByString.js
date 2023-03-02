'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getPropByString = void 0
var getPropByString = function (obj, propString) {
  if (!propString) throw Error
  var record = obj
  var prop
  var i, iLen
  var props = propString.split('.')
  for (i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i]
    var candidate = record[prop]
    if (candidate !== undefined) record = candidate
    else break
  }
  return record ? record[props[i]] : undefined
}
exports.getPropByString = getPropByString
//# sourceMappingURL=getPropByString.js.map
