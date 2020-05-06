webpackHotUpdate("static/development/pages/fender.js",{

/***/ "./pages/fender.js":
/*!*************************!*\
  !*** ./pages/fender.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-icons */ "./node_modules/react-bootstrap-icons/dist/index.js");
/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/custom.css */ "./css/custom.css");
/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_custom_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Fender() {
  var images = [{
    title: "img1",
    url: "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C25%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C25%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C38%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true"
  }, {
    title: "img2",
    url: "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C3%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C3%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C3%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true"
  }, {
    title: "img3",
    url: "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C0%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C0%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C0%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(images[0].url),
      image = _useState[0],
      setImage = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    "class": "navbar navbar-icon-top navbar-expand-lg navbar-dark "
  }, __jsx("a", {
    "class": "navbar-brand",
    href: "#"
  }, __jsx("img", {
    height: "50",
    width: "50",
    src: "https://res.cloudinary.com/dalnnaod7/image/upload/v1587000246/lk_logo_hets9i.png"
  })), __jsx("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    "class": "navbar-toggler-icon"
  })), __jsx("div", {
    "class": "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, __jsx("ul", {
    "class": "navbar-nav mr-auto"
  }), __jsx("ul", {
    "class": "navbar-nav "
  }, __jsx("li", {
    "class": "nav-item"
  }, __jsx("a", {
    "class": "nav-link",
    href: "#"
  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__["PersonSquare"], {
    color: "#12E165",
    size: 30
  })))))), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "card maker"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("section", {
    className: "row"
  }, __jsx("div", {
    className: "col-8"
  }, __jsx("h1", null, "Fender"), __jsx("img", {
    src: image
  })), __jsx("div", {
    className: "col-4"
  }))))));
}

/***/ })

})
//# sourceMappingURL=fender.js.8d4b49b995385d062978.hot-update.js.map