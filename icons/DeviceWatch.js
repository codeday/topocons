"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeviceWatch = function SvgDeviceWatch(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M10 5.009h4V4h-4v1.009zm0 14V20h4v-.991h-4zm8-10h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H18v3c0 1.48-.804 2.773-2 3.465V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.526a3.998 3.998 0 0 1-2-3.465v-6c0-1.48.804-2.774 2-3.465V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.544c1.196.691 2 1.984 2 3.465zm-8-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-4z"
  }));
};

var _default = SvgDeviceWatch;
exports["default"] = _default;