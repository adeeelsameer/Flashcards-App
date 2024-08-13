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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n    }\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQUM7SUFBZ0I7Q0FBZTtBQUV6RSxpRUFBZUQscUVBQWVBLENBQUMsQ0FBQ0csTUFBTUM7SUFDcEMsSUFBSSxDQUFDRixjQUFjRSxVQUFVO1FBQzNCRCxPQUFPRSxPQUFPO0lBQ2hCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFDUCw2RUFBNkU7UUFDN0U7UUFDQSw0QkFBNEI7UUFDNUI7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZXJrTWlkZGxld2FyZSwgY3JlYXRlUm91dGVNYXRjaGVyIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXHJcblxyXG5jb25zdCBpc1B1YmxpY1JvdXRlID0gY3JlYXRlUm91dGVNYXRjaGVyKFsnL3NpZ24taW4oLiopJywgJy9zaWduLXVwKC4qKSddKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlcmtNaWRkbGV3YXJlKChhdXRoLCByZXF1ZXN0KSA9PiB7XHJcbiAgaWYgKCFpc1B1YmxpY1JvdXRlKHJlcXVlc3QpKSB7XHJcbiAgICBhdXRoKCkucHJvdGVjdCgpXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXHJcbiAgICAvLyBTa2lwIE5leHQuanMgaW50ZXJuYWxzIGFuZCBhbGwgc3RhdGljIGZpbGVzLCB1bmxlc3MgZm91bmQgaW4gc2VhcmNoIHBhcmFtc1xyXG4gICAgJy8oKD8hX25leHR8W14/XSpcXFxcLig/Omh0bWw/fGNzc3xqcyg/IW9uKXxqcGU/Z3x3ZWJwfHBuZ3xnaWZ8c3ZnfHR0Znx3b2ZmMj98aWNvfGNzdnxkb2N4P3x4bHN4P3x6aXB8d2VibWFuaWZlc3QpKS4qKScsXHJcbiAgICAvLyBBbHdheXMgcnVuIGZvciBBUEkgcm91dGVzXHJcbiAgICAnLyhhcGl8dHJwYykoLiopJyxcclxuICBdLFxyXG59OyJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJpc1B1YmxpY1JvdXRlIiwiYXV0aCIsInJlcXVlc3QiLCJwcm90ZWN0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});