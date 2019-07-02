"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGenderMale = function SvgGenderMale(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M14 21.5V11a1 1 0 0 1 2 0v3.5a.5.5 0 1 0 1 0V9.889c0-.864-.576-1.622-1.409-1.854l-2.159-.6a1 1 0 0 1-.3-1.786 2 2 0 1 0-2.265 0 1 1 0 0 1-.3 1.787l-2.158.6A1.924 1.924 0 0 0 7 9.888V14.5a.5.5 0 1 0 1 0V11a1 1 0 0 1 2 0v10.5a.5.5 0 1 0 1 0V17a1 1 0 0 1 2 0v4.5a.5.5 0 0 0 1 0zm2.126-15.392A3.924 3.924 0 0 1 19 9.888V14.5a2.5 2.5 0 0 1-3 2.45v4.55a2.5 2.5 0 0 1-4 2 2.5 2.5 0 0 1-4-2v-4.55a2.5 2.5 0 0 1-3-2.45V9.889a3.924 3.924 0 0 1 2.874-3.78l.624-.174a4 4 0 1 1 7.003 0l.625.173z"
  }));
};

var _default = SvgGenderMale;
exports["default"] = _default;