"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStop = function SvgStop(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M16.917 4.858a2.483 2.483 0 0 1 3.048 2.418V17a6 6 0 0 1-6 6h-2.552a6 6 0 0 1-5.208-3.02c-1.312-2.294-2.317-3.75-2.945-4.308A2.863 2.863 0 0 1 6 10.796V5.5a2.5 2.5 0 0 1 3.039-2.442 2.5 2.5 0 0 1 4.922 0 2.501 2.501 0 0 1 2.956 1.8zM15 11.574V5.5a.5.5 0 1 0-1 0V11a1 1 0 0 1-2 0V3.5a.5.5 0 1 0-1 0v7.004a1 1 0 1 1-2 0V5.5a.5.5 0 0 0-1 0V12c0 .023 0 .047-.002.07.59.583 1.13 1.33 1.62 2.234.666-.24 1.409-.359 2.224-.359a1 1 0 0 1 0 2c-.886 0-1.593.182-2.139.531a1 1 0 0 1-1.448-.426c-.835-1.821-1.772-2.909-2.766-3.315a.863.863 0 0 0-.9 1.443c.842.748 1.936 2.331 3.352 4.808A4 4 0 0 0 11.413 21h2.552a4 4 0 0 0 4-4V7.276a.483.483 0 0 0-.965 0v4.298a1 1 0 1 1-2 0z"
  }));
};

var _default = SvgStop;
exports["default"] = _default;