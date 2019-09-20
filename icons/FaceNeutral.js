"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceNeutral = function SvgFaceNeutral(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm-3.5-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5 5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H9zm6.5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  }));
};

var _default = SvgFaceNeutral;
exports["default"] = _default;