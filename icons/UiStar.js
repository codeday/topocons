"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiStar = function SvgUiStar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M11.479 17.547a1 1 0 0 1 1.042 0l5.002 3.055-1.36-5.701a1 1 0 0 1 .322-.992l4.451-3.813-5.842-.468a1 1 0 0 1-.843-.613L12 3.604 9.75 9.015a1 1 0 0 1-.844.613l-5.842.468 4.45 3.813a1 1 0 0 1 .323.992l-1.36 5.7 5.002-3.054zM12 19.572l-4.48 2.736a2 2 0 0 1-2.988-2.17L5.75 15.03l-3.987-3.416a2 2 0 0 1 1.141-3.512l5.233-.42 2.016-4.847a2 2 0 0 1 3.694 0l2.016 4.847 5.233.42a2 2 0 0 1 1.141 3.512l-3.987 3.416 1.218 5.107a2 2 0 0 1-2.988 2.17L12 19.572z"
  }));
};

var _default = SvgUiStar;
exports["default"] = _default;