"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTransportCar = function SvgTransportCar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6 15c.888 0 1.687.386 2.236 1h7.528c.55-.614 1.348-1 2.236-1 .888 0 1.687.386 2.236 1H22v-3.265L16.858 12H3.43L2 12.459V16h1.764c.55-.614 1.348-1 2.236-1zm-4 3a2 2 0 0 1-2-2v-3.541a2 2 0 0 1 1.39-1.905l1.578-.506 2.522-4.2a2 2 0 0 1 1.494-.957l6.41-.712a2 2 0 0 1 2.117 1.355L17 10l5.283.755A2 2 0 0 1 24 12.735V16a2 2 0 0 1-2 2h-1a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H2zM13.614 6.166l-6.41.712L5.33 10h9.562l-1.278-3.834zM18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

var _default = SvgTransportCar;
exports["default"] = _default;