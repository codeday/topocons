"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiVolumeLower = function SvgUiVolumeLower(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M7.65 16.002H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.65l4.725-3.781a1 1 0 0 1 1.625.78v14a1 1 0 0 1-1.625.782L7.65 16.002zM12 7.082l-3.375 2.7a1 1 0 0 1-.625.22H6v4h2a1 1 0 0 1 .625.219l3.375 2.7V7.083zm5.657 10.577a1 1 0 0 1-1.414-1.414 6 6 0 0 0 0-8.486 1 1 0 0 1 1.414-1.414 8 8 0 0 1 0 11.314z"
  }));
};

var _default = SvgUiVolumeLower;
exports["default"] = _default;