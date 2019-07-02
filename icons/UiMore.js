"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUiMore = function SvgUiMore(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M12 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgUiMore;
exports["default"] = _default;