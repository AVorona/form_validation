!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="js/",t(t.s=1)}([function(e,t,n){"use strict";Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var s=0|t,i=Math.max(s>=0?s:r-Math.abs(s),0);i<r;){if(function(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}(n[i],e))return!0;i++}return!1}})},function(e,t,n){"use strict";function r(e){var t=e,n={digitsRegExp:new RegExp("^[0-9]+$"),stringRegExp:new RegExp("^[a-zA-Z]+$"),emailRegExp:new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),mediumPassRegExp:new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")};if([{name:t.elements.name,pattern:n.stringRegExp},{name:t.elements.surname,pattern:n.stringRegExp},{name:t.elements.phone,pattern:n.digitsRegExp},{name:t.elements.email,pattern:n.emailRegExp},{name:t.elements.password,pattern:n.mediumPassRegExp}].map(function(e){return!!s(t,e.name,e.pattern)}).includes(!1))return!1;f(),t.submit()}function s(e,t,n){return i(e,t)&&a(e,t,n)?(u(t),!0):(o(t),!1)}function i(e,t){var n=t.name,r=t.value,s=r.length;return"phone"===n?s>=10&&s<=12:"password"===n?s>=6&&s<=100:""!==t&&s>=2}function a(e,t,n){var r=t.value;return!!n.test(r)}function o(e){var t=e;e.classList.remove("is-valid"),e.classList.add("is-invalid"),document.querySelectorAll(".js-error-message").forEach(function(e){e.getAttribute("data-messagetype")===t.name&&e.classList.add("is-for-error")})}function u(e){l(e),e.classList.add("is-valid")}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"false";if("false"===e){document.querySelectorAll(".js-form-input").forEach(function(e){e.classList.remove("is-invalid")})}e.classList.remove("is-invalid"),c(e,!0)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];document.querySelectorAll(".js-error-message").forEach(function(n){!1===t?n.classList.remove("is-for-error"):n.getAttribute("data-messagetype")===e.name&&(console.log(!0),n.classList.remove("is-for-error"))})}function f(){alert("CONGRATS, this form was submitted")}n(0),document.getElementById("userForm").addEventListener("submit",function(){return event.preventDefault(),r(this),!1})}]);