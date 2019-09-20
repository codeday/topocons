"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiTag = function SvgUiTag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M5 4h9.62a4 4 0 0 1 3.037 1.397l3.429 4a4 4 0 0 1 0 5.206l-3.429 4A4 4 0 0 1 14.62 20H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.62a2 2 0 0 0 1.519-.698l3.428-4a2 2 0 0 0 0-2.604l-3.428-4A2 2 0 0 0 14.62 6H5z"
  }));
};

var _default = SvgUiTag;
exports["default"] = _default;