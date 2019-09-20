"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMapPoi = function SvgMapPoi(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M11.5 1C16.201 1 20 4.84 20 9.58c0 3.941-2.407 8.105-7.134 12.525a2 2 0 0 1-2.732 0C5.407 17.685 3 13.52 3 9.58 3 4.84 6.799 1 11.5 1zm0 2C7.908 3 5 5.94 5 9.58c0 3.287 2.138 6.986 6.5 11.064C15.862 16.566 18 12.867 18 9.58 18 5.94 15.092 3 11.5 3zm0 10a3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgMapPoi;
exports["default"] = _default;