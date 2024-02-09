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
  height: 100%;
  width: 100%;
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
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  gap: 40%;
  /* background-color: red; */
  /* grid-template-rows: 1fr 200px; */
  /* grid-template-columns: 1fr auto; */
  padding: 30px;
  flex: 1;
  /* height: 60%; */
}
#weather-info-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* gap: 100px; */
  /* background-color: pink; */
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
/* ################################### */
/* weather-card-footer styles */
#weather-forecast-container {
  display: flex;
  justify-content: space-around;
  flex: 1;
  background-color: aquamarine;
}

/* footer styles : */
.footer {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  height: 30px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;EAC5B,yDAA0D;EAC1D,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,kCAAkC;AACpC;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;AACA,kCAAkC;AAClC;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,yDAAiE;EACjE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,+BAA+B;EAC/B,kBAAkB;AACpB;AACA,wBAAwB;AACxB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA,6BAA6B;AAC7B;EACE,2BAA2B;EAC3B,aAAa;EACb,6BAA6B;EAC7B,QAAQ;EACR,2BAA2B;EAC3B,mCAAmC;EACnC,qCAAqC;EACrC,aAAa;EACb,OAAO;EACP,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;EAChB,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;AACA;;;EAGE,aAAa;EACb,iBAAiB;EACjB,SAAS;AACX;AACA;;;EAGE,eAAe;EACf,WAAW;EACX,YAAY;AACd;AACA,wCAAwC;AACxC,+BAA+B;AAC/B;EACE,aAAa;EACb,6BAA6B;EAC7B,OAAO;EACP,4BAA4B;AAC9B;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,YAAY;EACZ,sCAAsC;AACxC;AACA;EACE,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;AACA;EACE,oCAAoC;AACtC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 1fr auto;\n  background-image: url(../src/images/background-image.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  font-family: \"Poppins\", sans-serif;\n}\nmain {\n  justify-self: center;\n  align-self: center;\n  height: 90%;\n  width: 90%;\n}\n/* weather-card-container styles */\n#weather-card-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-image: url(../src/images/background-nature-image.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  box-shadow: 0px 15px 40px black;\n  border-radius: 5px;\n}\n/* weather-card-header */\n#search-error {\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  width: 210px;\n  color: white;\n  background-color: rgb(183, 51, 51);\n  border-radius: 0 0 8px 8px;\n}\n#handle-error-container {\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  width: 210px;\n  color: white;\n  background-color: rgb(183, 51, 51);\n  border-radius: 0 0 8px 8px;\n}\n#weather-card-header {\n  padding-top: 12px;\n}\n#search-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#search-form > input {\n  outline: none;\n  background-color: inherit;\n  padding-left: 10px;\n  font-weight: bold;\n  border: none;\n  border-bottom: 2px solid #000;\n  padding-bottom: 3px;\n}\n#search-form > input::placeholder {\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n}\n#search-form > button {\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n}\n/* weather-card-main styles */\n#weather-card-main {\n  /* background-color: red; */\n  display: flex;\n  justify-content: space-around;\n  gap: 40%;\n  /* background-color: red; */\n  /* grid-template-rows: 1fr 200px; */\n  /* grid-template-columns: 1fr auto; */\n  padding: 30px;\n  flex: 1;\n  /* height: 60%; */\n}\n#weather-info-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  /* gap: 100px; */\n  /* background-color: pink; */\n}\n#weather-info-date-container {\n  display: flex;\n  flex-direction: column;\n}\n#weather-info-time {\n  font-size: 45px;\n  font-weight: bold;\n}\n#weather-info-date {\n  font-weight: bold;\n}\n#weather-place-and-condition-container {\n  display: flex;\n  flex-direction: column;\n}\n#weather-condition-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#weather-condition {\n  font-weight: bold;\n  font-size: 30px;\n}\n#weather-place-city-and-country {\n  font-weight: bold;\n}\n#weather-condition-icon {\n  width: 80px;\n  height: 80px;\n}\n#weather-details-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n}\n#weather-temperature-container,\n#weather-humidity-container,\n#weather-wind-container {\n  display: flex;\n  font-weight: bold;\n  gap: 10px;\n}\n.fa-temperature-high,\n.fa-droplet,\n.fa-wind {\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n}\n/* ################################### */\n/* weather-card-footer styles */\n#weather-forecast-container {\n  display: flex;\n  justify-content: space-around;\n  flex: 1;\n  background-color: aquamarine;\n}\n\n/* footer styles : */\n.footer {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  font-weight: bold;\n  font-size: 13px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  border-top: 1px solid rgb(0, 255, 225);\n}\n.fa-github {\n  color: white;\n  font-size: 20px;\n  transition: transform 0.5s ease-in-out;\n}\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.3);\n}\n"],"sourceRoot":""}]);
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
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
    ele.textContent = dayOfWeek;
  });
  return desiredForecastData;
};
// set forecast icon :
const setForecastIcon = (desiredForecastData) => {
  const allForecastIcons = document.querySelectorAll(".forecast-weatherIcon");
  [...allForecastIcons].map((ele, index) => {
    const iconSrc = `https://openweathermap.org/img/wn/${desiredForecastData[index].weatherIcon}@2x.png`;
    ele.src = iconSrc;
  });
  return desiredForecastData;
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
// fetch weather data :
const getWeatherData = async () => {
  try {
    const cityName = input.value;
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
// fetch weather forcast :
const getWeatherForecast = async () => {
  try {
    const cityName = input.value;
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
// handle get weather data promise chain :
const getWeatherDataPromiseChain = () => {
  getWeatherData()
    .then((weatherJsonData) => getDesiredWeatherData(weatherJsonData))
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
// submit event :
submit.onclick = () => {
  getWeatherDataPromiseChain();
  getWeatherForecastPromiseChain();
};
// handle get weather forecast promise chain :
const getWeatherForecastPromiseChain = () => {
  getWeatherForecast()
    .then(getWeatherForecastDays)
    .then(getDesiredWeatherForecastData)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastDescription)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastDay)
    .then(_dom_js__WEBPACK_IMPORTED_MODULE_1__.setForecastIcon);
};

// getDesiredWeatherForecast
const getWeatherForecastDays = (weatherForecastJsonData) => {
  const weatherForecastDaysArray = [];
  const pattern = /\d{4}-\d{2}-\d{2}\s12:00:00/gi;
  const { list: listArray } = weatherForecastJsonData;

  for (const list of listArray) {
    const targetDate = list.dt_txt;
    if (pattern.test(targetDate)) {
      weatherForecastDaysArray.push(list);
    }
  }
  return weatherForecastDaysArray;
};

const getDesiredWeatherForecastData = (forecastDays) => {
  const desiredWeatherForecastArray = [];
  // console.log(forecastDays);
  for (const day of forecastDays) {
    // console.log(day);
    const {
      dt_txt: date,
      main: { temp_max, temp_min },
      weather: [{ description, icon: weatherIcon }],
    } = day;
    desiredWeatherForecastArray.push({
      description,
      date,
      weatherIcon,
      temp_max,
      temp_min,
    });
  }
  return desiredWeatherForecastArray;
};

const getDesiredWeatherData = (weatherJsonData) => {
  // destructuring desired data from jsonData :
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition, icon: weatherIcon },
      temp_c,
      // temp_f ,
      humidity,
      // wind_mph,
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

// https://openweathermap.org/img/wn/10d@2x.png ===> api icon

// const processJsonData = async (data) => {
//   const jsonData = await data.json();
//   // FUTURE WEATHER SOLVED :
//   // let arr = [];
//   // for (const list of jsonData.list) {
//   //   arr.push(list.dt_txt);
//   // }
//   // arr.map((date) => {
//   //   const pattern = /\d{4}-\d{2}-\d{2}\s00:00:00/gi;
//   //   console.log(pattern.test(date));
//   //   console.log(date.match(pattern));
//   // });

//   // console.log(arr);
//   console.log(jsonData);
//   return jsonData;
// };

// `https://api.weatherapi.com/v1/current.json?key=5d38eab46801406988d170949242901&q=${cityName}`
// jsonData.cod === 400

// const pattern2 = /\d{4}-\d{2}-\d{2}\s00:00:00/gi;
// const str2 = "2024-02-04 00:00:00";
// console.log(pattern2.test(str2));
// console.log(str2.match(pattern2));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDhJQUFzRDtBQUNsRyw0Q0FBNEMsNEpBQTZEO0FBQ3pHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFB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QUU7QUFDdEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC1uYXR1cmUtaW1hZ2UuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cbm1haW4ge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbn1cbi8qIHdlYXRoZXItY2FyZC1jb250YWluZXIgc3R5bGVzICovXG4jd2VhdGhlci1jYXJkLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggNDBweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLyogd2VhdGhlci1jYXJkLWhlYWRlciAqL1xuI3NlYXJjaC1lcnJvciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMjEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgNTEsIDUxKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG4jaGFuZGxlLWVycm9yLWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMjEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MywgNTEsIDUxKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG4jd2VhdGhlci1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuI3NlYXJjaC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2VhcmNoLWZvcm0gPiBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG4jc2VhcmNoLWZvcm0gPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jc2VhcmNoLWZvcm0gPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLyogd2VhdGhlci1jYXJkLW1haW4gc3R5bGVzICovXG4jd2VhdGhlci1jYXJkLW1haW4ge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBnYXA6IDQwJTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyMDBweDsgKi9cbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bzsgKi9cbiAgcGFkZGluZzogMzBweDtcbiAgZmxleDogMTtcbiAgLyogaGVpZ2h0OiA2MCU7ICovXG59XG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbiAgLyogZ2FwOiAxMDBweDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbn1cbiN3ZWF0aGVyLWluZm8tZGF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3dlYXRoZXItaW5mby10aW1lIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN3ZWF0aGVyLWluZm8tZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3dlYXRoZXItcGxhY2UtYW5kLWNvbmRpdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3dlYXRoZXItY29uZGl0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiN3ZWF0aGVyLWNvbmRpdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4jd2VhdGhlci1wbGFjZS1jaXR5LWFuZC1jb3VudHJ5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jd2VhdGhlci1jb25kaXRpb24taWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4jd2VhdGhlci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG4jd2VhdGhlci10ZW1wZXJhdHVyZS1jb250YWluZXIsXG4jd2VhdGhlci1odW1pZGl0eS1jb250YWluZXIsXG4jd2VhdGhlci13aW5kLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBnYXA6IDEwcHg7XG59XG4uZmEtdGVtcGVyYXR1cmUtaGlnaCxcbi5mYS1kcm9wbGV0LFxuLmZhLXdpbmQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4vKiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAqL1xuLyogd2VhdGhlci1jYXJkLWZvb3RlciBzdHlsZXMgKi9cbiN3ZWF0aGVyLWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG4vKiBmb290ZXIgc3R5bGVzIDogKi9cbi5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGdyaWQtcm93OiAzIC8gNDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDIyNSk7XG59XG4uZmEtZ2l0aHViIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLmZhLWdpdGh1Yjpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4zKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIseURBQTBEO0VBQzFELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0Esa0NBQWtDO0FBQ2xDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5REFBaUU7RUFDakUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQSw2QkFBNkI7QUFDN0I7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztBQUNYO0FBQ0E7OztFQUdFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsT0FBTztFQUNQLDRCQUE0QjtBQUM5Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4vKiB3ZWF0aGVyLWNhcmQtY29udGFpbmVyIHN0eWxlcyAqL1xcbiN3ZWF0aGVyLWNhcmQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtbmF0dXJlLWltYWdlLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwcHggMTVweCA0MHB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4vKiB3ZWF0aGVyLWNhcmQtaGVhZGVyICovXFxuI3NlYXJjaC1lcnJvciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDUxLCA1MSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXG59XFxuI2hhbmRsZS1lcnJvci1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICB3aWR0aDogMjEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCA1MSwgNTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxufVxcbiN3ZWF0aGVyLWNhcmQtaGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbn1cXG4jc2VhcmNoLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NlYXJjaC1mb3JtID4gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuI3NlYXJjaC1mb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jc2VhcmNoLWZvcm0gPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLyogd2VhdGhlci1jYXJkLW1haW4gc3R5bGVzICovXFxuI3dlYXRoZXItY2FyZC1tYWluIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogNDAlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjAwcHg7ICovXFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvOyAqL1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGZsZXg6IDE7XFxuICAvKiBoZWlnaHQ6IDYwJTsgKi9cXG59XFxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICAvKiBnYXA6IDEwMHB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cXG59XFxuI3dlYXRoZXItaW5mby1kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3dlYXRoZXItaW5mby10aW1lIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jd2VhdGhlci1pbmZvLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN3ZWF0aGVyLXBsYWNlLWFuZC1jb25kaXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jd2VhdGhlci1jb25kaXRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN3ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuI3dlYXRoZXItcGxhY2UtY2l0eS1hbmQtY291bnRyeSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3dlYXRoZXItY29uZGl0aW9uLWljb24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbiN3ZWF0aGVyLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcbiN3ZWF0aGVyLXRlbXBlcmF0dXJlLWNvbnRhaW5lcixcXG4jd2VhdGhlci1odW1pZGl0eS1jb250YWluZXIsXFxuI3dlYXRoZXItd2luZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZmEtdGVtcGVyYXR1cmUtaGlnaCxcXG4uZmEtZHJvcGxldCxcXG4uZmEtd2luZCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgKi9cXG4vKiB3ZWF0aGVyLWNhcmQtZm9vdGVyIHN0eWxlcyAqL1xcbiN3ZWF0aGVyLWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLyogZm9vdGVyIHN0eWxlcyA6ICovXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDAsIDI1NSwgMjI1KTtcXG59XFxuLmZhLWdpdGh1YiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gc2V0IHdlYXRoZXIgdGltZSA6XG5jb25zdCBzZXRXZWF0aGVyVGltZSA9IChsb2NhbFRpbWUpID0+IHtcbiAgY29uc3Qgd2VhdGhlclRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaW5mby10aW1lXCIpO1xuICBjb25zdCB3ZWF0aGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbmZvLWRhdGVcIik7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWUpO1xuICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KTtcbiAgY29uc3QgdGltZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7XG4gICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgfSk7XG4gIHdlYXRoZXJUaW1lLnRleHRDb250ZW50ID0gdGltZTtcbiAgd2VhdGhlckRhdGUudGV4dENvbnRlbnQgPSBgJHtkYXlPZldlZWt9LCAke2RheX0gJHttb250aH0uYDtcbn07XG4vLyBzZXQgd2VhdGhlciBwbGFjZSBhbmQgY29uZGl0aW9uIDpcbmNvbnN0IHNldFdlYXRoZXJQbGFjZUFuZENvbmRpdGlvbiA9IChjb25kaXRpb24sIGljb24sIGNvdW50cnksIGNpdHkpID0+IHtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1jb25kaXRpb25cIik7XG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJ3ZWF0aGVyLWNvbmRpdGlvbi1pY29uXCJcbiAgKTtcbiAgY29uc3Qgd2VhdGhlclBsYWNlQ2l0eUFuZENvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIndlYXRoZXItcGxhY2UtY2l0eS1hbmQtY291bnRyeVwiXG4gICk7XG4gIHdlYXRoZXJDb25kaXRpb24udGV4dENvbnRlbnQgPSBjb25kaXRpb247XG4gIHdlYXRoZXJDb25kaXRpb25JY29uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgd2VhdGhlckNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7aWNvbn1gO1xuICB3ZWF0aGVyUGxhY2VDaXR5QW5kQ291bnRyeS50ZXh0Q29udGVudCA9IGAke2NvdW50cnl9LCAke2NpdHl9LmA7XG59O1xuLy8gc2V0IHdlYXRoZXIgZGV0YWlscyA6XG5jb25zdCBzZXRXZWF0aGVyRGV0YWlscyA9ICh0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHdpbmRTcGVlZCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItdGVtcGVyYXR1cmVcIik7XG4gIGNvbnN0IHdlYXRoZXJIdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1odW1pZGl0eVwiKTtcbiAgY29uc3Qgd2VhdGhlcldpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItd2luZFwiKTtcbiAgd2VhdGhlclRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmV9IMKwQ2A7XG4gIHdlYXRoZXJIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2h1bWlkaXR5fSAlYDtcbiAgd2VhdGhlcldpbmQudGV4dENvbnRlbnQgPSBgJHt3aW5kU3BlZWR9IGttL2hgO1xufTtcbi8vIHNob3cgc2VhcmNoIGVycm9yIDpcbmNvbnN0IHNob3dTZWFyY2hFcnJvciA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1lcnJvclwiKTtcbiAgc2VhcmNoRXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gIHNlYXJjaEVycm9yLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG59O1xuLy8gaGlkZSBzZWFyY2ggZXJyb3IgOlxuY29uc3QgaGlkZVNlYXJjaEVycm9yID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWVycm9yXCIpO1xuICBzZWFyY2hFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuLy8gc2V0IGZvcmVjYXN0IGRlc2NyaXB0aW9uIDpcbmNvbnN0IHNldEZvcmVjYXN0RGVzY3JpcHRpb24gPSAoZGVzaXJlZEZvcmVjYXN0RGF0YSkgPT4ge1xuICBjb25zdCBhbGxGb3JlY2FzdERlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuZm9yZWNhc3QtZGVzY3JpcHRpb25cIlxuICApO1xuICBbLi4uYWxsRm9yZWNhc3REZXNjcmlwdGlvbnNdLm1hcCgoZWxlLCBpbmRleCkgPT4ge1xuICAgIGVsZS50ZXh0Q29udGVudCA9IGRlc2lyZWRGb3JlY2FzdERhdGFbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICB9KTtcbiAgcmV0dXJuIGRlc2lyZWRGb3JlY2FzdERhdGE7XG59O1xuLy8gc2V0IGZvcmVjYXN0IGRheSA6XG5jb25zdCBzZXRGb3JlY2FzdERheSA9IChkZXNpcmVkRm9yZWNhc3REYXRhKSA9PiB7XG4gIGNvbnN0IGFsbEZvcmVjYXN0RGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0LWRhdGVcIik7XG4gIFsuLi5hbGxGb3JlY2FzdERhdGVzXS5tYXAoKGVsZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGVzaXJlZEZvcmVjYXN0RGF0YVtpbmRleF0uZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XG4gICAgZWxlLnRleHRDb250ZW50ID0gZGF5T2ZXZWVrO1xuICB9KTtcbiAgcmV0dXJuIGRlc2lyZWRGb3JlY2FzdERhdGE7XG59O1xuLy8gc2V0IGZvcmVjYXN0IGljb24gOlxuY29uc3Qgc2V0Rm9yZWNhc3RJY29uID0gKGRlc2lyZWRGb3JlY2FzdERhdGEpID0+IHtcbiAgY29uc3QgYWxsRm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3Qtd2VhdGhlckljb25cIik7XG4gIFsuLi5hbGxGb3JlY2FzdEljb25zXS5tYXAoKGVsZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpY29uU3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2Rlc2lyZWRGb3JlY2FzdERhdGFbaW5kZXhdLndlYXRoZXJJY29ufUAyeC5wbmdgO1xuICAgIGVsZS5zcmMgPSBpY29uU3JjO1xuICB9KTtcbiAgcmV0dXJuIGRlc2lyZWRGb3JlY2FzdERhdGE7XG59O1xuXG5leHBvcnQge1xuICBzZXRXZWF0aGVyUGxhY2VBbmRDb25kaXRpb24sXG4gIHNldFdlYXRoZXJUaW1lLFxuICBzZXRXZWF0aGVyRGV0YWlscyxcbiAgc2hvd1NlYXJjaEVycm9yLFxuICBoaWRlU2VhcmNoRXJyb3IsXG4gIHNldEZvcmVjYXN0RGVzY3JpcHRpb24sXG4gIHNldEZvcmVjYXN0RGF5LFxuICBzZXRGb3JlY2FzdEljb24sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgc2V0V2VhdGhlclRpbWUsXG4gIHNldFdlYXRoZXJQbGFjZUFuZENvbmRpdGlvbixcbiAgc2V0V2VhdGhlckRldGFpbHMsXG4gIHNob3dTZWFyY2hFcnJvcixcbiAgaGlkZVNlYXJjaEVycm9yLFxuICBzZXRGb3JlY2FzdERlc2NyaXB0aW9uLFxuICBzZXRGb3JlY2FzdERheSxcbiAgc2V0Rm9yZWNhc3RJY29uLFxufSBmcm9tIFwiLi9kb20uanNcIjtcbi8vIGRvbSA6XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbi8vIGZldGNoIHdlYXRoZXIgZGF0YSA6XG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTVkMzhlYWI0NjgwMTQwNjk4OGQxNzA5NDkyNDI5MDEmcT0ke2NpdHlOYW1lfWBcbiAgICApO1xuICAgIC8vIGhhbmRsZSB3ZWF0aGVyIGRhdGEgZXJyb3IgOlxuICAgIGlmICghd2VhdGhlckRhdGFSZXNwb25zZS5vaykge1xuICAgICAgc2hvd1NlYXJjaEVycm9yKCk7XG4gICAgfSBlbHNlIGhpZGVTZWFyY2hFcnJvcigpO1xuICAgIGNvbnN0IHdlYXRoZXJKc29uRGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVySnNvbkRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBGZXRjaGluZyBXZWF0aGVyIERhdGE6XCIsIGVycik7XG4gIH1cbn07XG4vLyBmZXRjaCB3ZWF0aGVyIGZvcmNhc3QgOlxuY29uc3QgZ2V0V2VhdGhlckZvcmVjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gaW5wdXQudmFsdWU7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eU5hbWV9JmFwcGlkPTBhOWM3N2ZmNjVjMmRjNGQyOGE5MWUwNGZhMTljOWRkYFxuICAgICk7XG4gICAgLy8gaGFuZGxlIHdlYXRoZXIgZm9yZWNhc3QgZXJyb3IgOlxuICAgIGlmICghZm9yZWNhc3REYXRhUmVzcG9uc2Uub2spIHtcbiAgICAgIHNob3dTZWFyY2hFcnJvcigpO1xuICAgIH0gZWxzZSBoaWRlU2VhcmNoRXJyb3IoKTtcbiAgICAvLyBnZXQgd2VhdGhlciBmb3JlY2FzdCBqc29uIGRhdGEgOlxuICAgIGNvbnN0IGZvcmVjYXN0SnNvbkRhdGEgPSBhd2FpdCBmb3JlY2FzdERhdGFSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGZvcmVjYXN0SnNvbkRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBGZXRjaGluZyBGb3JjYXN0IERhdGE6XCIsIGVycik7XG4gIH1cbn07XG4vLyBoYW5kbGUgZ2V0IHdlYXRoZXIgZGF0YSBwcm9taXNlIGNoYWluIDpcbmNvbnN0IGdldFdlYXRoZXJEYXRhUHJvbWlzZUNoYWluID0gKCkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YSgpXG4gICAgLnRoZW4oKHdlYXRoZXJKc29uRGF0YSkgPT4gZ2V0RGVzaXJlZFdlYXRoZXJEYXRhKHdlYXRoZXJKc29uRGF0YSkpXG4gICAgLnRoZW4oKGRlc2lyZWREYXRhKSA9PiB7XG4gICAgICAvLyBzZXQgd2VhdGhlciB0aW1lIDpcbiAgICAgIHNldFdlYXRoZXJUaW1lKGRlc2lyZWREYXRhLmxvY2FsdGltZSk7XG4gICAgICAvLyBzZXQgd2VhdGhlciBwbGFjZSBhbmQgY29uZGl0aW9uXG4gICAgICBzZXRXZWF0aGVyUGxhY2VBbmRDb25kaXRpb24oXG4gICAgICAgIGRlc2lyZWREYXRhLmNvbmRpdGlvbixcbiAgICAgICAgZGVzaXJlZERhdGEud2VhdGhlckljb24sXG4gICAgICAgIGRlc2lyZWREYXRhLmNvdW50cnksXG4gICAgICAgIGRlc2lyZWREYXRhLmNpdHlOYW1lXG4gICAgICApO1xuICAgICAgLy8gc2V0IHdlYXRoZXIgZGV0YWlscyA6XG4gICAgICBzZXRXZWF0aGVyRGV0YWlscyhcbiAgICAgICAgZGVzaXJlZERhdGEudGVtcF9jLFxuICAgICAgICBkZXNpcmVkRGF0YS5odW1pZGl0eSxcbiAgICAgICAgZGVzaXJlZERhdGEud2luZF9rcGhcbiAgICAgICk7XG4gICAgfSk7XG59O1xuLy8gc3VibWl0IGV2ZW50IDpcbnN1Ym1pdC5vbmNsaWNrID0gKCkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YVByb21pc2VDaGFpbigpO1xuICBnZXRXZWF0aGVyRm9yZWNhc3RQcm9taXNlQ2hhaW4oKTtcbn07XG4vLyBoYW5kbGUgZ2V0IHdlYXRoZXIgZm9yZWNhc3QgcHJvbWlzZSBjaGFpbiA6XG5jb25zdCBnZXRXZWF0aGVyRm9yZWNhc3RQcm9taXNlQ2hhaW4gPSAoKSA9PiB7XG4gIGdldFdlYXRoZXJGb3JlY2FzdCgpXG4gICAgLnRoZW4oZ2V0V2VhdGhlckZvcmVjYXN0RGF5cylcbiAgICAudGhlbihnZXREZXNpcmVkV2VhdGhlckZvcmVjYXN0RGF0YSlcbiAgICAudGhlbihzZXRGb3JlY2FzdERlc2NyaXB0aW9uKVxuICAgIC50aGVuKHNldEZvcmVjYXN0RGF5KVxuICAgIC50aGVuKHNldEZvcmVjYXN0SWNvbik7XG59O1xuXG4vLyBnZXREZXNpcmVkV2VhdGhlckZvcmVjYXN0XG5jb25zdCBnZXRXZWF0aGVyRm9yZWNhc3REYXlzID0gKHdlYXRoZXJGb3JlY2FzdEpzb25EYXRhKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJGb3JlY2FzdERheXNBcnJheSA9IFtdO1xuICBjb25zdCBwYXR0ZXJuID0gL1xcZHs0fS1cXGR7Mn0tXFxkezJ9XFxzMTI6MDA6MDAvZ2k7XG4gIGNvbnN0IHsgbGlzdDogbGlzdEFycmF5IH0gPSB3ZWF0aGVyRm9yZWNhc3RKc29uRGF0YTtcblxuICBmb3IgKGNvbnN0IGxpc3Qgb2YgbGlzdEFycmF5KSB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGxpc3QuZHRfdHh0O1xuICAgIGlmIChwYXR0ZXJuLnRlc3QodGFyZ2V0RGF0ZSkpIHtcbiAgICAgIHdlYXRoZXJGb3JlY2FzdERheXNBcnJheS5wdXNoKGxpc3QpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gd2VhdGhlckZvcmVjYXN0RGF5c0FycmF5O1xufTtcblxuY29uc3QgZ2V0RGVzaXJlZFdlYXRoZXJGb3JlY2FzdERhdGEgPSAoZm9yZWNhc3REYXlzKSA9PiB7XG4gIGNvbnN0IGRlc2lyZWRXZWF0aGVyRm9yZWNhc3RBcnJheSA9IFtdO1xuICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERheXMpO1xuICBmb3IgKGNvbnN0IGRheSBvZiBmb3JlY2FzdERheXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXkpO1xuICAgIGNvbnN0IHtcbiAgICAgIGR0X3R4dDogZGF0ZSxcbiAgICAgIG1haW46IHsgdGVtcF9tYXgsIHRlbXBfbWluIH0sXG4gICAgICB3ZWF0aGVyOiBbeyBkZXNjcmlwdGlvbiwgaWNvbjogd2VhdGhlckljb24gfV0sXG4gICAgfSA9IGRheTtcbiAgICBkZXNpcmVkV2VhdGhlckZvcmVjYXN0QXJyYXkucHVzaCh7XG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRhdGUsXG4gICAgICB3ZWF0aGVySWNvbixcbiAgICAgIHRlbXBfbWF4LFxuICAgICAgdGVtcF9taW4sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRlc2lyZWRXZWF0aGVyRm9yZWNhc3RBcnJheTtcbn07XG5cbmNvbnN0IGdldERlc2lyZWRXZWF0aGVyRGF0YSA9ICh3ZWF0aGVySnNvbkRhdGEpID0+IHtcbiAgLy8gZGVzdHJ1Y3R1cmluZyBkZXNpcmVkIGRhdGEgZnJvbSBqc29uRGF0YSA6XG4gIGNvbnN0IHtcbiAgICBsb2NhdGlvbjogeyBsb2NhbHRpbWUsIGNvdW50cnksIG5hbWU6IGNpdHlOYW1lIH0sXG4gICAgY3VycmVudDoge1xuICAgICAgY29uZGl0aW9uOiB7IHRleHQ6IGNvbmRpdGlvbiwgaWNvbjogd2VhdGhlckljb24gfSxcbiAgICAgIHRlbXBfYyxcbiAgICAgIC8vIHRlbXBfZiAsXG4gICAgICBodW1pZGl0eSxcbiAgICAgIC8vIHdpbmRfbXBoLFxuICAgICAgd2luZF9rcGgsXG4gICAgfSxcbiAgfSA9IHdlYXRoZXJKc29uRGF0YTtcbiAgLy8gY3JlYXRlIGRlc2lyZWREYXRhIG9iamVjdCB1c2luZyBkZXN0cnVjdHVyZWQgZGF0YSA6XG4gIGNvbnN0IGRlc2lyZWRXZWF0aGVyZERhdGEgPSB7XG4gICAgbG9jYWx0aW1lLFxuICAgIGNvdW50cnksXG4gICAgY2l0eU5hbWUsXG4gICAgY29uZGl0aW9uLFxuICAgIHRlbXBfYyxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kX2twaCxcbiAgICB3ZWF0aGVySWNvbixcbiAgfTtcbiAgcmV0dXJuIGRlc2lyZWRXZWF0aGVyZERhdGE7XG59O1xuXG4vLyBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMTBkQDJ4LnBuZyA9PT0+IGFwaSBpY29uXG5cbi8vIGNvbnN0IHByb2Nlc3NKc29uRGF0YSA9IGFzeW5jIChkYXRhKSA9PiB7XG4vLyAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZGF0YS5qc29uKCk7XG4vLyAgIC8vIEZVVFVSRSBXRUFUSEVSIFNPTFZFRCA6XG4vLyAgIC8vIGxldCBhcnIgPSBbXTtcbi8vICAgLy8gZm9yIChjb25zdCBsaXN0IG9mIGpzb25EYXRhLmxpc3QpIHtcbi8vICAgLy8gICBhcnIucHVzaChsaXN0LmR0X3R4dCk7XG4vLyAgIC8vIH1cbi8vICAgLy8gYXJyLm1hcCgoZGF0ZSkgPT4ge1xuLy8gICAvLyAgIGNvbnN0IHBhdHRlcm4gPSAvXFxkezR9LVxcZHsyfS1cXGR7Mn1cXHMwMDowMDowMC9naTtcbi8vICAgLy8gICBjb25zb2xlLmxvZyhwYXR0ZXJuLnRlc3QoZGF0ZSkpO1xuLy8gICAvLyAgIGNvbnNvbGUubG9nKGRhdGUubWF0Y2gocGF0dGVybikpO1xuLy8gICAvLyB9KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhhcnIpO1xuLy8gICBjb25zb2xlLmxvZyhqc29uRGF0YSk7XG4vLyAgIHJldHVybiBqc29uRGF0YTtcbi8vIH07XG5cbi8vIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTVkMzhlYWI0NjgwMTQwNjk4OGQxNzA5NDkyNDI5MDEmcT0ke2NpdHlOYW1lfWBcbi8vIGpzb25EYXRhLmNvZCA9PT0gNDAwXG5cbi8vIGNvbnN0IHBhdHRlcm4yID0gL1xcZHs0fS1cXGR7Mn0tXFxkezJ9XFxzMDA6MDA6MDAvZ2k7XG4vLyBjb25zdCBzdHIyID0gXCIyMDI0LTAyLTA0IDAwOjAwOjAwXCI7XG4vLyBjb25zb2xlLmxvZyhwYXR0ZXJuMi50ZXN0KHN0cjIpKTtcbi8vIGNvbnNvbGUubG9nKHN0cjIubWF0Y2gocGF0dGVybjIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==