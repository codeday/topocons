"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileDoc = function SvgFileDoc(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9 2H5v17h14V8h-3a2 2 0 0 1-2-2V3zm2 .407V6h2.574L16 3.407zM13 10h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm0 3h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm-5 3h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileDoc;
exports["default"] = _default;