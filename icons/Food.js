"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFood = function SvgFood(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6.916 10.41c-1.09 2.452-2.185 5.601-3.284 9.444a72.23 72.23 0 0 1 6.964-3.571c2.577-1.146 5.866-2.332 9.869-3.562a13.526 13.526 0 0 0-9.801-9.345 57.968 57.968 0 0 0-3.748 7.034zM10.983.372a16.52 16.52 0 0 1 12.623 12.524 1 1 0 0 1-.693 1.177c-4.788 1.41-8.625 2.758-11.505 4.038-2.957 1.314-5.915 2.894-8.877 4.742-.77.48-1.729-.23-1.495-1.106C2.382 16.7 3.73 12.653 5.088 9.598 6.393 6.662 8.01 3.73 9.938.8a1 1 0 0 1 1.045-.428zm.519 10.632a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3.5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgFood;
exports["default"] = _default;