/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page-load-contact.js":
/*!**********************************!*\
  !*** ./src/page-load-contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage),
/* harmony export */   test1: () => (/* binding */ test1)
/* harmony export */ });
function createContactPage(){
    const element = document.querySelector('#content');
    element.appendChild(createContactUs());
    console.log(createContactPerson());

}

function createContactUs(){
    const element = document.createElement('div');
    const element1 = document.createElement('h1');
    element1.textContent = "Contact Us";
    element.appendChild(element1);
    return element;
}

function createContactPerson(){
    return "Hello";
}

class PersonDetails{
    #name;
    #profession;
    #email;
    constructor(name,profession,email){
        this.#name = name;
        this.#profession = profession;
        this.#email = `${this.#email}@meowmail.com`
    }

    get name(){
        return this.#name;
    }

    get profession(){
        return  this.#profession;
    }

    get email(){
        return this.#email;
    }

}

/* 
<div>
<p>Meow</p>
<p>Chef</p>
<p>9898-9898-8989</p>
<p>rand@meowmail.com</p>
</div>
<div>
<p>Meow</p>
<p>Chef</p>
<p>9898-9898-8989</p>
<p>rand@meowmail.com</p>
</div>
<div>
<p>Meow</p>
<p>Chef</p>
<p>9898-9898-8989</p>
<p>rand@meowmail.com</p>
</div> */

const test1 = () => console.log("PageLoad-contact");



/***/ }),

/***/ "./src/page-load-home.js":
/*!*******************************!*\
  !*** ./src/page-load-home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFrontPage: () => (/* binding */ createFrontPage),
/* harmony export */   test: () => (/* binding */ test)
/* harmony export */ });
function createFrontPage()
{
    const content = document.querySelector('#content');
    content.appendChild(createTitle());
    content.appendChild(createReview());
    content.appendChild(createTiming());
}


function createTitle()
{
    const element = document.createElement('div');
    const element1 = document.createElement('h1');
    element1.innerText = "Cat Cat Cafe";
    element.appendChild(element1);
    return element;
}

function createReview()
{
    const element = document.createElement('div');
    const element1 = document.createElement('p');
    element1.innerText = "The Purrfect Cup is a five-paw extravaganza for any feline (and feline-friendly human) on the prowl for a good time. From the pawsome atmosphere to the purr-ocious company, it's a guaranteed tail-wagger of a good time. Just remember, humans: respect the floof, and you'll be feline fine!"
    const element2 = document.createElement('p');
    const element3 = document.createElement('span');
    element3.innerText = "Meowth Rating:";
    element3.appendChild(document.createTextNode(" ⭐⭐⭐⭐⭐ (with extra tuna-can bonus points!)"));
    element.appendChild(element1);
    element.appendChild(element2);
    element2.appendChild(element3);
    return element;
}

function createTiming(){
    const element = document.createElement('div');
    const paraArray = [];
    for(let i = 0; i < 4; i++){
        const element1 = document.createElement('p');
        paraArray.push(element1);
    }
    paraArray[0].textContent = "Human-Friendly Hours:";
    paraArray[1].textContent = "Classic Cafe: 10am to 7pm, offering a relaxing afternoon escape with feline company.";
    paraArray[2].textContent = "Extended Weekends: Open until 9pm on Fridays and Saturdays for socializing and late-night cat therapy.";
    paraArray[3].textContent = "Early Bird Purrs: Open from 8am to 12pm for those who want to start their day with a dose of cuteness.";

    paraArray.forEach((paraElement)=>{
        element.appendChild(paraElement);
    })
    return element;
}

const test = () => console.log("PageLoad")



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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load-home */ "./src/page-load-home.js");
/* harmony import */ var _page_load_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load-contact */ "./src/page-load-contact.js");



