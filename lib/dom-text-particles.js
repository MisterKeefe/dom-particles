(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dom-text-particles", [], factory);
	else if(typeof exports === 'object')
		exports["dom-text-particles"] = factory();
	else
		root["dom-text-particles"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_particle_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_particle_manager */ \"./src/js/text_particle_manager.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/js/utilities.js\");\n\n\n\n_text_particle_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].utilities = _utilities__WEBPACK_IMPORTED_MODULE_1__;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_text_particle_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://dom-text-particles/./src/js/index.js?");

/***/ }),

/***/ "./src/js/text_particle.js":
/*!*********************************!*\
  !*** ./src/js/text_particle.js ***!
  \*********************************/
/*! exports provided: DEFAULT_PARTICLE_OPTIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_PARTICLE_OPTIONS\", function() { return DEFAULT_PARTICLE_OPTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextParticle; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/js/utilities.js\");\n\n\nconst DEFAULT_PARTICLE_OPTIONS = {\n  ttl: 1000,\n  contents: '.',\n  style: { display: 'inline-block', zIndex: 1 },\n  onCreate: () => {},\n  onUpdate: () => {},\n  onDestroy: () => {},\n  heading: false,\n  grid: false,\n}\n\nclass TextParticle {\n  constructor (options) {\n    Object.assign(this, {\n      ...DEFAULT_PARTICLE_OPTIONS,\n      ...options,\n      velocity: { ...{ x: 0, y: 0 }, ...options.velocity },\n      position: { ...{ x: 0, y: 0 }, ...options.position },\n      acceleration: { ...{ x: 0, y: 0 }, ...options.acceleration },\n      style: { ...DEFAULT_PARTICLE_OPTIONS.style, ...options.style }\n    });\n\n    this.elapsed = 0;\n    this.frameNumber = 0;\n    this.getTransform = this.grid ? this.getGridTransform : this.getTransform;\n\n    this.setContents(this.contents);\n\n    this.updateStyle(this.style);\n    this.nextProps = this.getSnapshot();\n    this.onCreate(this);\n    Object.assign(this.element.style, this.nextProps);\n  }\n\n  get alive () {\n    return !this.ttl || this.elapsed < this.ttl;\n  }\n\n  get lifeFrac () {\n    return this.elapsed / this.ttl;\n  }\n\n  buildProps (propObject) {\n    let fixedProps = {};\n    let dynamicProps = {};\n    Object.keys(propObject).map(propKey => {\n      let propValue = propObject[propKey];\n      if (Array.isArray(propValue)) {\n        if (propValue.length === 1){\n          // It's a one-element array, so it's still fixed\n          fixedProps[propKey] = propValue;\n        } else {\n          // dynamic property; calculate function for it\n          dynamicProps[propKey] = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"propValueToFunction\"])(propValue);\n        }\n      } else if (typeof styleValue === 'object') {\n        // Not implemented yet, but I guess per-property easing one day (>.<)\n      } else {\n        // Either a fixed value or a getter, either way, just assign it\n        fixedProps[propKey] = propValue;\n      }\n    });\n\n    this.dynamicProps = {...this.dynamicProps, ...dynamicProps};\n    this.fixedProps = {...this.fixedProps, ...fixedProps};\n  }\n\n  setContents (html) {\n    this.element.innerHTML = html;\n  }\n\n  setText (text) {\n    this.element.innerText = text;\n  }\n\n  setStyleText (text) {\n      this.element.style.cssText = text;\n  }\n\n  updateStyle(obj){\n    this.style = {...this.style, ...obj};\n    this.buildProps(obj);\n  }\n\n  getSnapshot () {\n    let snapshot = Object.keys(this.dynamicProps)\n      .reduce((a, b) => ({\n        ...a,\n        [b]: this.dynamicProps[b](this.lifeFrac)\n      }), {...this.fixedProps});\n\n    return {...snapshot, transform: this.getScaledTransform(snapshot) }\n  }\n\n  getScaledTransform(snapshot) {\n    let { rotation, scale, scaleX, scaleY, skew, skewX, skewY } = snapshot;\n    rotation = (this.heading && `${this.heading}rad`) || rotation || 0;\n    scale = scale || 1.0;\n    scaleX = scaleX || scale;\n    scaleY = scaleY || scale;\n    skew = skew || 0;\n    skewX = skewX || skew;\n    skewY = skewY || skew;\n\n    return this.getTransform(scaleX, scaleY, rotation, skewX, skewY);\n  }\n\n  getTransform (scaleX, scaleY, rotation, skewX, skewY) {\n    return `translate3d(${this.position.x}px, ${this.position.y}px, 0px) rotateZ(${rotation}) scale(${scaleX}, ${scaleY}) skew(${skewX}, ${skewY})`;\n  }\n\n  getGridTransform (scaleX, scaleY, rotation, skewX, skewY) {\n    let x = this.position.x - (this.position.x % this.grid);\n    let y = this.position.y - (this.position.y % this.grid);\n    return `translate3d(${x}px, ${y}px, 0px) rotateZ(${rotation}) scale(${scaleX}, ${scaleY}) skew(${skewX}, ${skewY})`;\n  }\n\n  update (f) {\n    // Housekeeping\n    this.elapsed += f * 1000;\n    // Standard motion update\n    this.velocity.x += this.acceleration.x * f;\n    this.velocity.y += this.acceleration.y * f;\n    this.position.x += this.velocity.x * f;\n    this.position.y += this.velocity.y * f;\n\n    // Get current props, call user onUpdate(), assign them\n    this.nextProps = this.getSnapshot();\n    this.onUpdate(this, f);\n    Object.assign(this.element.style, this.nextProps);\n\n    // Next frame\n    this.frameNumber ++;\n  }\n}\n\n//# sourceURL=webpack://dom-text-particles/./src/js/text_particle.js?");

/***/ }),

