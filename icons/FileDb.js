"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileDb = function SvgFileDb(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9 2H5v17h14V8h-3a2 2 0 0 1-2-2V3zm2 .407V6h2.574L16 3.407zm-8.82 7.737a1.97 1.97 0 0 1 .047-.16l.027.01C7.924 9.744 9.84 9 12 9c2.69 0 5 1.155 5 3v4c0 1.845-2.31 3-5 3s-5-1.155-5-3v-4c0-.305.063-.591.18-.856zM9 13.905V16c0 .09.177.299.619.52.598.3 1.454.48 2.381.48.927 0 1.783-.18 2.381-.48.442-.221.619-.43.619-.52v-2.095c-.836.368-1.883.57-3 .57s-2.164-.202-3-.57zm.04-2.001c.41.401 1.543.821 2.96.821s2.55-.42 2.96-.821c-.074-.107-.256-.262-.579-.424-.598-.3-1.454-.48-2.381-.48-.927 0-1.783.18-2.381.48-.323.162-.505.317-.579.424z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileDb;
exports["default"] = _default;