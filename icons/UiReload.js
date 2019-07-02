"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiReload = function SvgUiReload(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M20.54 10a.992.992 0 0 1-.103 0H15a1 1 0 0 1 0-2h3.93A8.003 8.003 0 0 0 4 12a8 8 0 0 0 15.544 2.67 1 1 0 0 1 1.886.666A10.003 10.003 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a10 10 0 0 1 8 3.997V3a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-.46z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiReload;
exports["default"] = _default;