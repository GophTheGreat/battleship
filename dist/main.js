/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\nbody{\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.middle {\n  height: 80%;\n  width: 80%;\n  display: flex;\n  justify-self: center;\n}\n\n#gridContainer {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 100%;\n  height: 800px;\n  width: 1800px;\n  justify-items: center;\n}\n\n.cell {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer {\n  width: 100%;\n  background-color: black;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#git {\n  height: 50px; \n  margin-right: 20px;\n}\n\n#credit {\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: lightgray;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://battleship/./src/main.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   handleInput: () => (/* binding */ handleInput)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* eslint-disable no-loop-func */\n/* eslint-disable no-param-reassign */\n\n\n\n\n// Logical grids where all the data is stored\nlet humGrid;\nlet cpuGrid;\n\n// Visual grids which just reflect the logical grids\nlet humGridVisual;\nlet cpuGridVisual;\n\nlet shipPlacementOrientation = 'Vertical';\n\nconst humGridHTML = document.getElementById('grid1');\nconst cpuGridHTML = document.getElementById('grid2');\n\nlet gamestate = null;\nlet shipLength = 3;\nlet shipsRemaining = 5;\n// const gamestates = ['pregame', 'playerPlaceShip', 'cpuPlaceShip', 'playerTurn', 'cpuTurn', 'playerVictory', 'cpuVictory'];\n\n// Updates the visuals like when ships are placed, hit, or sunk\nfunction updateVisualGrid(visualGrid, logicalGrid) {\n  console.log('updating visuals');\n  // console.log(`Current grid is ${logicalGrid.grid}`);\n  for (let i = 0; i < logicalGrid.length; i += 1) {\n    for (let j = 0; j < logicalGrid.width; j += 1) {\n      visualGrid[i][j].innerHTML = logicalGrid.grid[i][j];\n    }\n  }\n}\n\nfunction handleInput(e) {\n  const cell = e.target;\n  const coordinate = JSON.parse(cell.getAttribute('data-position'));\n  console.log(coordinate);\n  // depending on the game's state\n  // do stuff with the input\n  if (gamestate === 'playerPlaceShip' && cell.getAttribute('data-boardtype') === 'hum') {\n    humGrid.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipLength), coordinate, shipPlacementOrientation);\n    updateVisualGrid(humGridVisual, humGrid);\n  }\n\n  if (gamestate === 'playerTurn' && cell.getAttribute('data-boardtype') === 'cpu') {\n    console.log(cpuGrid.receiveAttack(JSON.parse(coordinate)));\n    updateVisualGrid(humGridVisual, humGrid);\n    updateVisualGrid(cpuGridVisual, cpuGrid);\n  }\n}\n\nfunction previewShipHighlightHelperOn(cell) {\n  cell.style.backgroundColor = 'gold';\n}\n\nfunction previewShipHighlightHelperOff(cell) {\n  cell.style.backgroundColor = 'white';\n}\n\nfunction previewShip(e) {\n  // First figure out mathematically which cells to draw the preview on\n  // If the preview is invalid, don't draw it\n  // If it's valid draw it\n  const cell = e.target;\n  const coordinate = JSON.parse(cell.getAttribute('data-position'));\n  const row = coordinate[0];\n  const column = coordinate[1];\n  const childID = row * humGrid.length + column;\n  // The following is for calculating spillover\n  // It's just so we can use the same calculation\n  // as the normal childID\n  const childVertCalc = column * humGrid.width + row;\n\n  console.log(`Firing on on ${coordinate}`);\n\n  // Spillover and protection for the preview\n  switch (shipPlacementOrientation) {\n    case 'Horizontal':\n      if ((childID % humGrid.length) + shipLength <= humGrid.length && gamestate === 'playerPlaceShip') {\n        for (let i = 0; i < shipLength; i += 1) {\n          console.log(`${row * humGrid.length + column + i} is on`);\n          const ney = humGridHTML.childNodes[childID + i];\n          previewShipHighlightHelperOn(ney);\n        }\n      }\n      break;\n    case 'Vertical':\n      if ((childVertCalc % humGrid.width) + shipLength <= humGrid.width && gamestate === 'playerPlaceShip') {\n        for (let i = 0; i < shipLength; i += 1) {\n          // console.log(row * humGrid.length);\n          console.log(`${row * i * humGrid.length + column} is on`);\n          const ney = humGridHTML.childNodes[childID + (i * humGrid.width)];\n          previewShipHighlightHelperOn(ney);\n        }\n      }\n      break;\n    default:\n      break;\n  }\n}\n\nfunction previewShipOff(e) {\n  const cell = e.target;\n  const coordinate = JSON.parse(cell.getAttribute('data-position'));\n  const row = coordinate[0];\n  const column = coordinate[1];\n  const childID = row * humGrid.length + column;\n  // The following is for calculating spillover\n  // It's just so we can use the same calculation\n  // as the normal childID\n  const childVertCalc = column * humGrid.width + row;\n  console.log(`Firing off on ${coordinate}`);\n\n  // Spillover and protection for the preview\n  switch (shipPlacementOrientation) {\n    case 'Horizontal':\n      if ((childID % humGrid.length) + shipLength <= humGrid.length && gamestate === 'playerPlaceShip') {\n        for (let i = 0; i < 3; i += 1) {\n          console.log(`${row * humGrid.length + column + i} is off`);\n          const ney = humGridHTML.childNodes[childID + i];\n          previewShipHighlightHelperOff(ney);\n        }\n      }\n      break;\n    case 'Vertical':\n      if ((childVertCalc % humGrid.width) + shipLength <= humGrid.width && gamestate === 'playerPlaceShip') {\n        for (let i = 0; i < shipLength; i += 1) {\n          // console.log(row * humGrid.length);\n          console.log(`${row * i * humGrid.length + column} is on`);\n          const ney = humGridHTML.childNodes[childID + (i * humGrid.width)];\n          previewShipHighlightHelperOff(ney);\n        }\n      }\n      break;\n    default:\n      break;\n  }\n}\n\nfunction makeGrid(gridHTML, logicalGrid) {\n  const visualGrid = [];\n\n  // The magic number should be the width of the grid on the page\n  const magic = 700;\n  const cellLength = magic / logicalGrid.length;\n  const cellWidth = magic / logicalGrid.width;\n\n  for (let i = 0; i < logicalGrid.length; i += 1) {\n    visualGrid[i] = [];\n    for (let j = 0; j < logicalGrid.width; j += 1) {\n      visualGrid[i][j] = null;\n      visualGrid[i][j] = document.createElement('div');\n      const cell = visualGrid[i][j];\n      cell.style.border = '2px solid darkgrey';\n      cell.className = 'cell';\n      cell.setAttribute('data-boardtype', 'cpu');\n      cell.setAttribute('data-position', `[${i}, ${j}]`);\n      cell.addEventListener('click', handleInput);\n      // cell.addEventListener('mouseover', previewShip);\n      // cell.addEventListener('mouseout', previewShipOff);\n      cell.addEventListener('mouseover', (event) => {\n        if (gamestate === 'playerTurn') { event.target.style.backgroundColor = 'red'; }\n      });\n      cell.addEventListener('mouseout', (event) => {\n        event.target.style.backgroundColor = 'white';\n      });\n      gridHTML.appendChild(cell);\n      // set up the cells to listen for input\n      // cell.addEventListener('click', setPos);\n      // cell.setAttribute('data-position', `[${i}, ${j}]`);\n    }\n  }\n  gridHTML.style.display = 'grid';\n  gridHTML.style.gridTemplateColumns = `repeat(${logicalGrid.length}, 1fr)`;\n  gridHTML.style.gridTemplateRows = `repeat(${logicalGrid.width}, 1fr)`;\n  gridHTML.style.width = `${logicalGrid.length * (cellLength + 2 * 2)}px`;\n  gridHTML.style.height = `${logicalGrid.width * (cellWidth + 2 * 2)}px`;\n  console.log(visualGrid);\n  return visualGrid;\n}\n\nfunction makePlayerGrid(gridHTML, logicalGrid) {\n  const grid = makeGrid(gridHTML, logicalGrid);\n  grid.forEach((array) => {\n    array.forEach((cell) => {\n      cell.addEventListener('mouseover', previewShip);\n      cell.addEventListener('mouseout', previewShipOff);\n      cell.setAttribute('data-boardtype', 'hum');\n    });\n  });\n  return grid;\n}\n\nfunction deleteChildren(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nfunction resetGame() {\n  // THE PLAN\n  // 1. Clear existing gameboards\n  // 2. Reset buttons and other UI elements\n  // 3. Initiate new gameboards\n  // 4. Begin in \"placeship\" phase\n  // END PLAN\n\n  // 1. Clear existing gameboards\n  const grids = Array.from(document.getElementsByClassName('grid'));\n  grids.forEach(deleteChildren);\n\n  // 2. Reset buttons and other UI elements\n  deleteChildren(document.getElementById('buttonContainer'));\n\n  // Initiate placement buttons\n  const buttonContainer = document.getElementById('buttonContainer');\n  const verticalButton = document.createElement('button');\n  const horizontalButton = document.createElement('button');\n\n  verticalButton.id = 'verticalButton';\n  horizontalButton.id = 'horizontalButton';\n  verticalButton.className = 'placementButton';\n  horizontalButton.className = 'placementButton';\n  verticalButton.innerHTML = 'Vertical Placement';\n  horizontalButton.innerHTML = 'Horizontal Placement';\n\n  verticalButton.addEventListener('click', () => {\n    shipPlacementOrientation = 'Vertical';\n    console.log(shipPlacementOrientation);\n  });\n  buttonContainer.appendChild(verticalButton);\n\n  horizontalButton.addEventListener('click', () => {\n    shipPlacementOrientation = 'Horizontal';\n    console.log(shipPlacementOrientation);\n  });\n  buttonContainer.appendChild(horizontalButton);\n\n  // 3. Initiate new gameboards\n  const playerHum = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(8, 8, 'human');\n  humGrid = playerHum.gameboard;\n  playerHum.isTurn = true;\n  const playerCPU = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(8, 8, 'cpu');\n  cpuGrid = playerCPU.gameboard;\n\n  humGridVisual = makePlayerGrid(humGridHTML, humGrid);\n  cpuGridVisual = makeGrid(cpuGridHTML, cpuGrid);\n\n  // 4. Begin in \"placeship\" phase\n  gamestate = 'playerPlaceShip';\n  console.log(gamestate);\n\n  // Prompt the player for to make a ship\n\n  cpuGrid.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5), [0, 0], 'vertical');\n  cpuGrid.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4), [0, 1], 'vertical');\n  cpuGrid.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3), [3, 3], 'horizontal');\n  cpuGrid.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3), [2, 3], 'horizontal');\n  cpuGrid.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2), [6, 6], 'horizontal');\n\n  updateVisualGrid(humGridVisual, humGrid);\n  updateVisualGrid(cpuGridVisual, cpuGrid);\n\n  // Start the game loop\n}\n\n// Set up a new game\n// Create the gameboard\n// Prompt player for 5 ships\n// Place 5 ships for the opponent\n// Start the game loop\nfunction init() {\n  // Initiate game state\n  gamestate = 'pregame';\n\n  // Prompt player to start\n  // do something to make the player hit a button to start the game\n  const startButton = document.createElement('button');\n  startButton.innerHTML = 'Start game!';\n  startButton.addEventListener('click', resetGame);\n  const buttonContainer = document.getElementById('buttonContainer');\n  buttonContainer.appendChild(startButton);\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction Gameboard(length, width) {\n  const gameboard = {\n    length,\n    width,\n    grid: [],\n    shipIDs: [],\n    ships: [],\n\n    initGrid() {\n      // We push nulls into each grid space to mark them empty\n      for (let i = 0; i < this.length; i += 1) {\n        const row = [];\n        for (let j = 0; j < this.width; j += 1) {\n          row.push(null);\n        }\n        this.grid.push(row);\n      }\n    },\n\n    placeShip(ship, position, orientation) {\n      const row = position[0];\n      const column = position[1];\n      // Check validity of position\n      if (this.checkValidity(position) === 'Invalid position') {\n        return 'Invalid position';\n      }\n\n      // Store the ship object\n      this.ships.push(ship);\n\n      let id;\n\n      // Increment shipIDs\n      if (this.shipIDs.length !== 0) {\n        const last = this.shipIDs.length - 1;\n        this.shipIDs.push(this.shipIDs[last] + 1);\n        id = this.shipIDs[this.shipIDs.length - 1];\n      } else {\n        this.shipIDs.push(0);\n        id = 0;\n      }\n\n      // Place the ship (horizontal)\n      if (orientation === 'Horizontal') {\n        for (let i = 0; i < ship.length; i += 1) {\n          this.grid[row][column + i] = id;\n        }\n      // Place the ship (vertical)\n      } else {\n        for (let i = 0; i < ship.length; i += 1) {\n          this.grid[row + i][column] = id;\n        }\n      }\n      return '';\n    },\n\n    checkValidity(position) {\n      // Update me to check if the position overlaps an existing ship\n      const column = position[0];\n      const row = position[1];\n      if (typeof column !== 'number' || typeof row !== 'number') {\n        return 'Invalid position';\n      }\n      if (column < 0 || row < 0) {\n        return 'Invalid position';\n      }\n      if (column > this.length || row > this.width) {\n        return 'Invalid position';\n      }\n      return '';\n    },\n\n    receiveAttack(position) {\n      if (this.checkValidity(position) === 'Invalid position') {\n        return 'Invalid position';\n      }\n      const column = position[0];\n      const row = position[1];\n      const loc = this.grid[column][row];\n      // Filter through unmarked grids, marked grids, and ships\n      if (loc !== null) {\n        if (loc === 'miss' || loc === 'hit') {\n          // Invalid attack. Have them redo the attack\n          return 'Invalid attack';\n        }\n        // Else we have a ship and its ID is the mark\n        this.ships[loc].hit();\n        // Check after a hit if all ships have been sunk\n        if (this.checkAllDead() === true) {\n          this.grid[column][row] = 'hit';\n          return `Hit on ${this.shipIDs[loc]}! All ships sunk!`;\n        }\n        this.grid[column][row] = 'hit';\n        return `Hit on ${this.shipIDs[loc]}!`;\n      }\n      // Else paint a miss\n      this.grid[column][row] = 'miss';\n      return 'Miss';\n    },\n\n    checkAllDead() {\n      let allDead = false;\n      let deadCount = 0;\n      const shipCount = this.ships.length;\n      this.ships.forEach((e) => {\n        if (e.isSunk()) { deadCount += 1; }\n      });\n      if (deadCount === shipCount) {\n        allDead = true;\n      }\n      return allDead;\n    },\n  };\n\n  gameboard.initGrid();\n\n  return gameboard;\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\nfunction Player(boardlength, boardwidth, humanOrCPU) {\n  const player = {\n    gameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boardlength, boardwidth),\n    isTurn: false,\n    humanOrCPU,\n  };\n\n  return player;\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\n  const ship = {\n    length,\n    hits: 0,\n\n    hit() { this.hits += 1; },\n\n    isSunk() { return this.hits >= this.length; },\n  };\n  return ship;\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;