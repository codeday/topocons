"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFilePdf = function SvgFilePdf(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9 2H5v17h14V8h-3a2 2 0 0 1-2-2V3zm2 .407V6h2.574L16 3.407zM9.575 7.822c-.232-1.243.386-2.17 1.725-2.486 1.425-.338 2.29.383 2.267 1.752-.014.79-.28 1.803-.833 3.372.216.279.453.571.711.88l.062.085c.337.542.67 1.043.993 1.489 1.044-.208 1.833-.28 2.45-.194 1.074.149 1.703.85 1.515 2.015-.388 1.426-1.293 2.082-2.438 1.658-.672-.25-1.373-.87-2.138-1.81a70.051 70.051 0 0 0-2.926.77c-.537 1.503-.88 2.283-1.308 2.861-.753 1.02-1.796 1.143-2.723.188-.946-.974-.892-2.064.058-2.892.587-.512 1.509-.942 2.81-1.366l.292-.836c.17-.48.313-.875.456-1.257.277-.74.399-1.064.5-1.338-.823-1.138-1.322-2.08-1.473-2.891zm2.377 4.756a59.19 59.19 0 0 0-.368 1.01l-.011.038.068-.018c.493-.13.894-.236 1.245-.324l-.013-.018.036-.008a29.7 29.7 0 0 1-.648-.996l-.124-.15-.014.039-.007-.01-.164.437zm4.597 2.408c.204.076.289.015.451-.565.03-.188.042-.174-.256-.215-.278-.039-.661-.024-1.151.043.378.392.706.644.956.737zm-8.573 1.655c-.306.266-.31.363.033.717.255.263.217.267.44-.035.207-.28.413-.688.672-1.33-.518.22-.902.436-1.145.648zm4.09-9.579c.008-.402.04-.376-.42-.267-.568.135-.68.303-.596.752.067.363.274.83.613 1.389.266-.849.397-1.45.404-1.874z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFilePdf;
exports["default"] = _default;