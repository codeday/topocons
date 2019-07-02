"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTicket = function SvgTicket(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M17.803 13.06a1 1 0 0 1 1.415-1.414l2.828-2.828-.945-.945a3.502 3.502 0 0 1-4.474-4.474l-.945-.945-2.828 2.828a1 1 0 1 1-1.415 1.415l-8.485 8.485.945.945a3.502 3.502 0 0 1 4.474 4.474l.945.945 8.485-8.485zM2.99 18.047l-1.45-1.45a2 2 0 0 1 0-2.828L14.269 1.04a2 2 0 0 1 2.828 0l1.45 1.45a1 1 0 0 1 .126 1.259 1.5 1.5 0 0 0 2.08 2.079 1 1 0 0 1 1.259.126l1.45 1.45a2 2 0 0 1 0 2.828L10.731 22.96a2 2 0 0 1-2.828 0l-1.45-1.45a1 1 0 0 1-.126-1.259 1.5 1.5 0 0 0-2.08-2.079 1 1 0 0 1-1.259-.126zM14.975 7.404a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414zm2.121 2.121a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414z"
  }));
};

var _default = SvgTicket;
exports["default"] = _default;