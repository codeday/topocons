"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMap = function SvgMap(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5.936 12.015C5.314 10.671 5 9.355 5 8.065 5 4.161 8.128 1 12 1s7 3.162 7 7.064c0 1.137-.244 2.294-.727 3.473l2.729.382a1 1 0 0 1 .853.866l1.137 9.093a1 1 0 0 1-1.21 1.1l-7.358-1.641-5.845 1.974a1.5 1.5 0 0 1-.985-.009l-5.93-2.121a1 1 0 0 1-.653-1.09l1.237-8.24a1 1 0 0 1 1.364-.778l2.324.942zm1.767 2.874l-3.666-1.486-.926 6.172 4.993 1.786 5.812-1.964a1.5 1.5 0 0 1 .806-.043l6.11 1.363-.866-6.924-2.66-.372c-.931 1.521-2.245 3.078-3.932 4.673a2 2 0 0 1-2.748 0c-1.148-1.086-2.124-2.154-2.923-3.205zM12 3C9.238 3 7 5.262 7 8.064c0 2.53 1.639 5.399 5 8.577 3.361-3.178 5-6.048 5-8.577C17 5.262 14.762 3 12 3zm0 8a3 3 0 1 1 .001-6.001A3 3 0 0 1 12 11zm0-2a1 1 0 1 0-.001-2.001A1 1 0 0 0 12 9z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgMap;
exports["default"] = _default;