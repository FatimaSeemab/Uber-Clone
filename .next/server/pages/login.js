"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyB1utWRs7T-plAUFpLNpZfW9EpC1dBWYLE\",\n    authDomain: \"uber-clone-4355d.firebaseapp.com\",\n    projectId: \"uber-clone-4355d\",\n    storageBucket: \"uber-clone-4355d.appspot.com\",\n    messagingSenderId: \"286106651255\",\n    appId: \"1:286106651255:web:f9b669a02f364ac0ef1472\",\n    measurementId: \"G-D6PCYZWS6J\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxFQUF1RDtBQUNYO0FBQ0s7QUFDTztBQUN4RCxFQUE0RDtBQUM1RCxFQUFpRTtBQUVqRSxFQUF3QztBQUN4QyxFQUFtRTtBQUNuRSxLQUFLLENBQUNJLGNBQWMsR0FBRyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUUsQ0FBeUM7SUFDakRDLFVBQVUsRUFBRSxDQUFrQztJQUM5Q0MsU0FBUyxFQUFFLENBQWtCO0lBQzdCQyxhQUFhLEVBQUUsQ0FBOEI7SUFDN0NDLGlCQUFpQixFQUFFLENBQWM7SUFDakNDLEtBQUssRUFBRSxDQUEyQztJQUNsREMsYUFBYSxFQUFFLENBQWM7QUFDL0IsQ0FBQztBQUVELEVBQXNCO0FBQ3RCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHWiwyREFBYSxDQUFDSSxjQUFjO0FBQ3hDLEtBQUssQ0FBQ1MsU0FBUyxHQUFHWixnRUFBWSxDQUFDVyxHQUFHO0FBQ2xDLEtBQUssQ0FBQ0UsUUFBUSxHQUFDLEdBQUcsQ0FBQ1osNkRBQWtCO0FBQ3JDLEtBQUssQ0FBQ2EsSUFBSSxHQUFDWixzREFBTztBQUVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZWUvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5pbXBvcnQge0dvb2dsZUF1dGhQcm92aWRlcixnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QjF1dFdSczdULXBsQVVGcExOcFpmVzlFcEMxZEJXWUxFXCIsXG4gIGF1dGhEb21haW46IFwidWJlci1jbG9uZS00MzU1ZC5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInViZXItY2xvbmUtNDM1NWRcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ1YmVyLWNsb25lLTQzNTVkLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI4NjEwNjY1MTI1NVwiLFxuICBhcHBJZDogXCIxOjI4NjEwNjY1MTI1NTp3ZWI6ZjliNjY5YTAyZjM2NGFjMGVmMTQ3MlwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctRDZQQ1laV1M2SlwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xuY29uc3QgcHJvdmlkZXI9bmV3IEdvb2dsZUF1dGhQcm92aWRlcigpXG5jb25zdCBhdXRoPWdldEF1dGgoKVxuXG5leHBvcnQge2FwcCxhdXRoLHByb3ZpZGVyfSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImFuYWx5dGljcyIsInByb3ZpZGVyIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"tailwind-styled-components\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, (user)=>{\n            if (user) {\n                router.push(\"/\");\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/humashehwana/Documents/React Clones/Uber-Clone/pages/login.js\",\n            lineNumber: 19,\n            columnNumber: 11\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UberLogo, {\n                src: \"https://i.ibb.co/ZMhy8ws/uber-logo.png\",\n                __source: {\n                    fileName: \"/Users/humashehwana/Documents/React Clones/Uber-Clone/pages/login.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                __source: {\n                    fileName: \"/Users/humashehwana/Documents/React Clones/Uber-Clone/pages/login.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: \"Log in to access your account\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadImage, {\n                src: \"https://i.ibb.co/CsV9RYZ/login-image.png\",\n                __source: {\n                    fileName: \"/Users/humashehwana/Documents/React Clones/Uber-Clone/pages/login.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n                onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase__WEBPACK_IMPORTED_MODULE_5__.provider)\n                ,\n                __source: {\n                    fileName: \"/Users/humashehwana/Documents/React Clones/Uber-Clone/pages/login.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: \"Login to Uber\"\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`flex flex-col h-screen w-screen bg-gray-200 p-4`;\nconst SignInButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`bg-black text-white text-center py-4 mt-8 self-center  `;\nconst UberLogo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nh-20 w-auto object-contain self-start`;\nconst Title = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`text-5xl pt-4 text-gray-500`;\nconst HeadImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nobject-contain w-full`;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDTTtBQUNOO0FBQzJCO0FBQ3ZCO0FBR3pDLEtBQUssQ0FBRVEsS0FBSyxPQUFNLENBQUM7SUFDakIsS0FBSyxDQUFDQyxNQUFNLEdBQUNOLHNEQUFTO0lBQ3RCRixnREFBUyxLQUFLLENBQUM7UUFDYkksaUVBQWtCLENBQUNDLDJDQUFJLEdBQUNJLElBQUksR0FBSSxDQUFDO1lBQy9CLEVBQUUsRUFBQ0EsSUFBSSxFQUNQLENBQUM7Z0JBQ0NELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUc7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSx1RUFBR0MsT0FBTzs7Ozs7Ozs7aUZBQ1hDLFFBQVE7Z0JBQUNDLEdBQUcsRUFBQyxDQUF3Qzs7Ozs7Ozs7aUZBQ3JEQyxLQUFLOzs7Ozs7OzBCQUFDLENBQTZCOztpRkFDbkNDLFNBQVM7Z0JBQUNGLEdBQUcsRUFBQyxDQUEwQzs7Ozs7Ozs7aUZBQ3hERyxZQUFZO2dCQUFDQyxPQUFPLE1BQU1kLDhEQUFlLENBQUNFLDJDQUFJLEVBQUNDLCtDQUFROzs7Ozs7OzswQkFBRyxDQUFhOzs7O0FBRTlFLENBQUM7QUFFRCxpRUFBZUMsS0FBSyxFQUFDO0FBRXJCLEtBQUssQ0FBQ0ksT0FBTyxHQUFDVix1RUFBTSxDQUFDLCtDQUErQztBQUNwRSxLQUFLLENBQUNlLFlBQVksR0FBQ2YsMEVBQVMsQ0FBRSx1REFBdUQ7QUFDckYsS0FBSyxDQUFDVyxRQUFRLEdBQUNYLHVFQUFNLENBQUM7QUFFdEIsS0FBSyxDQUFDYSxLQUFLLEdBQUNiLEVBQUUsQ0FBQ2lCLEdBQUcsQ0FBQztBQUNuQixLQUFLLENBQUNILFFBQUFBLHVFQUFZLENBQUNLLEdBQUcsQ0FBQyxzQkFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ViZXItY2xvbmVlLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge3NpZ25JbldpdGhQb3B1cCxvbkF1dGhTdGF0ZUNoYW5nZWR9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB7YXV0aCxwcm92aWRlcn0gZnJvbSBcIi4uL2ZpcmViYXNlXCJcblxuXG5jb25zdCAgTG9naW49KCk9PiB7XG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCx1c2VyID0+IHtcbiAgICAgIGlmKHVzZXIpXG4gICAgICB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxuICAgICAgfVxuICAgIH0pXG4gIH0sW10pXG5cbiAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgIDxVYmVyTG9nbyBzcmM9XCJodHRwczovL2kuaWJiLmNvL1pNaHk4d3MvdWJlci1sb2dvLnBuZ1wiLz5cbiAgICAgIDxUaXRsZT5Mb2cgaW4gdG8gYWNjZXNzIHlvdXIgYWNjb3VudDwvVGl0bGU+XG4gICAgICA8SGVhZEltYWdlIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vQ3NWOVJZWi9sb2dpbi1pbWFnZS5wbmdcIi8+XG4gICAgICA8U2lnbkluQnV0dG9uIG9uQ2xpY2s9eygpPT5zaWduSW5XaXRoUG9wdXAoYXV0aCxwcm92aWRlcil9PkxvZ2luIHRvIFViZXI8L1NpZ25JbkJ1dHRvbj5cbiAgPC9XcmFwcGVyPik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5jb25zdCBXcmFwcGVyPXR3LmRpdmBmbGV4IGZsZXgtY29sIGgtc2NyZWVuIHctc2NyZWVuIGJnLWdyYXktMjAwIHAtNGBcbmNvbnN0IFNpZ25JbkJ1dHRvbj10dy5idXR0b24gYGJnLWJsYWNrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcHktNCBtdC04IHNlbGYtY2VudGVyICBgXG5jb25zdCBVYmVyTG9nbz10dy5pbWdgXG5oLTIwIHctYXV0byBvYmplY3QtY29udGFpbiBzZWxmLXN0YXJ0YFxuY29uc3QgVGl0bGU9dHcuZGl2YHRleHQtNXhsIHB0LTQgdGV4dC1ncmF5LTUwMGBcbmNvbnN0IEhlYWRJbWFnZT10dy5pbWdgXG5vYmplY3QtY29udGFpbiB3LWZ1bGxgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidHciLCJ1c2VSb3V0ZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJhdXRoIiwicHJvdmlkZXIiLCJMb2dpbiIsInJvdXRlciIsInVzZXIiLCJwdXNoIiwiV3JhcHBlciIsIlViZXJMb2dvIiwic3JjIiwiVGl0bGUiLCJIZWFkSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiYnV0dG9uIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "tailwind-styled-components":
/*!*********************************************!*\
  !*** external "tailwind-styled-components" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();