"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrophy = function SvgTrophy(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M9 4v7a3 3 0 0 0 6 0V4H9zm2 16v-4.1a5.006 5.006 0 0 1-3.912-3.963c-2.053-.418-3.39-2.269-3.888-4.74C2.674 4.587 3.16 1.988 4.955 2c.804.005 1.31.009 2.904.01C7.905 2.003 7.952 2 8 2h8c.048 0 .095.003.141.01 1.595-.001 2.1-.005 2.904-.01 1.794-.012 2.281 2.587 1.755 5.197-.498 2.471-1.835 4.322-3.888 4.74A5.006 5.006 0 0 1 13 15.9V20h2a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h2zm7.84-13.198c.17-.851.191-1.728.07-2.372a2.286 2.286 0 0 0-.117-.428L17 4.009v5.789c.896-.442 1.539-1.507 1.84-2.996zM7 9.798v-5.79c-.743 0-1.165-.003-1.793-.006-.042.103-.084.25-.117.428-.121.644-.1 1.52.07 2.372.301 1.49.944 2.554 1.84 2.996z"
  }));
};

var _default = SvgTrophy;
exports["default"] = _default;