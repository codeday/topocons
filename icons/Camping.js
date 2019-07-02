"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCamping = function SvgCamping(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M16.425 20.07l2.728.73a1.121 1.121 0 0 1-.58 2.167l-6.48-1.736-6.479 1.736a1.121 1.121 0 1 1-.58-2.166l2.728-.731-2.728-.731a1.121 1.121 0 1 1 .58-2.166l6.48 1.736 6.479-1.736a1.121 1.121 0 1 1 .58 2.166l-2.728.731zM10.998 5.152L11 4.825c0-2.23.658-3.362 2.153-3.393C15.394 1.387 19 7.3 19 10.825c0 4.634-2.718 7-7 7a7 7 0 0 1-7-7C5 8.051 6.108 5.292 8.055 4.12c.749-.451 1.313-.124 1.882.525.235.268.361.445.855 1.164.08.115.11.161.157.227.034-.237.045-.54.05-.883zM7 10.825c0 2.762 2.239 5.186 5 5.186 3.235 0 5-1.723 5-5.186 0-2.552-2.963-7.41-3.806-7.393-.12.197-.194.651-.194 1.393 0 .12 0 .237-.002.35-.027 2.342-.309 3.448-1.466 3.615-.893.129-1.32-.313-2.224-1.611l-.165-.239c-.266-.387-.413-.599-.523-.747-.983.94-1.62 2.77-1.62 4.632z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgCamping;
exports["default"] = _default;