/***/ "./src/js/text_particle_emitter.js":
/*!*****************************************!*\
  !*** ./src/js/text_particle_emitter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextParticleEmitter; });\n/* harmony import */ var _text_particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_particle */ \"./src/js/text_particle.js\");\n\n\nconst DEFAULT_EMITTER_OPTIONS = {\n  maxEmissions: false,\n  ttl: false,\n  emitEvery: 500,\n  heading: 0,\n  particleOptions: { ..._text_particle__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_PARTICLE_OPTIONS\"] },\n  onCreate: () => {},\n  onUpdate: () => {},\n  onDestroy: () => {},\n  MAX_EMIT_PER_STEP: 16, /* Prevent thundering herds on tab switch */\n}\n\nclass TextParticleEmitter {\n  constructor (options) {\n    options = options || {};\n\n    Object.assign(this, {\n      ...DEFAULT_EMITTER_OPTIONS,\n      ...options,\n      position: { ...{ x: 0, y: 0 }, ...options.position },\n      velocity: { ...{ x: 0, y: 0 }, ...options.velocity },\n      acceleration: { ...{ x: 0, y: 0 }, ...options.acceleration },\n    });\n\n    this.manager = options.manager;\n    this.elapsed = 0;\n    this.emitted = 0;\n    this.frameNumber = 0;\n\n    this.onCreate(this);\n  }\n\n  get alive () {\n    if (this.maxEmissions && this.emitted >= this.maxEmissions) {\n      return false;\n    }\n    if (this.ttl && this.totalElapsed >= this.ttl) {\n      return false;\n    }\n    return true;\n  }\n\n  update (f) {\n    // position update\n    this.velocity.x += this.acceleration.x * f;\n    this.velocity.y += this.acceleration.y * f;\n    this.position.x += this.velocity.x * f;\n    this.position.y += this.velocity.y * f;\n\n    // emission update\n    this.elapsed += 1000 * f;\n    this.totalElapsed += 1000 * f;\n\n    if (this.elapsed >= this.emitEvery) {\n      let toEmit = Math.floor(this.elapsed / this.emitEvery);\n      toEmit = Math.min(toEmit, this.MAX_EMIT_PER_STEP);\n\n      if (this.maxEmissions) { toEmit = Math.min(this.maxEmissions - this.emitted, toEmit); }\n      this.elapsed = 0;\n\n      for(let i = 0; i < toEmit; i++){\n        let p = { ...{ x: 0, y: 0 }, ...this.particleOptions.position };\n        let pp = { x: this.position.x + p.x, y: this.position.y + p.y }\n\n        let v = { ...{ x: 0, y: 0 }, ...this.particleOptions.velocity };\n        let v_angle = Math.atan2(v.y, v.x);\n        let v_magna = Math.sqrt((v.x * v.x) + (v.y * v.y));\n\n        let vv = {\n          x: v_magna * Math.cos(v_angle + this.heading),\n          y: v_magna * Math.sin(v_angle + this.heading)\n        }\n\n        this.manager.addParticle({ ...this.particleOptions, position: pp, velocity: vv });\n        // emit particle\n        this.emitted ++;\n      }\n\n      this.frameNumber ++;\n    }\n\n    // user-provided update\n    this.onUpdate(this, f);\n  }\n}\n\n//# sourceURL=webpack://dom-text-particles/./src/js/text_particle_emitter.js?");

