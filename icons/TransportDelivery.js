"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTransportDelivery = function SvgTransportDelivery(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6 15c.888 0 1.687.386 2.236 1h7.528c.55-.614 1.348-1 2.236-1 .888 0 1.687.386 2.236 1h1.753l.01-4.985-.011-.015H16a2 2 0 0 1-2-2V5H2v11h1.764c.55-.614 1.348-1 2.236-1zm-3 3H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h15.575a2 2 0 0 1 1.612.815L24 10.36l-.01 5.644a2 2 0 0 1-2 1.996H21a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0zM17.575 5H16v4h4.517l-2.942-4zM18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

var _default = SvgTransportDelivery;
exports["default"] = _default;