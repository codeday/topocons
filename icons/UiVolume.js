"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiVolume = function SvgUiVolume(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M5.65 15.778H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.65l4.725-3.78a1 1 0 0 1 1.625.78v14a1 1 0 0 1-1.625.781l-4.726-3.78zM10 6.858L6.625 9.56a1 1 0 0 1-.625.22H4v4h2a1 1 0 0 1 .625.218l3.375 2.7V6.86zm8.485 13.405a1 1 0 0 1-1.414-1.414c3.905-3.905 3.905-10.237 0-14.142a1 1 0 1 1 1.414-1.414c4.687 4.686 4.687 12.284 0 16.97zm-2.828-2.828a1 1 0 1 1-1.414-1.414 6 6 0 0 0 0-8.485 1 1 0 0 1 1.414-1.415 8 8 0 0 1 0 11.314z"
  }));
};

var _default = SvgUiVolume;
exports["default"] = _default;