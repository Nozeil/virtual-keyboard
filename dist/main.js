/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scripts/_insertElem.js":
/*!************************************!*\
  !*** ./src/scripts/_insertElem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementTemplate)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ElementTemplate = /*#__PURE__*/function () {
  function ElementTemplate(name, className, parentElement) {
    _classCallCheck(this, ElementTemplate);

    this.name = name;
    this.className = className;
    this.parentElement = parentElement;
  }

  _createClass(ElementTemplate, [{
    key: "createElement",
    value: function createElement(name, className) {
      var ELEMENT = document.createElement(name);
      ELEMENT.className = className;
      return ELEMENT;
    }
  }, {
    key: "appendElement",
    value: function appendElement() {
      var CREATED_ELEMENT = this.createElement(this.name, this.className);
      this.parentElement.append(CREATED_ELEMENT);
      return CREATED_ELEMENT;
    }
  }, {
    key: "insertText",
    value: function insertText(text) {
      var ELEMENT = this.appendElement();
      ELEMENT.textContent = text;
      return ELEMENT;
    }
  }]);

  return ElementTemplate;
}();



/***/ }),

/***/ "./src/scripts/_keyboardRows.js":
/*!**************************************!*\
  !*** ./src/scripts/_keyboardRows.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _insertElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_insertElem */ "./src/scripts/_insertElem.js");

