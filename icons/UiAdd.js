"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiAdd = function SvgUiAdd(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M13 11h8.11c1.334 0 1.334 2 0 2H13v8c0 1.334-2 1.334-2 0v-8H3c-1.333 0-1.333-2 0-2h8V3c0-1.333 2-1.333 2 0v8z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiAdd;
exports["default"] = _default;