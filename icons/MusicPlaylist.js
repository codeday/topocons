"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMusicPlaylist = function SvgMusicPlaylist(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6.43 19.316c1.307-.755 1.861-2.052 1.42-2.816-.44-.764-1.841-.932-3.148-.178-1.307.755-1.861 2.052-1.42 2.816.44.763 1.841.932 3.148.178zM8 2.97a1 1 0 0 1 1.56-.829l3 2.03a1 1 0 0 1-1.12 1.656L10 4.854v12.08c.07 1.536-.927 3.166-2.57 4.114-2.173 1.254-4.814.936-5.88-.91-1.066-1.846-.021-4.293 2.152-5.548 1.423-.822 3.047-.969 4.298-.454V2.971zM21 8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h8zm0 4a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h8zm0 4a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h8z"
  }));
};

var _default = SvgMusicPlaylist;
exports["default"] = _default;