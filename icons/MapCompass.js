"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMapCompass = function SvgMapCompass(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.684 9.051l6-2a1 1 0 0 1 1.265 1.265l-2 6a1 1 0 0 1-.633.633l-6 2a1 1 0 0 1-1.265-1.265l2-6a1 1 0 0 1 .633-.633zM9.58 14.42l3.628-1.21 1.21-3.628-3.628 1.21-1.21 3.628z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgMapCompass;
exports["default"] = _default;