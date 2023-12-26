"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SIZE_PROPS = ["width", "height", "top", "left", "right", "bottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "lineHeight", "margin-top", "margin-left", "margin-right", "margin-bottom", "padding-left", "padding-top", "padding-right", "padding-bottom", "font-size", "line-height"];

var parseUnit = function parseUnit(value) {
  if (typeof value === "number") return "".concat(+value / 100, "rem");

  if (typeof value === "string") {
    return /^[\d-]*$/.test(value) ? "".concat(+value / 100, "rem") : value;
  }

  console.warning("Illegal value:", value);
  return "".concat(parseInt(value) || 0, "rem");
};
/**
 * 属性值处理
 */


var valueHandler = SIZE_PROPS.reduce(function (ret, value) {
  ret[value] = parseUnit;
  return ret;
}, {});

var calculateStyle = function calculateStyle(style) {
  var _style = {
    width: 100,
    margin: 100
  };

  var _style$small = _style.small,
      small = _style$small === void 0 ? {} : _style$small,
      rest = _objectWithoutProperties(_style, ["small"]); // 如果是小屏，小屏幕的属性覆盖


  return Object.entries(rest).reduce(function (ret, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        prop = _ref2[0],
        value = _ref2[1];

    ret[prop] = valueHandler[prop] ? valueHandler[prop](value) : value;
    return ret;
  }, {});
};

console.log(calculateStyle());