var WRAPPER = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'wrapper', document.body).appendElement();
var MAIN = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('main', 'main', WRAPPER).appendElement();
var SECTION = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('section', 'section', MAIN).appendElement();
new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('h1', 'section__title', SECTION).insertText('Virtual keyboard');
var FORM = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('form', 'section__form form', SECTION).appendElement();
var TEXTAREA = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('textarea', 'form__textarea', FORM).appendElement();
new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'section__info', SECTION).insertText('OS Windows. Switch language buttons: Left Ctr + space.');
var KEYBOARD = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'section__keyboard keyboard', SECTION).appendElement();
var buttons = [];
var isLowerCase = true;
var currentLanguage = localStorage.getItem('currentLanguage') ? localStorage.getItem('currentLanguage') : 'RU';
var isCtrClicked = false;
var isSpaceClicked = false;
var ROW_1 = [{
  code: 'Backquote',
  key: 'ё',
  enKey: '`'
}, {
  code: 'Digit1',
  key: '1',
  shift: '!'
}, {
  code: 'Digit2',
  key: '2',
  shift: '"',
  shiftEn: '@'
}, {
  code: 'Digit3',
  key: '3',
  shift: '№',
  shiftEn: '#'
}, {
  code: 'Digit4',
  key: '4',
  shift: ';',
  shiftEn: '$'
}, {
  code: 'Digit5',
  key: '5',
  shift: '%',
  shiftEn: '%'
}, {
  code: 'Digit6',
  key: '6',
  shift: ':',
  shiftEn: '^'
}, {
  code: 'Digit7',
  key: '7',
  shift: '?',
  shiftEn: '&'
}, {
  code: 'Digit8',
  key: '8',
  shift: '*'
}, {
  code: 'Digit9',
  key: '9',
  shift: '('
}, {
  code: 'Digit0',
  key: '0',
  shift: ')'
}, {
  code: 'Minus',
  key: '-',
  shift: '_'
}, {
  code: 'Equal',
  key: '=',
  shift: '+'
}, {
  code: 'Backspace',
  key: 'Backspace'
}];
var ROW_2 = [{
  code: 'Tab',
  key: 'Tab'
}, {
  code: 'KeyQ',
  key: 'й',
  enKey: 'q'
}, {
  code: 'KeyW',
  key: 'ц',
  enKey: 'w'
}, {
  code: 'KeyE',
  key: 'у',
  enKey: 'e'
}, {
  code: 'KeyR',
  key: 'к',
  enKey: 'r'
}, {
  code: 'KeyT',
  key: 'е',
  enKey: 't'
}, {
  code: 'KeyY',
  key: 'н',
  enKey: 'y'
}, {
  code: 'KeyU',
  key: 'г',
  enKey: 'u'
}, {
  code: 'KeyI',
  key: 'ш',
  enKey: 'i'
}, {
  code: 'KeyO',
  key: 'щ',
  enKey: 'o'
}, {
  code: 'KeyP',
  key: 'з',
  enKey: 'p'
}, {
  code: 'BracketLeft',
  key: 'х',
  enKey: '[',
  shiftEn: '{'
}, {
  code: 'BracketRight',
  key: 'ъ',
  enKey: ']',
  shiftEn: '}'
}, {
  code: 'Backslash',
  key: '\\',
  shift: '/',
  shiftEn: '|'
}, {
  code: 'Delete',
  key: 'Delete'
}];
var ROW_3 = [{
  code: 'CapsLock',
  key: 'CapsLock'
}, {
  code: 'KeyA',
  key: 'ф',
  enKey: 'a'
}, {
  code: 'KeyS',
  key: 'ы',
  enKey: 's'
}, {
  code: 'KeyD',
  key: 'в',
  enKey: 'd'
}, {
  code: 'KeyF',
  key: 'а',
  enKey: 'f'
}, {
  code: 'KeyG',
  key: 'п',
  enKey: 'g'
}, {
  code: 'KeyH',
  key: 'р',
  enKey: 'h'
}, {
  code: 'KeyJ',
  key: 'о',
  enKey: 'j'
}, {
  code: 'KeyK',
  key: 'л',
  enKey: 'k'
}, {
  code: 'KeyL',
  key: 'д',
  enKey: 'l'
}, {
  code: 'Semicolon',
  key: 'ж',
  enKey: ';',
  shiftEn: ':'
}, {
  code: 'Quote',
  key: 'э',
  enKey: "'",
  shiftEn: '"'
}, {
  code: 'Enter',
  key: 'Enter'
}];
var ROW_4 = [{
  code: 'ShiftLeft',
  key: 'Shift'
}, {
  code: 'KeyZ',
  key: 'я',
  enKey: 'z'
}, {
  code: 'KeyX',
  key: 'ч',
  enKey: 'x'
}, {
  code: 'KeyC',
  key: 'с',
  enKey: 'c'
}, {
  code: 'KeyV',
  key: 'м',
  enKey: 'v'
}, {
  code: 'KeyB',
  key: 'и',
  enKey: 'b'
}, {
  code: 'KeyN',
  key: 'т',
  enKey: 'n'
}, {
  code: 'KeyM',
  key: 'ь',
  enKey: 'm'
}, {
  code: 'Comma',
  key: 'б',
  enKey: ',',
  shiftEn: '<'
}, {
  code: 'Period',
  key: 'ю',
  enKey: '.',
  shiftEn: '>'
}, {
  code: 'Slash',
  key: '/',
  shift: ',',
  shiftEn: '?'
}, {
  code: 'ArrowUp',
  key: '↑'
}, {
  code: 'ShiftRight',
  key: 'Shift'
}];
var ROW_5 = [{
  code: 'ControlLeft',
  key: 'Ctr'
}, {
  code: 'MetaLeft',
  key: 'Win'
}, {
  code: 'AltLeft',
  key: 'Alt'
}, {
  code: 'Space',
  key: ' '
}, {
  code: 'AltRight',
  key: 'Alt'
}, {
  code: 'ArrowLeft',
  key: '←'
}, {
  code: 'ArrowDown',
  key: '↓'
}, {
  code: 'ArrowRight',
  key: '→'
}, {
  code: 'ControlRight',
  key: 'Ctr'
}];
var BUTTONS_PROPERTIES = [].concat(ROW_1, ROW_2, ROW_3, ROW_4, ROW_5);
var _ref = [new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'keyboard__row', KEYBOARD).appendElement(), new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'keyboard__row', KEYBOARD).appendElement(), new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'keyboard__row', KEYBOARD).appendElement(), new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'keyboard__row', KEYBOARD).appendElement(), new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'keyboard__row', KEYBOARD).appendElement()],
    KEYBOARD_ROW_1 = _ref[0],
    KEYBOARD_ROW_2 = _ref[1],
    KEYBOARD_ROW_3 = _ref[2],
    KEYBOARD_ROW_4 = _ref[3],
    KEYBOARD_ROW_5 = _ref[4];
