"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPaymentBasket = function SvgPaymentBasket(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M17.464 7H20.5A1.5 1.5 0 0 1 22 8.5v3a1.5 1.5 0 0 1-1.19 1.468l-1.66 7.466A2 2 0 0 1 17.198 22H6.802a2 2 0 0 1-1.952-1.566l-1.66-7.466A1.5 1.5 0 0 1 2 11.5v-3A1.5 1.5 0 0 1 3.5 7h3.036l2.598-4.5a1 1 0 0 1 1.732 1L8.846 7h6.309l-2.021-3.5a1 1 0 1 1 1.732-1L17.464 7zM5.247 13l1.555 7h10.396l1.556-7H5.247zM10 15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM4 9v2h16V9H4z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgPaymentBasket;
exports["default"] = _default;