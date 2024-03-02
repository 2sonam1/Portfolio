"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Navbar() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center fixed left-0 right-0 mx-auto pt-8 z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-full shadow-md flex justify-center items-center flex-wrap space-x-10   mt-5 py-2 px-3",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center flex-wrap space-x-8"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#Home",
    className: "hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/home-icon.png",
    className: "w-8 h-auto "
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#About",
    className: "hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/about-icon.png",
    className: "w-8 h-auto "
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#Projects",
    className: "hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/projects-icon.png",
    className: "w-6 h-auto"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#Contact",
    className: "hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/contact-icon.png",
    className: "w-6 h-auto "
  }))))));
}
var _default = exports["default"] = Navbar;