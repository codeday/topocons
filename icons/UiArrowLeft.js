"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiArrowLeft = function SvgUiArrowLeft(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M8.414 12l8.293-8.293a1 1 0 0 0-1.414-1.414l-9 9a1 1 0 0 0 0 1.414l9 9a1 1 0 0 0 1.414-1.414L8.414 12z"
  }));
};

var _default = SvgUiArrowLeft;
exports["default"] = _default;