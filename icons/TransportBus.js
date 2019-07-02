"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTransportBus = function SvgTransportBus(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M18 15c.888 0 1.687.386 2.236 1h1.754l.006-3H17a2 2 0 0 1-2-2H2v5h1.764c.55-.614 1.348-1 2.236-1 .888 0 1.687.386 2.236 1h7.528c.55-.614 1.348-1 2.236-1zm-9 3a3 3 0 0 1-6 0H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18.083a2 2 0 0 1 1.921 1.445L24 11.36l-.01 4.644a2 2 0 0 1-2 1.996H21a3 3 0 0 1-6 0H9zm8-7h4.814l-1.731-6H17v6zm-2-6h-3v4h3V5zM7 5v4h3V5H7zM5 5H2v4h3V5zm1 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

var _default = SvgTransportBus;
exports["default"] = _default;