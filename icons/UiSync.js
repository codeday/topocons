"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiSync = function SvgUiSync(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M3.484 14H9a1 1 0 0 1 0 2H5.07a8.003 8.003 0 0 0 14.474-1.33 1 1 0 0 1 1.886.666A10.003 10.003 0 0 1 4 18.003V21a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1h.484zm17.055-4a.992.992 0 0 1-.102 0H15a1 1 0 0 1 0-2h3.93A8.003 8.003 0 0 0 4.456 9.333a1 1 0 0 1-1.886-.666A10.003 10.003 0 0 1 20 5.997V3a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-.46z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiSync;
exports["default"] = _default;