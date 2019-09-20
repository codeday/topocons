"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileCode = function SvgFileCode(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9 2H5v17h14V8h-3a2 2 0 0 1-2-2V3zm2 .407V6h2.574L16 3.407zm-8.289 11.02c-1.063-.322-.876-1.846.173-1.951.024-.1.044-.265.043-.493v-.909C7.927 9.93 8.855 9 10 9a1 1 0 1 1 0 2 .074.074 0 0 0-.074.074v.904c.002.578-.094 1.086-.289 1.49.273.414.4.922.363 1.489V16a1 1 0 1 1 0 2 2 2 0 0 1-2-2l.002-1.107c.02-.317-.026-.386-.292-.466zm8.579 0c-.266.08-.312.15-.292.466L16 16a2 2 0 0 1-2 2 1 1 0 0 1 0-2v-1.043c-.037-.567.09-1.075.363-1.49-.196-.403-.291-.91-.289-1.489v-.904A.074.074 0 0 0 14 11a1 1 0 0 1 0-2c1.146 0 2.074.929 2.074 2.074v.909c0 .228.018.393.043.493 1.049.105 1.235 1.629.173 1.95z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileCode;
exports["default"] = _default;