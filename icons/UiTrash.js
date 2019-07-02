"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiTrash = function SvgUiTrash(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zm2 0h4V4h-4v2zM7 8v12h10V8H7zm2 3a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm4 0a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6z"
  }));
};

var _default = SvgUiTrash;
exports["default"] = _default;