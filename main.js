"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
require("./index.css");
var _Navbar = _interopRequireDefault(require("./components/Navbar.jsx"));
var _Home = _interopRequireDefault(require("./components/Home.jsx"));
var _reactRouterDom = require("react-router-dom");
var _About = _interopRequireDefault(require("./components/About.jsx"));
var _Img = _interopRequireDefault(require("./components/Img.jsx"));
var _Projects = _interopRequireDefault(require("./components/Projects.jsx"));
var _Contact = _interopRequireDefault(require("./components/Contact.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/projects",
//         element: <Projects />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ]
//   }
// ]
// )
_client["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_Home["default"], null), /*#__PURE__*/_react["default"].createElement(_About["default"], null), /*#__PURE__*/_react["default"].createElement(_Img["default"], null), /*#__PURE__*/_react["default"].createElement(_Projects["default"], null), /*#__PURE__*/_react["default"].createElement(_Contact["default"], null)));