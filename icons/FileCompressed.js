"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileCompressed = function SvgFileCompressed(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm11 2.407V6h2.574L16 3.407zM11 3v1h1a1 1 0 0 1 0 2h-1v1h1a1 1 0 0 1 0 2h-1v1h1a1 1 0 0 1 0 2h-1v.17a3.001 3.001 0 1 1-2 0V10H8a1 1 0 1 1 0-2h1V7H8a1 1 0 1 1 0-2h1V4H8a1 1 0 0 1-1-1H5v17h14V8h-3a2 2 0 0 1-2-2V3h-3zm-1 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileCompressed;
exports["default"] = _default;