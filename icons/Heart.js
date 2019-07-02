"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHeart = function SvgHeart(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M16.05 4c-1.277 0-2.462.699-3.205 1.872a1 1 0 0 1-1.69 0C10.412 4.7 9.227 4 7.95 4 5.793 4 4 5.993 4 8.5c0 2.51 2.646 6.29 8 11.156 5.354-4.866 8-8.645 8-11.156C20 5.993 18.207 4 16.05 4zm0-2C19.361 2 22 4.932 22 8.5c0 3.26-2.906 7.412-8.655 12.636a2 2 0 0 1-2.69 0C4.905 15.912 2 11.76 2 8.5 2 4.932 4.639 2 7.95 2c1.538 0 2.971.64 4.05 1.736C13.079 2.64 14.512 2 16.05 2z"
  }));
};

var _default = SvgHeart;
exports["default"] = _default;