"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeviceTv = function SvgDeviceTv(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M3 6v10h18V6H3zm4.259 12a1 1 0 0 1-.034.293l-.518 1.932a1 1 0 1 1-1.932-.518L5.233 18H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2.233l.458 1.707a1 1 0 0 1-1.932.518l-.518-1.932a1 1 0 0 1-.034-.293H7.26z"
  }));
};

var _default = SvgDeviceTv;
exports["default"] = _default;