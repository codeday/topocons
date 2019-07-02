"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceAngry = function SvgFaceAngry(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M17 10.5a1.5 1.5 0 0 1-2.916.497 1 1 0 0 1-.639-1.83l3-2a1 1 0 0 1 1.11 1.665l-.962.641c.252.268.407.63.407 1.027zM6.445 8.832a1 1 0 0 1 1.11-1.664l3 2a1 1 0 0 1-.64 1.829 1.5 1.5 0 1 1-2.508-1.524l-.962-.64zM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm-4.243-6.172a6 6 0 0 1 8.486 0 1 1 0 0 1-1.415 1.415 4 4 0 0 0-5.656 0 1 1 0 1 1-1.415-1.415z"
  }));
};

var _default = SvgFaceAngry;
exports["default"] = _default;