/***/ }),

/***/ "./src/js/text_particle_manager.js":
/*!*****************************************!*\
  !*** ./src/js/text_particle_manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextParticleManager; });\n/* harmony import */ var _text_particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_particle */ \"./src/js/text_particle.js\");\n/* harmony import */ var _text_particle_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_particle_emitter */ \"./src/js/text_particle_emitter.js\");\n\n\n\nconst DEFAULT_TPM_OPTIONS = {\n  max: 100,\n  preallocate: 10,\n  tagName: 'span',\n  autostart: true,\n};\n\nclass TextParticleManager {\n  constructor (options) {\n    Object.assign(this, { ...DEFAULT_TPM_OPTIONS, ...options });\n\n    this.container = this.container || document.querySelector('body');\n    this.container.style.position = 'relative';\n\n    this._pool = [];\n    this._particles = [];\n    this._emitters = [];\n\n    this.foldElement = document.createElement('div');\n    this.foldElement.className = 'text-particle-manager-reservoir';\n    this.foldElement.style.cssText = `position: absolute; width: 0; height: 0; top: 0; left: 0`;\n    this.reservoirCSS = `position: absolute; display: none; pointer-events: none; white-space: pre-wrap; transform: translate3d(0px, 0px, 0px); box-sizing: border-box;`\n\n    this._allocate(this.preallocate);\n    this.container.appendChild(this.foldElement);\n\n    this.frameStart = null;\n  }\n\n  addParticle (options) {\n    if (this._particles.length < this.max) {\n\n      let p = new _text_particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({...options, element: this._pop()});\n\n      this._particles.push(p);\n\n      if (!this.raf && this.autostart) {\n        this.start();\n      }\n      return p;\n    }\n  }\n\n  addEmitter (options) {\n    let e = new _text_particle_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({...options, manager: this})\n    this._emitters.push(e);\n    if (!this.raf && this.autostart){\n      this.start();\n    }\n    return e;\n  }\n\n  start () {\n    this.frameStart = performance.now();\n    this.raf = requestAnimationFrame(() => this._update(this.frameStart));\n  }\n\n  reset () {\n    if (this.raf) { cancelAnimationFrame(this.raf) }\n    this._particles.map(p => {\n      p.setContents('');\n      p.setStyleText(this.reservoirCSS);\n\n      this._push(p.element);\n    });\n    this._particles = [];\n\n    this._emitters.map(e => e.onDestroy(e));\n    this._emitters = [];\n  }\n\n  clearEmitters () {\n    this._emitters.map(e => e.onDestroy(e));\n    this._emitters = [];\n  }\n\n  _update(timestamp) {\n    let dt = timestamp - this.frameStart;\n    this.frameStart = timestamp;\n    let f = (dt/1000);\n\n    let particlesToDestroy = [];\n    this._particles = this._particles.filter(p => {\n      p.update(f);\n      if (!p.alive) { particlesToDestroy.push(p) }\n      return p.alive;\n    });\n\n    particlesToDestroy.map(p => {\n      // reset styles and return to pool\n      p.onDestroy(p);\n      p.setContents('');\n      p.setStyleText(this.reservoirCSS);\n\n      this._push(p.element);\n    });\n\n    let emittersToDestroy = [];\n    this._emitters = this._emitters.filter(e => {\n      e.update(f);\n      if (!e.alive) { emittersToDestroy.push(e); }\n      return e.alive;\n    });\n\n    emittersToDestroy.map(e => e.onDestroy(e));\n\n    if (this._emitters.length === 0 && this._particles.length === 0){\n      cancelAnimationFrame(this.raf);\n      this.raf = false;\n    } else {\n      requestAnimationFrame((t) => this._update(t));\n    }\n  }\n\n  _push (el) {\n    this._pool.push(el);\n  }\n\n  _pop (el) {\n    if (this._pool.length > 0){\n      return this._pool.pop();\n    } else {\n      return this._create();\n    }\n  }\n\n  _create () {\n    let element = document.createElement(this.tagName);\n    element.style.cssText = this.reservoirCSS;\n    this.foldElement.appendChild(element);\n    return element;\n  }\n\n  _allocate (n) {\n    if (this._pool.length < n){\n      for(let i = this._pool.length; i < n; i++){\n        this._push(this._create());\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack://dom-text-particles/./src/js/text_particle_manager.js?");

