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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\",\n    \"\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n    }\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQUM7SUFBZ0I7SUFBZTtDQUFHO0FBRTVFLGlFQUFlRCxxRUFBZUEsQ0FBQyxDQUFDRyxNQUFNQztJQUNwQyxJQUFJLENBQUNGLGNBQWNFLFVBQVU7UUFDM0JELE9BQU9FLE9BQU87SUFDaEI7QUFDRixFQUFFO0FBRUssTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUNQLDZFQUE2RTtRQUM3RTtRQUNBLDRCQUE0QjtRQUM1QjtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlLCBjcmVhdGVSb3V0ZU1hdGNoZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcclxuXHJcbmNvbnN0IGlzUHVibGljUm91dGUgPSBjcmVhdGVSb3V0ZU1hdGNoZXIoWycvc2lnbi1pbiguKiknLCAnL3NpZ24tdXAoLiopJywnJ10pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVya01pZGRsZXdhcmUoKGF1dGgsIHJlcXVlc3QpID0+IHtcclxuICBpZiAoIWlzUHVibGljUm91dGUocmVxdWVzdCkpIHtcclxuICAgIGF1dGgoKS5wcm90ZWN0KClcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFtcclxuICAgIC8vIFNraXAgTmV4dC5qcyBpbnRlcm5hbHMgYW5kIGFsbCBzdGF0aWMgZmlsZXMsIHVubGVzcyBmb3VuZCBpbiBzZWFyY2ggcGFyYW1zXHJcbiAgICAnLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopJyxcclxuICAgIC8vIEFsd2F5cyBydW4gZm9yIEFQSSByb3V0ZXNcclxuICAgICcvKGFwaXx0cnBjKSguKiknLFxyXG4gIF0sXHJcbn07Il0sIm5hbWVzIjpbImNsZXJrTWlkZGxld2FyZSIsImNyZWF0ZVJvdXRlTWF0Y2hlciIsImlzUHVibGljUm91dGUiLCJhdXRoIiwicmVxdWVzdCIsInByb3RlY3QiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});