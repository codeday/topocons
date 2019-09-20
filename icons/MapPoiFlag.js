"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMapPoiFlag = function SvgMapPoiFlag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M5.775 22.288a1 1 0 0 1-1.97.348L.806 5.628a2 2 0 0 1 1.063-2.13c1.654-.842 3.108-1.378 4.372-1.6 1.47-.26 2.998-.152 4.572.316 1.284.382 2.498.468 3.654.264.925-.163 2.03-.55 3.308-1.164A2 2 0 0 1 20.61 2.77l2.07 11.734a2 2 0 0 1-1.063 2.13c-1.655.843-3.108 1.378-4.373 1.6-1.47.26-2.998.152-4.571-.316-1.284-.382-2.499-.467-3.654-.264-1.047.185-2.322.655-3.813 1.414l.568 3.22zm9.533-17.941l.687 3.895c-.167.04-.33.073-.49.101-1.313.232-2.684.135-4.113-.29l-.668-3.79c-.16-.04-.32-.084-.481-.132-1.284-.382-2.499-.468-3.654-.264a7.861 7.861 0 0 0-.486.102l.687 3.895c-.976.23-2.088.654-3.334 1.271l.694 3.94c1.247-.618 2.358-1.041 3.334-1.271l.702 3.98c.165-.038.327-.071.486-.1 1.323-.232 2.692-.169 4.099.187l-.684-3.879c1.429.425 2.8.522 4.113.29.159-.027.322-.061.49-.1l.701 3.98c.946-.23 2.055-.666 3.32-1.31l-.695-3.938c-1.244.615-2.352 1.038-3.326 1.267l-.695-3.939c.974-.23 2.083-.652 3.327-1.267l-.68-3.858c-1.225.589-2.335 1-3.334 1.23zM6.79 7.864c.167-.04.33-.073.49-.101 1.312-.232 2.683-.135 4.112.29l.695 3.94c-1.429-.426-2.8-.522-4.113-.29-.16.027-.323.061-.49.1L6.79 7.865z",
    fill: "#000"
  })));
};

var _default = SvgMapPoiFlag;
exports["default"] = _default;