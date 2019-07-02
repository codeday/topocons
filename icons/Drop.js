"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDrop = function SvgDrop(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M12 22a7 7 0 0 1-7-7c0-2.488 2.06-6.607 6.177-12.568a1 1 0 0 1 1.646 0C16.94 8.393 19 12.512 19 15a7 7 0 0 1-7 7zm-5-7a5 5 0 0 0 10 0c0-1.788-1.667-5.253-5-10.223C8.667 9.747 7 13.212 7 15zm1.5 0a1 1 0 0 1 2 0 1.5 1.5 0 0 0 1.5 1.5 1 1 0 0 1 0 2A3.5 3.5 0 0 1 8.5 15z"
  }));
};

var _default = SvgDrop;
exports["default"] = _default;