"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Projects;
var _reactParallax = require("react-parallax");
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("swiper/react");
require("swiper/css");
require("swiper/css/effect-coverflow");
require("swiper/css/pagination");
require("./Projects.css");
var _modules = require("swiper/modules");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Projects() {
  var _useState = (0, _react.useState)('1.png'),
    _useState2 = _slicedToArray(_useState, 2),
    src1Change = _useState2[0],
    SetSrc1Change = _useState2[1];
  var ChangeSrc1 = function ChangeSrc1() {
    SetSrc1Change('new1.png');
  };
  var BackChangeSrc1 = function BackChangeSrc1() {
    SetSrc1Change('1.png');
  };
  var _useState3 = (0, _react.useState)('2.png'),
    _useState4 = _slicedToArray(_useState3, 2),
    src2Change = _useState4[0],
    SetSrc2Change = _useState4[1];
  var ChangeSrc2 = function ChangeSrc2() {
    SetSrc2Change('new2.png');
  };
  var BackChangeSrc2 = function BackChangeSrc2() {
    SetSrc2Change('2.png');
  };
  var _useState5 = (0, _react.useState)('3.png'),
    _useState6 = _slicedToArray(_useState5, 2),
    src3Change = _useState6[0],
    SetSrc3Change = _useState6[1];
  var ChangeSrc3 = function ChangeSrc3() {
    SetSrc3Change('new3.png');
  };
  var BackChangeSrc3 = function BackChangeSrc3() {
    SetSrc3Change('3.png');
  };
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showNewDiv1 = _useState8[0],
    SetShowNewDiv1 = _useState8[1];
  var ShowDiv1 = function ShowDiv1() {
    SetShowNewDiv1(!showNewDiv1);
  };
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showNewDiv2 = _useState10[0],
    SetShowNewDiv2 = _useState10[1];
  var ShowDiv2 = function ShowDiv2() {
    SetShowNewDiv2(!showNewDiv2);
  };
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showNewDiv3 = _useState12[0],
    SetShowNewDiv3 = _useState12[1];
  var ShowDiv3 = function ShowDiv3() {
    SetShowNewDiv3(!showNewDiv3);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "Projects"
  }, /*#__PURE__*/_react["default"].createElement(_reactParallax.Parallax, {
    className: "w-full h-screen ",
    style: {
      backgroundColor: '#37323E'
    },
    strength: 500
  }, /*#__PURE__*/_react["default"].createElement(_reactParallax.Background, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-screen flex flex-col justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-screen w-full flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Swiper, {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    modules: [_modules.Autoplay, _modules.Pagination],
    className: "mt-20 h-80 w-full flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc1();
      ShowDiv1();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc1();
      ShowDiv1();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src1Change),
    className: "w-full"
  }), showNewDiv1 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc2();
      ShowDiv2();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc2();
      ShowDiv2();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src2Change),
    className: "w-full"
  }), showNewDiv2 && /*#__PURE__*/_react["default"].createElement("div", {
    className: " h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc3();
      ShowDiv3();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc3();
      ShowDiv3();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src3Change),
    className: "w-full"
  }), showNewDiv3 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    },
    onHo: true
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc1();
      ShowDiv1();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc1();
      ShowDiv1();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src1Change),
    className: "w-full"
  }), showNewDiv1 && /*#__PURE__*/_react["default"].createElement("div", {
    className: " h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc2();
      ShowDiv2();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc2();
      ShowDiv2();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src2Change),
    className: "w-full"
  }), showNewDiv2 && /*#__PURE__*/_react["default"].createElement("div", {
    className: " h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc3();
      ShowDiv3();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc3();
      ShowDiv3();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src3Change),
    className: "w-full"
  }), showNewDiv3 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    },
    onHo: true
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc1();
      ShowDiv1();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc1();
      ShowDiv1();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src1Change),
    className: "w-full"
  }), showNewDiv1 && /*#__PURE__*/_react["default"].createElement("div", {
    className: " h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc2();
      ShowDiv2();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc2();
      ShowDiv2();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src2Change),
    className: "w-full"
  }), showNewDiv2 && /*#__PURE__*/_react["default"].createElement("div", {
    className: " h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 ",
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    onMouseEnter: function onMouseEnter() {
      ChangeSrc3();
      ShowDiv3();
    },
    onMouseLeave: function onMouseLeave() {
      BackChangeSrc3();
      ShowDiv3();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(src3Change),
    className: "w-full"
  }), showNewDiv3 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm",
    style: {
      letterSpacing: '0.2em',
      color: '#BFBDC1'
    },
    onHo: true
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-full shadow-md p-1 pl-2 pr-2",
    style: {
      backgroundColor: '#37323E'
    }
  }, "Code"))))))))));
}