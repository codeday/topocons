"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWarning = function SvgWarning(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M22.049 18.029A2 2 0 0 1 20.3 21H3.7a2 2 0 0 1-1.749-2.971l8.3-14.941a2 2 0 0 1 3.497 0l8.3 14.94zM12 4.059L3.7 19h16.6L12 4.06zM11 9.5a1 1 0 0 1 2 0V13a1 1 0 0 1-2 0V9.5zm1 8a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }));
};

var _default = SvgWarning;
exports["default"] = _default;