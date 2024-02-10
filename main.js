/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/background-image.jpeg */ "./src/images/background-image.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/background-nature-image.jpeg */ "./src/images/background-nature-image.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: "Poppins", sans-serif;
}
main {
  justify-self: center;
  align-self: center;
  height: 90%;
  width: 90%;
}
/* weather-card-container styles */
#weather-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 15px 40px black;
  border-radius: 5px;
}
/* weather-card-header */
#search-error {
  align-self: center;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  width: 210px;
  color: white;
  background-color: rgb(183, 51, 51);
  border-radius: 0 0 8px 8px;
}
#handle-error-container {
  align-self: center;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  width: 210px;
  color: white;
  background-color: rgb(183, 51, 51);
  border-radius: 0 0 8px 8px;
}
#weather-card-header {
  padding-top: 12px;
}
#search-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
#search-form > input {
  outline: none;
  background-color: inherit;
  padding-left: 10px;
  font-weight: bold;
  border: none;
  border-bottom: 2px solid #000;
  padding-bottom: 3px;
}
#search-form > input::placeholder {
  font-size: 12px;
  color: black;
  font-weight: bold;
}
#search-form > button {
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 20px;
}
/* weather-card-main styles */
#weather-card-main {
  display: flex;
  justify-content: space-around;
  gap: 40%;
  padding: 30px;
}
#weather-info-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
#weather-info-date-container {
  display: flex;
  flex-direction: column;
}
#weather-info-time {
  font-size: 45px;
  font-weight: bold;
}
#weather-info-date {
  font-weight: bold;
}
#weather-place-and-condition-container {
  display: flex;
  flex-direction: column;
}
#weather-condition-container {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
#weather-condition {
  font-weight: bold;
  font-size: 30px;
}
#weather-place-city-and-country {
  font-weight: bold;
}
#weather-condition-icon {
  width: 80px;
  height: 80px;
}
#weather-details-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}
#weather-temperature-container,
#weather-humidity-container,
#weather-wind-container {
  display: flex;
  font-weight: bold;
  gap: 10px;
}
.fa-temperature-high,
.fa-droplet,
.fa-wind {
  font-size: 30px;
  width: 40px;
  height: 40px;
}
/* weather-card-footer styles */
#weather-forecast-container {
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: rgba(168, 244, 240, 0.5);
  background-color: rgba(0, 0, 0, 0.6);
  height: 210px;
}
.forecast-day {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.forecast-date {
  text-align: center;
  width: 60%;
  font-size: 15px;
  border: solid 3px black;
  border-radius: 10px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7);
}
.forecast-description {
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
}
.forecast-temp-max {
  font-size: 20px;
  padding-bottom: 5px;
}
.forecast-temp-min {
  font-size: 15px;
}
/* footer styles : */
.footer {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-top: 1px solid rgb(0, 255, 225);
}
.fa-github {
  color: white;
  font-size: 20px;
  transition: transform 0.5s ease-in-out;
}
.fa-github:hover {
  transform: rotate(360deg) scale(1.3);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;EAC5B,yDAA0D;EAC1D,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,kCAAkC;AACpC;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;AACA,kCAAkC;AAClC;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,yDAAiE;EACjE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA,wBAAwB;AACxB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA,6BAA6B;AAC7B;EACE,aAAa;EACb,6BAA6B;EAC7B,QAAQ;EACR,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;AACA;;;EAGE,aAAa;EACb,iBAAiB;EACjB,SAAS;AACX;AACA;;;EAGE,eAAe;EACf,WAAW;EACX,YAAY;AACd;AACA,+BAA+B;AAC/B;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,0CAA0C;EAC1C,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;AACtC;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,YAAY;EACZ,sCAAsC;AACxC;AACA;EACE,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;AACA;EACE,oCAAoC;AACtC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 1fr auto;\n  background-image: url(../src/images/background-image.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  font-family: \"Poppins\", sans-serif;\n}\nmain {\n  justify-self: center;\n  align-self: center;\n  height: 90%;\n  width: 90%;\n}\n/* weather-card-container styles */\n#weather-card-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-image: url(../src/images/background-nature-image.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  box-shadow: 0px 15px 40px black;\n  border-radius: 5px;\n}\n/* weather-card-header */\n#search-error {\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  width: 210px;\n  color: white;\n  background-color: rgb(183, 51, 51);\n  border-radius: 0 0 8px 8px;\n}\n#handle-error-container {\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  width: 210px;\n  color: white;\n  background-color: rgb(183, 51, 51);\n  border-radius: 0 0 8px 8px;\n}\n#weather-card-header {\n  padding-top: 12px;\n}\n#search-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#search-form > input {\n  outline: none;\n  background-color: inherit;\n  padding-left: 10px;\n  font-weight: bold;\n  border: none;\n  border-bottom: 2px solid #000;\n  padding-bottom: 3px;\n}\n#search-form > input::placeholder {\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n}\n#search-form > button {\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n}\n/* weather-card-main styles */\n#weather-card-main {\n  display: flex;\n  justify-content: space-around;\n  gap: 40%;\n  padding: 30px;\n}\n#weather-info-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n#weather-info-date-container {\n  display: flex;\n  flex-direction: column;\n}\n#weather-info-time {\n  font-size: 45px;\n  font-weight: bold;\n}\n#weather-info-date {\n  font-weight: bold;\n}\n#weather-place-and-condition-container {\n  display: flex;\n  flex-direction: column;\n}\n#weather-condition-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n#weather-condition {\n  font-weight: bold;\n  font-size: 30px;\n}\n#weather-place-city-and-country {\n  font-weight: bold;\n}\n#weather-condition-icon {\n  width: 80px;\n  height: 80px;\n}\n#weather-details-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n}\n#weather-temperature-container,\n#weather-humidity-container,\n#weather-wind-container {\n  display: flex;\n  font-weight: bold;\n  gap: 10px;\n}\n.fa-temperature-high,\n.fa-droplet,\n.fa-wind {\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n}\n/* weather-card-footer styles */\n#weather-forecast-container {\n  display: flex;\n  justify-content: space-around;\n  color: white;\n  background-color: rgba(168, 244, 240, 0.5);\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 210px;\n}\n.forecast-day {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.forecast-date {\n  text-align: center;\n  width: 60%;\n  font-size: 15px;\n  border: solid 3px black;\n  border-radius: 10px;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.forecast-description {\n  padding-bottom: 10px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.forecast-temp-max {\n  font-size: 20px;\n  padding-bottom: 5px;\n}\n.forecast-temp-min {\n  font-size: 15px;\n}\n/* footer styles : */\n.footer {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  font-weight: bold;\n  font-size: 13px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  border-top: 1px solid rgb(0, 255, 225);\n}\n.fa-github {\n  color: white;\n  font-size: 20px;\n  transition: transform 0.5s ease-in-out;\n}\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.3);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideSearchError: () => (/* binding */ hideSearchError),
/* harmony export */   setForecastDay: () => (/* binding */ setForecastDay),
/* harmony export */   setForecastDescription: () => (/* binding */ setForecastDescription),
/* harmony export */   setForecastIcon: () => (/* binding */ setForecastIcon),
/* harmony export */   setForecastTempMaxAndMin: () => (/* binding */ setForecastTempMaxAndMin),
/* harmony export */   setWeatherDetails: () => (/* binding */ setWeatherDetails),
/* harmony export */   setWeatherPlaceAndCondition: () => (/* binding */ setWeatherPlaceAndCondition),
/* harmony export */   setWeatherTime: () => (/* binding */ setWeatherTime),
/* harmony export */   showSearchError: () => (/* binding */ showSearchError)
/* harmony export */ });
// set weather time :
const setWeatherTime = (localTime) => {
  const weatherTime = document.getElementById("weather-info-time");
  const weatherDate = document.getElementById("weather-info-date");
  const date = new Date(localTime);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "short" });
  const time = date.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });
  weatherTime.textContent = time;
  weatherDate.textContent = `${dayOfWeek}, ${day} ${month}.`;
};
// set weather place and condition :
const setWeatherPlaceAndCondition = (condition, icon, country, city) => {
  const weatherCondition = document.getElementById("weather-condition");
  const weatherConditionIcon = document.getElementById(
    "weather-condition-icon"
  );
  const weatherPlaceCityAndCountry = document.getElementById(
    "weather-place-city-and-country"
  );
  weatherCondition.textContent = condition;
  weatherConditionIcon.style.display = "flex";
  weatherConditionIcon.src = `https:${icon}`;
  weatherPlaceCityAndCountry.textContent = `${country}, ${city}.`;
};
// set weather details :
const setWeatherDetails = (temperature, humidity, windSpeed) => {
  const weatherTemperature = document.getElementById("weather-temperature");
  const weatherHumidity = document.getElementById("weather-humidity");
  const weatherWind = document.getElementById("weather-wind");
  weatherTemperature.textContent = `${temperature} °C`;
  weatherHumidity.textContent = `${humidity} %`;
  weatherWind.textContent = `${windSpeed} km/h`;
};
// show search error :
const showSearchError = () => {
  const searchError = document.getElementById("search-error");
  searchError.style.display = "inline";
  searchError.style.textAlign = "center";
};
// hide search error :
const hideSearchError = () => {
  const searchError = document.getElementById("search-error");
  searchError.style.display = "none";
};
// set forecast description :
const setForecastDescription = (desiredForecastData) => {
  const allForecastDescriptions = document.querySelectorAll(
    ".forecast-description"
  );
  [...allForecastDescriptions].map((ele, index) => {
    ele.textContent = desiredForecastData[index].description;
  });
  return desiredForecastData;
};
// set forecast day :
const setForecastDay = (desiredForecastData) => {
  const allForecastDates = document.querySelectorAll(".forecast-date");
  [...allForecastDates].map((ele, index) => {
    const date = new Date(desiredForecastData[index].date);
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "short" });
    ele.textContent = dayOfWeek;
  });
  return desiredForecastData;
};
// set forecast image icon :
const setForecastIcon = (desiredForecastData) => {
  const allForecastIcons = document.querySelectorAll(".forecast-weatherIcon");
  [...allForecastIcons].map((ele, index) => {
    const iconSrc = `https://openweathermap.org/img/wn/${desiredForecastData[index].weatherIcon}@2x.png`;
    ele.src = iconSrc;
  });
  return desiredForecastData;
};
// set forecast max and min temperature :
const setForecastTempMaxAndMin = (desiredForecastData) => {
  const allForecastMaxTemp = document.querySelectorAll(".forecast-temp-max");
  const allForecastMinTemp = document.querySelectorAll(".forecast-temp-min");
  [...allForecastMaxTemp].map((ele, index) => {
    const kelvinToCelsiusMaxTemp = desiredForecastData[index].temp_max - 273.15;
    ele.textContent = ` ${parseInt(kelvinToCelsiusMaxTemp)} °C`;
  });
  [...allForecastMinTemp].map((ele, index) => {
    const kelvinToCelsiusMinTemp = desiredForecastData[index].temp_min - 273.15;
    ele.textContent = ` ${parseInt(kelvinToCelsiusMinTemp)} °C`;
  });
};



