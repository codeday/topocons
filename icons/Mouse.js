"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMouse = function SvgMouse(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M15.243 6.757l4.95 4.95a6 6 0 1 1-8.486 8.485l-4.95-4.95a6.002 6.002 0 0 1-.635-7.738l-.358-.84a.911.911 0 0 0-.838-.555 2.72 2.72 0 0 1-2.597-1.907L2.046 3.3A1 1 0 1 1 3.954 2.7l.284.904a.72.72 0 0 0 .688.505c1.167 0 2.221.697 2.679 1.771l.056.133a6.002 6.002 0 0 1 7.582.744zm-4.95 4.95l-2.74-2.74a4.002 4.002 0 0 0 .619 4.86l2.121-2.12zm-.707 3.535l3.536 3.536a4 4 0 0 0 5.656-5.657l-3.535-3.536-5.657 5.657zm-.618-7.689l2.74 2.74 2.12-2.122a4.002 4.002 0 0 0-4.86-.618z"
  }));
};

var _default = SvgMouse;
exports["default"] = _default;