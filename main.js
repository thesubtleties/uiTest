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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const animations = (() => {\n    const dropDown = (navId, divClass) => {\n        const choice = document.getElementById(navId);\n        const div = document.querySelector(divClass);\n        choice.addEventListener('mouseenter', () => {\n            div.classList.add('selected');  \n        })\n        choice.addEventListener('mouseleave', () => {\n            div.classList.remove('selected');\n        })\n        div.addEventListener('mouseleave', () => {\n            div.classList.remove('selected');\n  \n        })\n        div.addEventListener('mouseenter', () => {\n            div.classList.add('selected');  \n        })\n    };\n\n    return { dropDown, }\n})();\n\nconst mobileAnimations = (() => {\n    const mainNavCircle = document.querySelector('.navCircle');\n    const secondaryNavCircles = document.querySelectorAll('.secondaryNavCircle');\n    const circlePopOut = (div, itemNumber) => {\n        mainNavCircle.addEventListener('click', () => {\n            for (i = 0; i < secondaryNavCircles.length; i++) {\n                secondaryNavCircles[i].classList.toggle(`circleOn${i}`);\n            }\n\n        })\n\n    }\n    return {\n        circlePopOut,\n    }\n\n})();\n\nconst imageSlider = (() => {\n    const leftArrow = document.getElementById('left');\n    const rightArrow = document.getElementById('right');\n    const buttons = document.querySelectorAll('.controlDot');\n    const imageDiv = document.querySelector('.imageSlider');\n    let offset = 0;\n    let imageNumber = 1;\n\n    const getOffset = () => {\n        switch (imageNumber) {\n            case 1: \n                offset = 0\n                break;\n            case 2: \n                offset = 50\n                break;\n            case 3:\n                offset = 100\n                break;\n            case 4:\n                offset = 150\n                break;\n            case 5:\n                offset = 200\n                break;\n            case 6:\n                offset = 250\n                break;\n            default:\n                offset = 0;\n        }\n    }\n\n    const updateImageCircle = () => {\n        buttons.forEach((button) => {\n            const buttonId = button.getAttribute('id');\n            const buttonNumber = buttonId.replace('pic', '');\n            if (parseInt(buttonNumber) === imageNumber) {\n                button.classList.add('controlDotOn');\n            }\n            else {\n                button.classList.remove('controlDotOn');\n            }\n\n        })\n\n    }\n    const circleButtonActions = () => {\n        buttons.forEach((button) => {\n            button.addEventListener('click', () => {\n                const buttonId = button.getAttribute('id');\n                const buttonNumber = buttonId.replace('pic', '');\n                imageNumber = parseInt(buttonNumber);\n                getOffset();\n                imageDiv.style.transform = `translateX(-${offset}vw)`;\n                updateImageCircle();\n            })\n        })\n    }\n    const moveLeft = () => {\n        leftArrow.addEventListener('click', () => {\n            imageNumber -= 1;\n            if (imageNumber < 1) {\n                imageNumber = 1;\n            }\n            getOffset();\n            imageDiv.style.transform = `translateX(-${offset}vw)`;\n            updateImageCircle();\n        });\n    }\n    //We need to update this to make the numbers right to make it move.\n    const moveRight = () => {\n        rightArrow.addEventListener('click', () => {\n            imageNumber += 1;\n            if (imageNumber > 6) {\n                imageNumber = 6;\n            }\n            getOffset();\n            imageDiv.style.transform = `translateX(-${offset}vw)`;\n            updateImageCircle();\n        });\n    }\n\n    return { moveLeft,\n            moveRight,\n            circleButtonActions,\n            updateImageCircle, }\n\n})();\n\nanimations.dropDown('photosMenu', '.photosDropdown');\nanimations.dropDown('storiesMenu', '.storiesDropdown');\nanimations.dropDown('theGuysMenu', '.theGuysDropdown');\nmobileAnimations.circlePopOut();\nimageSlider.moveLeft();\nimageSlider.moveRight();\nimageSlider.circleButtonActions();\nimageSlider.updateImageCircle();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });