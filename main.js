/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cleanpage.js":
/*!**************************!*\
  !*** ./src/cleanpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanPage: () => (/* binding */ cleanPage)
/* harmony export */ });
function cleanPage(){
    const value = document.querySelector('#content');
    while(value.firstChild){
        value.removeChild(value.firstChild)
    }
}



/***/ }),

/***/ "./src/page-load-contact.js":
/*!**********************************!*\
  !*** ./src/page-load-contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _cleanpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanpage */ "./src/cleanpage.js");


function createContactPage()
{
    (0,_cleanpage__WEBPACK_IMPORTED_MODULE_0__.cleanPage)();
    const element = document.querySelector('#content');
    element.appendChild(createContactUs());
    createContactPerson().forEach((val) =>
    {
        element.appendChild(val);

    })
}

function createContactUs()
{
    const element = document.createElement('div');
    const element1 = document.createElement('h1');
    element1.textContent = "Contact Us";
    element.appendChild(element1);
    return element;
}

function createContactPerson()
{
    const divArray = [];
    const personArray = [];
    const manager = new PersonDetails('Meowser', 'Manager', 'Meowser911', '9876')
    const chef = new PersonDetails('Meowhef', 'Chef', 'Meowhefgoodfood', '7777')
    const serviceStaff = new PersonDetails('Meowvice', 'Service Staff', 'Meowstaff', '7985')
    personArray.push(manager, chef, serviceStaff)

    while (divArray.length < 3)
    {
        const element = document.createElement('div');
        divArray.push(element);
    }

    divArray.forEach((div, index) =>
    {
        const value = personArray[index];
        const header2 = document.createElement('h2');
        header2.textContent = value.name;
        div.appendChild(header2);
        for (let toInsert in value)
        {
            if (toInsert === 'name')
            {
                continue;
            }
            const elementParagraph = document.createElement('p')
            elementParagraph.textContent = value[toInsert];
            div.appendChild(elementParagraph);
        }
    })
    return divArray;

}

class PersonDetails
{
    constructor(name, profession, email, number)
    {
        this.name = name;
        this.profession = profession;
        this.email = `${email}@meowmail.com`
        this.mobileNumber = `9999-8888-7777-${number}`
    }
}



/***/ }),

/***/ "./src/page-load-home.js":
/*!*******************************!*\
  !*** ./src/page-load-home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFrontPage: () => (/* binding */ createFrontPage)
/* harmony export */ });
/* harmony import */ var _cleanpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanpage */ "./src/cleanpage.js");

