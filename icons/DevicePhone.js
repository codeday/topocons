"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDevicePhone = function SvgDevicePhone(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M17 6H7v12h10V6zm0-2v-.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V4h10zm0 16H7v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V20zM7.5 1h9A2.5 2.5 0 0 1 19 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 20.5v-17A2.5 2.5 0 0 1 7.5 1z"
  }));
};

var _default = SvgDevicePhone;
exports["default"] = _default;