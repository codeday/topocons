"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileVideo = function SvgFileVideo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm11 2.407V6h2.574L16 3.407zM14 3H5v17h14V8h-3a2 2 0 0 1-2-2V3zm-3.504 7.355l3.985 2.277a1 1 0 0 1 0 1.736l-3.985 2.277A1 1 0 0 1 9 15.777v-4.554a1 1 0 0 1 1.496-.868z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileVideo;
exports["default"] = _default;