"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMapNav = function SvgMapNav(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M19.506 5.166l-8.397 8.428c.022.037.043.074.063.112l3.344 6.43 4.99-14.97zm2.208-.332l-5.31 15.932a1.99 1.99 0 0 1-3.653.288l-3.344-6.43-6.43-3.344a1.99 1.99 0 0 1 .289-3.652l15.931-5.31a1.99 1.99 0 0 1 2.517 2.516z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgMapNav;
exports["default"] = _default;