"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiFullscreen = function SvgUiFullscreen(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M22 8a1 1 0 0 1-2 0V4h-4a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2v4zM8 2a1 1 0 1 1 0 2H4v4a1 1 0 1 1-2 0V4a2 2 0 0 1 2-2h4zm12 14a1 1 0 0 1 2 0v4a2 2 0 0 1-2 2h-4a1 1 0 0 1 0-2h4v-4zM8 20a1 1 0 0 1 0 2H4a2 2 0 0 1-2-2v-4a1 1 0 0 1 2 0v4h4z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiFullscreen;
exports["default"] = _default;