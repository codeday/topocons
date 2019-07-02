"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEco = function SvgEco(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M11 11V7.038h-.68A5.315 5.315 0 0 1 5.065.926a1 1 0 0 1 .878-.844l.49-.055a5.98 5.98 0 0 1 6.353 4.113 5.003 5.003 0 0 1 3.767-1.153l.583.063a1 1 0 0 1 .881.838 4.453 4.453 0 0 1-4.398 5.146H13V11h4a2 2 0 0 1 2 2v2c0 .718-.378 1.348-.947 1.7l-.572 5.08A2.5 2.5 0 0 1 14.997 24H9.003a2.5 2.5 0 0 1-2.484-2.22l-.572-5.08A1.999 1.999 0 0 1 5 15v-2a2 2 0 0 1 2-2h4zm5.007 6H7.993l.513 4.556a.5.5 0 0 0 .497.444h5.994a.5.5 0 0 0 .497-.444L16.007 17zM7 15h10v-2H7v2zm6.619-7.966c1.226 0 2.242-.9 2.424-2.075a3.02 3.02 0 0 0-2.89 2.075h.466zm-3.3-1.996h.642A3.98 3.98 0 0 0 7.015 1.99a3.316 3.316 0 0 0 3.305 3.047z"
  }));
};

var _default = SvgEco;
exports["default"] = _default;