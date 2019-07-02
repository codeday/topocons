"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiDownload = function SvgUiDownload(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M11 3a1 1 0 0 1 2 0v9.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L11 12.586V3zM8.037 4.787a1 1 0 1 1 .919 1.777 5.077 5.077 0 0 0-2.675 3.663 1 1 0 0 1-.811.82A3.001 3.001 0 0 0 6 17h11a4 4 0 1 0-.375-7.983 1 1 0 0 1-.957-.492 5.096 5.096 0 0 0-.86-1.098A1 1 0 0 1 16.2 5.99c.32.31.61.648.865 1.01A6 6 0 0 1 17 19H6a5 5 0 0 1-1.55-9.755 7.083 7.083 0 0 1 3.587-4.458z"
  }));
};

var _default = SvgUiDownload;
exports["default"] = _default;