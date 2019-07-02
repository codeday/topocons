"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiMenu = function SvgUiMenu(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M3.994 20A.997.997 0 0 1 3 19c0-.552.445-1 .994-1h16.012c.549 0 .994.448.994 1s-.445 1-.994 1H3.994zm0-7A.997.997 0 0 1 3 12c0-.552.445-1 .994-1h16.012c.549 0 .994.448.994 1s-.445 1-.994 1H3.994zm0-7A.997.997 0 0 1 3 5c0-.552.445-1 .994-1h16.012c.549 0 .994.448.994 1s-.445 1-.994 1H3.994z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiMenu;
exports["default"] = _default;