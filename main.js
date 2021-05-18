/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/style.scss?");

/***/ }),

/***/ "./src/aboutus-module.js":
/*!*******************************!*\
  !*** ./src/aboutus-module.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAboutUsContent\": function() { return /* binding */ loadAboutUsContent; }\n/* harmony export */ });\nconst main = document.querySelector('#container')\r\n\r\nconst aboutUs = (() => {\r\n\r\n\tconst title = document.createElement('h1')\r\n\ttitle.classList.add('title')\r\n\ttitle.textContent = 'Pizza Restaurant'\r\n\r\n\tconst nav = document.createElement('nav')\r\n\tfor (let i = 1; i <= 3; i++) {\r\n\t\tconst btn = document.createElement('button')\r\n\t\tbtn.dataset.index = i\r\n\t\tswitch(i) {\r\n\t\t\tcase 1:\r\n\t\t\tbtn.textContent = 'About Us'\r\n\t\t\tbreak\r\n\t\t\tcase 2:\r\n\t\t\tbtn.textContent = 'Menu'\r\n\t\t\tbreak\r\n\t\t\tcase 3:\r\n\t\t\tbtn.textContent = 'Contacts'\r\n\t\t\tbreak\r\n\t\t}\r\n\t\tnav.appendChild(btn)\r\n\t}\r\n\r\n\tconst content = document.createElement('div')\r\n\tcontent.classList.add('content')\r\n\tcontent.dataset.index = 1\r\n\r\n\tconst contentH1 = document.createElement('h1')\r\n\tcontentH1.textContent = 'Welcome to the pizza restaurant'\r\n\r\n\tconst contentImg = document.createElement('img')\r\n\tcontentImg.src = '../images/content1.jpg'\r\n\tcontentImg.alt = 'Freshly baked pizza'\r\n\tcontentImg.title = 'Pizza time'\r\n\r\n\tconst contentPara = document.createElement('p')\r\n\tcontentPara.textContent = \"Our pizzas are a combination of many top quality ingredients balanced with all the right spice in just the right proportions carefully baked in extremely hot ovens. All done under the watchful eye of our workers. We demand that every pizza that comes out is baked the same as the previous one and the one before that. The intriguingly tangy and spicy flavors that seem to always taste a little different but always exceptional.\"\r\n\r\n\tconst contentSpan = document.createElement('span')\r\n\tcontentSpan.textContent = 'Welcome!'\r\n\r\n\tcontent.appendChild(contentH1)\r\n\tcontent.appendChild(contentImg)\r\n\tcontent.appendChild(contentSpan)\r\n\tcontent.appendChild(contentPara)\r\n\r\n\treturn { title, nav, content }\r\n\r\n})()\r\n\r\n\r\nconst loadAboutUsContent = () => {\r\n\tmain.appendChild(aboutUs.title)\r\n\tmain.appendChild(aboutUs.nav)\r\n\tmain.appendChild(aboutUs.content)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/aboutus-module.js?");

/***/ }),

