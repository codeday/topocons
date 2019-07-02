"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiEdit = function SvgUiEdit(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M15 7.414L5.464 16.95a5 5 0 0 0-1.438 3.024 5 5 0 0 0 3.024-1.438L16.586 9 15 7.414zM16.414 6L18 7.586l.793-.793a1.121 1.121 0 1 0-1.586-1.586L16.414 6zM12 22a1 1 0 0 1 0-2h9.11a1 1 0 0 1 0 2H12zm8.207-18.207a3.121 3.121 0 0 1 0 4.414L8.464 19.95A7 7 0 0 1 3.514 22H3a1 1 0 0 1-1-1v-.515a7 7 0 0 1 2.05-4.95L15.793 3.794a3.121 3.121 0 0 1 4.414 0z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiEdit;
exports["default"] = _default;