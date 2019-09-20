"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodCookie = function SvgFoodCookie(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M1.718 14.343A4.977 4.977 0 0 0 3 11c0-.626-.115-1.234-.335-1.804A1 1 0 0 1 3.83 7.863a5 5 0 0 0 6.108-5.65 1 1 0 0 1 .882-1.15C11.21 1.02 11.604 1 12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-4.835 0-9.06-3.147-10.492-7.687a1 1 0 0 1 .21-.97zM12 21a9 9 0 0 0 0-18 7 7 0 0 1-7.071 7 6.974 6.974 0 0 1-1.339 5.214A9.005 9.005 0 0 0 12 21zm5-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-6 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgFoodCookie;
exports["default"] = _default;