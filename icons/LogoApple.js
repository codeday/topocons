"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoApple = function SvgLogoApple(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M25.565 9.785c-.123.077-3.051 1.702-3.051 5.305.138 4.109 3.695 5.55 3.756 5.55-.061.077-.537 1.963-1.947 3.94-1.119 1.703-2.361 3.42-4.247 3.42-1.794 0-2.438-1.135-4.508-1.135-2.223 0-2.852 1.135-4.554 1.135-1.886 0-3.22-1.809-4.4-3.496-1.533-2.208-2.836-5.673-2.882-9-.031-1.763.307-3.496 1.165-4.968 1.211-2.055 3.373-3.45 5.734-3.496 1.809-.061 3.419 1.242 4.523 1.242 1.058 0 3.036-1.242 5.274-1.242.966.001 3.542.292 5.137 2.745zM15.001 6.688c-.322-1.61.567-3.22 1.395-4.247 1.058-1.242 2.729-2.085 4.17-2.085a6.003 6.003 0 0 1-1.533 4.339c-.935 1.242-2.545 2.177-4.032 1.993z"
  }));
};

var _default = SvgLogoApple;
exports["default"] = _default;