function createFrontPage()
{
    (0,_cleanpage__WEBPACK_IMPORTED_MODULE_0__.cleanPage)();
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

function createTiming()
{
    const element = document.createElement('div');
    const paraArray = [];
    for (let i = 0; i < 4; i++)
    {
        const element1 = document.createElement('p');
        paraArray.push(element1);
    }
    paraArray[0].textContent = "Human-Friendly Hours:";
    paraArray[1].textContent = "Classic Cafe: 10am to 7pm, offering a relaxing afternoon escape with feline company.";
    paraArray[2].textContent = "Extended Weekends: Open until 9pm on Fridays and Saturdays for socializing and late-night cat therapy.";
    paraArray[3].textContent = "Early Bird Purrs: Open from 8am to 12pm for those who want to start their day with a dose of cuteness.";

    paraArray.forEach((paraElement) =>
    {
        element.appendChild(paraElement);
    })
    return element;
}



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




(0,_page_load_home__WEBPACK_IMPORTED_MODULE_0__.createFrontPage)();
// document.querySelector('.Home-btn').addEventListener('click',createFrontPage);
// document.querySelector('.Contact-btn').addEventListener('click',createContactPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMd0M7O0FBRWpDO0FBQ1A7QUFDQSxJQUFJLHFEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUIsOENBQThDLE9BQU87QUFDckQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXdDO0FBQ2pDO0FBQ1A7QUFDQSxJQUFJLHFEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDUzs7O0FBRy9ELGdFQUFlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay8uL3NyYy9jbGVhbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrLy4vc3JjL3BhZ2UtbG9hZC1jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay8uL3NyYy9wYWdlLWxvYWQtaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUGFnZSgpe1xuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3aGlsZSh2YWx1ZS5maXJzdENoaWxkKXtcbiAgICAgICAgdmFsdWUucmVtb3ZlQ2hpbGQodmFsdWUuZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGNsZWFuUGFnZSB9IGZyb20gXCIuL2NsZWFucGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKVxue1xuICAgIGNsZWFuUGFnZSgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFVzKCkpO1xuICAgIGNyZWF0ZUNvbnRhY3RQZXJzb24oKS5mb3JFYWNoKCh2YWwpID0+XG4gICAge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZhbCk7XG5cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0VXMoKVxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZWxlbWVudDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBlcnNvbigpXG57XG4gICAgY29uc3QgZGl2QXJyYXkgPSBbXTtcbiAgICBjb25zdCBwZXJzb25BcnJheSA9IFtdO1xuICAgIGNvbnN0IG1hbmFnZXIgPSBuZXcgUGVyc29uRGV0YWlscygnTWVvd3NlcicsICdNYW5hZ2VyJywgJ01lb3dzZXI5MTEnLCAnOTg3NicpXG4gICAgY29uc3QgY2hlZiA9IG5ldyBQZXJzb25EZXRhaWxzKCdNZW93aGVmJywgJ0NoZWYnLCAnTWVvd2hlZmdvb2Rmb29kJywgJzc3NzcnKVxuICAgIGNvbnN0IHNlcnZpY2VTdGFmZiA9IG5ldyBQZXJzb25EZXRhaWxzKCdNZW93dmljZScsICdTZXJ2aWNlIFN0YWZmJywgJ01lb3dzdGFmZicsICc3OTg1JylcbiAgICBwZXJzb25BcnJheS5wdXNoKG1hbmFnZXIsIGNoZWYsIHNlcnZpY2VTdGFmZilcblxuICAgIHdoaWxlIChkaXZBcnJheS5sZW5ndGggPCAzKVxuICAgIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRpdkFycmF5LmZvckVhY2goKGRpdiwgaW5kZXgpID0+XG4gICAge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHBlcnNvbkFycmF5W2luZGV4XTtcbiAgICAgICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRlcjIudGV4dENvbnRlbnQgPSB2YWx1ZS5uYW1lO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG4gICAgICAgIGZvciAobGV0IHRvSW5zZXJ0IGluIHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodG9JbnNlcnQgPT09ICduYW1lJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGVsZW1lbnRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB2YWx1ZVt0b0luc2VydF07XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudFBhcmFncmFwaCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBkaXZBcnJheTtcblxufVxuXG5jbGFzcyBQZXJzb25EZXRhaWxzXG57XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvZmVzc2lvbiwgZW1haWwsIG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvZmVzc2lvbiA9IHByb2Zlc3Npb247XG4gICAgICAgIHRoaXMuZW1haWwgPSBgJHtlbWFpbH1AbWVvd21haWwuY29tYFxuICAgICAgICB0aGlzLm1vYmlsZU51bWJlciA9IGA5OTk5LTg4ODgtNzc3Ny0ke251bWJlcn1gXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBjbGVhblBhZ2UgfSBmcm9tIFwiLi9jbGVhbnBhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcm9udFBhZ2UoKVxue1xuICAgIGNsZWFuUGFnZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaW1pbmcoKSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKVxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZWxlbWVudDEuaW5uZXJUZXh0ID0gXCJDYXQgQ2F0IENhZmVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KClcbntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWxlbWVudDEuaW5uZXJUZXh0ID0gXCJUaGUgUHVycmZlY3QgQ3VwIGlzIGEgZml2ZS1wYXcgZXh0cmF2YWdhbnphIGZvciBhbnkgZmVsaW5lIChhbmQgZmVsaW5lLWZyaWVuZGx5IGh1bWFuKSBvbiB0aGUgcHJvd2wgZm9yIGEgZ29vZCB0aW1lLiBGcm9tIHRoZSBwYXdzb21lIGF0bW9zcGhlcmUgdG8gdGhlIHB1cnItb2Npb3VzIGNvbXBhbnksIGl0J3MgYSBndWFyYW50ZWVkIHRhaWwtd2FnZ2VyIG9mIGEgZ29vZCB0aW1lLiBKdXN0IHJlbWVtYmVyLCBodW1hbnM6IHJlc3BlY3QgdGhlIGZsb29mLCBhbmQgeW91J2xsIGJlIGZlbGluZSBmaW5lIVwiXG4gICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWxlbWVudDMuaW5uZXJUZXh0ID0gXCJNZW93dGggUmF0aW5nOlwiO1xuICAgIGVsZW1lbnQzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIOKtkOKtkOKtkOKtkOKtkCAod2l0aCBleHRyYSB0dW5hLWNhbiBib251cyBwb2ludHMhKVwiKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQoZWxlbWVudDMpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaW1pbmcoKVxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYXJhQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhQXJyYXkucHVzaChlbGVtZW50MSk7XG4gICAgfVxuICAgIHBhcmFBcnJheVswXS50ZXh0Q29udGVudCA9IFwiSHVtYW4tRnJpZW5kbHkgSG91cnM6XCI7XG4gICAgcGFyYUFycmF5WzFdLnRleHRDb250ZW50ID0gXCJDbGFzc2ljIENhZmU6IDEwYW0gdG8gN3BtLCBvZmZlcmluZyBhIHJlbGF4aW5nIGFmdGVybm9vbiBlc2NhcGUgd2l0aCBmZWxpbmUgY29tcGFueS5cIjtcbiAgICBwYXJhQXJyYXlbMl0udGV4dENvbnRlbnQgPSBcIkV4dGVuZGVkIFdlZWtlbmRzOiBPcGVuIHVudGlsIDlwbSBvbiBGcmlkYXlzIGFuZCBTYXR1cmRheXMgZm9yIHNvY2lhbGl6aW5nIGFuZCBsYXRlLW5pZ2h0IGNhdCB0aGVyYXB5LlwiO1xuICAgIHBhcmFBcnJheVszXS50ZXh0Q29udGVudCA9IFwiRWFybHkgQmlyZCBQdXJyczogT3BlbiBmcm9tIDhhbSB0byAxMnBtIGZvciB0aG9zZSB3aG8gd2FudCB0byBzdGFydCB0aGVpciBkYXkgd2l0aCBhIGRvc2Ugb2YgY3V0ZW5lc3MuXCI7XG5cbiAgICBwYXJhQXJyYXkuZm9yRWFjaCgocGFyYUVsZW1lbnQpID0+XG4gICAge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFFbGVtZW50KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGVzdCxjcmVhdGVGcm9udFBhZ2V9IGZyb20gJy4vcGFnZS1sb2FkLWhvbWUnO1xuaW1wb3J0IHsgdGVzdDEsIGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSAnLi9wYWdlLWxvYWQtY29udGFjdCc7XG5cblxuY3JlYXRlRnJvbnRQYWdlKCk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG9tZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlRnJvbnRQYWdlKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db250YWN0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVDb250YWN0UGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=