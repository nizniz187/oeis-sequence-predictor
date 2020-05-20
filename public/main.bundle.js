/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "D:\\Work\\Own\\sequence-predictor\\public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/methods.js */ \"./src/math/methods.js\");\n\r\n\r\nconst resultQuery = document.querySelector('#resultQuery');\r\nconst resultPrediction = document.querySelector('#resultPrediction');\r\n\r\ndocument.querySelector('#btnPredict').addEventListener('click', predictHandler);\r\n\r\nfunction predictHandler() {\r\n  let input = document.querySelector('#inputSequence');\r\n  let seq = parseSequence(input.value);\r\n  if(!Array.isArray(seq) || seq.length === 0) {\r\n    showResult(input.value);\r\n    return;\r\n  }\r\n\r\n  let { query, prediction } = predictSequence(seq);\r\n  showResult(query, prediction);\r\n}\r\n\r\nfunction parseSequence(value) {\r\n  if(typeof value !== 'string') { return []; }\r\n\r\n  return value.trim().split(' ');\r\n}\r\n\r\nfunction predictSequence(seq) {\r\n  if(!Array.isArray(seq)) { return { query: seq }; }\r\n  \r\n  let prediction = null;\r\n  for(let name in _math_methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n    let result = _math_methods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name].predict(seq);\r\n    if(Array.isArray(result)) { \r\n      prediction = result;\r\n      break;  \r\n    }\r\n  }\r\n  return { query: seq, prediction };\r\n}\r\n\r\nfunction showResult(query, prediction) {\r\n  resultQuery.innerText = query;\r\n  resultPrediction.innerText = prediction;\r\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/math/SequenceMethod.js":
/*!************************************!*\
  !*** ./src/math/SequenceMethod.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SequenceMethod; });\nclass SequenceMethod {\r\n  constructor({ name, matcher } = {}) {\r\n    if(typeof matcher !== 'function') {\r\n      throw new Error('Invalid arguments.');\r\n    }\r\n\r\n    this.name = name;\r\n    this.matcher = matcher;\r\n  }\r\n\r\n  getPredictResult(seq, predictor) {\r\n    if(!Array.isArray(seq) || typeof predictor !== 'function') {\r\n      return null;\r\n    }\r\n\r\n    let last = seq[seq.length - 1];\r\n    let result = [];\r\n    for(let i = 0; i < 10; i++) {\r\n      let n = predictor(last);\r\n      last = n;\r\n      result.push(n);\r\n    }\r\n    return result;\r\n  }\r\n  predict(seq) {\r\n    seq = this.normalizeSequence(seq);\r\n    let { isMatch, predictor } = this.matcher(seq);\r\n\r\n    if(isMatch) {\r\n      return this.getPredictResult(seq, predictor);\r\n    } else {\r\n      return null;\r\n    }\r\n  }\r\n  normalizeSequence(seq) {\r\n    if(!Array.isArray(seq)) { return []; }\r\n    \r\n    return seq.map(n => {\r\n      try {\r\n        return parseInt(n);\r\n      } catch(e) {\r\n        return 0;\r\n      }\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/math/SequenceMethod.js?");

/***/ }),

/***/ "./src/math/methods.js":
/*!*****************************!*\
  !*** ./src/math/methods.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SequenceMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SequenceMethod.js */ \"./src/math/SequenceMethod.js\");\n\r\n\r\nconst methods = {};\r\nmethods.natural = new _SequenceMethod_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  name: 'natural',\r\n  matcher: seq => {\r\n    let diff;\r\n    return {\r\n      isMatch: seq.every((n, index, array) => {\r\n        if(index === 0) { return true; }\r\n        \r\n        if(diff === undefined) { diff = n - array[index - 1]; }\r\n        return n - array[index - 1] === diff;\r\n      }),\r\n      predictor: n => n + diff\r\n    }\r\n  }\r\n});\r\nmethods.natural = new _SequenceMethod_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  name: 'natural',\r\n  matcher: seq => {\r\n    let diff;\r\n    return {\r\n      isMatch: seq.every((n, index, array) => {\r\n        if(index === 0) { return true; }\r\n        \r\n        if(diff === undefined) { diff = n - array[index - 1]; }\r\n        return n - array[index - 1] === diff;\r\n      }),\r\n      predictor: n => n + diff\r\n    }\r\n  }\r\n});\r\nmethods.power2 = new _SequenceMethod_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  name: 'power',\r\n  matcher: seq => {\r\n    let power;\r\n    return {\r\n      isMatch: seq.every((n, index, array) => {\r\n        if(index === 0) { return true; }\r\n        \r\n        let last = array[index - 1];\r\n        if(power === undefined) { power = n / last; }\r\n        return n = last * power;\r\n      }),\r\n      predictor: n => n * power\r\n    }\r\n  }\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (methods);\n\n//# sourceURL=webpack:///./src/math/methods.js?");

/***/ })

/******/ });