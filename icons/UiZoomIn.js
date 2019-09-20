"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiZoomIn = function SvgUiZoomIn(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M12 15a1 1 0 0 1-2 0v-3H7a1 1 0 0 1 0-2h3V7a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v3zm9.707 5.293a1 1 0 0 1-1.414 1.414l-3.675-3.675a9 9 0 1 1 1.414-1.414l3.675 3.675zM11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
  }));
};

var _default = SvgUiZoomIn;
exports["default"] = _default;