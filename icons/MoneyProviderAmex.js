"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyProviderAmex = function SvgMoneyProviderAmex(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M4 5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm.816 7.348h1.717l2.27 5.095v-5.095h2.037l1.588 3.548 1.593-3.548h2.075v5.293h-1.297v-3.864l-1.78 3.864h-1.18l-1.735-3.93v3.93H7.486l-.513-1.184H4.379l-.508 1.184H2.5l2.316-5.293zm12.98 0h5.122l1.44 1.654 1.488-1.643H27.5l-2.326 2.577 2.308 2.714h-1.648l-1.523-1.76-1.559 1.75h-4.955v-5.292zM5.644 13.465l-.776 1.85H6.45l-.806-1.85zm13.435.023v.99h2.865v1.006h-2.865v1.045h2.994l1.43-1.593-1.264-1.44-3.16-.008z"
  }));
};

var _default = SvgMoneyProviderAmex;
exports["default"] = _default;