/***/ "./src/contacts-module.js":
/*!********************************!*\
  !*** ./src/contacts-module.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactsContent\": function() { return /* binding */ loadContactsContent; }\n/* harmony export */ });\nconst main = document.querySelector('#container')\r\n\r\nconst contacts = (() => {\r\n\r\n\tconst title = document.createElement('h1')\r\n\ttitle.classList.add('title')\r\n\ttitle.textContent = 'Pizza Restaurant'\r\n\r\n\tconst nav = document.createElement('nav')\r\n\tfor (let i = 1; i <= 3; i++) {\r\n\t\tconst btn = document.createElement('button')\r\n\t\tbtn.dataset.index = i\r\n\t\tswitch(i) {\r\n\t\t\tcase 1:\r\n\t\t\tbtn.textContent = 'About Us'\r\n\t\t\tbreak\r\n\t\t\tcase 2:\r\n\t\t\tbtn.textContent = 'Menu'\r\n\t\t\tbreak\r\n\t\t\tcase 3:\r\n\t\t\tbtn.textContent = 'Contacts'\r\n\t\t\tbreak\r\n\t\t}\r\n\t\tnav.appendChild(btn)\r\n\t}\r\n\r\n\tconst content = document.createElement('div')\r\n\tcontent.classList.add('content')\r\n\tcontent.dataset.index = 3\r\n\r\n\tconst contentH1 = document.createElement('h1')\r\n\tcontentH1.textContent = 'Contact Us'\r\n\r\n\tconst contentMap = document.createElement('iframe')\r\n\tcontentMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108438.23628768584!2d13.357591607434463!3d38.15166906037408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13106268d05359b3%3A0x10b042967b67d50!2sSicily%2C%20Italy!5e0!3m2!1sen!2sru!4v1621267511001!5m2!1sen!2sru'\r\n\tcontentMap.loading = 'lazy'\r\n\r\n\tconst contentPara = document.createElement('p')\r\n\tcontentPara.textContent = 'Please contact us!'\r\n\r\n\tconst tel = document.createElement('a')\r\n\ttel.href = '#'\r\n\ttel.textContent = '+39 777 77 777'\r\n\r\n\tconst email = document.createElement('a')\r\n\temail.href = '#'\r\n\temail.textContent = 'wholesomepizza@enjoy.com'\r\n\r\n\tcontent.appendChild(contentH1)\r\n\tcontent.appendChild(contentMap)\r\n\tcontent.appendChild(contentPara)\r\n\tcontent.appendChild(tel)\r\n\tcontent.appendChild(email)\r\n\r\n\treturn { title, nav, content }\r\n\r\n})()\r\n\r\n\r\nconst loadContactsContent = () => {\r\n\tmain.appendChild(contacts.title)\r\n\tmain.appendChild(contacts.nav)\r\n\tmain.appendChild(contacts.content)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/contacts-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _aboutus_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus-module */ \"./src/aboutus-module.js\");\n/* harmony import */ var _menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-module */ \"./src/menu-module.js\");\n/* harmony import */ var _contacts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-module */ \"./src/contacts-module.js\");\n\r\n\r\n\r\n\r\n\r\n// opening about us tab initially\r\n(0,_aboutus_module__WEBPACK_IMPORTED_MODULE_1__.loadAboutUsContent)()\r\n\r\nconst main = document.querySelector('#container')\r\n\r\n// tab switch logic\r\nmain.onclick = (e) => {\r\n\tif (!e.target.dataset.index) return\r\n\r\n\tconst currentTabIndex = document.querySelector('.content').dataset.index\r\n\t\r\n\tif (e.target.dataset.index == 1) {\r\n\t\tif (currentTabIndex == 1) return\r\n\t\tmain.innerHTML = ''\r\n\t\t;(0,_aboutus_module__WEBPACK_IMPORTED_MODULE_1__.loadAboutUsContent)()\r\n\t} else if (e.target.dataset.index == 2) {\r\n\t\tif (currentTabIndex == 2) return\r\n\t\tmain.innerHTML = ''\r\n\t\t;(0,_menu_module__WEBPACK_IMPORTED_MODULE_2__.loadMenuContent)()\r\n\t} else if (e.target.dataset.index == 3) {\r\n\t\tif (currentTabIndex == 3) return\r\n\t\tmain.innerHTML = ''\r\n\t\t;(0,_contacts_module__WEBPACK_IMPORTED_MODULE_3__.loadContactsContent)()\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack://Restaurant-Page/./src/index.js?");

/***/ }),

