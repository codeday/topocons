"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEye = function SvgEye(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M12 20c-3.909 0-7.403-2.337-10.463-6.883a2 2 0 0 1 0-2.234C4.597 6.337 8.09 4 12 4c3.909 0 7.403 2.337 10.463 6.883a2 2 0 0 1 0 2.234C19.403 17.663 15.91 20 12 20zm0-2c3.155 0 6.083-1.958 8.804-6-2.72-4.042-5.649-6-8.804-6-3.155 0-6.083 1.958-8.804 6 2.72 4.042 5.649 6 8.804 6zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  }));
};

var _default = SvgEye;
exports["default"] = _default;