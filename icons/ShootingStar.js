"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShootingStar = function SvgShootingStar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M6.878 16.34a1 1 0 0 1 .715.715l.37 1.415.788-1.231a1 1 0 0 1 .9-.46l1.46.086-.927-1.13a1 1 0 0 1-.158-.999l.533-1.362-1.362.533a1 1 0 0 1-.999-.158l-1.13-.928.085 1.46a1 1 0 0 1-.459.9l-1.231.79 1.415.37zm-4.13.988c-.844-.22-1.021-1.339-.287-1.81l2.661-1.704-.185-3.156c-.05-.87.959-1.384 1.633-.831l2.444 2.004 2.944-1.151c.812-.317 1.613.484 1.295 1.295l-1.15 2.944 2.003 2.444c.553.674.039 1.684-.831 1.633l-3.156-.185-1.705 2.661c-.47.734-1.589.557-1.81-.286l-.798-3.059-3.058-.799zM13.225 2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4zm7 7a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4zm-1-6a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4z"
  }));
};

var _default = SvgShootingStar;
exports["default"] = _default;