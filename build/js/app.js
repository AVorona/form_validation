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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/ecma262/#sec-array.prototype.includes\nif (!Array.prototype.includes) {\n  Object.defineProperty(Array.prototype, 'includes', {\n    value: function value(searchElement, fromIndex) {\n\n      // 1. Let O be ? ToObject(this value).\n      if (this == null) {\n        throw new TypeError('\"this\" is null or not defined');\n      }\n\n      var o = Object(this);\n\n      // 2. Let len be ? ToLength(? Get(O, \"length\")).\n      var len = o.length >>> 0;\n\n      // 3. If len is 0, return false.\n      if (len === 0) {\n        return false;\n      }\n\n      // 4. Let n be ? ToInteger(fromIndex).\n      //    (If fromIndex is undefined, this step produces the value 0.)\n      var n = fromIndex | 0;\n\n      // 5. If n ≥ 0, then\n      //  a. Let k be n.\n      // 6. Else n < 0,\n      //  a. Let k be len + n.\n      //  b. If k < 0, let k be 0.\n      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);\n\n      function sameValueZero(x, y) {\n        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);\n      }\n\n      // 7. Repeat, while k < len\n      while (k < len) {\n        // a. Let elementK be the result of ? Get(O, ! ToString(k)).\n        // b. If SameValueZero(searchElement, elementK) is true, return true.\n        // c. Increase k by 1. \n        if (sameValueZero(o[k], searchElement)) {\n          return true;\n        }\n        k++;\n      }\n\n      // 8. Return false\n      return false;\n    }\n  });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvcG9seWZpbGxzLmpzPzlkYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkge1xuXG4gICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvID0gT2JqZWN0KHRoaXMpO1xuXG4gICAgICAvLyAyLiBMZXQgbGVuIGJlID8gVG9MZW5ndGgoPyBHZXQoTywgXCJsZW5ndGhcIikpLlxuICAgICAgdmFyIGxlbiA9IG8ubGVuZ3RoID4+PiAwO1xuXG4gICAgICAvLyAzLiBJZiBsZW4gaXMgMCwgcmV0dXJuIGZhbHNlLlxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIExldCBuIGJlID8gVG9JbnRlZ2VyKGZyb21JbmRleCkuXG4gICAgICAvLyAgICAoSWYgZnJvbUluZGV4IGlzIHVuZGVmaW5lZCwgdGhpcyBzdGVwIHByb2R1Y2VzIHRoZSB2YWx1ZSAwLilcbiAgICAgIHZhciBuID0gZnJvbUluZGV4IHwgMDtcblxuICAgICAgLy8gNS4gSWYgbiDiiaUgMCwgdGhlblxuICAgICAgLy8gIGEuIExldCBrIGJlIG4uXG4gICAgICAvLyA2LiBFbHNlIG4gPCAwLFxuICAgICAgLy8gIGEuIExldCBrIGJlIGxlbiArIG4uXG4gICAgICAvLyAgYi4gSWYgayA8IDAsIGxldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IE1hdGgubWF4KG4gPj0gMCA/IG4gOiBsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG5cbiAgICAgIGZ1bmN0aW9uIHNhbWVWYWx1ZVplcm8oeCwgeSkge1xuICAgICAgICByZXR1cm4geCA9PT0geSB8fCAodHlwZW9mIHggPT09ICdudW1iZXInICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiBpc05hTih4KSAmJiBpc05hTih5KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDcuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgLy8gYS4gTGV0IGVsZW1lbnRLIGJlIHRoZSByZXN1bHQgb2YgPyBHZXQoTywgISBUb1N0cmluZyhrKSkuXG4gICAgICAgIC8vIGIuIElmIFNhbWVWYWx1ZVplcm8oc2VhcmNoRWxlbWVudCwgZWxlbWVudEspIGlzIHRydWUsIHJldHVybiB0cnVlLlxuICAgICAgICAvLyBjLiBJbmNyZWFzZSBrIGJ5IDEuIFxuICAgICAgICBpZiAoc2FtZVZhbHVlWmVybyhvW2tdLCBzZWFyY2hFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGsrKztcbiAgICAgIH1cblxuICAgICAgLy8gOC4gUmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvcG9seWZpbGxzLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(0);\n\nvar forms = document.querySelectorAll('.js-userForm');\n\nforms.forEach(function (el) {\n\n  el.addEventListener('submit', function () {\n\n    event.preventDefault();\n    validateform(event.currentTarget);\n\n    return false;\n  });\n});\n\nfunction validateform(formToSubmit) {\n\n  var form = formToSubmit;\n\n  // clear styling\n\n  // define regexp\n  var regexp = {\n\n    digitsRegExp: new RegExp('^[0-9]+$'),\n    stringRegExp: new RegExp('^[a-zA-Z]+$'),\n    emailRegExp: new RegExp(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/),\n\n    mediumPassRegExp: new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')\n    // contains six characters or more and has\n    // at least one lowercase and one uppercase alphabetical character or has at least one lowercase\n    // and one numeric character or has at least one uppercase and one numeric character.  \n\n  };\n\n  // define inputs\n\n  var inputsArray = [{\n    name: form.elements['name'],\n    pattern: regexp.stringRegExp,\n    minLength: 'default',\n    maxLength: 'default'\n\n  }, {\n    name: form.elements['surname'],\n    pattern: regexp.stringRegExp,\n    minLength: 'default',\n    maxLength: 'default'\n\n  }, {\n    name: form.elements['phone'],\n    pattern: regexp.digitsRegExp,\n    minLength: 10,\n    maxLength: 12\n  }, {\n    name: form.elements['email'],\n    pattern: regexp.emailRegExp,\n    minLength: 3,\n    maxLength: 100\n  }, {\n    name: form.elements['password'],\n    pattern: regexp.mediumPassRegExp,\n    minLength: 6,\n    maxLength: 100\n  }];\n\n  var validationStatus = inputsArray.map(function (el) {\n\n    if (validateInput(form, el.name, el.pattern, el.minLength, el.maxLength)) {\n\n      return true;\n    } else {\n\n      return false;\n    }\n  });\n\n  // show result of validation\n  // console.log(validationStatus);\n\n  if (validationStatus.includes(false)) {\n\n    return false;\n  } else {\n\n    showCongrats();\n\n    form.submit();\n  }\n}\n\n// ================================FUNCTION'S DECLARATIONS==================================\n\n\nfunction validateInput(form, input, regexp, minLength, maxLength) {\n\n  // console.log(minLength, maxLength);\n  if (!validateLength(form, input, minLength, maxLength) || !validateData(form, input, regexp)) {\n\n    // console.log(validateLength(form, input,minLength,maxLength), validateData(form, input, regexp));\n\n    showError(input);\n\n    return false;\n  } else {\n\n    showStatus(input);\n\n    return true;\n  }\n}\n\n//============ VALIDATE LENGTH\n\n\nfunction validateLength(formOfInputs, typeOfInput, min, max) {\n\n  var inputName = typeOfInput.name;\n  var inputValue = typeOfInput.value;\n  var inputValueLength = inputValue.length;\n\n  if (min === 'default') {\n    // console.log(min);\n    min = 2;\n    // console.log(min);\n  }\n\n  if (max === 'default') {\n\n    max = 200;\n  }\n\n  if (typeOfInput !== '' && inputValueLength >= min && inputValueLength <= max) {\n    // console.log(inputValue, inputValueLength, min,max);\n\n    return true;\n  } else {\n\n    return false;\n  }\n}\n\nfunction validateData(formOfInputs, typeOfInput, regexp) {\n  var inputValue = typeOfInput.value;\n\n  if (regexp.test(inputValue)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction showError(element) {\n\n  var field = element;\n\n  element.classList.remove('is-valid');\n  element.classList.add('is-invalid');\n\n  var errorMessages = document.querySelectorAll('.js-error-message');\n\n  errorMessages.forEach(function (el) {\n\n    var dataAttrValue = el.getAttribute('data-messagetype');\n\n    if (dataAttrValue === field.name) {\n\n      el.classList.add('is-for-error');\n    }\n  });\n}\n\nfunction showStatus(currentElement) {\n\n  // changeInputStatus(currentElement);\n  currentElement.classList.remove('is-invalid');\n  currentElement.classList.add('is-valid');\n  changeMessageStatus(currentElement, true);\n};\n\nfunction changeMessageStatus(input, messageBox) {\n\n  var errorMessages = document.querySelectorAll('.js-error-message');\n\n  errorMessages.forEach(function (el) {\n\n    var dataAttrValue = el.getAttribute('data-messagetype');\n\n    if (dataAttrValue === input.name) {\n\n      // console.log(true);\n\n      el.classList.remove('is-for-error');\n    }\n  });\n}\n\nfunction showCongrats() {\n\n  alert('CONGRATS, this form was submitted');\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5cblxuXG52YXIgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdXNlckZvcm0nKTtcblxuZm9ybXMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpZGF0ZWZvcm0oZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cblxuICB9KTtcblxuXG59KTtcblxuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVmb3JtKGZvcm1Ub1N1Ym1pdCkge1xuXG4gIHZhciBmb3JtID0gZm9ybVRvU3VibWl0O1xuXG4gIC8vIGNsZWFyIHN0eWxpbmdcblxuICAvLyBkZWZpbmUgcmVnZXhwXG4gIHZhciByZWdleHAgPSB7XG5cbiAgICBkaWdpdHNSZWdFeHA6IG5ldyBSZWdFeHAoJ15bMC05XSskJyksXG4gICAgc3RyaW5nUmVnRXhwOiBuZXcgUmVnRXhwKCdeW2EtekEtWl0rJCcpLFxuICAgIGVtYWlsUmVnRXhwOiBuZXcgUmVnRXhwKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8pLFxuXG4gICAgbWVkaXVtUGFzc1JlZ0V4cDogbmV3IFJlZ0V4cCgnXigoKD89LipbYS16XSkoPz0uKltBLVpdKSl8KCg/PS4qW2Etel0pKD89LipbMC05XSkpfCgoPz0uKltBLVpdKSg/PS4qWzAtOV0pKSkoPz0uezYsfSknKSxcbiAgICAvLyBjb250YWlucyBzaXggY2hhcmFjdGVycyBvciBtb3JlIGFuZCBoYXNcbiAgICAvLyBhdCBsZWFzdCBvbmUgbG93ZXJjYXNlIGFuZCBvbmUgdXBwZXJjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXIgb3IgaGFzIGF0IGxlYXN0IG9uZSBsb3dlcmNhc2VcbiAgICAvLyBhbmQgb25lIG51bWVyaWMgY2hhcmFjdGVyIG9yIGhhcyBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGFuZCBvbmUgbnVtZXJpYyBjaGFyYWN0ZXIuICBcblxuICB9O1xuXG5cblxuICAvLyBkZWZpbmUgaW5wdXRzXG5cbiAgdmFyIGlucHV0c0FycmF5ID0gW1xuXG4gICAge1xuICAgICAgbmFtZTogZm9ybS5lbGVtZW50c1snbmFtZSddLFxuICAgICAgcGF0dGVybjogcmVnZXhwLnN0cmluZ1JlZ0V4cCxcbiAgICAgIG1pbkxlbmd0aDogJ2RlZmF1bHQnLFxuICAgICAgbWF4TGVuZ3RoOiAnZGVmYXVsdCdcblxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogZm9ybS5lbGVtZW50c1snc3VybmFtZSddLFxuICAgICAgcGF0dGVybjogcmVnZXhwLnN0cmluZ1JlZ0V4cCxcbiAgICAgIG1pbkxlbmd0aDogJ2RlZmF1bHQnLFxuICAgICAgbWF4TGVuZ3RoOiAnZGVmYXVsdCdcblxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogZm9ybS5lbGVtZW50c1sncGhvbmUnXSxcbiAgICAgIHBhdHRlcm46IHJlZ2V4cC5kaWdpdHNSZWdFeHAsXG4gICAgICBtaW5MZW5ndGg6IDEwLFxuICAgICAgbWF4TGVuZ3RoOiAxMlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogZm9ybS5lbGVtZW50c1snZW1haWwnXSxcbiAgICAgIHBhdHRlcm46IHJlZ2V4cC5lbWFpbFJlZ0V4cCxcbiAgICAgIG1pbkxlbmd0aDogMyxcbiAgICAgIG1heExlbmd0aDogMTAwXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG5hbWU6IGZvcm0uZWxlbWVudHNbJ3Bhc3N3b3JkJ10sXG4gICAgICBwYXR0ZXJuOiByZWdleHAubWVkaXVtUGFzc1JlZ0V4cCxcbiAgICAgIG1pbkxlbmd0aDogNixcbiAgICAgIG1heExlbmd0aDogMTAwXG4gICAgfVxuXG5cbiAgXTtcblxuXG4gIHZhciB2YWxpZGF0aW9uU3RhdHVzID0gaW5wdXRzQXJyYXkubWFwKGZ1bmN0aW9uKGVsKSB7XG5cbiAgICBpZiAodmFsaWRhdGVJbnB1dChmb3JtLCBlbC5uYW1lLCBlbC5wYXR0ZXJuLCBlbC5taW5MZW5ndGgsIGVsLm1heExlbmd0aCkpIHtcblxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cblxuICB9KTtcblxuICBcblxuICAvLyBzaG93IHJlc3VsdCBvZiB2YWxpZGF0aW9uXG4gIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRpb25TdGF0dXMpO1xuXG4gIGlmICh2YWxpZGF0aW9uU3RhdHVzLmluY2x1ZGVzKGZhbHNlKSkge1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBzaG93Q29uZ3JhdHMoKTtcblxuICAgIGZvcm0uc3VibWl0KCk7XG5cbiAgfVxuXG59XG5cblxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1GVU5DVElPTidTIERFQ0xBUkFUSU9OUz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGZvcm0sIGlucHV0LCByZWdleHAsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoKSB7XG5cbiAgLy8gY29uc29sZS5sb2cobWluTGVuZ3RoLCBtYXhMZW5ndGgpO1xuICBpZiAoKCF2YWxpZGF0ZUxlbmd0aChmb3JtLCBpbnB1dCwgbWluTGVuZ3RoLCBtYXhMZW5ndGgpKSB8fCAoIXZhbGlkYXRlRGF0YShmb3JtLCBpbnB1dCwgcmVnZXhwKSkpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRlTGVuZ3RoKGZvcm0sIGlucHV0LG1pbkxlbmd0aCxtYXhMZW5ndGgpLCB2YWxpZGF0ZURhdGEoZm9ybSwgaW5wdXQsIHJlZ2V4cCkpO1xuXG4gICAgc2hvd0Vycm9yKGlucHV0KTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9IGVsc2Uge1xuXG5cbiAgICBzaG93U3RhdHVzKGlucHV0KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cblxuLy89PT09PT09PT09PT0gVkFMSURBVEUgTEVOR1RIXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVMZW5ndGgoZm9ybU9mSW5wdXRzLCB0eXBlT2ZJbnB1dCwgbWluLCBtYXgpIHtcblxuICB2YXIgaW5wdXROYW1lID0gdHlwZU9mSW5wdXQubmFtZTtcbiAgdmFyIGlucHV0VmFsdWUgPSB0eXBlT2ZJbnB1dC52YWx1ZTtcbiAgdmFyIGlucHV0VmFsdWVMZW5ndGggPSBpbnB1dFZhbHVlLmxlbmd0aDtcbiAgXG4gIGlmIChtaW4gPT09ICdkZWZhdWx0Jykge1xuICAgIC8vIGNvbnNvbGUubG9nKG1pbik7XG4gICAgbWluID0gMjtcbiAgICAvLyBjb25zb2xlLmxvZyhtaW4pO1xuXG4gIH0gXG5cbiAgaWYgKG1heCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgXG4gICAgbWF4ID0gMjAwO1xuICAgXG4gIH1cblxuICBpZiAoKHR5cGVPZklucHV0ICE9PSAnJykgJiYgKGlucHV0VmFsdWVMZW5ndGggPj0gbWluKSAmJiAoaW5wdXRWYWx1ZUxlbmd0aCA8PSBtYXgpKSB7XG4gICAgLy8gY29uc29sZS5sb2coaW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZUxlbmd0aCwgbWluLG1heCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2Uge1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGEoZm9ybU9mSW5wdXRzLCB0eXBlT2ZJbnB1dCwgcmVnZXhwKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gdHlwZU9mSW5wdXQudmFsdWU7XG5cbiAgaWYgKHJlZ2V4cC50ZXN0KGlucHV0VmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG5cbn1cblxuXG5cblxuZnVuY3Rpb24gc2hvd0Vycm9yKGVsZW1lbnQpIHtcblxuICB2YXIgZmllbGQgPSBlbGVtZW50O1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmFsaWQnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG5cbiAgdmFyIGVycm9yTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZXJyb3ItbWVzc2FnZScpO1xuXG4gIGVycm9yTWVzc2FnZXMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXG4gICAgdmFyIGRhdGFBdHRyVmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVzc2FnZXR5cGUnKTtcblxuICAgIGlmIChkYXRhQXR0clZhbHVlID09PSBmaWVsZC5uYW1lKSB7XG5cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWZvci1lcnJvcicpO1xuXG4gICAgfVxuXG4gIH0pO1xuXG5cblxufVxuXG5cblxuZnVuY3Rpb24gc2hvd1N0YXR1cyhjdXJyZW50RWxlbWVudCkge1xuXG4gIC8vIGNoYW5nZUlucHV0U3RhdHVzKGN1cnJlbnRFbGVtZW50KTtcbiAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xuICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xuICBjaGFuZ2VNZXNzYWdlU3RhdHVzKGN1cnJlbnRFbGVtZW50LCB0cnVlKTtcbiBcbn07XG5cblxuXG5cbmZ1bmN0aW9uIGNoYW5nZU1lc3NhZ2VTdGF0dXMoaW5wdXQsIG1lc3NhZ2VCb3gpIHtcblxuICB2YXIgZXJyb3JNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1lcnJvci1tZXNzYWdlJyk7XG5cbiAgZXJyb3JNZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cblxuICAgIHZhciBkYXRhQXR0clZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2V0eXBlJyk7XG5cbiAgICBpZiAoZGF0YUF0dHJWYWx1ZSA9PT0gaW5wdXQubmFtZSkge1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKTtcblxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9yLWVycm9yJyk7XG5cbiAgICB9XG5cblxuICB9KTtcblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHNob3dDb25ncmF0cygpIHtcblxuICBhbGVydCgnQ09OR1JBVFMsIHRoaXMgZm9ybSB3YXMgc3VibWl0dGVkJyk7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);