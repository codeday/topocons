"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileMusic = function SvgFileMusic(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5 1h10.597a2 2 0 0 1 1.42.591l3.403 3.43A2 2 0 0 1 21 6.43V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm11 2.407V6h2.574L16 3.407zM14 3H5v17h14V8h-3a2 2 0 0 1-2-2V3zM9 15.917v-4.009c0-.69.47-1.29 1.14-1.456l5-1.238A1.5 1.5 0 0 1 17 10.67V16c0 .831-.579 1.625-1.65 1.892-1.072.267-2.103-.168-2.304-.972-.2-.804.506-1.672 1.578-1.94.123-.03.25-.051.376-.063v-3.608l-4 .99v4.651h-.002A.783.783 0 0 1 11 17c0 .83-.579 1.624-1.65 1.892-1.072.267-2.103-.168-2.304-.972-.2-.804.506-1.672 1.578-1.94.123-.03.25-.051.376-.063z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgFileMusic;
exports["default"] = _default;