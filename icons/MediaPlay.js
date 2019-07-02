"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMediaPlay = function SvgMediaPlay(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M17.984 12.001L7 5.725v12.553l10.984-6.277zm2.512.869l-14 8A1 1 0 0 1 5 20v-16a1 1 0 0 1 1.496-.868l14 8a1 1 0 0 1 0 1.737z"
  }));
};

var _default = SvgMediaPlay;
exports["default"] = _default;