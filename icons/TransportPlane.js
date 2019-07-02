"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTransportPlane = function SvgTransportPlane(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M14.108 16l-4.415 4.414A2 2 0 0 1 8.28 21H7.193a1.87 1.87 0 0 1-1.624-2.799l1.28-2.239a5 5 0 0 1-4.065-3.206L1.108 8.287A1.693 1.693 0 0 1 2.693 6h.586a2 2 0 0 1 1.414.586L7.108 9h.72L6.568 6.799A1.87 1.87 0 0 1 8.193 4H9.28a2 2 0 0 1 1.414.586L15.108 9h4.085a3.5 3.5 0 1 1 0 7h-5.085zm-5.283-3.496a1 1 0 1 1 1.737.992L7.417 19h.862l6.707-6.707a1 1 0 1 1 1.415 1.414l-.293.293h3.085a1.5 1.5 0 1 0 0-3h-12.5a1 1 0 0 1-.707-.293L3.28 8h-.143l1.52 4.053A3 3 0 0 0 7.466 14h.504l.855-1.496zM10.131 9h2.148l-3-3h-.862l1.714 3z"
  }));
};

var _default = SvgTransportPlane;
exports["default"] = _default;