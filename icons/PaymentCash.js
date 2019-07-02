"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPaymentCash = function SvgPaymentCash(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M4 7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1zm15 7h1V6H6v1h11a2 2 0 0 1 2 2v5zM3 9v9h14V9H3zm5.309 7.413a.744.744 0 0 1 .87-1.207c.67.483 1.333.315 1.333-.22 0-.121-.127-.216-.78-.468l-.017-.006C8.502 14.042 8 13.672 8 12.684c0-.905.498-1.481 1.175-1.74V10.5a.5.5 0 0 1 .5-.5h.489a.5.5 0 0 1 .5.5v.343c.345.07.684.201.988.393a.744.744 0 1 1-.793 1.26c-.607-.383-1.37-.23-1.37.188 0 .101.12.191.763.44l.016.006c1.22.471 1.732.854 1.732 1.856 0 1.016-.573 1.656-1.336 1.887v.069a.5.5 0 0 1-.5.5h-.489a.5.5 0 0 1-.5-.5v-.095a2.999 2.999 0 0 1-.866-.434z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgPaymentCash;
exports["default"] = _default;