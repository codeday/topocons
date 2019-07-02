"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeviceTablet = function SvgDeviceTablet(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M18 19V6H4v13h14zm0 2H4v.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V21zm0-17.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5V4h14v-.5zM4.5 1h13A2.5 2.5 0 0 1 20 3.5v18a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 21.5v-18A2.5 2.5 0 0 1 4.5 1z"
  }));
};

var _default = SvgDeviceTablet;
exports["default"] = _default;