// console.log('hello new changes')
// test();
// createFrontPage();
(0,_page_load_contact__WEBPACK_IMPORTED_MODULE_1__.test1)();
(0,_page_load_contact__WEBPACK_IMPORTED_MODULE_1__.createContactPage)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7Ozs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ1M7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLHlEQUFLO0FBQ0wscUVBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrLy4vc3JjL3BhZ2UtbG9hZC1jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay8uL3NyYy9wYWdlLWxvYWQtaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RVcygpKTtcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVDb250YWN0UGVyc29uKCkpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RVcygpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZWxlbWVudDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBlcnNvbigpe1xuICAgIHJldHVybiBcIkhlbGxvXCI7XG59XG5cbmNsYXNzIFBlcnNvbkRldGFpbHN7XG4gICAgI25hbWU7XG4gICAgI3Byb2Zlc3Npb247XG4gICAgI2VtYWlsO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUscHJvZmVzc2lvbixlbWFpbCl7XG4gICAgICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLiNwcm9mZXNzaW9uID0gcHJvZmVzc2lvbjtcbiAgICAgICAgdGhpcy4jZW1haWwgPSBgJHt0aGlzLiNlbWFpbH1AbWVvd21haWwuY29tYFxuICAgIH1cblxuICAgIGdldCBuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICAgIH1cblxuICAgIGdldCBwcm9mZXNzaW9uKCl7XG4gICAgICAgIHJldHVybiAgdGhpcy4jcHJvZmVzc2lvbjtcbiAgICB9XG5cbiAgICBnZXQgZW1haWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VtYWlsO1xuICAgIH1cblxufVxuXG4vKiBcbjxkaXY+XG48cD5NZW93PC9wPlxuPHA+Q2hlZjwvcD5cbjxwPjk4OTgtOTg5OC04OTg5PC9wPlxuPHA+cmFuZEBtZW93bWFpbC5jb208L3A+XG48L2Rpdj5cbjxkaXY+XG48cD5NZW93PC9wPlxuPHA+Q2hlZjwvcD5cbjxwPjk4OTgtOTg5OC04OTg5PC9wPlxuPHA+cmFuZEBtZW93bWFpbC5jb208L3A+XG48L2Rpdj5cbjxkaXY+XG48cD5NZW93PC9wPlxuPHA+Q2hlZjwvcD5cbjxwPjk4OTgtOTg5OC04OTg5PC9wPlxuPHA+cmFuZEBtZW93bWFpbC5jb208L3A+XG48L2Rpdj4gKi9cblxuY29uc3QgdGVzdDEgPSAoKSA9PiBjb25zb2xlLmxvZyhcIlBhZ2VMb2FkLWNvbnRhY3RcIik7XG5cbmV4cG9ydCB7dGVzdDEgLCBjcmVhdGVDb250YWN0UGFnZX0iLCJmdW5jdGlvbiBjcmVhdGVGcm9udFBhZ2UoKVxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaW1pbmcoKSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKVxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZWxlbWVudDEuaW5uZXJUZXh0ID0gXCJDYXQgQ2F0IENhZmVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KClcbntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWxlbWVudDEuaW5uZXJUZXh0ID0gXCJUaGUgUHVycmZlY3QgQ3VwIGlzIGEgZml2ZS1wYXcgZXh0cmF2YWdhbnphIGZvciBhbnkgZmVsaW5lIChhbmQgZmVsaW5lLWZyaWVuZGx5IGh1bWFuKSBvbiB0aGUgcHJvd2wgZm9yIGEgZ29vZCB0aW1lLiBGcm9tIHRoZSBwYXdzb21lIGF0bW9zcGhlcmUgdG8gdGhlIHB1cnItb2Npb3VzIGNvbXBhbnksIGl0J3MgYSBndWFyYW50ZWVkIHRhaWwtd2FnZ2VyIG9mIGEgZ29vZCB0aW1lLiBKdXN0IHJlbWVtYmVyLCBodW1hbnM6IHJlc3BlY3QgdGhlIGZsb29mLCBhbmQgeW91J2xsIGJlIGZlbGluZSBmaW5lIVwiXG4gICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWxlbWVudDMuaW5uZXJUZXh0ID0gXCJNZW93dGggUmF0aW5nOlwiO1xuICAgIGVsZW1lbnQzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIOKtkOKtkOKtkOKtkOKtkCAod2l0aCBleHRyYSB0dW5hLWNhbiBib251cyBwb2ludHMhKVwiKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQoZWxlbWVudDMpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaW1pbmcoKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGFyYUFycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhQXJyYXkucHVzaChlbGVtZW50MSk7XG4gICAgfVxuICAgIHBhcmFBcnJheVswXS50ZXh0Q29udGVudCA9IFwiSHVtYW4tRnJpZW5kbHkgSG91cnM6XCI7XG4gICAgcGFyYUFycmF5WzFdLnRleHRDb250ZW50ID0gXCJDbGFzc2ljIENhZmU6IDEwYW0gdG8gN3BtLCBvZmZlcmluZyBhIHJlbGF4aW5nIGFmdGVybm9vbiBlc2NhcGUgd2l0aCBmZWxpbmUgY29tcGFueS5cIjtcbiAgICBwYXJhQXJyYXlbMl0udGV4dENvbnRlbnQgPSBcIkV4dGVuZGVkIFdlZWtlbmRzOiBPcGVuIHVudGlsIDlwbSBvbiBGcmlkYXlzIGFuZCBTYXR1cmRheXMgZm9yIHNvY2lhbGl6aW5nIGFuZCBsYXRlLW5pZ2h0IGNhdCB0aGVyYXB5LlwiO1xuICAgIHBhcmFBcnJheVszXS50ZXh0Q29udGVudCA9IFwiRWFybHkgQmlyZCBQdXJyczogT3BlbiBmcm9tIDhhbSB0byAxMnBtIGZvciB0aG9zZSB3aG8gd2FudCB0byBzdGFydCB0aGVpciBkYXkgd2l0aCBhIGRvc2Ugb2YgY3V0ZW5lc3MuXCI7XG5cbiAgICBwYXJhQXJyYXkuZm9yRWFjaCgocGFyYUVsZW1lbnQpPT57XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYUVsZW1lbnQpO1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IHRlc3QgPSAoKSA9PiBjb25zb2xlLmxvZyhcIlBhZ2VMb2FkXCIpXG5cbmV4cG9ydCB7dGVzdCxjcmVhdGVGcm9udFBhZ2V9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3Rlc3QsY3JlYXRlRnJvbnRQYWdlfSBmcm9tICcuL3BhZ2UtbG9hZC1ob21lJztcbmltcG9ydCB7IHRlc3QxLCBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gJy4vcGFnZS1sb2FkLWNvbnRhY3QnO1xuXG4vLyBjb25zb2xlLmxvZygnaGVsbG8gbmV3IGNoYW5nZXMnKVxuLy8gdGVzdCgpO1xuLy8gY3JlYXRlRnJvbnRQYWdlKCk7XG50ZXN0MSgpO1xuY3JlYXRlQ29udGFjdFBhZ2UoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9