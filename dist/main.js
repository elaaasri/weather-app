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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;EAC5B,yDAA0D;EAC1D,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,kCAAkC;AACpC;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;AACA,kCAAkC;AAClC;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,yDAAiE;EACjE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA,wBAAwB;AACxB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA,6BAA6B;AAC7B;EACE,aAAa;EACb,6BAA6B;EAC7B,QAAQ;EACR,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;AACA;;;EAGE,aAAa;EACb,iBAAiB;EACjB,SAAS;AACX;AACA;;;EAGE,eAAe;EACf,WAAW;EACX,YAAY;AACd;AACA,+BAA+B;AAC/B;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,0CAA0C;EAC1C,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;AACtC;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,YAAY;EACZ,sCAAsC;AACxC;AACA;EACE,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;AACA;EACE,oCAAoC;AACtC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 1fr auto;\n  background-image: url(../src/images/background-image.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  font-family: \"Poppins\", sans-serif;\n}\nmain {\n  justify-self: center;\n  align-self: center;\n  height: 90%;\n  width: 90%;\n}\n/* weather-card-container styles */\n#weather-card-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-image: url(../src/images/background-nature-image.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  box-shadow: 0px 15px 40px black;\n  border-radius: 5px;\n}\n/* weather-card-header */\n#search-error {\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  width: 210px;\n  color: white;\n  background-color: rgb(183, 51, 51);\n  border-radius: 0 0 8px 8px;\n}\n#handle-error-container {\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  width: 210px;\n  color: white;\n  background-color: rgb(183, 51, 51);\n  border-radius: 0 0 8px 8px;\n}\n#weather-card-header {\n  padding-top: 12px;\n}\n#search-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#search-form > input {\n  outline: none;\n  background-color: inherit;\n  padding-left: 10px;\n  font-weight: bold;\n  border: none;\n  border-bottom: 2px solid #000;\n  padding-bottom: 3px;\n}\n#search-form > input::placeholder {\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n}\n#search-form > button {\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n}\n/* weather-card-main styles */\n#weather-card-main {\n  display: flex;\n  justify-content: space-around;\n  gap: 40%;\n  padding: 30px;\n}\n#weather-info-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n#weather-info-date-container {\n  display: flex;\n  flex-direction: column;\n}\n#weather-info-time {\n  font-size: 45px;\n  font-weight: bold;\n}\n#weather-info-date {\n  font-weight: bold;\n}\n#weather-place-and-condition-container {\n  display: flex;\n  flex-direction: column;\n}\n#weather-condition-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n#weather-condition {\n  font-weight: bold;\n  font-size: 30px;\n}\n#weather-place-city-and-country {\n  font-weight: bold;\n}\n#weather-details-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n}\n#weather-temperature-container,\n#weather-humidity-container,\n#weather-wind-container {\n  display: flex;\n  font-weight: bold;\n  gap: 10px;\n}\n.fa-temperature-high,\n.fa-droplet,\n.fa-wind {\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n}\n/* weather-card-footer styles */\n#weather-forecast-container {\n  display: flex;\n  justify-content: space-around;\n  color: white;\n  background-color: rgba(168, 244, 240, 0.5);\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 210px;\n}\n.forecast-day {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.forecast-date {\n  text-align: center;\n  width: 60%;\n  font-size: 15px;\n  border: solid 3px black;\n  border-radius: 10px;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.forecast-description {\n  padding-bottom: 10px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.forecast-temp-max {\n  font-size: 20px;\n  padding-bottom: 5px;\n}\n.forecast-temp-min {\n  font-size: 15px;\n}\n/* footer styles : */\n.footer {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  font-weight: bold;\n  font-size: 13px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  border-top: 1px solid rgb(0, 255, 225);\n}\n.fa-github {\n  color: white;\n  font-size: 20px;\n  transition: transform 0.5s ease-in-out;\n}\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.3);\n}\n"],"sourceRoot":""}]);
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
// ################## weather data api ##################
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
// ################## forecast data api ##################
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDhJQUFzRDtBQUNsRyw0Q0FBNEMsNEpBQTZEO0FBQ3pHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxN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Q3BDLFVBQVUsa0JBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQyxrQkFBa0IsZ0NBQWdDO0FBQ2xELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC1uYXR1cmUtaW1hZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cbm1haW4ge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbn1cbi8qIHdlYXRoZXItY2FyZC1jb250YWluZXIgc3R5bGVzICovXG4jd2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggNDBweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLyogd2VhdGhlci1jYXJkLWhlYWRlciAqL1xuI3NlYXJjaC1lcnJvciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMjEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgNTEsIDUxKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG4jaGFuZGxlLWVycm9yLWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMjEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgNTEsIDUxKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG4jd2VhdGhlci1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuI3NlYXJjaC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2VhcmNoLWZvcm0gPiBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG4jc2VhcmNoLWZvcm0gPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jc2VhcmNoLWZvcm0gPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLyogd2VhdGhlci1jYXJkLW1haW4gc3R5bGVzICovXG4jd2VhdGhlci1jYXJkLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ2FwOiA0MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cbiN3ZWF0aGVyLWluZm8tZGF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3dlYXRoZXItaW5mby10aW1lIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN3ZWF0aGVyLWluZm8tZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3dlYXRoZXItcGxhY2UtYW5kLWNvbmRpdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3dlYXRoZXItY29uZGl0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jd2VhdGhlci1jb25kaXRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI3dlYXRoZXItcGxhY2UtY2l0eS1hbmQtY291bnRyeSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3dlYXRoZXItZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuI3dlYXRoZXItdGVtcGVyYXR1cmUtY29udGFpbmVyLFxuI3dlYXRoZXItaHVtaWRpdHktY29udGFpbmVyLFxuI3dlYXRoZXItd2luZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZ2FwOiAxMHB4O1xufVxuLmZhLXRlbXBlcmF0dXJlLWhpZ2gsXG4uZmEtZHJvcGxldCxcbi5mYS13aW5kIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLyogd2VhdGhlci1jYXJkLWZvb3RlciBzdHlsZXMgKi9cbiN3ZWF0aGVyLWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY4LCAyNDQsIDI0MCwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBoZWlnaHQ6IDIxMHB4O1xufVxuLmZvcmVjYXN0LWRheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcmVjYXN0LWRhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uZm9yZWNhc3QtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5mb3JlY2FzdC10ZW1wLW1heCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5mb3JlY2FzdC10ZW1wLW1pbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi8qIGZvb3RlciBzdHlsZXMgOiAqL1xuLmZvb3RlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDMgLyA0O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDAsIDI1NSwgMjI1KTtcbn1cbi5mYS1naXRodWIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4uZmEtZ2l0aHViOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1Qix5REFBMEQ7RUFDMUQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQSxrQ0FBa0M7QUFDbEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5REFBaUU7RUFDakUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQSw2QkFBNkI7QUFDN0I7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztBQUNYO0FBQ0E7OztFQUdFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4vKiB3ZWF0aGVyLWNhcmQtY29udGFpbmVyIHN0eWxlcyAqL1xcbiN3ZWF0aGVyLWNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLW5hdHVyZS1pbWFnZS5qcGVnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggNDBweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLyogd2VhdGhlci1jYXJkLWhlYWRlciAqL1xcbiNzZWFyY2gtZXJyb3Ige1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICB3aWR0aDogMjEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCA1MSwgNTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxufVxcbiNoYW5kbGUtZXJyb3ItY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgNTEsIDUxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcbn1cXG4jd2VhdGhlci1jYXJkLWhlYWRlciB7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuI3NlYXJjaC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzZWFyY2gtZm9ybSA+IGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcbiNzZWFyY2gtZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3NlYXJjaC1mb3JtID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi8qIHdlYXRoZXItY2FyZC1tYWluIHN0eWxlcyAqL1xcbiN3ZWF0aGVyLWNhcmQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDQwJTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG4jd2VhdGhlci1pbmZvLWRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jd2VhdGhlci1pbmZvLXRpbWUge1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN3ZWF0aGVyLWluZm8tZGF0ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3dlYXRoZXItcGxhY2UtYW5kLWNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiN3ZWF0aGVyLWNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3dlYXRoZXItY29uZGl0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4jd2VhdGhlci1wbGFjZS1jaXR5LWFuZC1jb3VudHJ5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jd2VhdGhlci1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4jd2VhdGhlci10ZW1wZXJhdHVyZS1jb250YWluZXIsXFxuI3dlYXRoZXItaHVtaWRpdHktY29udGFpbmVyLFxcbiN3ZWF0aGVyLXdpbmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmZhLXRlbXBlcmF0dXJlLWhpZ2gsXFxuLmZhLWRyb3BsZXQsXFxuLmZhLXdpbmQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbi8qIHdlYXRoZXItY2FyZC1mb290ZXIgc3R5bGVzICovXFxuI3dlYXRoZXItZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY4LCAyNDQsIDI0MCwgMC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGhlaWdodDogMjEwcHg7XFxufVxcbi5mb3JlY2FzdC1kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JlY2FzdC1kYXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuLmZvcmVjYXN0LWRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5mb3JlY2FzdC10ZW1wLW1heCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uZm9yZWNhc3QtdGVtcC1taW4ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4vKiBmb290ZXIgc3R5bGVzIDogKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCAyMjUpO1xcbn1cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4zKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBzZXQgd2VhdGhlciB0aW1lIDpcbmNvbnN0IHNldFdlYXRoZXJUaW1lID0gKGxvY2FsVGltZSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbmZvLXRpbWVcIik7XG4gIGNvbnN0IHdlYXRoZXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWluZm8tZGF0ZVwiKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0pO1xuICBjb25zdCB0aW1lID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHtcbiAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICB9KTtcbiAgd2VhdGhlclRpbWUudGV4dENvbnRlbnQgPSB0aW1lO1xuICB3ZWF0aGVyRGF0ZS50ZXh0Q29udGVudCA9IGAke2RheU9mV2Vla30sICR7ZGF5fSAke21vbnRofS5gO1xufTtcbi8vIHNldCB3ZWF0aGVyIHBsYWNlIGFuZCBjb25kaXRpb24gOlxuY29uc3Qgc2V0V2VhdGhlclBsYWNlQW5kQ29uZGl0aW9uID0gKGNvbmRpdGlvbiwgaWNvbiwgY291bnRyeSwgY2l0eSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWNvbmRpdGlvblwiKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIndlYXRoZXItY29uZGl0aW9uLWljb25cIlxuICApO1xuICBjb25zdCB3ZWF0aGVyUGxhY2VDaXR5QW5kQ291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwid2VhdGhlci1wbGFjZS1jaXR5LWFuZC1jb3VudHJ5XCJcbiAgKTtcbiAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGNvbmRpdGlvbjtcbiAgd2VhdGhlckNvbmRpdGlvbkljb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5zcmMgPSBgaHR0cHM6JHtpY29ufWA7XG4gIHdlYXRoZXJQbGFjZUNpdHlBbmRDb3VudHJ5LnRleHRDb250ZW50ID0gYCR7Y291bnRyeX0sICR7Y2l0eX0uYDtcbn07XG4vLyBzZXQgd2VhdGhlciBkZXRhaWxzIDpcbmNvbnN0IHNldFdlYXRoZXJEZXRhaWxzID0gKHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgd2luZFNwZWVkKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci10ZW1wZXJhdHVyZVwiKTtcbiAgY29uc3Qgd2VhdGhlckh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWh1bWlkaXR5XCIpO1xuICBjb25zdCB3ZWF0aGVyV2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci13aW5kXCIpO1xuICB3ZWF0aGVyVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZX0gwrBDYDtcbiAgd2VhdGhlckh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9ICVgO1xuICB3ZWF0aGVyV2luZC50ZXh0Q29udGVudCA9IGAke3dpbmRTcGVlZH0ga20vaGA7XG59O1xuLy8gc2hvdyBzZWFyY2ggZXJyb3IgOlxuY29uc3Qgc2hvd1NlYXJjaEVycm9yID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWVycm9yXCIpO1xuICBzZWFyY2hFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgc2VhcmNoRXJyb3Iuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbn07XG4vLyBoaWRlIHNlYXJjaCBlcnJvciA6XG5jb25zdCBoaWRlU2VhcmNoRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZXJyb3JcIik7XG4gIHNlYXJjaEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG4vLyBzZXQgZm9yZWNhc3QgZGVzY3JpcHRpb24gOlxuY29uc3Qgc2V0Rm9yZWNhc3REZXNjcmlwdGlvbiA9IChkZXNpcmVkRm9yZWNhc3REYXRhKSA9PiB7XG4gIGNvbnN0IGFsbEZvcmVjYXN0RGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5mb3JlY2FzdC1kZXNjcmlwdGlvblwiXG4gICk7XG4gIFsuLi5hbGxGb3JlY2FzdERlc2NyaXB0aW9uc10ubWFwKChlbGUsIGluZGV4KSA9PiB7XG4gICAgZWxlLnRleHRDb250ZW50ID0gZGVzaXJlZEZvcmVjYXN0RGF0YVtpbmRleF0uZGVzY3JpcHRpb247XG4gIH0pO1xuICByZXR1cm4gZGVzaXJlZEZvcmVjYXN0RGF0YTtcbn07XG4vLyBzZXQgZm9yZWNhc3QgZGF5IDpcbmNvbnN0IHNldEZvcmVjYXN0RGF5ID0gKGRlc2lyZWRGb3JlY2FzdERhdGEpID0+IHtcbiAgY29uc3QgYWxsRm9yZWNhc3REYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QtZGF0ZVwiKTtcbiAgWy4uLmFsbEZvcmVjYXN0RGF0ZXNdLm1hcCgoZWxlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkZXNpcmVkRm9yZWNhc3REYXRhW2luZGV4XS5kYXRlKTtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XG4gICAgZWxlLnRleHRDb250ZW50ID0gZGF5T2ZXZWVrO1xuICB9KTtcbiAgcmV0dXJuIGRlc2lyZWRGb3JlY2FzdERhdGE7XG59O1xuLy8gc2V0IGZvcmVjYXN0IGltYWdlIGljb24gOlxuY29uc3Qgc2V0Rm9yZWNhc3RJY29uID0gKGRlc2lyZWRGb3JlY2FzdERhdGEpID0+IHtcbiAgY29uc3QgYWxsRm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3Qtd2VhdGhlckljb25cIik7XG4gIFsuLi5hbGxGb3JlY2FzdEljb25zXS5tYXAoKGVsZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpY29uU3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2Rlc2lyZWRGb3JlY2FzdERhdGFbaW5kZXhdLndlYXRoZXJJY29ufUAyeC5wbmdgO1xuICAgIGVsZS5zcmMgPSBpY29uU3JjO1xuICB9KTtcbiAgcmV0dXJuIGRlc2lyZWRGb3JlY2FzdERhdGE7XG59O1xuLy8gc2V0IGZvcmVjYXN0IG1heCBhbmQgbWluIHRlbXBlcmF0dXJlIDpcbmNvbnN0IHNldEZvcmVjYXN0VGVtcE1heEFuZE1pbiA9IChkZXNpcmVkRm9yZWNhc3REYXRhKSA9PiB7XG4gIGNvbnN0IGFsbEZvcmVjYXN0TWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QtdGVtcC1tYXhcIik7XG4gIGNvbnN0IGFsbEZvcmVjYXN0TWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QtdGVtcC1taW5cIik7XG4gIFsuLi5hbGxGb3JlY2FzdE1heFRlbXBdLm1hcCgoZWxlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGtlbHZpblRvQ2Vsc2l1c01heFRlbXAgPSBkZXNpcmVkRm9yZWNhc3REYXRhW2luZGV4XS50ZW1wX21heCAtIDI3My4xNTtcbiAgICBlbGUudGV4dENvbnRlbnQgPSBgICR7cGFyc2VJbnQoa2VsdmluVG9DZWxzaXVzTWF4VGVtcCl9IMKwQ2A7XG4gIH0pO1xuICBbLi4uYWxsRm9yZWNhc3RNaW5UZW1wXS5tYXAoKGVsZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBrZWx2aW5Ub0NlbHNpdXNNaW5UZW1wID0gZGVzaXJlZEZvcmVjYXN0RGF0YVtpbmRleF0udGVtcF9taW4gLSAyNzMuMTU7XG4gICAgZWxlLnRleHRDb250ZW50ID0gYCAke3BhcnNlSW50KGtlbHZpblRvQ2Vsc2l1c01pblRlbXApfSDCsENgO1xuICB9KTtcbn07XG5leHBvcnQge1xuICBzZXRXZWF0aGVyUGxhY2VBbmRDb25kaXRpb24sXG4gIHNldFdlYXRoZXJUaW1lLFxuICBzZXRXZWF0aGVyRGV0YWlscyxcbiAgc2hvd1NlYXJjaEVycm9yLFxuICBoaWRlU2VhcmNoRXJyb3IsXG4gIHNldEZvcmVjYXN0RGVzY3JpcHRpb24sXG4gIHNldEZvcmVjYXN0RGF5LFxuICBzZXRGb3JlY2FzdEljb24sXG4gIHNldEZvcmVjYXN0VGVtcE1heEFuZE1pbixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBzZXRXZWF0aGVyVGltZSxcbiAgc2V0V2VhdGhlclBsYWNlQW5kQ29uZGl0aW9uLFxuICBzZXRXZWF0aGVyRGV0YWlscyxcbiAgc2hvd1NlYXJjaEVycm9yLFxuICBoaWRlU2VhcmNoRXJyb3IsXG4gIHNldEZvcmVjYXN0RGVzY3JpcHRpb24sXG4gIHNldEZvcmVjYXN0RGF5LFxuICBzZXRGb3JlY2FzdEljb24sXG4gIHNldEZvcmVjYXN0VGVtcE1heEFuZE1pbixcbn0gZnJvbSBcIi4vZG9tLmpzXCI7XG4vLyBkb20gOlxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5sZXQgY2l0eU5hbWUgPSBpbnB1dC52YWx1ZTtcbi8vIHNldCBkZWZhdWx0IHdlYXRoZXIgcGxhY2UgOlxuY29uc3Qgc2V0RGVmYXVsdFBsYWNlID0gKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0UGxhY2UgPSBcIk1vcm9jY29cIjtcbiAgY2l0eU5hbWUgPSBkZWZhdWx0UGxhY2U7XG4gIGdldFdlYXRoZXJEYXRhUHJvbWlzZUNoYWluKCk7XG4gIGdldFdlYXRoZXJGb3JlY2FzdFByb21pc2VDaGFpbigpO1xufTtcbi8vIHdpbmRvdyBldmVudCB0byBzZXQgZGVmYXVsdCBwbGFjZSA6XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc2V0RGVmYXVsdFBsYWNlKTtcbi8vIHJlc2V0IGNpdHkgbmFtZSAoaW5wdXQgdmFsdWUpOlxuY29uc3Qgc2V0TmV3UGxhY2UgPSAoKSA9PiB7XG4gIGNpdHlOYW1lID0gXCJcIjtcbiAgY2l0eU5hbWUgPSBpbnB1dC52YWx1ZTtcbn07XG4vLyBzdWJtaXQgZXZlbnQgOlxuc3VibWl0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIHNldE5ld1BsYWNlKCk7XG4gIGdldFdlYXRoZXJEYXRhUHJvbWlzZUNoYWluKCk7XG4gIGdldFdlYXRoZXJGb3JlY2FzdFByb21pc2VDaGFpbigpO1xufTtcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyB3ZWF0aGVyIGRhdGEgYXBpICMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gaGFuZGxlIGdldCB3ZWF0aGVyIGRhdGEgcHJvbWlzZSBjaGFpbiA6XG5jb25zdCBnZXRXZWF0aGVyRGF0YVByb21pc2VDaGFpbiA9ICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoKVxuICAgIC50aGVuKGdldERlc2lyZWRXZWF0aGVyRGF0YSlcbiAgICAudGhlbigoZGVzaXJlZERhdGEpID0+IHtcbiAgICAgIC8vIHNldCB3ZWF0aGVyIHRpbWUgOlxuICAgICAgc2V0V2VhdGhlclRpbWUoZGVzaXJlZERhdGEubG9jYWx0aW1lKTtcbiAgICAgIC8vIHNldCB3ZWF0aGVyIHBsYWNlIGFuZCBjb25kaXRpb25cbiAgICAgIHNldFdlYXRoZXJQbGFjZUFuZENvbmRpdGlvbihcbiAgICAgICAgZGVzaXJlZERhdGEuY29uZGl0aW9uLFxuICAgICAgICBkZXNpcmVkRGF0YS53ZWF0aGVySWNvbixcbiAgICAgICAgZGVzaXJlZERhdGEuY291bnRyeSxcbiAgICAgICAgZGVzaXJlZERhdGEuY2l0eU5hbWVcbiAgICAgICk7XG4gICAgICAvLyBzZXQgd2VhdGhlciBkZXRhaWxzIDpcbiAgICAgIHNldFdlYXRoZXJEZXRhaWxzKFxuICAgICAgICBkZXNpcmVkRGF0YS50ZW1wX2MsXG4gICAgICAgIGRlc2lyZWREYXRhLmh1bWlkaXR5LFxuICAgICAgICBkZXNpcmVkRGF0YS53aW5kX2twaFxuICAgICAgKTtcbiAgICB9KTtcbn07XG4vLyBmZXRjaCB3ZWF0aGVyIGFwaSA6XG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01ZDM4ZWFiNDY4MDE0MDY5ODhkMTcwOTQ5MjQyOTAxJnE9JHtjaXR5TmFtZX1gXG4gICAgKTtcbiAgICAvLyBoYW5kbGUgd2VhdGhlciBkYXRhIGVycm9yIDpcbiAgICBpZiAoIXdlYXRoZXJEYXRhUmVzcG9uc2Uub2spIHtcbiAgICAgIHNob3dTZWFyY2hFcnJvcigpO1xuICAgIH0gZWxzZSBoaWRlU2VhcmNoRXJyb3IoKTtcbiAgICBjb25zdCB3ZWF0aGVySnNvbkRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YVJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckpzb25EYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgRmV0Y2hpbmcgV2VhdGhlciBEYXRhOlwiLCBlcnIpO1xuICB9XG59O1xuLy8gZ2V0IGRlc2lyZWQgd2VhdGhlciBmb3JlY2FzdCBkYXRhIDpcbmNvbnN0IGdldERlc2lyZWRXZWF0aGVyRGF0YSA9ICh3ZWF0aGVySnNvbkRhdGEpID0+IHtcbiAgLy8gZGVzdHJ1Y3R1cmluZyBkZXNpcmVkIGRhdGEgZnJvbSBqc29uRGF0YSA6XG4gIGNvbnN0IHtcbiAgICBsb2NhdGlvbjogeyBsb2NhbHRpbWUsIGNvdW50cnksIG5hbWU6IGNpdHlOYW1lIH0sXG4gICAgY3VycmVudDoge1xuICAgICAgY29uZGl0aW9uOiB7IHRleHQ6IGNvbmRpdGlvbiwgaWNvbjogd2VhdGhlckljb24gfSxcbiAgICAgIHRlbXBfYyxcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgd2luZF9rcGgsXG4gICAgfSxcbiAgfSA9IHdlYXRoZXJKc29uRGF0YTtcbiAgLy8gY3JlYXRlIGRlc2lyZWREYXRhIG9iamVjdCB1c2luZyBkZXN0cnVjdHVyZWQgZGF0YSA6XG4gIGNvbnN0IGRlc2lyZWRXZWF0aGVyZERhdGEgPSB7XG4gICAgbG9jYWx0aW1lLFxuICAgIGNvdW50cnksXG4gICAgY2l0eU5hbWUsXG4gICAgY29uZGl0aW9uLFxuICAgIHRlbXBfYyxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kX2twaCxcbiAgICB3ZWF0aGVySWNvbixcbiAgfTtcbiAgcmV0dXJuIGRlc2lyZWRXZWF0aGVyZERhdGE7XG59O1xuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIGZvcmVjYXN0IGRhdGEgYXBpICMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gaGFuZGxlIGdldCB3ZWF0aGVyIGZvcmVjYXN0IHByb21pc2UgY2hhaW4gOlxuY29uc3QgZ2V0V2VhdGhlckZvcmVjYXN0UHJvbWlzZUNoYWluID0gKCkgPT4ge1xuICBnZXRXZWF0aGVyRm9yZWNhc3QoKVxuICAgIC50aGVuKGdldEZvcmVjYXN0RGF5cylcbiAgICAudGhlbihnZXREZXNpcmVkRm9yZWNhc3REYXRhKVxuICAgIC50aGVuKHNldEZvcmVjYXN0RGVzY3JpcHRpb24pXG4gICAgLnRoZW4oc2V0Rm9yZWNhc3REYXkpXG4gICAgLnRoZW4oc2V0Rm9yZWNhc3RJY29uKVxuICAgIC50aGVuKHNldEZvcmVjYXN0VGVtcE1heEFuZE1pbik7XG59O1xuLy8gZmV0Y2ggZm9yY2FzdCBhcGkgOlxuY29uc3QgZ2V0V2VhdGhlckZvcmVjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHlOYW1lfSZhcHBpZD0wYTljNzdmZjY1YzJkYzRkMjhhOTFlMDRmYTE5YzlkZGBcbiAgICApO1xuICAgIC8vIGhhbmRsZSB3ZWF0aGVyIGZvcmVjYXN0IGVycm9yIDpcbiAgICBpZiAoIWZvcmVjYXN0RGF0YVJlc3BvbnNlLm9rKSB7XG4gICAgICBzaG93U2VhcmNoRXJyb3IoKTtcbiAgICB9IGVsc2UgaGlkZVNlYXJjaEVycm9yKCk7XG4gICAgLy8gZ2V0IHdlYXRoZXIgZm9yZWNhc3QganNvbiBkYXRhIDpcbiAgICBjb25zdCBmb3JlY2FzdEpzb25EYXRhID0gYXdhaXQgZm9yZWNhc3REYXRhUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBmb3JlY2FzdEpzb25EYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgRmV0Y2hpbmcgRm9yY2FzdCBEYXRhOlwiLCBlcnIpO1xuICB9XG59O1xuLy8gZ2V0IDUgZm9yZWNhc3QgZGF5cyA6XG5jb25zdCBnZXRGb3JlY2FzdERheXMgPSAoZm9yZWNhc3RKc29uRGF0YSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRm9yZWNhc3REYXlzQXJyYXkgPSBbXTtcbiAgLy8gZ2V0IDUgZm9yZWNhc3QgZGF5cyBmcm9tIGxpc3QgYXQgbWlkIGRheSAxMjowMDowMCA6XG4gIGNvbnN0IHBhdHRlcm4gPSAvXFxkezR9LVxcZHsyfS1cXGR7Mn1cXHMxMjowMDowMC9naTtcbiAgY29uc3QgeyBsaXN0OiBsaXN0QXJyYXkgfSA9IGZvcmVjYXN0SnNvbkRhdGE7XG4gIGZvciAoY29uc3QgbGlzdCBvZiBsaXN0QXJyYXkpIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gbGlzdC5kdF90eHQ7XG4gICAgaWYgKHBhdHRlcm4udGVzdCh0YXJnZXREYXRlKSkge1xuICAgICAgd2VhdGhlckZvcmVjYXN0RGF5c0FycmF5LnB1c2gobGlzdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3ZWF0aGVyRm9yZWNhc3REYXlzQXJyYXk7XG59O1xuLy8gZ2V0IGRlc2lyZWQgZm9yZWNhc3QgZGF0YSA6XG5jb25zdCBnZXREZXNpcmVkRm9yZWNhc3REYXRhID0gKGZvcmVjYXN0RGF5cykgPT4ge1xuICBjb25zdCBkZXNpcmVkRm9yZWNhc3RBcnJheSA9IFtdO1xuICBmb3IgKGNvbnN0IGRheSBvZiBmb3JlY2FzdERheXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBkdF90eHQ6IGRhdGUsXG4gICAgICBtYWluOiB7IHRlbXBfbWF4LCB0ZW1wX21pbiB9LFxuICAgICAgd2VhdGhlcjogW3sgZGVzY3JpcHRpb24sIGljb246IHdlYXRoZXJJY29uIH1dLFxuICAgIH0gPSBkYXk7XG4gICAgZGVzaXJlZEZvcmVjYXN0QXJyYXkucHVzaCh7XG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRhdGUsXG4gICAgICB3ZWF0aGVySWNvbixcbiAgICAgIHRlbXBfbWF4LFxuICAgICAgdGVtcF9taW4sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRlc2lyZWRGb3JlY2FzdEFycmF5O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==