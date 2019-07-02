"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNight = function SvgNight(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M5 12.5c0 4.132 3.52 7.5 7.883 7.5a8.158 8.158 0 0 0 4.112-1.1c-4.5-.647-7.964-4.377-7.964-8.9 0-1.654.467-3.236 1.315-4.604C7.18 6.42 5 9.262 5 12.5zm8.507-7.736C11.94 6.087 11.03 7.974 11.03 10c0 3.856 3.286 7 7.36 7a7.79 7.79 0 0 0 1.202-.093c.918-.143 1.518.935.912 1.64C18.64 20.72 15.867 22 12.883 22 7.434 22 3 17.757 3 12.5c0-4.256 2.933-7.948 7.107-9.12.888-.25 1.812-.378 2.752-.38.933-.002 1.36 1.162.648 1.764z"
  }));
};

var _default = SvgNight;
exports["default"] = _default;