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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _cleanpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanpage */ "./src/cleanpage.js");


function createMenu(){
    (0,_cleanpage__WEBPACK_IMPORTED_MODULE_0__.cleanPage)();
    const element = document.querySelector('#content');
    element.appendChild(createBeverage());
}

function createBeverage(){
    const menuTitleDiv = document.createElement('div');
    const menuTitleHeader = document.createElementNS('h1');
    menuTitleHeader.innerText = 'Beverages';
    menuTitleDiv.appendChild(menuTitleHeader);
    return menuTitleHeader;

}

class Food{
    constructor(name,description,value){
        this.name = name;
        this.description = description;
        this.value = value;
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
/* harmony export */   "default": () => (/* binding */ createContactPage)
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
/* harmony export */   "default": () => (/* binding */ createFrontPage)
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




(0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();


// createFrontPage();
// document.querySelector('.Home-btn').addEventListener('click',createFrontPage);
// document.querySelector('.Contact-btn').addEventListener('click',createContactPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMd0M7O0FBRWpDO0FBQ1AsSUFBSSxxREFBUztBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0M7O0FBRXpCO0FBQ2Y7QUFDQSxJQUFJLHFEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUIsOENBQThDLE9BQU87QUFDckQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXdDO0FBQ3pCO0FBQ2Y7QUFDQSxJQUFJLHFEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0s7QUFDaEI7O0FBRXBDLGlEQUFVOzs7QUFHVjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svLi9zcmMvY2xlYW5wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay8uL3NyYy9wYWdlLWxvYWQtY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1cmFudHdlYnBhY2svLi9zcmMvcGFnZS1sb2FkLWhvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdHVyYW50d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dXJhbnR3ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjbGVhblBhZ2UoKXtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd2hpbGUodmFsdWUuZmlyc3RDaGlsZCl7XG4gICAgICAgIHZhbHVlLnJlbW92ZUNoaWxkKHZhbHVlLmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBjbGVhblBhZ2UgfSBmcm9tIFwiLi9jbGVhbnBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjbGVhblBhZ2UoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJldmVyYWdlKCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCZXZlcmFnZSgpe1xuICAgIGNvbnN0IG1lbnVUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVUaXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaDEnKTtcbiAgICBtZW51VGl0bGVIZWFkZXIuaW5uZXJUZXh0ID0gJ0JldmVyYWdlcyc7XG4gICAgbWVudVRpdGxlRGl2LmFwcGVuZENoaWxkKG1lbnVUaXRsZUhlYWRlcik7XG4gICAgcmV0dXJuIG1lbnVUaXRsZUhlYWRlcjtcblxufVxuXG5jbGFzcyBGb29ke1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZGVzY3JpcHRpb24sdmFsdWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY2xlYW5QYWdlIH0gZnJvbSBcIi4vY2xlYW5wYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKClcbntcbiAgICBjbGVhblBhZ2UoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RVcygpKTtcbiAgICBjcmVhdGVDb250YWN0UGVyc29uKCkuZm9yRWFjaCgodmFsKSA9PlxuICAgIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2YWwpO1xuXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFVzKClcbntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGVsZW1lbnQxLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQZXJzb24oKVxue1xuICAgIGNvbnN0IGRpdkFycmF5ID0gW107XG4gICAgY29uc3QgcGVyc29uQXJyYXkgPSBbXTtcbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFBlcnNvbkRldGFpbHMoJ01lb3dzZXInLCAnTWFuYWdlcicsICdNZW93c2VyOTExJywgJzk4NzYnKVxuICAgIGNvbnN0IGNoZWYgPSBuZXcgUGVyc29uRGV0YWlscygnTWVvd2hlZicsICdDaGVmJywgJ01lb3doZWZnb29kZm9vZCcsICc3Nzc3JylcbiAgICBjb25zdCBzZXJ2aWNlU3RhZmYgPSBuZXcgUGVyc29uRGV0YWlscygnTWVvd3ZpY2UnLCAnU2VydmljZSBTdGFmZicsICdNZW93c3RhZmYnLCAnNzk4NScpXG4gICAgcGVyc29uQXJyYXkucHVzaChtYW5hZ2VyLCBjaGVmLCBzZXJ2aWNlU3RhZmYpXG5cbiAgICB3aGlsZSAoZGl2QXJyYXkubGVuZ3RoIDwgMylcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2QXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBkaXZBcnJheS5mb3JFYWNoKChkaXYsIGluZGV4KSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwZXJzb25BcnJheVtpbmRleF07XG4gICAgICAgIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkZXIyLnRleHRDb250ZW50ID0gdmFsdWUubmFtZTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xuICAgICAgICBmb3IgKGxldCB0b0luc2VydCBpbiB2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRvSW5zZXJ0ID09PSAnbmFtZScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBlbGVtZW50UGFyYWdyYXBoLnRleHRDb250ZW50ID0gdmFsdWVbdG9JbnNlcnRdO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVsZW1lbnRQYXJhZ3JhcGgpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZGl2QXJyYXk7XG5cbn1cblxuY2xhc3MgUGVyc29uRGV0YWlsc1xue1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2Zlc3Npb24sIGVtYWlsLCBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2Zlc3Npb24gPSBwcm9mZXNzaW9uO1xuICAgICAgICB0aGlzLmVtYWlsID0gYCR7ZW1haWx9QG1lb3dtYWlsLmNvbWBcbiAgICAgICAgdGhpcy5tb2JpbGVOdW1iZXIgPSBgOTk5OS04ODg4LTc3NzctJHtudW1iZXJ9YFxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgY2xlYW5QYWdlIH0gZnJvbSBcIi4vY2xlYW5wYWdlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGcm9udFBhZ2UoKVxue1xuICAgIGNsZWFuUGFnZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXcoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaW1pbmcoKSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKVxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZWxlbWVudDEuaW5uZXJUZXh0ID0gXCJDYXQgQ2F0IENhZmVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmV2aWV3KClcbntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWxlbWVudDEuaW5uZXJUZXh0ID0gXCJUaGUgUHVycmZlY3QgQ3VwIGlzIGEgZml2ZS1wYXcgZXh0cmF2YWdhbnphIGZvciBhbnkgZmVsaW5lIChhbmQgZmVsaW5lLWZyaWVuZGx5IGh1bWFuKSBvbiB0aGUgcHJvd2wgZm9yIGEgZ29vZCB0aW1lLiBGcm9tIHRoZSBwYXdzb21lIGF0bW9zcGhlcmUgdG8gdGhlIHB1cnItb2Npb3VzIGNvbXBhbnksIGl0J3MgYSBndWFyYW50ZWVkIHRhaWwtd2FnZ2VyIG9mIGEgZ29vZCB0aW1lLiBKdXN0IHJlbWVtYmVyLCBodW1hbnM6IHJlc3BlY3QgdGhlIGZsb29mLCBhbmQgeW91J2xsIGJlIGZlbGluZSBmaW5lIVwiXG4gICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWxlbWVudDMuaW5uZXJUZXh0ID0gXCJNZW93dGggUmF0aW5nOlwiO1xuICAgIGVsZW1lbnQzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIOKtkOKtkOKtkOKtkOKtkCAod2l0aCBleHRyYSB0dW5hLWNhbiBib251cyBwb2ludHMhKVwiKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQoZWxlbWVudDMpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaW1pbmcoKVxue1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYXJhQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhQXJyYXkucHVzaChlbGVtZW50MSk7XG4gICAgfVxuICAgIHBhcmFBcnJheVswXS50ZXh0Q29udGVudCA9IFwiSHVtYW4tRnJpZW5kbHkgSG91cnM6XCI7XG4gICAgcGFyYUFycmF5WzFdLnRleHRDb250ZW50ID0gXCJDbGFzc2ljIENhZmU6IDEwYW0gdG8gN3BtLCBvZmZlcmluZyBhIHJlbGF4aW5nIGFmdGVybm9vbiBlc2NhcGUgd2l0aCBmZWxpbmUgY29tcGFueS5cIjtcbiAgICBwYXJhQXJyYXlbMl0udGV4dENvbnRlbnQgPSBcIkV4dGVuZGVkIFdlZWtlbmRzOiBPcGVuIHVudGlsIDlwbSBvbiBGcmlkYXlzIGFuZCBTYXR1cmRheXMgZm9yIHNvY2lhbGl6aW5nIGFuZCBsYXRlLW5pZ2h0IGNhdCB0aGVyYXB5LlwiO1xuICAgIHBhcmFBcnJheVszXS50ZXh0Q29udGVudCA9IFwiRWFybHkgQmlyZCBQdXJyczogT3BlbiBmcm9tIDhhbSB0byAxMnBtIGZvciB0aG9zZSB3aG8gd2FudCB0byBzdGFydCB0aGVpciBkYXkgd2l0aCBhIGRvc2Ugb2YgY3V0ZW5lc3MuXCI7XG5cbiAgICBwYXJhQXJyYXkuZm9yRWFjaCgocGFyYUVsZW1lbnQpID0+XG4gICAge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFFbGVtZW50KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVGcm9udFBhZ2UgZnJvbSAnLi9wYWdlLWxvYWQtaG9tZSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSAnLi9wYWdlLWxvYWQtY29udGFjdCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcblxuY3JlYXRlTWVudSgpO1xuXG5cbi8vIGNyZWF0ZUZyb250UGFnZSgpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvbWUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUZyb250UGFnZSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ29udGFjdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlQ29udGFjdFBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9