ROW_1.forEach(function (item) {
  var button = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('button', "keyboard__button ".concat(item.code), KEYBOARD_ROW_1).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'Backspace') {
    button.classList.add('keyboard__button_special');
  }

  buttons.push(button);
});
ROW_2.forEach(function (item) {
  var button = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('button', "keyboard__button ".concat(item.code), KEYBOARD_ROW_2).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'Tab' || item.code === 'Delete') {
    button.classList.add('keyboard__button_special');
  }

  buttons.push(button);
});
ROW_3.forEach(function (item) {
  var button = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('button', "keyboard__button ".concat(item.code), KEYBOARD_ROW_3).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'CapsLock' || item.code === 'Enter') {
    button.classList.add('keyboard__button_special');
  }

  buttons.push(button);
});
ROW_4.forEach(function (item) {
  var button = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('button', "keyboard__button ".concat(item.code), KEYBOARD_ROW_4).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') {
    button.classList.add('keyboard__button_special');
  }

  buttons.push(button);
});
ROW_5.forEach(function (item) {
  var button = new _insertElem__WEBPACK_IMPORTED_MODULE_0__["default"]('button', "keyboard__button ".concat(item.code), KEYBOARD_ROW_5).insertText(item.key);

  if (currentLanguage === 'EN' && item.enKey) {
    button.textContent = item.enKey;
  }

  if (item.code === 'ControlLeft' || item.code === 'ControlRight' || item.code === 'MetaLeft' || item.code === 'AltLeft' || item.code === 'AltRight') {
    button.classList.add('keyboard__button_special');
  }

  buttons.push(button);
});
document.addEventListener('keydown', function (event) {
  if (document.activeElement !== TEXTAREA) {
    buttons.forEach(function (item) {
      if (!item.classList.contains('keyboard__button_special') && item.classList.contains(event.code)) {
        console.log(item.textContent);
        TEXTAREA.value += item.textContent;
      }
    });
  }

  if (event.code === 'ControlLeft') {
    isCtrClicked = true;
  }

  if (event.code === 'Space') {
    isSpaceClicked = true;

    if (isCtrClicked && isSpaceClicked && currentLanguage === 'RU') {
      buttons.forEach(function (item) {
        BUTTONS_PROPERTIES.forEach(function (prop) {
          if (item.textContent.toLowerCase() === prop.key && prop.enKey) {
            item.textContent = '';
            item.textContent = isLowerCase ? prop.enKey : prop.enKey.toUpperCase();
          }
        });
      });
      currentLanguage = 'EN';
    } else if (isCtrClicked && isSpaceClicked && currentLanguage === 'EN') {
      buttons.forEach(function (item) {
        BUTTONS_PROPERTIES.forEach(function (prop) {
          if (item.textContent.toLowerCase() === prop.enKey) {
            item.textContent = '';
            item.textContent = isLowerCase ? prop.key : prop.key.toUpperCase();
          }
        });
      });
      currentLanguage = 'RU';
    }
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }

  if (event.code === 'CapsLock') {
    buttons.forEach(function (item) {
      if (!item.classList.contains('keyboard__button_special')) {
        item.textContent = isLowerCase ? item.textContent.toUpperCase() : item.textContent.toLowerCase();
      }
    });
    isLowerCase = !isLowerCase;
  }

  buttons.forEach(function (item) {
    if (item.classList.contains(event.code)) {
      item.classList.add('active-button');
    }
  });
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'ControlLeft') {
    isCtrClicked = false;
  }

  if (event.code === 'Space') {
    isSpaceClicked = false;
  }

  buttons.forEach(function (item) {
    if (item.classList.contains(event.code)) {
      item.classList.remove('active-button');
    }
  });
});
window.addEventListener('beforeunload', function () {
  localStorage.setItem('currentLanguage', currentLanguage);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n  color: #FFF7CD;\n  background-color: #151131;\n}\n\n.wrapper {\n  max-width: 1400px;\n  padding: 0 20px;\n  margin: 0 auto;\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  letter-spacing: 0.06em;\n}\n\n.section__info {\n  margin: 50px 0;\n}\n\n.section__keyboard {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 1050px;\n  padding: 10px;\n  border-radius: 15px;\n  background-color: #323232;\n  box-shadow: 0 0 3px 0px #000000;\n}\n\n.form {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.form__textarea {\n  width: 50%;\n  height: 200px;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  background-color: #FFF7CD;\n  outline: none;\n}\n\n.keyboard__row {\n  display: flex;\n  gap: 10px;\n}\n\n.keyboard__button {\n  width: 60px;\n  height: 50px;\n  font-size: 18px;\n  color: #FFF93E;\n  border: none;\n  outline: none;\n  user-select: none;\n  border-radius: 10px;\n  background-color: #404040;\n  box-shadow: 0 0 3px 0px #000000;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.keyboard__button:active {\n  background-color: #151131;\n}\n\n.keyboard__button_special {\n  background-color: #292929;\n}\n\n.active-button {\n  background-color: #151131;\n}\n\n.Backspace {\n  width: 140px;\n}\n\n.Delete, .Tab {\n  width: 65px;\n}\n\n.CapsLock {\n  width: 100px;\n}\n\n.Enter {\n  width: 170px;\n}\n\n.ShiftLeft, .ShiftRight {\n  width: 135px;\n}\n\n.Space {\n  width: 486px;\n}\n\n.ControlRight {\n  width: 64px;\n}", "",{"version":3,"sources":["webpack://./src/scss/vendors/_normalize.scss","webpack://./src/scss/style.scss","webpack://./src/scss/layout/_body.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/layout/_wrapper.scss","webpack://./src/scss/layout/_section.scss","webpack://./src/scss/layout/_form.scss","webpack://./src/scss/components/_textarea.scss","webpack://./src/scss/components/_keyboard-row.scss","webpack://./src/scss/components/_keyboard-buttons.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKC;EACC,iBAAA;EAAmB,MAAA;EACnB,8BAAA;EAAgC,MAAA;ACAlC;;ADGA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACFF;;ADKA;;EAAA;AAIA;EACE,cAAA;ACHF;;ADMA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;ACJF;;ADOA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA;EAAyB,MAAA;EACzB,SAAA;EAAW,MAAA;EACX,iBAAA;EAAmB,MAAA;ACHrB;;ADMA;;;EAAA;AAKA;EACE,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ACFlB;;ADKA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ACJF;;ADOA;;;EAAA;AAKA;EACE,mBAAA;EAAqB,MAAA;EACrB,0BAAA;EAA4B,MAAA;EAC5B,iCAAA;EAAmC,MAAA;ACFrC;;ADKA;;EAAA;AAIA;;EAEE,mBAAA;ACHF;;ADMA;;;EAAA;AAKA;;;EAGE,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ACFlB;;ADKA;;EAAA;AAIA;EACE,cAAA;ACHF;;ADMA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ACJF;;ADOA;EACE,eAAA;ACJF;;ADOA;EACE,WAAA;ACJF;;ADOA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;ACNF;;ADSA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA;EAAsB,MAAA;EACtB,eAAA;EAAiB,MAAA;EACjB,iBAAA;EAAmB,MAAA;EACnB,SAAA;EAAW,MAAA;ACJb;;ADOA;;;EAAA;AAKA;;EACQ,MAAA;EACN,iBAAA;ACJF;;ADOA;;;EAAA;AAKA;;EACS,MAAA;EACP,oBAAA;ACJF;;ADOA;;EAAA;AAIA;;;;EAIE,0BAAA;ACLF;;ADQA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ACNF;;ADSA;;EAAA;AAIA;;;;EAIE,8BAAA;ACPF;;ADUA;;EAAA;AAIA;EACE,8BAAA;ACRF;;ADWA;;;;;EAAA;AAOA;EACE,sBAAA;EAAwB,MAAA;EACxB,cAAA;EAAgB,MAAA;EAChB,cAAA;EAAgB,MAAA;EAChB,eAAA;EAAiB,MAAA;EACjB,UAAA;EAAY,MAAA;EACZ,mBAAA;EAAqB,MAAA;ACHvB;;ADMA;;EAAA;AAIA;EACE,wBAAA;ACJF;;ADOA;;EAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;EAAA;AAKA;;EAEE,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;ACJd;;ADOA;;EAAA;AAIA;;EAEE,YAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,6BAAA;EAA+B,MAAA;EAC/B,oBAAA;EAAsB,MAAA;ACJxB;;ADOA;;EAAA;AAIA;EACE,wBAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,0BAAA;EAA4B,MAAA;EAC5B,aAAA;EAAe,MAAA;ACJjB;;ADOA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ACNF;;ADSA;;EAAA;AAIA;EACE,kBAAA;ACPF;;ADUA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ACTF;;ADYA;;EAAA;AAIA;EACE,aAAA;ACVF;;AC/UA;EACC,sBAAA;EACA,iCAAA;EACA,cCJa;EDKb,yBCNmB;AFwVpB;;AGxVA;EACC,iBAAA;EACA,eAAA;EACA,cAAA;AH2VD;;AI5VA;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;AJ+VD;;AI5VA;EACC,cAAA;AJ+VD;;AI5VA;EACC,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;AJ+VD;;AKtXA;EACC,WAAA;EACA,aAAA;EACA,uBAAA;ALyXD;;AM1XA;EACC,UAAA;EACA,aAAA;EACA,oBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBJPa;EIQb,aAAA;AN6XD;;AOtYA;EACC,aAAA;EACA,SAAA;APyYD;;AQzYA;EACC,WAAA;EACA,YAAA;EACA,eAAA;EACA,cNHmB;EMInB,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBNPc;EMQd,+BAAA;EACA,gBAAA;EACA,eAAA;AR4YD;AQ1YC;EACC,yBNjBkB;AF6ZpB;;AQxYA;EACC,yBNjBsB;AF4ZvB;;AQxYA;EACC,yBN1BmB;AFqapB;;AQxYA;EACC,YAAA;AR2YD;;AQxYA;EACC,WAAA;AR2YD;;AQpYA;EACC,YAAA;ARuYD;;AQpYA;EACC,YAAA;ARuYD;;AQpYA;EACC,YAAA;ARuYD;;AQhYA;EACC,YAAA;ARmYD;;AQhYA;EACC,WAAA;ARmYD","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n  color: #FFF7CD;\n  background-color: #151131;\n}\n\n.wrapper {\n  max-width: 1400px;\n  padding: 0 20px;\n  margin: 0 auto;\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  letter-spacing: 0.06em;\n}\n\n.section__info {\n  margin: 50px 0;\n}\n\n.section__keyboard {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 1050px;\n  padding: 10px;\n  border-radius: 15px;\n  background-color: #323232;\n  box-shadow: 0 0 3px 0px #000000;\n}\n\n.form {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.form__textarea {\n  width: 50%;\n  height: 200px;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  background-color: #FFF7CD;\n  outline: none;\n}\n\n.keyboard__row {\n  display: flex;\n  gap: 10px;\n}\n\n.keyboard__button {\n  width: 60px;\n  height: 50px;\n  font-size: 18px;\n  color: #FFF93E;\n  border: none;\n  outline: none;\n  user-select: none;\n  border-radius: 10px;\n  background-color: #404040;\n  box-shadow: 0 0 3px 0px #000000;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.keyboard__button:active {\n  background-color: #151131;\n}\n\n.keyboard__button_special {\n  background-color: #292929;\n}\n\n.active-button {\n  background-color: #151131;\n}\n\n.Backspace {\n  width: 140px;\n}\n\n.Delete, .Tab {\n  width: 65px;\n}\n\n.CapsLock {\n  width: 100px;\n}\n\n.Enter {\n  width: 170px;\n}\n\n.ShiftLeft, .ShiftRight {\n  width: 135px;\n}\n\n.Space {\n  width: 486px;\n}\n\n.ControlRight {\n  width: 64px;\n}","@use '../abstracts/variables';\r\n\r\nbody {\r\n\tbox-sizing: border-box;\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: variables.$color-light;\r\n\tbackground-color: variables.$color-dark-purple;\r\n}","$color-dark-purple: #151131;\r\n$color-light: #FFF7CD;\r\n$color-dark: #000000;\r\n$color-button-text: #FFF93E;\r\n$color-button: #404040;\r\n$color-special-button: #292929;",".wrapper {\r\n\tmax-width: 1400px;\r\n\tpadding: 0 20px;\r\n\tmargin: 0 auto;\r\n}","@use '../abstracts/variables';\r\n\r\n.section {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\theight: 100vh;\r\n\tletter-spacing: 0.06em;\r\n}\r\n\r\n.section__info {\r\n\tmargin: 50px 0;\r\n}\r\n\r\n.section__keyboard {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\twidth: 1050px;\r\n\tpadding: 10px;\r\n\tborder-radius: 15px;\r\n\tbackground-color: #323232;\r\n\tbox-shadow: 0 0 3px 0px variables.$color-dark;\r\n}",".form {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}","@use '../abstracts/variables';\r\n\r\n.form__textarea {\r\n\twidth:  50%;\r\n\theight: 200px;\r\n\tfont-family: inherit;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: variables.$color-light;\r\n\toutline: none;\r\n}",".keyboard__row {\r\n\tdisplay: flex;\r\n\tgap: 10px;\r\n}","@use '../abstracts/variables';\r\n\r\n.keyboard__button {\r\n\twidth: 60px;\r\n\theight: 50px;\r\n\tfont-size: 18px;\r\n\tcolor: variables.$color-button-text;\r\n\tborder: none;\r\n\toutline: none;\r\n\tuser-select: none;\r\n\tborder-radius: 10px;\r\n\tbackground-color: variables.$color-button;\r\n\tbox-shadow: 0 0 3px 0px variables.$color-dark;\r\n\ttransition: 0.3s;\r\n\tcursor: pointer;\r\n\r\n\t&:active {\r\n\t\tbackground-color: variables.$color-dark-purple;\r\n\t}\r\n}\r\n\r\n.keyboard__button_special {\r\n\tbackground-color: variables.$color-special-button;\r\n}\r\n\r\n.active-button {\r\n\tbackground-color: variables.$color-dark-purple;\r\n}\r\n\r\n.Backspace {\r\n\twidth: 140px;\r\n}\r\n\r\n.Delete {\r\n\twidth: 65px;\r\n}\r\n\r\n.Tab {\r\n\t@extend .Delete;\r\n}\r\n\r\n.CapsLock {\r\n\twidth: 100px;\r\n}\r\n\r\n.Enter {\r\n\twidth: 170px;\r\n}\r\n\r\n.ShiftLeft {\r\n\twidth: 135px\r\n}\r\n\r\n.ShiftRight {\r\n\t@extend .ShiftLeft;\r\n}\r\n\r\n.Space {\r\n\twidth: 486px;\r\n}\r\n\r\n.ControlRight {\r\n\twidth: 64px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _keyboardRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_keyboardRows */ "./src/scripts/_keyboardRows.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map