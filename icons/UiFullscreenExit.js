"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiFullscreenExit = function SvgUiFullscreenExit(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M21 7a1 1 0 0 1 0 2h-4a2 2 0 0 1-2-2V3a1 1 0 0 1 2 0v4h4zM7 3a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2H3a1 1 0 1 1 0-2h4V3zm14 12a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4a2 2 0 0 1 2-2h4zM9 21a1 1 0 0 1-2 0v-4H3a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2v4z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiFullscreenExit;
exports["default"] = _default;