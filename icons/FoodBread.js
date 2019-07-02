"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodBread = function SvgFoodBread(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M5.555 11.56a2 2 0 0 1 1.128 1.945L6.148 21h11.67l-.646-7.396a2 2 0 0 1 1.172-1.997 4.5 4.5 0 1 0-4.96-7.354 2 2 0 0 1-2.769 0 4.5 4.5 0 1 0-5.06 7.307zm-.867 1.802A6.5 6.5 0 1 1 12 2.81a6.5 6.5 0 1 1 7.165 10.62l.645 7.397A2 2 0 0 1 17.818 23H6.148a2 2 0 0 1-1.995-2.142l.535-7.496z"
  }));
};

var _default = SvgFoodBread;
exports["default"] = _default;