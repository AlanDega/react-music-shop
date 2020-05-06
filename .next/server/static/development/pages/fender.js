module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/custom.css":
/*!************************!*\
  !*** ./css/custom.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/fender.js":
/*!*************************!*\
  !*** ./pages/fender.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/custom.css */ "./css/custom.css");
/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_custom_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Fender() {
  const images = [{
    title: "img1",
    url: "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C0%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C0%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C0%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true"
  }, {
    title: "img2",
    url: "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C25%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C25%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C38%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true"
  }, {
    title: "img3",
    url: "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C3%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C3%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C3%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true"
  }];
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(images[0].url);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    class: "navbar navbar-icon-top navbar-expand-lg navbar-dark "
  }, __jsx("a", {
    class: "navbar-brand",
    href: "#"
  }, __jsx("img", {
    height: "50",
    width: "50",
    src: "https://res.cloudinary.com/dalnnaod7/image/upload/v1587000246/lk_logo_hets9i.png"
  })), __jsx("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    class: "navbar-toggler-icon"
  })), __jsx("div", {
    class: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, __jsx("ul", {
    class: "navbar-nav mr-auto"
  }), __jsx("ul", {
    class: "navbar-nav "
  }, __jsx("li", {
    class: "nav-item"
  }, __jsx("a", {
    class: "nav-link",
    href: "#"
  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__["PersonSquare"], {
    color: "#12E165",
    size: 30
  })))))), __jsx("div", {
    className: "container title"
  }, __jsx("section", {
    className: "row justify-content-center "
  }, __jsx("h1", null, "Dise\xF1a t\xFA guitarra")), __jsx("section", {
    className: "row justify-content-center"
  }, __jsx("hr", {
    className: "style3"
  }))), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "card maker"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("section", {
    className: "row"
  }, __jsx("div", {
    className: "col-8"
  }, __jsx("h2", null, "Telecaster"), __jsx("img", {
    src: image
  })), __jsx("div", {
    className: "col-4"
  }, __jsx("section", {
    className: "row justify-content-center"
  }, __jsx("ul", {
    className: "colors"
  }, __jsx("li", {
    className: "color"
  }, __jsx("img", {
    onClick: () => setImage(images[0].url),
    src: "https://res.cloudinary.com/dalnnaod7/image/upload/v1587073138/black_pjkivm.png",
    height: "50",
    width: "50"
  })), __jsx("li", {
    className: "color"
  }, __jsx("img", {
    onClick: () => setImage(images[1].url),
    src: "https://res.cloudinary.com/dalnnaod7/image/upload/v1587073137/red_xkhdpo.png",
    height: "50",
    width: "50"
  })), __jsx("li", {
    className: "color"
  }, __jsx("img", {
    onClick: () => setImage(images[2].url),
    src: "https://res.cloudinary.com/dalnnaod7/image/upload/v1587073136/blue_znl3fn.png",
    height: "50",
    width: "50"
  }))))))))));
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/fender.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/imac/Desktop/shopify-react2/pages/fender.js */"./pages/fender.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap-icons":
/*!****************************************!*\
  !*** external "react-bootstrap-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-icons");

/***/ })

/******/ });
//# sourceMappingURL=fender.js.map