"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodMeat = function SvgFoodMeat(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M23 12v4a2 2 0 0 1-1 1.732V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-.268A2 2 0 0 1 1 16v-4a2 2 0 0 1 1-1.732V10c0-5.333 3.333-8 10-8s10 2.667 10 8v.268A2 2 0 0 1 23 12zM12 4c-5.648 0-8 1.882-8 6h3l3 2 3-2h7c0-4.118-2.352-6-8-6zM4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2H4zm7.11-4.336a2 2 0 0 1-2.22 0L6.395 12H3v4h18v-4h-7.394l-2.497 1.664zM17 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgFoodMeat;
exports["default"] = _default;