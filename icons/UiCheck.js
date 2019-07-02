"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiCheck = function SvgUiCheck(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M20.262 4.357a.96.96 0 0 1 1.396-.104c.414.374.458 1.027.1 1.459L10.502 19.286a1.92 1.92 0 0 1-2.792.209 2.026 2.026 0 0 1-.194-.201l-5.271-6.297a1.067 1.067 0 0 1 .093-1.46.96.96 0 0 1 1.397.098l5.271 6.296L20.262 4.357z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiCheck;
exports["default"] = _default;