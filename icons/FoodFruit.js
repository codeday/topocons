"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodFruit = function SvgFoodFruit(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M21 11c0 3.074-1.772 6.542-5.316 10.404a5 5 0 0 1-7.368 0C4.772 17.542 3 14.074 3 11c0-6 5.08-6.966 9-7 3.832-.033 9 1 9 7zm-2 0c0-3.64-2.466-5.039-6.983-5C7.338 6.04 5 7.363 5 11c0 2.486 1.552 5.524 4.79 9.052a3 3 0 0 0 4.42 0C17.448 16.524 19 13.486 19 11zM5.977.656c1.004-.66 2.12-.73 3.348-.209C10.552.968 11.277 1.819 11.5 3c-1.004.66-2.12.73-3.348.209C6.925 2.688 6.2 1.837 5.977.656zm12.046 0c-.223 1.18-.948 2.032-2.175 2.553-1.228.52-2.344.451-3.348-.209.223-1.181.948-2.032 2.175-2.553 1.228-.52 2.344-.451 3.348.209zM12 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-2 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-6 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgFoodFruit;
exports["default"] = _default;