"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPaymentReceipt = function SvgPaymentReceipt(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M6 9H4a1 1 0 0 1-1-1V4.5A1.5 1.5 0 0 1 4.5 3h13A2.5 2.5 0 0 1 20 5.5v13.845a1.1 1.1 0 0 1-1.55 1.004l-2.45-1.1-2.55 1.145a1.1 1.1 0 0 1-.9 0L10 19.248l-2.45 1.1A1.1 1.1 0 0 1 6 19.346V9zm2-4v12.954l1.55-.696a1.1 1.1 0 0 1 .9 0L13 18.404l2.55-1.146a1.1 1.1 0 0 1 .9 0l1.55.696V5.5a.5.5 0 0 0-.5-.5H8zm3 3h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 3h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5 5v2h1V5H5z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgPaymentReceipt;
exports["default"] = _default;