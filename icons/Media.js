"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMedia = function SvgMedia(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M4 3h16a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 5v12h16V8H4zm10.972 6.864l-4.373 2.4c-.507.278-1.158.116-1.454-.36A.955.955 0 0 1 9 16.4v-4.8c0-.552.476-1 1.063-1 .188 0 .373.047.536.136l4.373 2.4c.508.278.679.89.383 1.368a1.034 1.034 0 0 1-.383.36z"
  }));
};

var _default = SvgMedia;
exports["default"] = _default;