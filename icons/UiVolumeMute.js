"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiVolumeMute = function SvgUiVolumeMute(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M17 8.042l2.392-1.834a1 1 0 0 1 1.216 1.587l-15 11.5a1 1 0 0 1-1.216-1.587l2.786-2.136a.995.995 0 0 1-.178-.57v-6a1 1 0 0 1 1-1h2.65l4.725-3.781a1 1 0 0 1 1.625.78v3.04zm-2 1.533V7.083l-3.375 2.7a1 1 0 0 1-.625.219H9v4h.226L15 9.575zm0 7.346v-3.42a1 1 0 0 1 2 0v5.5a1 1 0 0 1-1.625.782l-3.48-2.784a1 1 0 1 1 1.25-1.562L15 16.921z"
  }));
};

var _default = SvgUiVolumeMute;
exports["default"] = _default;