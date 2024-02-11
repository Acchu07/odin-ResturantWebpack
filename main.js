/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/* <div>
            <img src="brow_tabby_cat.jpg" alt="Photo of Brow Tabby Cat Smiling">
            <h1>Cat Cat Cafe</h1>
        </div>
        <div>
            <p>The Purrfect Cup is a five-paw extravaganza for any feline (and feline-friendly human) on the prowl for a
                good time. From the pawsome atmosphere to the purr-ocious company, it's a guaranteed tail-wagger of a
                good time. Just remember, humans: respect the floof, and you'll be feline fine!</p>
            <p><span>Meowth Rating:</span> ⭐⭐⭐⭐⭐ (with extra tuna-can bonus points!)</p>
        </div>
        <div>
            <p><span>Human-Friendly Hours:</span></p>

            <p>Classic Cafe: 10am to 7pm, offering a relaxing afternoon escape with feline company.</p>
            <p>Extended Weekends: Open until 9pm on Fridays and Saturdays for socializing and late-night cat therapy.</p>
            <p>Early Bird Purrs: Open from 8am to 12pm for those who want to start their day with a dose of cuteness.</p>
            
        </div> */

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


// console.log('hello new changes')
// test();


(0,_page_load_home__WEBPACK_IMPORTED_MODULE_0__.createFrontPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNEOztBQUV0RDtBQUNBOzs7QUFHQSxnRUFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrLy4vc3JjL3BhZ2UtbG9hZC1ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVGcm9udFBhZ2UoKVxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaW1pbmcoKSk7XG5cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKClcbntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGVsZW1lbnQxLmlubmVyVGV4dCA9IFwiQ2F0IENhdCBDYWZlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJldmlldygpXG57XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVsZW1lbnQxLmlubmVyVGV4dCA9IFwiVGhlIFB1cnJmZWN0IEN1cCBpcyBhIGZpdmUtcGF3IGV4dHJhdmFnYW56YSBmb3IgYW55IGZlbGluZSAoYW5kIGZlbGluZS1mcmllbmRseSBodW1hbikgb24gdGhlIHByb3dsIGZvciBhIGdvb2QgdGltZS4gRnJvbSB0aGUgcGF3c29tZSBhdG1vc3BoZXJlIHRvIHRoZSBwdXJyLW9jaW91cyBjb21wYW55LCBpdCdzIGEgZ3VhcmFudGVlZCB0YWlsLXdhZ2dlciBvZiBhIGdvb2QgdGltZS4gSnVzdCByZW1lbWJlciwgaHVtYW5zOiByZXNwZWN0IHRoZSBmbG9vZiwgYW5kIHlvdSdsbCBiZSBmZWxpbmUgZmluZSFcIlxuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGVsZW1lbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVsZW1lbnQzLmlubmVyVGV4dCA9IFwiTWVvd3RoIFJhdGluZzpcIjtcbiAgICBlbGVtZW50My5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiDirZDirZDirZDirZDirZAgKHdpdGggZXh0cmEgdHVuYS1jYW4gYm9udXMgcG9pbnRzISlcIikpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDEpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDIpO1xuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKGVsZW1lbnQzKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGltaW5nKCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBhcmFBcnJheSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xuICAgICAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYUFycmF5LnB1c2goZWxlbWVudDEpO1xuICAgIH1cbiAgICBwYXJhQXJyYXlbMF0udGV4dENvbnRlbnQgPSBcIkh1bWFuLUZyaWVuZGx5IEhvdXJzOlwiO1xuICAgIHBhcmFBcnJheVsxXS50ZXh0Q29udGVudCA9IFwiQ2xhc3NpYyBDYWZlOiAxMGFtIHRvIDdwbSwgb2ZmZXJpbmcgYSByZWxheGluZyBhZnRlcm5vb24gZXNjYXBlIHdpdGggZmVsaW5lIGNvbXBhbnkuXCI7XG4gICAgcGFyYUFycmF5WzJdLnRleHRDb250ZW50ID0gXCJFeHRlbmRlZCBXZWVrZW5kczogT3BlbiB1bnRpbCA5cG0gb24gRnJpZGF5cyBhbmQgU2F0dXJkYXlzIGZvciBzb2NpYWxpemluZyBhbmQgbGF0ZS1uaWdodCBjYXQgdGhlcmFweS5cIjtcbiAgICBwYXJhQXJyYXlbM10udGV4dENvbnRlbnQgPSBcIkVhcmx5IEJpcmQgUHVycnM6IE9wZW4gZnJvbSA4YW0gdG8gMTJwbSBmb3IgdGhvc2Ugd2hvIHdhbnQgdG8gc3RhcnQgdGhlaXIgZGF5IHdpdGggYSBkb3NlIG9mIGN1dGVuZXNzLlwiO1xuXG4gICAgcGFyYUFycmF5LmZvckVhY2goKHBhcmFFbGVtZW50KT0+e1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFFbGVtZW50KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKiA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJicm93X3RhYmJ5X2NhdC5qcGdcIiBhbHQ9XCJQaG90byBvZiBCcm93IFRhYmJ5IENhdCBTbWlsaW5nXCI+XG4gICAgICAgICAgICA8aDE+Q2F0IENhdCBDYWZlPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5UaGUgUHVycmZlY3QgQ3VwIGlzIGEgZml2ZS1wYXcgZXh0cmF2YWdhbnphIGZvciBhbnkgZmVsaW5lIChhbmQgZmVsaW5lLWZyaWVuZGx5IGh1bWFuKSBvbiB0aGUgcHJvd2wgZm9yIGFcbiAgICAgICAgICAgICAgICBnb29kIHRpbWUuIEZyb20gdGhlIHBhd3NvbWUgYXRtb3NwaGVyZSB0byB0aGUgcHVyci1vY2lvdXMgY29tcGFueSwgaXQncyBhIGd1YXJhbnRlZWQgdGFpbC13YWdnZXIgb2YgYVxuICAgICAgICAgICAgICAgIGdvb2QgdGltZS4gSnVzdCByZW1lbWJlciwgaHVtYW5zOiByZXNwZWN0IHRoZSBmbG9vZiwgYW5kIHlvdSdsbCBiZSBmZWxpbmUgZmluZSE8L3A+XG4gICAgICAgICAgICA8cD48c3Bhbj5NZW93dGggUmF0aW5nOjwvc3Bhbj4g4q2Q4q2Q4q2Q4q2Q4q2QICh3aXRoIGV4dHJhIHR1bmEtY2FuIGJvbnVzIHBvaW50cyEpPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPjxzcGFuPkh1bWFuLUZyaWVuZGx5IEhvdXJzOjwvc3Bhbj48L3A+XG5cbiAgICAgICAgICAgIDxwPkNsYXNzaWMgQ2FmZTogMTBhbSB0byA3cG0sIG9mZmVyaW5nIGEgcmVsYXhpbmcgYWZ0ZXJub29uIGVzY2FwZSB3aXRoIGZlbGluZSBjb21wYW55LjwvcD5cbiAgICAgICAgICAgIDxwPkV4dGVuZGVkIFdlZWtlbmRzOiBPcGVuIHVudGlsIDlwbSBvbiBGcmlkYXlzIGFuZCBTYXR1cmRheXMgZm9yIHNvY2lhbGl6aW5nIGFuZCBsYXRlLW5pZ2h0IGNhdCB0aGVyYXB5LjwvcD5cbiAgICAgICAgICAgIDxwPkVhcmx5IEJpcmQgUHVycnM6IE9wZW4gZnJvbSA4YW0gdG8gMTJwbSBmb3IgdGhvc2Ugd2hvIHdhbnQgdG8gc3RhcnQgdGhlaXIgZGF5IHdpdGggYSBkb3NlIG9mIGN1dGVuZXNzLjwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj4gKi9cblxuY29uc3QgdGVzdCA9ICgpID0+IGNvbnNvbGUubG9nKFwiUGFnZUxvYWRcIilcblxuZXhwb3J0IHt0ZXN0LGNyZWF0ZUZyb250UGFnZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGVzdCxjcmVhdGVGcm9udFBhZ2V9IGZyb20gJy4vcGFnZS1sb2FkLWhvbWUnO1xuXG4vLyBjb25zb2xlLmxvZygnaGVsbG8gbmV3IGNoYW5nZXMnKVxuLy8gdGVzdCgpO1xuXG5cbmNyZWF0ZUZyb250UGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==