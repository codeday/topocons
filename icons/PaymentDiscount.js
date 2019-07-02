"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPaymentDiscount = function SvgPaymentDiscount(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M12 20.44l-2.748.961a1 1 0 0 1-1.19-.433l-1.487-2.503-2.723-1.03a1 1 0 0 1-.633-1.096l.47-2.874-1.424-2.539a1 1 0 0 1 .22-1.247L4.69 7.78l.541-2.86a1 1 0 0 1 .97-.814l2.912-.037 2.253-1.843a1 1 0 0 1 1.266 0l2.253 1.843 2.912.037a1 1 0 0 1 .97.814l.54 2.86 2.208 1.9a1 1 0 0 1 .22 1.246l-1.425 2.54.47 2.873a1 1 0 0 1-.633 1.096l-2.723 1.03-1.487 2.503a1 1 0 0 1-1.19.433L12 20.44zm-.33-2.004a1 1 0 0 1 .66 0l2.306.807 1.248-2.1a1 1 0 0 1 .506-.425l2.285-.864-.394-2.411a1 1 0 0 1 .115-.65l1.195-2.131-1.852-1.594a1 1 0 0 1-.33-.572l-.454-2.4-2.443-.031a1 1 0 0 1-.621-.226L12 4.292l-1.89 1.547a1 1 0 0 1-.622.226l-2.443.03-.454 2.4a1 1 0 0 1-.33.573l-1.852 1.594 1.195 2.13a1 1 0 0 1 .115.65l-.394 2.412 2.285.864a1 1 0 0 1 .506.425l1.248 2.1 2.306-.807zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm.121-3.707l-2.828 2.828a1 1 0 1 1-1.414-1.414l2.828-2.828a1 1 0 1 1 1.414 1.414z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgPaymentDiscount;
exports["default"] = _default;