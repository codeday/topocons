"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyCurrencyUsd = function SvgMoneyCurrencyUsd(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm1 17.857V23h-2v-2.137c-2.13-.284-3.471-1.523-3.546-3.359h2.281c.109.914 1.031 1.5 2.359 1.5 1.227 0 2.094-.594 2.094-1.445 0-.719-.562-1.133-1.945-1.43l-1.469-.312c-2.055-.43-3.062-1.5-3.062-3.219 0-1.83 1.274-3.116 3.288-3.439V7h2v2.156c1.956.317 3.276 1.584 3.337 3.317h-2.219c-.109-.891-.938-1.484-2.078-1.484-1.18 0-1.961.547-1.961 1.406 0 .695.539 1.094 1.859 1.375l1.359.289c2.266.477 3.242 1.453 3.242 3.203.001 1.982-1.325 3.292-3.539 3.595z"
  }));
};

var _default = SvgMoneyCurrencyUsd;
exports["default"] = _default;