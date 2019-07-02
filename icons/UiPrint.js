"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiPrint = function SvgUiPrint(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M7 10h10V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6zm0 8v3h10v-3H7zm12-8h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1V4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6zM4 12v4h16v-4H4zm13 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgUiPrint;
exports["default"] = _default;