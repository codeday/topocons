"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiFilter = function SvgUiFilter(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M4.414 4l6 6A2 2 0 0 1 11 11.414v8.172l2-2v-6.172A2 2 0 0 1 13.586 10l6-6H4.414zm0-2h15.172A2 2 0 0 1 21 5.414l-6 6v6.172A2 2 0 0 1 14.414 19l-2 2A2 2 0 0 1 9 19.586v-8.172l-6-6A2 2 0 0 1 4.414 2z"
  }));
};

var _default = SvgUiFilter;
exports["default"] = _default;