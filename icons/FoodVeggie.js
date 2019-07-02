"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodVeggie = function SvgFoodVeggie(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6.707 19.045l-.878-1.006a1 1 0 1 1 1.508-1.315l1.183 1.358c2.202-1.235 4.85-2.927 7.93-5.076l-3.228-3.228a1 1 0 0 1 1.414-1.414l3.33 3.33a4 4 0 0 0-.383-5.212l-.161-.16a.903.903 0 0 1-.254-.255l-.29-.29a4 4 0 0 0-6.032.433A154.68 154.68 0 0 0 8.84 8.951l1.566 1.844A1 1 0 0 1 8.88 12.09l-1.227-1.446c-1.846 2.682-3.204 4.923-4.07 6.71-.605 1.245-.95 2.23-1.048 2.913-.012.09-.02.169-.024.237.077-.002.167-.009.27-.021.697-.085 1.697-.407 2.962-.98.308-.139.629-.292.963-.458zm10.3-17.795c0-1.333 2-1.333 2 0v1.828l.415-.414a1 1 0 0 1 1.414 1.414l-.414.415h1.828a1 1 0 1 1 0 2h-2.197a6.003 6.003 0 0 1-1.846 7.725C8.425 21.1 2.689 23.695.997 22.003c-1.7-1.7 1.05-7.363 8.247-16.99a6.001 6.001 0 0 1 7.764-1.628V1.25z"
  }));
};

var _default = SvgFoodVeggie;
exports["default"] = _default;