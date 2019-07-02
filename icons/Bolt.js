"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBolt = function SvgBolt(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M8.755 14.005H4.002c-.89 0-1.337-1.078-.707-1.707l11-11c.717-.718 1.923-.035 1.677.95l-1.69 6.757h4.72c.87 0 1.325 1.034.737 1.675l-11 12c-.691.755-1.935.107-1.713-.892l1.73-7.783zm4.401-8.74l-6.74 6.74h3.586a1 1 0 0 1 .976 1.217l-1.19 5.354 6.94-7.571h-3.726a1 1 0 0 1-.97-1.243l1.124-4.497z"
  }));
};

var _default = SvgBolt;
exports["default"] = _default;