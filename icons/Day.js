"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDay = function SvgDay(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM4.929 3.515L7.05 5.636c.943.943-.471 2.357-1.414 1.414L3.515 4.93c-.943-.943.471-2.357 1.414-1.414zM13 1v3c0 1.333-2 1.333-2 0V1c0-1.333 2-1.333 2 0zm7.485 3.929L18.364 7.05c-.943.943-2.357-.471-1.414-1.414l2.121-2.121c.943-.943 2.357.471 1.414 1.414zM23 13h-3c-1.333 0-1.333-2 0-2h3c1.333 0 1.333 2 0 2zm-3.929 7.485l-2.121-2.121c-.943-.943.471-2.357 1.414-1.414l2.121 2.121c.943.943-.471 2.357-1.414 1.414zM11 23v-3c0-1.333 2-1.333 2 0v3c0 1.333-2 1.333-2 0zm-7.485-3.929l2.121-2.121c.943-.943 2.357.471 1.414 1.414L4.93 20.485c-.943.943-2.357-.471-1.414-1.414zM1 11h3c1.333 0 1.333 2 0 2H1c-1.333 0-1.333-2 0-2z"
  }));
};

var _default = SvgDay;
exports["default"] = _default;