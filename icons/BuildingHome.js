"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBuildingHome = function SvgBuildingHome(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M18 20V8.08l-6-4.8-6 4.8V20h3v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6h3zm2-10.32V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.68l-1.375 1.1a1 1 0 1 1-1.25-1.56l9.376-7.501a2 2 0 0 1 2.498 0l9.376 7.5a1 1 0 1 1-1.25 1.562L20 9.68zM13 14h-2v6h2v-6z"
  }));
};

var _default = SvgBuildingHome;
exports["default"] = _default;