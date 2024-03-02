"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactParallax = require("react-parallax");
var _react = _interopRequireWildcard(require("react"));
var _Leetcode = _interopRequireDefault(require("./Leetcode.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var About = function About() {
  var _useState = (0, _react.useState)('right-0'),
    _useState2 = _slicedToArray(_useState, 2),
    positionLeft = _useState2[0],
    setPositionLeft = _useState2[1];
  var PosLeft = function PosLeft() {
    setPositionLeft('right-0');
  };
  var _useState3 = (0, _react.useState)('top-52'),
    _useState4 = _slicedToArray(_useState3, 2),
    positionTop = _useState4[0],
    setPositionTop = _useState4[1];
  var PosTop = function PosTop() {
    setPositionTop('top-20');
  };
  var _useState5 = (0, _react.useState)('lg:text-8xl'),
    _useState6 = _slicedToArray(_useState5, 2),
    sizeText = _useState6[0],
    setSizeText = _useState6[1];
  var SzText = function SzText() {
    setSizeText('lg:text-3xl');
  };
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showNewDiv = _useState8[0],
    SetShowNewDiv = _useState8[1];
  var ShowDiv = function ShowDiv() {
    SetShowNewDiv(!showNewDiv);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "About"
  }, /*#__PURE__*/_react["default"].createElement(_reactParallax.Parallax, {
    className: "w-full h-screen flex justify-center",
    style: {
      background: '#6D6A75'
    },
    strength: 0
  }, /*#__PURE__*/_react["default"].createElement(_reactParallax.Background, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/8 relative h-screen flex flex-col justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex justify-start -left-40"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/artCircle.png",
    className: "animate-spin relative w-80 h-auto",
    style: {
      animationDuration: '5s'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: " w-5/8 flex "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " w-1/12  h-screen flex flex-col justify-center "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "z-50"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-11/12 h-screen flex flex-col justify-end"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "myPhoto.png",
    className: "relative  w-56 h-auto"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/4 h-screen"
  }, showNewDiv && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center absolute w-1/4 top-56 right-24 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1',
      textAlign: 'justify',
      textJustify: 'inter-word'
    }
  }, "I'm Sonam Rani, a final-year B.Tech student at IIT BHU. My interests span coding, web development, graphic design, and UI/UX. Proficient in C++, Python, React.js, Node.js, Express.js, Django, Figma, and Adobe Illustrator. Strong in Data Structures and Algorithms."), /*#__PURE__*/_react["default"].createElement(_Leetcode["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex flex-col ".concat(positionLeft, " ").concat(positionTop)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-center w-full font-sans font-black   ".concat(sizeText, " text-7xl mb-[-20px]   "),
    style: {
      color: '#6D6A75',
      WebkitTextStroke: '2px #DEB841'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      PosLeft();
      PosTop();
      SzText();
      ShowDiv();
    }
  }, "HELLO"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center w-full font-sans font-black   ".concat(sizeText, " text-7xl mb-[-20px]   "),
    style: {
      color: '#DEB841'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      PosLeft();
      PosTop();
      SzText();
      ShowDiv();
    }
  }, "WORLD!")))))))));
};
var _default = exports["default"] = About; // import React,{useRef} from 'react'
// export default function About() {
//     return (
//         <div>
//             <img src='https://cdn.dribbble.com/userupload/12792684/file/original-9026f4f0dca249552972582fbe5cd102.jpg?resize=1024x768' className='w-full'></img>
//         </div>
//     )
// }