/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/*! exports provided: rgbToNumbers, rgbaToNumbers, hexToNumbers, valueToNumberAndUnit, tryGetValue, colourToCSSString, valueToCSSString, lerp, easeArray, transpose, propValueToFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToNumbers\", function() { return rgbToNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbaToNumbers\", function() { return rgbaToNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexToNumbers\", function() { return hexToNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"valueToNumberAndUnit\", function() { return valueToNumberAndUnit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tryGetValue\", function() { return tryGetValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colourToCSSString\", function() { return colourToCSSString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"valueToCSSString\", function() { return valueToCSSString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"easeArray\", function() { return easeArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transpose\", function() { return transpose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propValueToFunction\", function() { return propValueToFunction; });\n/* Useful regexes */\nconst RGB_PATTERN = /rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)/;\nconst RGBA_PATTERN = /rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*([01](?:\\.\\d+)*)\\s*\\)/;\nconst HEX_PATTERN = /#([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})/;\nconst NUMBER_AND_UNIT_PATTERN = /(\\d+\\.\\d+|\\d+)([a-z]+)?/;\n\n/* CSS to internal format import / export */\n\nconst rgbToNumbers = (string) => {\n  try {\n    let [_, r, g, b] = RGB_PATTERN.exec(string);\n    return [...[r, g, b].map(v => parseInt(v)), 1.0];\n  }\n  catch (err){\n    console.warn(`Invalid RGB value: ${string}`);\n    return false;\n  }\n}\n\nconst rgbaToNumbers = (string) => {\n  try {\n    let [_, r, g, b, a] = RGBA_PATTERN.exec(string);\n    return [...[r, g, b].map(v => parseInt(v)), parseFloat(a)]\n  }\n  catch (err){\n    console.warn(`Invalid RGBA value: ${string}`);\n    return false;\n  }\n}\n\nconst hexToNumbers = (string) => {\n  try {\n    let [_, r, g, b] = HEX_PATTERN.exec(string);\n    return [...[r, g, b].map(x => parseInt(x, 16) * ((x.length === 1) ? 0x11 : 0x1)), 1.0];\n  }\n  catch (err) {\n    console.warn(`Invalid hex value: ${string}`);\n    return false;\n  }\n}\n\nconst valueToNumberAndUnit = (string) => {\n  try {\n    let [_, num, unit] = NUMBER_AND_UNIT_PATTERN.exec(string);\n    return [parseFloat(num), unit || '']\n  }\n  catch (err) {\n    console.warn(`Invalid CSS unit string: ${string}`);\n    return false;\n  }\n}\n\nconst tryGetValue = (string) => {\n  switch(string[0]){\n    case '#':\n      return hexToNumbers(string);\n    case 'r':\n      return (string[3] === 'a' ? rgbaToNumbers : rgbToNumbers)(string);\n    default:\n      return valueToNumberAndUnit(string);\n  }\n}\n\nconst colourToCSSString = ([r, g, b, a]) => `rgba(${r}, ${g}, ${b}, ${a})`;\nconst valueToCSSString = (val, unit) => `${val}${unit}`;\n\n/* Easing functions */\n\nconst lerp = (a, b, frac) => a + ((b - a) * frac);\n\nconst easeArray = (array, easeFn, frac) => {\n  let total = frac * (array.length - 1);\n  let start = Math.min(Math.floor(total), array.length - 1);\n  let end = Math.min(start + 1, array.length - 1);\n  return easeFn(array[start], array[end], total % 1);\n}\n\n/* Property calculation function-generation functions */\n\nconst transpose = (array) => {\n  return array[0].map((_, i) => array.map(r => r[i]));\n}\n\nconst propValueToFunction = (propValue) => {\n  let k = propValue.map(s => tryGetValue(s));\n  if (k[0].length === 2){\n    // CSS unit property (either like '12px' or like '1.0'\n    let unit = k[0][1];\n    let values = k.map(v => v[0]);\n    return (frac) => valueToCSSString(easeArray(values, lerp, frac), unit)\n  } else {\n    // Colour in [[r, g, b, a],...] format\n    let k_t = transpose(k);\n    return (frac) => colourToCSSString(k_t.map(c => easeArray(c, lerp, frac)))\n  }\n}\n\n//# sourceURL=webpack://dom-text-particles/./src/js/utilities.js?");

/***/ })

/******/ })["default"];
});