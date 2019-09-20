"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPrideRainbow = function SvgPrideRainbow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "PrideRainbow_svg__a",
    d: "M0 0h20v11H0z"
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    transform: "translate(2 8)"
  }, _react["default"].createElement("mask", {
    id: "PrideRainbow_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#PrideRainbow_svg__a"
  })), _react["default"].createElement("circle", {
    cx: 10,
    cy: 10,
    r: 10,
    fill: "#FF547F",
    mask: "url(#PrideRainbow_svg__b)"
  }), _react["default"].createElement("path", {
    fill: "#FFB331",
    d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z",
    mask: "url(#PrideRainbow_svg__b)"
  }), _react["default"].createElement("path", {
    fill: "#FFD631",
    d: "M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    mask: "url(#PrideRainbow_svg__b)"
  }), _react["default"].createElement("path", {
    fill: "#31D362",
    d: "M10 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z",
    mask: "url(#PrideRainbow_svg__b)"
  }), _react["default"].createElement("path", {
    fill: "#5B55FF",
    d: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    mask: "url(#PrideRainbow_svg__b)"
  }), _react["default"].createElement("path", {
    fill: "#AB56FF",
    d: "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    mask: "url(#PrideRainbow_svg__b)"
  })), _react["default"].createElement("path", {
    fill: "#000",
    fillRule: "nonzero",
    d: "M23 18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2C1 11.925 5.925 7 12 7s11 4.925 11 11zm-2 0a9 9 0 0 0-18 0h18zM2.2 6.6a1 1 0 1 1 1.6-1.2L5 7a1 1 0 1 1-1.6 1.2L2.2 6.6zm18-1.2a1 1 0 1 1 1.6 1.2l-1.2 1.6A1 1 0 1 1 19 7l1.2-1.6zM11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V3z"
  })));
};

var _default = SvgPrideRainbow;
exports["default"] = _default;