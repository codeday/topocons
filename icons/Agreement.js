"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAgreement = function SvgAgreement(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M20 8v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9.005a2 2 0 0 1 1.497.673l2.995 3.38c.239.27.503.67.503.947zm-4-1.877V8h1.664L16 6.123zM15.5 10A1.5 1.5 0 0 1 14 8.5V5H6v16h12V10h-2.5zM8 9h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 3h5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm.287 5.622a.75.75 0 1 1-.836-1.244c.697-.47 1.238-.733 1.692-.785.768-.09 1.29.43 1.29 1.197 0 .526.024.543.253.32.13-.127.592-.6.7-.703.29-.278.52-.446.803-.542.398-.134.797-.071 1.174.162.45.28.65.69.684 1.184.005.072.007.13.007.215.182-.018.48-.117.78-.362.363-.295.518-.586.518-.914a.75.75 0 1 1 1.5 0c0 .805-.375 1.511-1.07 2.078-.94.764-2.129.894-2.813.366-.378-.292-.422-.538-.416-1.099v-.123c-.035.03-.078.07-.13.118-.085.082-.54.548-.688.692-1.222 1.194-2.548.457-2.77-.966-.179.09-.408.225-.678.406z"
  }));
};

var _default = SvgAgreement;
exports["default"] = _default;