"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAccessiblity = function SvgAccessiblity(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M14.894 17.053a1 1 0 0 1-1.788.894A22.461 22.461 0 0 1 12 15.407a22.461 22.461 0 0 1-1.106 2.54 1 1 0 0 1-1.788-.894C10.04 15.18 10.5 13.805 10.5 13v-2.066c-.915-.08-1.83-.236-2.743-.464a1 1 0 1 1 .486-1.94C9.497 8.844 10.749 9 12 9c1.25 0 2.503-.156 3.757-.47a1 1 0 1 1 .486 1.94c-.914.228-1.828.383-2.743.464V13c0 .805.459 2.181 1.394 4.053zM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-12.5A1.75 1.75 0 1 1 12 5a1.75 1.75 0 0 1 0 3.5z"
  }));
};

var _default = SvgAccessiblity;
exports["default"] = _default;