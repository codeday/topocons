"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyProviderMastercard = function SvgMoneyProviderMastercard(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M9.5 5.5C4.265 5.5 0 9.765 0 15s4.265 9.5 9.5 9.5c2.344 0 4.489-.86 6.148-2.275A8.946 8.946 0 0 0 21 24a9 9 0 0 0 9-9 9 9 0 0 0-9-9 8.946 8.946 0 0 0-5.352 1.775A9.448 9.448 0 0 0 9.5 5.5zm0 2c1.774 0 3.398.614 4.68 1.637A8.957 8.957 0 0 0 12 15c0 2.242.824 4.288 2.18 5.863A7.471 7.471 0 0 1 9.5 22.5 7.486 7.486 0 0 1 2 15c0-4.153 3.347-7.5 7.5-7.5z"
  }));
};

var _default = SvgMoneyProviderMastercard;
exports["default"] = _default;