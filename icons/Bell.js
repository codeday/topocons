"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBell = function SvgBell(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M15.427 4.482c2.792 1.021 3.909 3.378 3.784 6.596-.04 1.022-.165 1.866-.445 3.341-.075.393-.094.497-.123.659-.268 1.522.048 3.037.975 4.584a1 1 0 0 1-1.032 1.498l-4.959-.874a3.5 3.5 0 0 1-6.824-1.203l-2.989-.527a1 1 0 0 1-.457-1.761c1.4-1.137 2.215-2.453 2.484-3.975.028-.161.045-.266.11-.66.24-1.483.412-2.319.724-3.293.983-3.066 2.84-4.899 5.812-4.903a1 1 0 0 1 1.173-.935l.985.174a1 1 0 0 1 .782 1.28zM8.822 19.44a1.5 1.5 0 0 0 2.786.49l-2.786-.49zm7.852-4.709c.03-.174.05-.281.127-.684.263-1.382.377-2.153.412-3.046.11-2.824-.851-4.448-3.582-4.93-2.73-.48-4.189.717-5.051 3.408-.273.851-.43 1.614-.655 3.002-.066.406-.084.514-.115.688a8.031 8.031 0 0 1-1.746 3.753l10.967 1.934a8.031 8.031 0 0 1-.357-4.125zm.776-10.055a.875.875 0 1 1 .907-1.497c3.116 1.887 3.984 5.077 3.482 9.4a.875.875 0 1 1-1.738-.201c.432-3.718-.259-6.254-2.65-7.702zM5.404 9.744a.875.875 0 1 1-1.701-.408c1.014-4.23 2.938-6.924 6.53-7.61a.875.875 0 1 1 .328 1.72c-2.758.526-4.285 2.664-5.157 6.298z"
  }));
};

var _default = SvgBell;
exports["default"] = _default;