"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTemperature = function SvgTemperature(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M8 4a4 4 0 1 1 8 0v9.528a6 6 0 1 1-8 0V4zm2 0v10.422l-.666.596a4 4 0 1 0 5.332 0L14 14.422V4a2 2 0 1 0-4 0zm5 14a3 3 0 1 1-4-2.83V11a1 1 0 0 1 2 0v4.17c1.165.413 2 1.524 2 2.83z"
  }));
};

var _default = SvgTemperature;
exports["default"] = _default;