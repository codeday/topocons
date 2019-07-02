"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiUpload = function SvgUiUpload(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M13 12.414V21a1 1 0 0 1-2 0v-8.586l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 12.414zM23 13a6 6 0 0 1-6 6h-2a1 1 0 0 1 0-2h2a4 4 0 1 0-.375-7.983 1 1 0 0 1-.957-.492 5.072 5.072 0 0 0-9.387 1.702 1 1 0 0 1-.811.82A3.001 3.001 0 0 0 6 17h2.93a1 1 0 0 1 0 2H6a5 5 0 0 1-1.55-9.755A7.074 7.074 0 0 1 17.063 7 6 6 0 0 1 23 13z"
  }));
};

var _default = SvgUiUpload;
exports["default"] = _default;