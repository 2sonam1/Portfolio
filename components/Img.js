"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Img() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/circle-design1.png",
    className: "animate-spin absolute z-40 w-44 h-auto -right-14 -bottom-20",
    style: {
      animationDuration: '5s'
    }
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "/right-design.png ",
    className: "absolute z-20 w-40 h-auto right-0 bottom-0"
  }));
}
var _default = exports["default"] = Img;