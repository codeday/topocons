"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileSlides = function SvgFileSlides(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9 2H5v17h14V8h-3a2 2 0 0 1-2-2V3zm2 .407V6h2.574L16 3.407zM11 9a1 1 0 0 1 2 0h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.419l.403.81a.875.875 0 1 1-1.567.78l-.79-1.59H11.4l-.79 1.59a.875.875 0 0 1-1.567-.78l.403-.81H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4zm-3 2v4h8v-4H8z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileSlides;
exports["default"] = _default;