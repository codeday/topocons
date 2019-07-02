"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDoor = function SvgDoor(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M16 21v.656a2 2 0 0 1-2.575 1.916l-8-2.4A2 2 0 0 1 4 19.256V2a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2h-3zM11.957 2l2.64.826A2 2 0 0 1 16 4.735V19h3V2h-7.043zM6 2.232v17.024l8 2.4V4.735L6 2.232zM11.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  }));
};

var _default = SvgDoor;
exports["default"] = _default;