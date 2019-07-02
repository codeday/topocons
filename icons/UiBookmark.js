"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiBookmark = function SvgUiBookmark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M7 4v16.586L10.586 17a2 2 0 0 1 2.828 0L17 20.586V4H7zm0-2h10a2 2 0 0 1 2 2v16.586A2 2 0 0 1 15.586 22L12 18.414 8.414 22A2 2 0 0 1 5 20.586V4a2 2 0 0 1 2-2z"
  }));
};

var _default = SvgUiBookmark;
exports["default"] = _default;