/***/ "./src/menu-module.js":
/*!****************************!*\
  !*** ./src/menu-module.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuContent\": function() { return /* binding */ loadMenuContent; }\n/* harmony export */ });\nconst main = document.querySelector('#container')\r\n\r\nconst menu = (() => {\r\n\r\n\tconst title = document.createElement('h1')\r\n\ttitle.classList.add('title')\r\n\ttitle.textContent = 'Pizza Restaurant'\r\n\r\n\tconst nav = document.createElement('nav')\r\n\tfor (let i = 1; i <= 3; i++) {\r\n\t\tconst btn = document.createElement('button')\r\n\t\tbtn.dataset.index = i\r\n\t\tswitch(i) {\r\n\t\t\tcase 1:\r\n\t\t\tbtn.textContent = 'About Us'\r\n\t\t\tbreak\r\n\t\t\tcase 2:\r\n\t\t\tbtn.textContent = 'Menu'\r\n\t\t\tbreak\r\n\t\t\tcase 3:\r\n\t\t\tbtn.textContent = 'Contacts'\r\n\t\t\tbreak\r\n\t\t}\r\n\t\tnav.appendChild(btn)\r\n\t}\r\n\r\n\tconst content = document.createElement('div')\r\n\tcontent.classList.add('content')\r\n\tcontent.dataset.index = 2\r\n\r\n\tconst contentH1 = document.createElement('h1')\r\n\tcontentH1.textContent = 'Choose the one you like'\r\n\t\r\n\tconst pizzaContainer = document.createElement('div')\r\n\tpizzaContainer.classList.add('pizza-container')\r\n\r\n\tconst createPizza = (name, src, alt, description) => {\r\n\r\n\t\tconst pizza = document.createElement('div')\r\n\t\tpizza.classList.add('pizza')\r\n\r\n\t\tconst pizzaName = document.createElement('p')\r\n\t\tpizzaName.classList.add('pizza-name')\r\n\t\tpizzaName.textContent = name\r\n\r\n\t\tconst pizzaImg = document.createElement('img')\r\n\t\tpizzaImg.src = src\r\n\t\tpizzaImg.alt = alt\r\n\r\n\t\tconst pizzaDescription = document.createElement('p')\r\n\t\tpizzaDescription.textContent = description\r\n\r\n\t\tpizza.appendChild(pizzaName)\r\n\t\tpizza.appendChild(pizzaImg)\r\n\t\tpizza.appendChild(pizzaDescription)\r\n\r\n\t\treturn pizza\r\n\r\n\t}\r\n\r\n\tconst pepperoni = createPizza('Pepperoni-Beef', '../images/Pepperoni-Beef.png', 'Pepperoni-Beef pizza', 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce')\r\n\tconst alfredo = createPizza('Alfredo', '../images/Alfredo.png', 'Alfredo pizza', 'Traditional crust brushed with garlic butter and topped with creamy Alfredo sauce and 100% real cheese.')\r\n\tconst veggie = createPizza('Veggie', '../images/Veggie.png', 'Veggie pizza', 'Traditional crust brushed with garlic butter and topped with Zesty Parmesan Ranch sauce, 100% real cheddar cheese, mushrooms, red onions, green peppers, tomatoes and Parmesan oregano seasoning.')\r\n\tconst hawaiian = createPizza('Hawaiian', '../images/Hawaiian.png', 'Hawaiian pizza', 'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, ham and pineapple.')\r\n\tconst macAndCheese = createPizza('Mac & Cheese', '../images/MacAndCheese.png', 'Mac And Cheese pizza', 'Traditional crust brushed with garlic butter and topped with 100% real cheese and Cicis signature macaroni & cheese.')\r\n\tconst meatEater = createPizza('Meat Eater', '../images/Meat-eater.png', 'Meat Eater pizza', 'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, pepperoni, ham, beef and sausage')\r\n\r\n\tpizzaContainer.appendChild(pepperoni)\r\n\tpizzaContainer.appendChild(alfredo)\r\n\tpizzaContainer.appendChild(veggie)\r\n\tpizzaContainer.appendChild(hawaiian)\r\n\tpizzaContainer.appendChild(macAndCheese)\r\n\tpizzaContainer.appendChild(meatEater)\r\n\r\n\tcontent.appendChild(contentH1)\r\n\tcontent.appendChild(pizzaContainer)\r\n\r\n\treturn { title, nav, content }\r\n\r\n})()\r\n\r\n\r\nconst loadMenuContent = () => {\r\n\tmain.appendChild(menu.title)\r\n\tmain.appendChild(menu.nav)\r\n\tmain.appendChild(menu.content)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/menu-module.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;