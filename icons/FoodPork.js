"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodPork = function SvgFoodPork(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M9.826 13.675c1.178 1.179 1.98 2.526 2.345 3.789 2.553-3.195 3.925-6.534 2.412-8.046-1.54-1.541-5.315-.24-8.425 1.948 1.227.38 2.527 1.168 3.668 2.31zm5.464-6.378l2.884-2.884-.678-1.356a1 1 0 1 1 1.79-.894l.723 1.447h1.382a1 1 0 0 1 0 2h-1.586l-3.1 3.1a1.01 1.01 0 0 1-.085.076c2.55 4.129-3.561 10.849-5.026 12.314-1.562 1.562-4.887.77-7.425-1.768-2.538-2.538-3.33-5.862-1.768-7.425 1.466-1.466 8.633-7.141 12.815-4.528.023-.028.048-.056.074-.082zm-5.11 12.389c.599-.6.09-2.74-1.768-4.597-1.858-1.857-3.997-2.366-4.596-1.767-.6.599-.09 2.738 1.767 4.596 1.858 1.857 3.997 2.367 4.596 1.768z"
  }));
};

var _default = SvgFoodPork;
exports["default"] = _default;