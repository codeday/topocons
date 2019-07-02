"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStorm = function SvgStorm(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M17.973 14A3.006 3.006 0 0 0 21 11a3 3 0 0 0-3.212-2.993 5.07 5.07 0 0 0-9.757-1.873A4 4 0 1 0 7 14h10.972zm-5.355 4H14a1 1 0 0 1 .8 1.6l-3 4a1 1 0 0 1-1.6-1.2L12 20h-1a1 1 0 0 1-.894-1.447l1.278-2.556L7 16a6 6 0 0 1-.064-12A7.074 7.074 0 0 1 19.55 6.245a5.002 5.002 0 0 1-1.256 9.746l-4.674.004L12.618 18z"
  }));
};

var _default = SvgStorm;
exports["default"] = _default;