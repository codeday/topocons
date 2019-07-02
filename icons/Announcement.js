"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAnnouncement = function SvgAnnouncement(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M8.447 15.579l.543 3.803A1 1 0 0 1 8 20.523H5a1 1 0 0 1-.962-.725l-1.597-5.59A4.001 4.001 0 0 1 4 6.523h1.807l8.45-3.38A2 2 0 0 1 17 5v11.046a2 2 0 0 1-2.743 1.857l-5.81-2.324zm-2.143-.857l-.497-.199H4.611l1.143 4h1.093l-.543-3.801zM7 8.2v4.646l8 3.2V5L7 8.2zm-2 .323H4a2 2 0 1 0 0 4h1v-4zm14.326-.922a1 1 0 1 1-.64-1.894l3.935-1.33a1 1 0 0 1 .64 1.894l-3.935 1.33zm0 5.776l3.935 1.33a1 1 0 0 1-.64 1.894l-3.936-1.33a1 1 0 1 1 .64-1.894zM19 9.523h4a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z"
  }));
};

var _default = SvgAnnouncement;
exports["default"] = _default;