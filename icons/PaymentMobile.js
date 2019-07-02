"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPaymentMobile = function SvgPaymentMobile(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M7 6v12h10V6H7zm0-2h10v-.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V4zm0 16v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V20H7zm4-3.8a4.03 4.03 0 0 1-1.165-.582 1 1 0 1 1 1.17-1.622c.9.649 1.79.423 1.79-.295 0-.164-.17-.29-1.047-.63l-.023-.008c-1.63-.63-2.304-1.13-2.304-2.457 0-1.216.669-1.99 1.579-2.338V7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.633c.464.094.92.27 1.329.528a1 1 0 0 1-1.067 1.692c-.815-.514-1.841-.307-1.841.253 0 .137.163.258 1.025.591l.022.009c1.64.633 2.327 1.147 2.327 2.495 0 1.365-.769 2.224-1.795 2.535v.264a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.3zM7.5 1h9A2.5 2.5 0 0 1 19 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 20.5v-17A2.5 2.5 0 0 1 7.5 1z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgPaymentMobile;
exports["default"] = _default;