/***/ }),

/***/ "./src/images/background-image.jpeg":
/*!******************************************!*\
  !*** ./src/images/background-image.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72b97d0a85b0f3d11d5c.jpeg";

/***/ }),

/***/ "./src/images/background-nature-image.jpeg":
/*!*************************************************!*\
  !*** ./src/images/background-nature-image.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3dba66a10e79913d7e8.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


// dom :
const input = document.getElementById("input");
const submit = document.getElementById("submit");
let cityName = input.value;
// set default weather place :
const setDefaultPlace = () => {
  const defaultPlace = "Morocco";
  cityName = defaultPlace;
  getWeatherDataPromiseChain();
  getWeatherForecastPromiseChain();
};
// window event to set default place :
window.addEventListener("load", setDefaultPlace);
// reset city name (input value):
const setNewPlace = () => {
  cityName = "";
  cityName = input.value;
};
// submit event :
submit.onclick = () => {
  setNewPlace();
  getWeatherDataPromiseChain();
  getWeatherForecastPromiseChain();
};
// weather data api :
// handle get weather data promise chain :
const getWeatherDataPromiseChain = () => {
  getWeatherData()
    .then(getDesiredWeatherData)
    .then((desiredData) => {
      // set weather time :
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.setWeatherTime)(desiredData.localtime);
      // set weather place and condition
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.setWeatherPlaceAndCondition)(
        desiredData.condition,
        desiredData.weatherIcon,
        desiredData.country,
        desiredData.cityName
      );
      // set weather details :
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.setWeatherDetails)(
        desiredData.temp_c,
        desiredData.humidity,
        desiredData.wind_kph
      );
    });
};
// fetch weather api :
const getWeatherData = async () => {
  try {
    const weatherDataResponse = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5d38eab46801406988d170949242901&q=${cityName}`
    );
    // handle weather data error :
    if (!weatherDataResponse.ok) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.showSearchError)();
    } else (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideSearchError)();
    const weatherJsonData = await weatherDataResponse.json();
    return weatherJsonData;
  } catch (err) {
    console.error("Error Fetching Weather Data:", err);
  }
};
// get desired weather forecast data :
const getDesiredWeatherData = (weatherJsonData) => {
  // destructuring desired data from jsonData :
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition, icon: weatherIcon },
      temp_c,
      humidity,
      wind_kph,
    },
  } = weatherJsonData;
  // create desiredData object using destructured data :
  const desiredWeatherdData = {
    localtime,
    country,
    cityName,
    condition,
    temp_c,
    humidity,
    wind_kph,
    weatherIcon,
  };
  return desiredWeatherdData;
};
// handle get weather forecast promise chain :
const getWeatherForecastPromiseChain = () => {
  getWeatherForecast()
    .then(getForecastDays)
    .then(getDesiredForecastData)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastDescription)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastDay)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastIcon)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastTempMaxAndMin);
};
// fetch forcast api :
const getWeatherForecast = async () => {
  try {
    const forecastDataResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`
    );
    // handle weather forecast error :
    if (!forecastDataResponse.ok) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.showSearchError)();
    } else (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideSearchError)();
    // get weather forecast json data :
    const forecastJsonData = await forecastDataResponse.json();
    return forecastJsonData;
  } catch (err) {
    console.error("Error Fetching Forcast Data:", err);
  }
};
// get 5 forecast days :
const getForecastDays = (forecastJsonData) => {
  const weatherForecastDaysArray = [];
  // get 5 forecast days from list at mid day 12:00:00 :
  const pattern = /\d{4}-\d{2}-\d{2}\s12:00:00/gi;
  const { list: listArray } = forecastJsonData;
  for (const list of listArray) {
    const targetDate = list.dt_txt;
    if (pattern.test(targetDate)) {
      weatherForecastDaysArray.push(list);
    }
  }
  return weatherForecastDaysArray;
};
// get desired forecast data :
const getDesiredForecastData = (forecastDays) => {
  const desiredForecastArray = [];
  for (const day of forecastDays) {
    const {
      dt_txt: date,
      main: { temp_max, temp_min },
      weather: [{ description, icon: weatherIcon }],
    } = day;
    desiredForecastArray.push({
      description,
      date,
      weatherIcon,
      temp_max,
      temp_min,
    });
  }
  return desiredForecastArray;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDhJQUFzRDtBQUNsRyw0Q0FBNEMsNEpBQTZEO0FBQ3pHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE9BQU8sVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLFVBQVUsVUFBVSxVQUFVLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSw2QkFBNkIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFFBQVEsa0JBQWtCLGtCQUFrQixvQ0FBb0MsaUNBQWlDLCtEQUErRCwyQkFBMkIsaUNBQWlDLGdDQUFnQyx5Q0FBeUMsR0FBRyxRQUFRLHlCQUF5Qix1QkFBdUIsZ0JBQWdCLGVBQWUsR0FBRyxnRUFBZ0Usa0JBQWtCLDJCQUEyQiw0QkFBNEIsc0VBQXNFLDJCQUEyQixpQ0FBaUMsZ0NBQWdDLG9DQUFvQyx1QkFBdUIsR0FBRyw0Q0FBNEMsdUJBQXVCLHVCQUF1QixzQkFBc0Isb0JBQW9CLGlCQUFpQixpQkFBaUIsdUNBQXVDLCtCQUErQixHQUFHLDJCQUEyQix1QkFBdUIsdUJBQXVCLHNCQUFzQixvQkFBb0IsaUJBQWlCLGlCQUFpQix1Q0FBdUMsK0JBQStCLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0IsOEJBQThCLHVCQUF1QixzQkFBc0IsaUJBQWlCLGtDQUFrQyx3QkFBd0IsR0FBRyxxQ0FBcUMsb0JBQW9CLGlCQUFpQixzQkFBc0IsR0FBRyx5QkFBeUIsOEJBQThCLGlCQUFpQixvQkFBb0Isb0JBQW9CLEdBQUcsc0RBQXNELGtCQUFrQixrQ0FBa0MsYUFBYSxrQkFBa0IsR0FBRywyQkFBMkIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsR0FBRyxzQkFBc0Isb0JBQW9CLHNCQUFzQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRywwQ0FBMEMsa0JBQWtCLDJCQUEyQixHQUFHLGdDQUFnQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixtQ0FBbUMsR0FBRyxzQkFBc0Isc0JBQXNCLG9CQUFvQixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRywyQkFBMkIsZ0JBQWdCLGlCQUFpQixHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLDRCQUE0QixjQUFjLEdBQUcsMEZBQTBGLGtCQUFrQixzQkFBc0IsY0FBYyxHQUFHLGlEQUFpRCxvQkFBb0IsZ0JBQWdCLGlCQUFpQixHQUFHLGlFQUFpRSxrQkFBa0Isa0NBQWtDLGlCQUFpQiwrQ0FBK0MseUNBQXlDLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQkFBa0IsdUJBQXVCLGVBQWUsb0JBQW9CLDRCQUE0Qix3QkFBd0Isc0JBQXNCLHlDQUF5QyxHQUFHLHlCQUF5Qix5QkFBeUIsc0JBQXNCLG9CQUFvQixHQUFHLHNCQUFzQixvQkFBb0Isd0JBQXdCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLGtDQUFrQyx1QkFBdUIsb0JBQW9CLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0JBQXNCLG9CQUFvQix5Q0FBeUMsaUJBQWlCLDJDQUEyQyxHQUFHLGNBQWMsaUJBQWlCLG9CQUFvQiwyQ0FBMkMsR0FBRyxvQkFBb0IseUNBQXlDLEdBQUcscUJBQXFCO0FBQ3h0TTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzFOMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsaUJBQWlCO0FBQ3BFO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwrQkFBK0IsVUFBVSxJQUFJLEtBQUssRUFBRSxNQUFNO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxLQUFLO0FBQzNDLDhDQUE4QyxRQUFRLElBQUksS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsYUFBYTtBQUNuRCxtQ0FBbUMsVUFBVTtBQUM3QywrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxrQkFBa0I7QUFDdkU7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELHVDQUF1QztBQUNoRztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtDQUFrQztBQUM1RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLDBCQUEwQixrQ0FBa0M7QUFDNUQsR0FBRztBQUNIO0FBV0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JHRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBV0g7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFjO0FBQ3BCO0FBQ0EsTUFBTSxvRUFBMkI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixTQUFTO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWU7QUFDckIsTUFBTSxLQUFLLHdEQUFlO0FBQzFCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0NBQW9DO0FBQ3BEO0FBQ0EsbUJBQW1CLG9DQUFvQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkRBQXNCO0FBQ2hDLFVBQVUsbURBQWM7QUFDeEIsVUFBVSxvREFBZTtBQUN6QixVQUFVLDZEQUF3QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBZTtBQUNyQixNQUFNLEtBQUssd0RBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNwQyxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEMsa0JBQWtCLGdDQUFnQztBQUNsRCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtbmF0dXJlLWltYWdlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5tYWluIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG59XG4vKiB3ZWF0aGVyLWNhcmQtY29udGFpbmVyIHN0eWxlcyAqL1xuI3dlYXRoZXItY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDQwcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi8qIHdlYXRoZXItY2FyZC1oZWFkZXIgKi9cbiNzZWFyY2gtZXJyb3Ige1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDIxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDUxLCA1MSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuI2hhbmRsZS1lcnJvci1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDIxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDUxLCA1MSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuI3dlYXRoZXItY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbiNzZWFyY2gtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3NlYXJjaC1mb3JtID4gaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuI3NlYXJjaC1mb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3NlYXJjaC1mb3JtID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi8qIHdlYXRoZXItY2FyZC1tYWluIHN0eWxlcyAqL1xuI3dlYXRoZXItY2FyZC1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGdhcDogNDAlO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG4jd2VhdGhlci1pbmZvLWRhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiN3ZWF0aGVyLWluZm8tdGltZSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jd2VhdGhlci1pbmZvLWRhdGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN3ZWF0aGVyLXBsYWNlLWFuZC1jb25kaXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiN3ZWF0aGVyLWNvbmRpdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3dlYXRoZXItY29uZGl0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbiN3ZWF0aGVyLXBsYWNlLWNpdHktYW5kLWNvdW50cnkge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN3ZWF0aGVyLWNvbmRpdGlvbi1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbiN3ZWF0aGVyLWRldGFpbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cbiN3ZWF0aGVyLXRlbXBlcmF0dXJlLWNvbnRhaW5lcixcbiN3ZWF0aGVyLWh1bWlkaXR5LWNvbnRhaW5lcixcbiN3ZWF0aGVyLXdpbmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGdhcDogMTBweDtcbn1cbi5mYS10ZW1wZXJhdHVyZS1oaWdoLFxuLmZhLWRyb3BsZXQsXG4uZmEtd2luZCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi8qIHdlYXRoZXItY2FyZC1mb290ZXIgc3R5bGVzICovXG4jd2VhdGhlci1mb3JlY2FzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OCwgMjQ0LCAyNDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgaGVpZ2h0OiAyMTBweDtcbn1cbi5mb3JlY2FzdC1kYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JlY2FzdC1kYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmZvcmVjYXN0LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZm9yZWNhc3QtdGVtcC1tYXgge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uZm9yZWNhc3QtdGVtcC1taW4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4vKiBmb290ZXIgc3R5bGVzIDogKi9cbi5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGdyaWQtcm93OiAzIC8gNDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDIyNSk7XG59XG4uZmEtZ2l0aHViIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLmZhLWdpdGh1Yjpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4zKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIseURBQTBEO0VBQzFELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0Esa0NBQWtDO0FBQ2xDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseURBQWlFO0VBQ2pFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0EsNkJBQTZCO0FBQzdCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBOzs7RUFHRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBOzs7RUFHRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0Esb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5qcGVnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLyogd2VhdGhlci1jYXJkLWNvbnRhaW5lciBzdHlsZXMgKi9cXG4jd2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC1uYXR1cmUtaW1hZ2UuanBlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDQwcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi8qIHdlYXRoZXItY2FyZC1oZWFkZXIgKi9cXG4jc2VhcmNoLWVycm9yIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgNTEsIDUxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcbn1cXG4jaGFuZGxlLWVycm9yLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDUxLCA1MSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXG59XFxuI3dlYXRoZXItY2FyZC1oZWFkZXIge1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxufVxcbiNzZWFyY2gtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jc2VhcmNoLWZvcm0gPiBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG4jc2VhcmNoLWZvcm0gPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNzZWFyY2gtZm9ybSA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4vKiB3ZWF0aGVyLWNhcmQtbWFpbiBzdHlsZXMgKi9cXG4jd2VhdGhlci1jYXJkLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiA0MCU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG59XFxuI3dlYXRoZXItaW5mby1kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3dlYXRoZXItaW5mby10aW1lIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jd2VhdGhlci1pbmZvLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN3ZWF0aGVyLXBsYWNlLWFuZC1jb25kaXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jd2VhdGhlci1jb25kaXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiN3ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuI3dlYXRoZXItcGxhY2UtY2l0eS1hbmQtY291bnRyeSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3dlYXRoZXItY29uZGl0aW9uLWljb24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbiN3ZWF0aGVyLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcbiN3ZWF0aGVyLXRlbXBlcmF0dXJlLWNvbnRhaW5lcixcXG4jd2VhdGhlci1odW1pZGl0eS1jb250YWluZXIsXFxuI3dlYXRoZXItd2luZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZmEtdGVtcGVyYXR1cmUtaGlnaCxcXG4uZmEtZHJvcGxldCxcXG4uZmEtd2luZCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLyogd2VhdGhlci1jYXJkLWZvb3RlciBzdHlsZXMgKi9cXG4jd2VhdGhlci1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjgsIDI0NCwgMjQwLCAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgaGVpZ2h0OiAyMTBweDtcXG59XFxuLmZvcmVjYXN0LWRheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcmVjYXN0LWRhdGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG4uZm9yZWNhc3QtZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmZvcmVjYXN0LXRlbXAtbWF4IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5mb3JlY2FzdC10ZW1wLW1pbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi8qIGZvb3RlciBzdHlsZXMgOiAqL1xcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDIyNSk7XFxufVxcbi5mYS1naXRodWIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNldCB3ZWF0aGVyIHRpbWUgOlxuY29uc3Qgc2V0V2VhdGhlclRpbWUgPSAobG9jYWxUaW1lKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWluZm8tdGltZVwiKTtcbiAgY29uc3Qgd2VhdGhlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaW5mby1kYXRlXCIpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobG9jYWxUaW1lKTtcbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSk7XG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwge1xuICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gIH0pO1xuICB3ZWF0aGVyVGltZS50ZXh0Q29udGVudCA9IHRpbWU7XG4gIHdlYXRoZXJEYXRlLnRleHRDb250ZW50ID0gYCR7ZGF5T2ZXZWVrfSwgJHtkYXl9ICR7bW9udGh9LmA7XG59O1xuLy8gc2V0IHdlYXRoZXIgcGxhY2UgYW5kIGNvbmRpdGlvbiA6XG5jb25zdCBzZXRXZWF0aGVyUGxhY2VBbmRDb25kaXRpb24gPSAoY29uZGl0aW9uLCBpY29uLCBjb3VudHJ5LCBjaXR5KSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItY29uZGl0aW9uXCIpO1xuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwid2VhdGhlci1jb25kaXRpb24taWNvblwiXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJQbGFjZUNpdHlBbmRDb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJ3ZWF0aGVyLXBsYWNlLWNpdHktYW5kLWNvdW50cnlcIlxuICApO1xuICB3ZWF0aGVyQ29uZGl0aW9uLnRleHRDb250ZW50ID0gY29uZGl0aW9uO1xuICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIHdlYXRoZXJDb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke2ljb259YDtcbiAgd2VhdGhlclBsYWNlQ2l0eUFuZENvdW50cnkudGV4dENvbnRlbnQgPSBgJHtjb3VudHJ5fSwgJHtjaXR5fS5gO1xufTtcbi8vIHNldCB3ZWF0aGVyIGRldGFpbHMgOlxuY29uc3Qgc2V0V2VhdGhlckRldGFpbHMgPSAodGVtcGVyYXR1cmUsIGh1bWlkaXR5LCB3aW5kU3BlZWQpID0+IHtcbiAgY29uc3Qgd2VhdGhlclRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLXRlbXBlcmF0dXJlXCIpO1xuICBjb25zdCB3ZWF0aGVySHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaHVtaWRpdHlcIik7XG4gIGNvbnN0IHdlYXRoZXJXaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLXdpbmRcIik7XG4gIHdlYXRoZXJUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlfSDCsENgO1xuICB3ZWF0aGVySHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0gJWA7XG4gIHdlYXRoZXJXaW5kLnRleHRDb250ZW50ID0gYCR7d2luZFNwZWVkfSBrbS9oYDtcbn07XG4vLyBzaG93IHNlYXJjaCBlcnJvciA6XG5jb25zdCBzaG93U2VhcmNoRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZXJyb3JcIik7XG4gIHNlYXJjaEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBzZWFyY2hFcnJvci5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xufTtcbi8vIGhpZGUgc2VhcmNoIGVycm9yIDpcbmNvbnN0IGhpZGVTZWFyY2hFcnJvciA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1lcnJvclwiKTtcbiAgc2VhcmNoRXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcbi8vIHNldCBmb3JlY2FzdCBkZXNjcmlwdGlvbiA6XG5jb25zdCBzZXRGb3JlY2FzdERlc2NyaXB0aW9uID0gKGRlc2lyZWRGb3JlY2FzdERhdGEpID0+IHtcbiAgY29uc3QgYWxsRm9yZWNhc3REZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmZvcmVjYXN0LWRlc2NyaXB0aW9uXCJcbiAgKTtcbiAgWy4uLmFsbEZvcmVjYXN0RGVzY3JpcHRpb25zXS5tYXAoKGVsZSwgaW5kZXgpID0+IHtcbiAgICBlbGUudGV4dENvbnRlbnQgPSBkZXNpcmVkRm9yZWNhc3REYXRhW2luZGV4XS5kZXNjcmlwdGlvbjtcbiAgfSk7XG4gIHJldHVybiBkZXNpcmVkRm9yZWNhc3REYXRhO1xufTtcbi8vIHNldCBmb3JlY2FzdCBkYXkgOlxuY29uc3Qgc2V0Rm9yZWNhc3REYXkgPSAoZGVzaXJlZEZvcmVjYXN0RGF0YSkgPT4ge1xuICBjb25zdCBhbGxGb3JlY2FzdERhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdC1kYXRlXCIpO1xuICBbLi4uYWxsRm9yZWNhc3REYXRlc10ubWFwKChlbGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRlc2lyZWRGb3JlY2FzdERhdGFbaW5kZXhdLmRhdGUpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6IFwic2hvcnRcIiB9KTtcbiAgICBlbGUudGV4dENvbnRlbnQgPSBkYXlPZldlZWs7XG4gIH0pO1xuICByZXR1cm4gZGVzaXJlZEZvcmVjYXN0RGF0YTtcbn07XG4vLyBzZXQgZm9yZWNhc3QgaW1hZ2UgaWNvbiA6XG5jb25zdCBzZXRGb3JlY2FzdEljb24gPSAoZGVzaXJlZEZvcmVjYXN0RGF0YSkgPT4ge1xuICBjb25zdCBhbGxGb3JlY2FzdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdC13ZWF0aGVySWNvblwiKTtcbiAgWy4uLmFsbEZvcmVjYXN0SWNvbnNdLm1hcCgoZWxlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGljb25TcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGVzaXJlZEZvcmVjYXN0RGF0YVtpbmRleF0ud2VhdGhlckljb259QDJ4LnBuZ2A7XG4gICAgZWxlLnNyYyA9IGljb25TcmM7XG4gIH0pO1xuICByZXR1cm4gZGVzaXJlZEZvcmVjYXN0RGF0YTtcbn07XG4vLyBzZXQgZm9yZWNhc3QgbWF4IGFuZCBtaW4gdGVtcGVyYXR1cmUgOlxuY29uc3Qgc2V0Rm9yZWNhc3RUZW1wTWF4QW5kTWluID0gKGRlc2lyZWRGb3JlY2FzdERhdGEpID0+IHtcbiAgY29uc3QgYWxsRm9yZWNhc3RNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdC10ZW1wLW1heFwiKTtcbiAgY29uc3QgYWxsRm9yZWNhc3RNaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdC10ZW1wLW1pblwiKTtcbiAgWy4uLmFsbEZvcmVjYXN0TWF4VGVtcF0ubWFwKChlbGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qga2VsdmluVG9DZWxzaXVzTWF4VGVtcCA9IGRlc2lyZWRGb3JlY2FzdERhdGFbaW5kZXhdLnRlbXBfbWF4IC0gMjczLjE1O1xuICAgIGVsZS50ZXh0Q29udGVudCA9IGAgJHtwYXJzZUludChrZWx2aW5Ub0NlbHNpdXNNYXhUZW1wKX0gwrBDYDtcbiAgfSk7XG4gIFsuLi5hbGxGb3JlY2FzdE1pblRlbXBdLm1hcCgoZWxlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGtlbHZpblRvQ2Vsc2l1c01pblRlbXAgPSBkZXNpcmVkRm9yZWNhc3REYXRhW2luZGV4XS50ZW1wX21pbiAtIDI3My4xNTtcbiAgICBlbGUudGV4dENvbnRlbnQgPSBgICR7cGFyc2VJbnQoa2VsdmluVG9DZWxzaXVzTWluVGVtcCl9IMKwQ2A7XG4gIH0pO1xufTtcbmV4cG9ydCB7XG4gIHNldFdlYXRoZXJQbGFjZUFuZENvbmRpdGlvbixcbiAgc2V0V2VhdGhlclRpbWUsXG4gIHNldFdlYXRoZXJEZXRhaWxzLFxuICBzaG93U2VhcmNoRXJyb3IsXG4gIGhpZGVTZWFyY2hFcnJvcixcbiAgc2V0Rm9yZWNhc3REZXNjcmlwdGlvbixcbiAgc2V0Rm9yZWNhc3REYXksXG4gIHNldEZvcmVjYXN0SWNvbixcbiAgc2V0Rm9yZWNhc3RUZW1wTWF4QW5kTWluLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHNldFdlYXRoZXJUaW1lLFxuICBzZXRXZWF0aGVyUGxhY2VBbmRDb25kaXRpb24sXG4gIHNldFdlYXRoZXJEZXRhaWxzLFxuICBzaG93U2VhcmNoRXJyb3IsXG4gIGhpZGVTZWFyY2hFcnJvcixcbiAgc2V0Rm9yZWNhc3REZXNjcmlwdGlvbixcbiAgc2V0Rm9yZWNhc3REYXksXG4gIHNldEZvcmVjYXN0SWNvbixcbiAgc2V0Rm9yZWNhc3RUZW1wTWF4QW5kTWluLFxufSBmcm9tIFwiLi9kb20uanNcIjtcbi8vIGRvbSA6XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmxldCBjaXR5TmFtZSA9IGlucHV0LnZhbHVlO1xuLy8gc2V0IGRlZmF1bHQgd2VhdGhlciBwbGFjZSA6XG5jb25zdCBzZXREZWZhdWx0UGxhY2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRQbGFjZSA9IFwiTW9yb2Njb1wiO1xuICBjaXR5TmFtZSA9IGRlZmF1bHRQbGFjZTtcbiAgZ2V0V2VhdGhlckRhdGFQcm9taXNlQ2hhaW4oKTtcbiAgZ2V0V2VhdGhlckZvcmVjYXN0UHJvbWlzZUNoYWluKCk7XG59O1xuLy8gd2luZG93IGV2ZW50IHRvIHNldCBkZWZhdWx0IHBsYWNlIDpcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzZXREZWZhdWx0UGxhY2UpO1xuLy8gcmVzZXQgY2l0eSBuYW1lIChpbnB1dCB2YWx1ZSk6XG5jb25zdCBzZXROZXdQbGFjZSA9ICgpID0+IHtcbiAgY2l0eU5hbWUgPSBcIlwiO1xuICBjaXR5TmFtZSA9IGlucHV0LnZhbHVlO1xufTtcbi8vIHN1Ym1pdCBldmVudCA6XG5zdWJtaXQub25jbGljayA9ICgpID0+IHtcbiAgc2V0TmV3UGxhY2UoKTtcbiAgZ2V0V2VhdGhlckRhdGFQcm9taXNlQ2hhaW4oKTtcbiAgZ2V0V2VhdGhlckZvcmVjYXN0UHJvbWlzZUNoYWluKCk7XG59O1xuLy8gd2VhdGhlciBkYXRhIGFwaSA6XG4vLyBoYW5kbGUgZ2V0IHdlYXRoZXIgZGF0YSBwcm9taXNlIGNoYWluIDpcbmNvbnN0IGdldFdlYXRoZXJEYXRhUHJvbWlzZUNoYWluID0gKCkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YSgpXG4gICAgLnRoZW4oZ2V0RGVzaXJlZFdlYXRoZXJEYXRhKVxuICAgIC50aGVuKChkZXNpcmVkRGF0YSkgPT4ge1xuICAgICAgLy8gc2V0IHdlYXRoZXIgdGltZSA6XG4gICAgICBzZXRXZWF0aGVyVGltZShkZXNpcmVkRGF0YS5sb2NhbHRpbWUpO1xuICAgICAgLy8gc2V0IHdlYXRoZXIgcGxhY2UgYW5kIGNvbmRpdGlvblxuICAgICAgc2V0V2VhdGhlclBsYWNlQW5kQ29uZGl0aW9uKFxuICAgICAgICBkZXNpcmVkRGF0YS5jb25kaXRpb24sXG4gICAgICAgIGRlc2lyZWREYXRhLndlYXRoZXJJY29uLFxuICAgICAgICBkZXNpcmVkRGF0YS5jb3VudHJ5LFxuICAgICAgICBkZXNpcmVkRGF0YS5jaXR5TmFtZVxuICAgICAgKTtcbiAgICAgIC8vIHNldCB3ZWF0aGVyIGRldGFpbHMgOlxuICAgICAgc2V0V2VhdGhlckRldGFpbHMoXG4gICAgICAgIGRlc2lyZWREYXRhLnRlbXBfYyxcbiAgICAgICAgZGVzaXJlZERhdGEuaHVtaWRpdHksXG4gICAgICAgIGRlc2lyZWREYXRhLndpbmRfa3BoXG4gICAgICApO1xuICAgIH0pO1xufTtcbi8vIGZldGNoIHdlYXRoZXIgYXBpIDpcbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTVkMzhlYWI0NjgwMTQwNjk4OGQxNzA5NDkyNDI5MDEmcT0ke2NpdHlOYW1lfWBcbiAgICApO1xuICAgIC8vIGhhbmRsZSB3ZWF0aGVyIGRhdGEgZXJyb3IgOlxuICAgIGlmICghd2VhdGhlckRhdGFSZXNwb25zZS5vaykge1xuICAgICAgc2hvd1NlYXJjaEVycm9yKCk7XG4gICAgfSBlbHNlIGhpZGVTZWFyY2hFcnJvcigpO1xuICAgIGNvbnN0IHdlYXRoZXJKc29uRGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVySnNvbkRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBGZXRjaGluZyBXZWF0aGVyIERhdGE6XCIsIGVycik7XG4gIH1cbn07XG4vLyBnZXQgZGVzaXJlZCB3ZWF0aGVyIGZvcmVjYXN0IGRhdGEgOlxuY29uc3QgZ2V0RGVzaXJlZFdlYXRoZXJEYXRhID0gKHdlYXRoZXJKc29uRGF0YSkgPT4ge1xuICAvLyBkZXN0cnVjdHVyaW5nIGRlc2lyZWQgZGF0YSBmcm9tIGpzb25EYXRhIDpcbiAgY29uc3Qge1xuICAgIGxvY2F0aW9uOiB7IGxvY2FsdGltZSwgY291bnRyeSwgbmFtZTogY2l0eU5hbWUgfSxcbiAgICBjdXJyZW50OiB7XG4gICAgICBjb25kaXRpb246IHsgdGV4dDogY29uZGl0aW9uLCBpY29uOiB3ZWF0aGVySWNvbiB9LFxuICAgICAgdGVtcF9jLFxuICAgICAgaHVtaWRpdHksXG4gICAgICB3aW5kX2twaCxcbiAgICB9LFxuICB9ID0gd2VhdGhlckpzb25EYXRhO1xuICAvLyBjcmVhdGUgZGVzaXJlZERhdGEgb2JqZWN0IHVzaW5nIGRlc3RydWN0dXJlZCBkYXRhIDpcbiAgY29uc3QgZGVzaXJlZFdlYXRoZXJkRGF0YSA9IHtcbiAgICBsb2NhbHRpbWUsXG4gICAgY291bnRyeSxcbiAgICBjaXR5TmFtZSxcbiAgICBjb25kaXRpb24sXG4gICAgdGVtcF9jLFxuICAgIGh1bWlkaXR5LFxuICAgIHdpbmRfa3BoLFxuICAgIHdlYXRoZXJJY29uLFxuICB9O1xuICByZXR1cm4gZGVzaXJlZFdlYXRoZXJkRGF0YTtcbn07XG4vLyBoYW5kbGUgZ2V0IHdlYXRoZXIgZm9yZWNhc3QgcHJvbWlzZSBjaGFpbiA6XG5jb25zdCBnZXRXZWF0aGVyRm9yZWNhc3RQcm9taXNlQ2hhaW4gPSAoKSA9PiB7XG4gIGdldFdlYXRoZXJGb3JlY2FzdCgpXG4gICAgLnRoZW4oZ2V0Rm9yZWNhc3REYXlzKVxuICAgIC50aGVuKGdldERlc2lyZWRGb3JlY2FzdERhdGEpXG4gICAgLnRoZW4oc2V0Rm9yZWNhc3REZXNjcmlwdGlvbilcbiAgICAudGhlbihzZXRGb3JlY2FzdERheSlcbiAgICAudGhlbihzZXRGb3JlY2FzdEljb24pXG4gICAgLnRoZW4oc2V0Rm9yZWNhc3RUZW1wTWF4QW5kTWluKTtcbn07XG4vLyBmZXRjaCBmb3JjYXN0IGFwaSA6XG5jb25zdCBnZXRXZWF0aGVyRm9yZWNhc3QgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eU5hbWV9JmFwcGlkPTBhOWM3N2ZmNjVjMmRjNGQyOGE5MWUwNGZhMTljOWRkYFxuICAgICk7XG4gICAgLy8gaGFuZGxlIHdlYXRoZXIgZm9yZWNhc3QgZXJyb3IgOlxuICAgIGlmICghZm9yZWNhc3REYXRhUmVzcG9uc2Uub2spIHtcbiAgICAgIHNob3dTZWFyY2hFcnJvcigpO1xuICAgIH0gZWxzZSBoaWRlU2VhcmNoRXJyb3IoKTtcbiAgICAvLyBnZXQgd2VhdGhlciBmb3JlY2FzdCBqc29uIGRhdGEgOlxuICAgIGNvbnN0IGZvcmVjYXN0SnNvbkRhdGEgPSBhd2FpdCBmb3JlY2FzdERhdGFSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGZvcmVjYXN0SnNvbkRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBGZXRjaGluZyBGb3JjYXN0IERhdGE6XCIsIGVycik7XG4gIH1cbn07XG4vLyBnZXQgNSBmb3JlY2FzdCBkYXlzIDpcbmNvbnN0IGdldEZvcmVjYXN0RGF5cyA9IChmb3JlY2FzdEpzb25EYXRhKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJGb3JlY2FzdERheXNBcnJheSA9IFtdO1xuICAvLyBnZXQgNSBmb3JlY2FzdCBkYXlzIGZyb20gbGlzdCBhdCBtaWQgZGF5IDEyOjAwOjAwIDpcbiAgY29uc3QgcGF0dGVybiA9IC9cXGR7NH0tXFxkezJ9LVxcZHsyfVxcczEyOjAwOjAwL2dpO1xuICBjb25zdCB7IGxpc3Q6IGxpc3RBcnJheSB9ID0gZm9yZWNhc3RKc29uRGF0YTtcbiAgZm9yIChjb25zdCBsaXN0IG9mIGxpc3RBcnJheSkge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBsaXN0LmR0X3R4dDtcbiAgICBpZiAocGF0dGVybi50ZXN0KHRhcmdldERhdGUpKSB7XG4gICAgICB3ZWF0aGVyRm9yZWNhc3REYXlzQXJyYXkucHVzaChsaXN0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdERheXNBcnJheTtcbn07XG4vLyBnZXQgZGVzaXJlZCBmb3JlY2FzdCBkYXRhIDpcbmNvbnN0IGdldERlc2lyZWRGb3JlY2FzdERhdGEgPSAoZm9yZWNhc3REYXlzKSA9PiB7XG4gIGNvbnN0IGRlc2lyZWRGb3JlY2FzdEFycmF5ID0gW107XG4gIGZvciAoY29uc3QgZGF5IG9mIGZvcmVjYXN0RGF5cykge1xuICAgIGNvbnN0IHtcbiAgICAgIGR0X3R4dDogZGF0ZSxcbiAgICAgIG1haW46IHsgdGVtcF9tYXgsIHRlbXBfbWluIH0sXG4gICAgICB3ZWF0aGVyOiBbeyBkZXNjcmlwdGlvbiwgaWNvbjogd2VhdGhlckljb24gfV0sXG4gICAgfSA9IGRheTtcbiAgICBkZXNpcmVkRm9yZWNhc3RBcnJheS5wdXNoKHtcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGF0ZSxcbiAgICAgIHdlYXRoZXJJY29uLFxuICAgICAgdGVtcF9tYXgsXG4gICAgICB0ZW1wX21pbixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGVzaXJlZEZvcmVjYXN0QXJyYXk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9