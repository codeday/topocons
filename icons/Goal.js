"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGoal = function SvgGoal(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6.711 19.025l-1.908 2.571a1 1 0 1 1-1.606-1.192L11 9.891V9H6.366a1.2 1.2 0 0 1-1.01-1.848L6.095 6l-.74-1.152A1.2 1.2 0 0 1 6.366 3H11a1 1 0 0 1 2 0v6.891l7.803 10.513a1 1 0 1 1-1.606 1.192l-1.908-2.571h-.55l-1.998.892a1.1 1.1 0 0 1-1.003-.054l-1.691-.986-1.691.986a1.1 1.1 0 0 1-1.003.054l-1.998-.892h-.644zm1.382-1.861l1.654.739 1.746-1.018a1.1 1.1 0 0 1 1.108 0l1.746 1.018 1.584-.708L12 11.9l-3.907 5.264zM11 7V5H7.83l.294.46a1 1 0 0 1 0 1.08L7.83 7H11z"
  }));
};

var _default = SvgGoal;
exports["default"] = _default;