"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeviceConsole = function SvgDeviceConsole(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M7.813 13.722h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 1 1 0-1.5h.75v-.75a.75.75 0 0 1 1.5 0v.75zm2.98-5.437V6.923a.406.406 0 0 0-.335-.4 2.406 2.406 0 0 1-1.984-2.369V2a1 1 0 1 1 2 0v2.154c0 .197.141.366.335.4a2.406 2.406 0 0 1 1.984 2.369v1.363c1.301-.027 2.602-.11 3.903-.246a5 5 0 0 1 5.509 4.613l.41 5.684a3.931 3.931 0 0 1-2.302 3.866 3.911 3.911 0 0 1-4.414-.837l-1.94-1.992a.5.5 0 0 0-.357-.152h-3.578a.5.5 0 0 0-.359.152l-1.939 1.992a3.911 3.911 0 0 1-4.413.837 3.931 3.931 0 0 1-2.303-3.866l.41-5.684A5 5 0 0 1 6.93 8.04c1.287.135 2.575.217 3.863.245zM6.721 10.03a3 3 0 0 0-3.306 2.768l-.41 5.684a1.931 1.931 0 0 0 1.131 1.9 1.911 1.911 0 0 0 2.157-.41l1.94-1.992a2.5 2.5 0 0 1 1.79-.757h3.579a2.5 2.5 0 0 1 1.791.757l1.94 1.992c.56.577 1.423.74 2.156.41a1.931 1.931 0 0 0 1.131-1.9l-.41-5.684a3 3 0 0 0-3.305-2.768 48.771 48.771 0 0 1-10.184 0zm8.092 4.193a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgDeviceConsole;
exports["default"] = _default;