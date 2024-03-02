"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Navbar = _interopRequireDefault(require("./components/Navbar.jsx"));
var _Home = _interopRequireDefault(require("./components/Home.jsx"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Layout() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_Home["default"], null));
}
var _default = exports["default"] = Layout;