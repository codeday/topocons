"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyProviderPaypal = function SvgMoneyProviderPaypal(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    style: {
      lineHeight: "normal",
      textIndent: 0,
      textAlign: "start",
      textDecorationLine: "none",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      textTransform: "none",
      blockProgression: "tb",
      isolation: "auto",
      mixBlendMode: "normal"
    },
    d: "M7.06 3l-.17.787c-1.188 5.46-3.265 14.986-3.77 17.336l-.26 1.209h6.19l-.747 3.457L8.04 27h6.229l1.341-6.182.004-.027a.637.637 0 0 1 .637-.479h2.785c3.928 0 6.996-2.362 7.79-6.068.38-1.782.132-3.45-.858-4.681l-.002-.002c-.785-.978-1.946-1.598-3.215-1.815h-.006l-.006-.002s-.643-.021-.949-.043V7.68l-.002-.018c-.093-1.548-.835-2.784-1.836-3.553-1-.768-2.222-1.109-3.387-1.109H7.061zm1.612 2h7.894c.762 0 1.577.242 2.168.695.567.435.954 1.036 1.04 1.973h-7a.65.65 0 0 0-.637.512h-.002l-1.063 4.853-.01-.002-1.58 7.301H5.338A17940 17940 0 0 1 8.672 5zm12.941 4.676c.509.019.807.044.809.045.836.144 1.553.553 1.986 1.093.561.698.758 1.621.461 3.012h.002c-.621 2.905-2.645 4.486-5.834 4.486h-2.785c-1.427 0-2.436 1.042-2.613 2.168L12.656 25H10.52l.156-.723.853-3.945 1.01-4.67h1.287c3.786 0 6.905-2.05 7.787-5.986z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgMoneyProviderPaypal;
exports["default"] = _default;