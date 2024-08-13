"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEU7QUFFMUUsTUFBTUUsZ0JBQWdCRCx3RUFBa0JBLENBQUM7SUFBQztJQUFnQjtDQUFlO0FBRXpFLGlFQUFlRCxxRUFBZUEsQ0FBQyxDQUFDRyxNQUFNQztJQUNwQyxJQUFJLENBQUNGLGNBQWNFLFVBQVU7UUFDM0JELE9BQU9FLE9BQU87SUFDaEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVya01pZGRsZXdhcmUsIGNyZWF0ZVJvdXRlTWF0Y2hlciB9IGZyb20gJ0BjbGVyay9uZXh0anMvc2VydmVyJ1xyXG5cclxuY29uc3QgaXNQdWJsaWNSb3V0ZSA9IGNyZWF0ZVJvdXRlTWF0Y2hlcihbJy9zaWduLWluKC4qKScsICcvc2lnbi11cCguKiknXSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZXJrTWlkZGxld2FyZSgoYXV0aCwgcmVxdWVzdCkgPT4ge1xyXG4gIGlmICghaXNQdWJsaWNSb3V0ZShyZXF1ZXN0KSkge1xyXG4gICAgYXV0aCgpLnByb3RlY3QoKVxyXG4gIH1cclxufSkiXSwibmFtZXMiOlsiY2xlcmtNaWRkbGV3YXJlIiwiY3JlYXRlUm91dGVNYXRjaGVyIiwiaXNQdWJsaWNSb3V0ZSIsImF1dGgiLCJyZXF1ZXN0IiwicHJvdGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});