"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLanguage = function SvgLanguage(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M7.127 14A15.622 15.622 0 0 1 7 12c0-.678.042-1.344.127-2H3.223a9.03 9.03 0 0 0 0 4h3.904zm2.592 6.708C8.704 19.218 7.972 17.647 7.525 16h-3.59a9.02 9.02 0 0 0 5.784 4.708zM21 12a9.03 9.03 0 0 0-.223-2h-3.904c.085.656.127 1.322.127 2 0 .678-.042 1.344-.127 2h3.904A9.03 9.03 0 0 0 21 12zm-4.525 4c-.447 1.647-1.18 3.217-2.194 4.708A9.02 9.02 0 0 0 20.064 16h-3.589zm-1.621-2c.097-.654.146-1.32.146-2 0-.68-.049-1.346-.146-2H9.146C9.05 10.654 9 11.32 9 12c0 .68.049 1.346.146 2h5.708zM12 20.443c1.1-1.408 1.896-2.887 2.39-4.443H9.61c.494 1.556 1.29 3.035 2.39 4.443zM7.525 8c.447-1.647 1.18-3.217 2.194-4.708A9.02 9.02 0 0 0 3.936 8h3.589zm6.756-4.708c1.015 1.49 1.747 3.061 2.194 4.708h3.59a9.02 9.02 0 0 0-5.784-4.708zM14.391 8C13.896 6.444 13.1 4.965 12 3.557 10.9 4.965 10.104 6.444 9.61 8h4.78zM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z"
  }));
};

var _default = SvgLanguage;
exports["default"] = _default;