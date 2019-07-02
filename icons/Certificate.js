"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCertificate = function SvgCertificate(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M17 19.646A3.99 3.99 0 0 1 16.126 18H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v9.354c.622.705 1 1.632 1 2.646s-.378 1.94-1 2.646v3.151a.5.5 0 0 1-.801.399L20.3 21.762a.5.5 0 0 0-.602 0L17.8 23.196a.5.5 0 0 1-.801-.399v-3.151zm4-6.52V5H3v11h13.126A4.002 4.002 0 0 1 21 13.126zM20 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM9 11h5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zM7 8h9a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgCertificate;
exports["default"] = _default;