"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBackpack = function SvgBackpack(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M7 4.79V4a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v.794c.37.17.736.365 1.1.588a6 6 0 0 1 2.872 5.12v.411a3 3 0 0 1 2.395 2.543l.365 2.71A2.5 2.5 0 0 1 18.254 19h-.282a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3h-.254a2.5 2.5 0 0 1-2.478-2.834l.365-2.71A3 3 0 0 1 3 10.92v-.407A6 6 0 0 1 5.876 5.39c.373-.227.747-.426 1.124-.598zm-.082 2.307A4 4 0 0 0 5 10.512V19a1 1 0 0 0 1 1h8.972a1 1 0 0 0 1-1v-8.498a4 4 0 0 0-1.914-3.413C12.862 6.358 11.68 6 10.5 6c-1.185 0-2.374.36-3.582 1.097zM7.5 10h6a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 17.5v-6A1.5 1.5 0 0 1 7.5 10zm.5 3h5v-1H8v1zm0 2v2h5v-2H8zM9 4.144a7.923 7.923 0 0 1 3 0V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.144zM17.972 17h.282a.5.5 0 0 0 .496-.567l-.366-2.71a.999.999 0 0 0-.412-.682V17zM3 17v-3.938a.998.998 0 0 0-.384.662l-.366 2.71a.5.5 0 0 0 .496.566H3z",
    fill: "#000",
    fillRule: "nonzero"
  })));
};

var _default = SvgBackpack;
exports["default"] = _default;