"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIdCard = function SvgIdCard(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M15 7v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6zm-5-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h6a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h7zm-4.126 9.525a2.86 2.86 0 0 1-.685-.902c-.188-.391-.402-1.21-.317-1.687.115-.649-.183-1.604.172-2.038C5.4 9.464 6.05 9 6.786 9c.323 0 .588.381.99.272.423-.116.976.382 1.175.626.355.434.016 1.395.155 2.038.107.495-.126 1.276-.306 1.662-.144.31-.374.65-.675.917a1 1 0 0 0 .402.77l1.117.834c.224.168.356.43.356.71 0 .309-.175.59-.452.728-.617.305-1.468.457-2.555.457-1.083 0-1.93-.151-2.54-.454A.816.816 0 0 1 4 16.83c0-.28.132-.543.356-.71l1.117-.834a1 1 0 0 0 .401-.761zM13 12h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 3h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zM12 4v4h1V4h-1z"
  }));
};

var _default = SvgIdCard;
exports["default"] = _default;