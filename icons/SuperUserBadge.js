"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSuperUserBadge = function SvgSuperUserBadge(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M3.999 4.338l1.398-.002A6.21 6.21 0 0 0 9.36 2.9l1.36-1.132a2 2 0 0 1 2.56 0L14.64 2.9a6.21 6.21 0 0 0 3.963 1.436l1.398.002a1 1 0 0 1 .999 1v8.56a8 8 0 0 1-4.755 7.312l-3.84 1.704a1 1 0 0 1-.81 0l-3.84-1.704A8 8 0 0 1 3 13.898v-8.56a1 1 0 0 1 .999-1zM19 6.337V12h-7V3.306l-1.36 1.131a8.21 8.21 0 0 1-5.24 1.9H5V12h7v8.906l3.434-1.524A6 6 0 0 0 19 13.898V6.337z"
  }));
};

var _default = SvgSuperUserBadge;
exports["default"] = _default;