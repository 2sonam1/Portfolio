"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactParallax = require("react-parallax");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Contact() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "Contact"
  }, /*#__PURE__*/_react["default"].createElement(_reactParallax.Parallax, {
    className: "w-full h-screen ",
    style: {
      backgroundColor: '#6D6A75'
    },
    strength: 500
  }, /*#__PURE__*/_react["default"].createElement(_reactParallax.Background, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-screen flex flex-col justify-center"
  }))));
}
var _default = exports["default"] = Contact;