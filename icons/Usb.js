"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUsb = function SvgUsb(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M18.814 14.02l-6.718 6.718a6.5 6.5 0 1 1-9.192-9.192L9.62 4.828a1 1 0 0 1 1.415 0l3.535-3.535a1 1 0 0 1 1.414 0l6.364 6.364a1 1 0 0 1 0 1.414l-3.535 3.536a1 1 0 0 1 0 1.414zm-8.486-7.07l-6.01 6.01a4.5 4.5 0 1 0 6.364 6.364l6.01-6.01-6.364-6.364zM5.433 18.118a1.436 1.436 0 1 1 2.03-2.03 1.436 1.436 0 0 1-2.03 2.03zm9.845-14.704L12.45 6.243l4.95 4.95 2.828-2.829-4.95-4.95zm.354 1.768l.707.707a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0zm2.121 2.121l.707.707a.5.5 0 0 1 0 .708l-.707.707a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.708l.707-.707a.5.5 0 0 1 .707 0z"
  }));
};

var _default = SvgUsb;
exports["default"] = _default;