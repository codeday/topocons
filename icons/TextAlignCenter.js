"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextAlignCenter = function SvgTextAlignCenter(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    style: {
      lineHeight: "normal",
      textIndent: 0,
      textAlign: "start",
      textDecorationLine: "none",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      textTransform: "none",
      blockProgression: "tb",
      isolation: "auto",
      mixBlendMode: "normal"
    },
    d: "M5 4a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H5zm4 5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9zm-4 5a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H5zm4 5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9zm-4 5a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H5z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgTextAlignCenter;
exports["default"] = _default;