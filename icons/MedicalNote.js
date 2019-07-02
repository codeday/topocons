"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMedicalNote = function SvgMedicalNote(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M9 4a3 3 0 0 1 6 0h1a1 1 0 0 1 1 1h1a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1-1h1zM6 7v15h12V7H6zm2 9h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm3-8h1a1 1 0 0 1 0 2h-1v1.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V13H8a1 1 0 0 1 0-2h1V9.75A.75.75 0 0 1 9.75 9h.5a.75.75 0 0 1 .75.75V11zm1-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

var _default = SvgMedicalNote;
exports["default"] = _default;