"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSurvey = function SvgSurvey(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M22.18 7.116c-.077.122-.17.237-.275.343L16 13.364V22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h8.05l6.198-6.197c.106-.107.221-.199.343-.276a3 3 0 0 1 3.829.346l1.414 1.415a3 3 0 0 1 .346 3.828zM11.184 18.164a.991.991 0 0 1-.563.377l-5.657 1.414a1 1 0 0 1-1.212-1.212l1.414-5.657a.991.991 0 0 1 .377-.563c.03-.04.062-.078.098-.114L8.051 10H2v12h12v-6.636l-2.702 2.702a1.008 1.008 0 0 1-.114.098zm-5.088-.553l2.761-.69-.746-1.309-1.325-.76-.69 2.759zm4.502-1.674l9.822-9.821-2.829-2.828-9.823 9.823 1.574.901a1 1 0 0 1 .372.373l.884 1.552zm.495-2.127a.875.875 0 0 1-1.233-1.242l7.57-7.512a.875.875 0 1 1 1.233 1.242l-7.57 7.512z"
  }));
};

var _default = SvgSurvey;
exports["default"] = _default;