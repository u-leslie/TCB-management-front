"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addClient/page",{

/***/ "(app-pages-browser)/./src/app/sidebar/Sidebar.jsx":
/*!*************************************!*\
  !*** ./src/app/sidebar/Sidebar.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_BiHome_BiMenu_BiSolidDashboard_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BiHome,BiMenu,BiSolidDashboard!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_assets_report_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/report.png */ \"(app-pages-browser)/./public/assets/report.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst NavLink = (param)=>{\n    let { href, children, icon } = param;\n    _s();\n    const currentRoute = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const isActive = currentRoute === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"flex \".concat(isActive ? \"bg-white text-brown-default pr-6 py-3 rounded-l-3xl \" : \"text-black pr-6\"),\n        children: [\n            icon && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(icon, {\n                className: \"w-6 h-6 ml-4\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: href,\n                className: \"ml-2\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavLink, \"UW+tdl+B19+KyYR4BSU3h77hwfc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = NavLink;\nfunction Sidebar() {\n    _s1();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-e13319597306bfa2\" + \" \" + \"bg-yellow-default\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-e13319597306bfa2\" + \" \" + \"links pt-40 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: toggleMenu,\n                        className: \"jsx-e13319597306bfa2\" + \" \" + \"lg:hidden text-white cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHome_BiMenu_BiSolidDashboard_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiMenu, {\n                            className: \"w-8 h-8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"jsx-e13319597306bfa2\" + \" \" + \"flex flex-col gap-y-8 pl-4 lg:flex \".concat(isMenuOpen ? \"block\" : \"hidden\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/dashboard/client\",\n                                className: \"text-white\",\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHome_BiMenu_BiSolidDashboard_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSolidDashboard, {}, void 0, false, void 0, void 0),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"jsx-e13319597306bfa2\",\n                                    children: \" Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 12\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                href: \"/report\",\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_assets_report_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                    width: 24,\n                                    height: 24,\n                                    alt: \"logo\",\n                                    className: \"ml-10\"\n                                }, void 0, false, void 0, void 0),\n                                children: \"Report\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"e13319597306bfa2\",\n                children: \"@media(max-width:768px){.links.jsx-e13319597306bfa2{padding-top:20px}ul.jsx-e13319597306bfa2{padding-left:2rem}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\sidebar\\\\Sidebar.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s1(Sidebar, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lkZWJhci9TaWRlYmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNYO0FBQ0U7QUFDbUM7QUFDcEI7QUFDUztBQUV2RCxNQUFNUyxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRTs7SUFDdkMsTUFBTUMsZUFBZU4sNERBQVdBO0lBQ2hDLE1BQU1PLFdBQVdELGlCQUFpQkg7SUFFbEMscUJBQ0UsOERBQUNLO1FBQUdDLFdBQVcsUUFBOEYsT0FBdEZGLFdBQVcseURBQXlEOztZQUN4RkYsc0JBQVFaLHlEQUFrQixDQUFDWSxNQUFNO2dCQUFFSSxXQUFXO1lBQWU7MEJBQzlELDhEQUFDZCxrREFBSUE7Z0JBQUNRLE1BQU1BO2dCQUFNTSxXQUFVOzBCQUFRTDs7Ozs7Ozs7Ozs7O0FBRzFDO0dBVk1GOztRQUNpQkYsd0RBQVdBOzs7S0FENUJFO0FBWU4sU0FBU1M7O0lBQ1AsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNb0IsYUFBYTtRQUNqQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDRztrREFBYzs7MEJBQ2IsOERBQUNBOzBEQUFjOztrQ0FFYiw4REFBQ0E7d0JBQW9EQyxTQUFTRjtrRUFBL0M7a0NBQ2IsNEVBQUNmLHdHQUFNQTs0QkFBQ1UsV0FBVTs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDUTtrRUFBYyxzQ0FBc0UsT0FBaENMLGFBQWEsVUFBVTs7MENBSTFFLDhEQUFDVjtnQ0FBUUMsTUFBSztnQ0FBb0JNLFdBQVU7Z0NBQWFKLG9CQUFNLDhEQUFDUixrSEFBZ0JBOzBDQUMvRSw0RUFBQ3FCOzs4Q0FBRzs7Ozs7Ozs7Ozs7MENBRUwsOERBQUNoQjtnQ0FBUUMsTUFBSztnQ0FBVUUsb0JBQU0sOERBQUNULG1EQUFLQTtvQ0FBQ3VCLEtBQUtsQixpRUFBTUE7b0NBQUVtQixPQUFPO29DQUFJQyxRQUFRO29DQUFJQyxLQUFJO29DQUFPYixXQUFVOzswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CcEg7SUEzQ1NFO01BQUFBO0FBNkNULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2lkZWJhci9TaWRlYmFyLmpzeD9lMjY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBCaVNvbGlkRGFzaGJvYXJkLCBCaUhvbWUsIEJpTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgcmVwb3J0IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvcmVwb3J0LnBuZyc7XHJcblxyXG5jb25zdCBOYXZMaW5rID0gKHsgaHJlZiwgY2hpbGRyZW4sIGljb24gfSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSBjdXJyZW50Um91dGUgPT09IGhyZWY7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtgZmxleCAke2lzQWN0aXZlID8gJ2JnLXdoaXRlIHRleHQtYnJvd24tZGVmYXVsdCBwci02IHB5LTMgcm91bmRlZC1sLTN4bCAnIDogJ3RleHQtYmxhY2sgcHItNid9YH0+XHJcbiAgICAgIHtpY29uICYmIFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7IGNsYXNzTmFtZTogJ3ctNiBoLTYgbWwtNCcgfSl9XHJcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT0nbWwtMic+e2NoaWxkcmVufTwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LWRlZmF1bHRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rcyBwdC00MCBcIj5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgIDxCaU1lbnUgY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGdhcC15LTggcGwtNCBsZzpmbGV4ICR7aXNNZW51T3BlbiA/ICdibG9jaycgOiAnaGlkZGVuJ31gfT5cclxuICAgICAgICAgIHsvKiA8TmF2TGluayBocmVmPVwiL2hvbWVcIiBpY29uPXs8QmlIb21lIC8+fT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9OYXZMaW5rPiAqL31cclxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9kYXNoYm9hcmQvY2xpZW50JyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgaWNvbj17PEJpU29saWREYXNoYm9hcmQgIC8+fT5cclxuICAgICAgICAgICA8aDI+IERhc2hib2FyZDwvaDI+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3JlcG9ydFwiIGljb249ezxJbWFnZSBzcmM9e3JlcG9ydH0gd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibWwtMTBcIiAvPn0+XHJcbiAgICAgICAgICAgIFJlcG9ydFxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwiQmlTb2xpZERhc2hib2FyZCIsIkJpSG9tZSIsIkJpTWVudSIsInVzZVBhdGhuYW1lIiwicmVwb3J0IiwiTmF2TGluayIsImhyZWYiLCJjaGlsZHJlbiIsImljb24iLCJjdXJyZW50Um91dGUiLCJpc0FjdGl2ZSIsImxpIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwiU2lkZWJhciIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidG9nZ2xlTWVudSIsImRpdiIsIm9uQ2xpY2siLCJ1bCIsImgyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/sidebar/Sidebar.jsx\n"));

/***/ })

});