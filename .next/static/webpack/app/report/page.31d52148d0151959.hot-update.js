"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/report/page",{

/***/ "(app-pages-browser)/./src/app/report/page.jsx":
/*!*********************************!*\
  !*** ./src/app/report/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/Navbar */ \"(app-pages-browser)/./src/app/header/Navbar.jsx\");\n/* harmony import */ var _sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/Sidebar */ \"(app-pages-browser)/./src/app/sidebar/Sidebar.jsx\");\n/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/Footer */ \"(app-pages-browser)/./src/app/footer/Footer.jsx\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_PencilSquareIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon,PencilSquareIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_PencilSquareIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon,PencilSquareIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/PencilSquareIcon.js\");\n/* harmony import */ var _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/logo.png */ \"(app-pages-browser)/./public/assets/logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/loader */ \"(app-pages-browser)/./src/app/loader/loader.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Report() {\n    _s();\n    const [clientNames, setClientNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchClientList();\n    }, []);\n    const fetchClientList = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"http://localhost:5000/api/v1/client\");\n            const { clients } = response.data;\n            setClientNames(clients);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching clients:\", error);\n            setLoading(false);\n        }\n    };\n    const handleSearch = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] lg:ml-\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"home bg-white pt-20 pb-20 text-black w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"search flex lg:flex-row lg:ml-56 mt-10 border rounded-lg lg:w-7/12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"logo\",\n                                        className: \"w-24 h-10 ml-6 mt-1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"search\",\n                                        name: \"search\",\n                                        placeholder: \"Search client\",\n                                        className: \" h-12 lg:w-[600px] w-[150px] pr-3 outline-none\",\n                                        value: searchTerm,\n                                        onChange: (e)=>setSearchTerm(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_PencilSquareIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        className: \"w-12 h-12 p-3\",\n                                        onClick: handleSearch\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"button float-right mr-20 mt-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-grey-default py-3 px-12 ml-5 rounded-md\",\n                                        children: \"Send Notification\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/addClient\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-grey-default py-3 px-12 ml-5 lg:mt-0 mt-3 rounded-md\",\n                                            children: \"Add Client\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"filter lg:ml-32 ml-5 lg:mt-20 mt-40\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Report type :\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        name: \"filter\",\n                                        id: \"\",\n                                        className: \"bg-grey-default outline-none px-6 py-3 rounded-md\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"filter\",\n                                                className: \"bg-white\",\n                                                children: \"Paid\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"filter\",\n                                                className: \"bg-white\",\n                                                children: \"Unpaid\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        name: \"filter\",\n                                        id: \"\",\n                                        className: \"bg-grey-default outline-none px-6 py-3 mt-10 ml-6 rounded-md \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"filter\",\n                                                className: \"bg-white\",\n                                                children: \"Monthly\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"filter\",\n                                                className: \"bg-white\",\n                                                children: \"Weekly\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"lg:py-16 lg:px-10 p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"lg:ml-6 mt-10\",\n                                        children: clientNames.filter((client)=>client && client.company && client.company.toLowerCase().includes(searchTerm.toLowerCase())).map((client, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex bg-grey-light my-6 p-6 rounded-md\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"w-full h-8 cursor-pointer\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                            href: \"/clientInfo/\".concat(client._id),\n                                                            children: [\n                                                                index + 1,\n                                                                \". \",\n                                                                client.company\n                                                            ]\n                                                        }, index, true, {\n                                                            fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                            lineNumber: 96,\n                                                            columnNumber: 9\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 7\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_PencilSquareIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                        className: \"w-6 h-6\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 7\n                                                    }, this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 5\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-center font-bold text-2xl\",\n                                        children: [\n                                            clientNames.length,\n                                            \" clients\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILLION\\\\Desktop\\\\tcb_front\\\\TCB-management-front\\\\src\\\\app\\\\report\\\\page.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Report, \"+IdHIPwn5ZqpvfNKRCBJrJJ6BWQ=\");\n_c = Report;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Report);\nvar _c;\n$RefreshReg$(_c, \"Report\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVwb3J0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdtRDtBQUNiO0FBQ0c7QUFDSDtBQUM0QztBQUMvQjtBQUNwQjtBQUNGO0FBQ0g7QUFDWTtBQUV0QyxTQUFTYTs7SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUVSa0I7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxrQkFBa0I7UUFDdEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQztZQUNqQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRixTQUFTRyxJQUFJO1lBQ2pDVCxlQUFlUTtZQUNmSixXQUFXO1FBQ2IsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDTixXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1RLGVBQWUsS0FFckI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMxQixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDeUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDekIsd0RBQU9BOzs7OztrQ0FDUiw4REFBQ3dCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDcEIsbURBQUtBO3dDQUFDcUIsS0FBS3RCLCtEQUFJQTt3Q0FBRXVCLEtBQUk7d0NBQU9GLFdBQVU7Ozs7OztrREFDdkMsOERBQUNHO3dDQUNDQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMQyxhQUFZO3dDQUNaTixXQUFVO3dDQUNWTyxPQUFPcEI7d0NBQ1BxQixVQUFVLENBQUNDLElBQU1yQixjQUFjcUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0RBRS9DLDhEQUFDOUIsNkhBQW1CQTt3Q0FBQ3VCLFdBQVU7d0NBQWdCVyxTQUFTYjs7Ozs7Ozs7Ozs7OzBDQUUxRCw4REFBQ0M7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBT1osV0FBVTtrREFBNkM7Ozs7OztrREFDL0QsOERBQUNuQixrREFBSUE7d0NBQUNnQyxNQUFLO2tEQUNULDRFQUFDRDs0Q0FBT1osV0FBVTtzREFBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdoRiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBT1YsTUFBSzt3Q0FBU1csSUFBRzt3Q0FBR2hCLFdBQVU7OzBEQUNwQyw4REFBQ2lCO2dEQUFPVixPQUFNO2dEQUFTUCxXQUFVOzBEQUFXOzs7Ozs7MERBRzVDLDhEQUFDaUI7Z0RBQU9WLE9BQU07Z0RBQVNQLFdBQVU7MERBQVc7Ozs7Ozs7Ozs7OztrREFJOUMsOERBQUNlO3dDQUFPVixNQUFLO3dDQUFTVyxJQUFHO3dDQUFHaEIsV0FBVTs7MERBQ3BDLDhEQUFDaUI7Z0RBQU9WLE9BQU07Z0RBQVNQLFdBQVU7MERBQVc7Ozs7OzswREFHNUMsOERBQUNpQjtnREFBT1YsT0FBTTtnREFBU1AsV0FBVTswREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUsvQ1gsd0JBQ0MsOERBQUNOLHNEQUFNQTs7OztxREFFUCw4REFBQ2dCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2tCO3dDQUFHbEIsV0FBVTtrREFHeEJmLFlBQ0RrQyxNQUFNLENBQUMsQ0FBQ0MsU0FBV0EsVUFBVUEsT0FBT0MsT0FBTyxJQUFJRCxPQUFPQyxPQUFPLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDcEMsV0FBV21DLFdBQVcsS0FDM0dFLEdBQUcsQ0FBQyxDQUFDSixRQUFRSyxzQkFDWiw4REFBQzFCO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQzBCO3dEQUFHMUIsV0FBVTtrRUFDWiw0RUFBQ25CLGtEQUFJQTs0REFBQ2dDLE1BQU0sZUFBMEIsT0FBWE8sT0FBT08sR0FBRzs7Z0VBQ2xDRixRQUFRO2dFQUFFO2dFQUFHTCxPQUFPQyxPQUFPOzsyREFEZ0JJOzs7Ozs7Ozs7O2tFQUloRCw4REFBQy9DLDZIQUFnQkE7d0RBQUNzQixXQUFVOzs7Ozs7OytDQU4rQnlCOzs7Ozs7Ozs7O2tEQVVuRCw4REFBQ1g7d0NBQUdkLFdBQVU7OzRDQUFrQ2YsWUFBWTJDLE1BQU07NENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNFLDhEQUFDcEQsc0RBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBakdTUTtLQUFBQTtBQW1HVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlcG9ydC9wYWdlLmpzeD9jZTVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vaGVhZGVyL05hdmJhcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL3NpZGViYXIvU2lkZWJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IE1hZ25pZnlpbmdHbGFzc0ljb24sIFBlbmNpbFNxdWFyZUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9sb2dvLnBuZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXIvbG9hZGVyJzsgXHJcblxyXG5mdW5jdGlvbiBSZXBvcnQoKSB7XHJcbiAgY29uc3QgW2NsaWVudE5hbWVzLCBzZXRDbGllbnROYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBmZXRjaENsaWVudExpc3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoQ2xpZW50TGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NsaWVudCcpO1xyXG4gICAgICBjb25zdCB7IGNsaWVudHMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHNldENsaWVudE5hbWVzKGNsaWVudHMpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGllbnRzOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4MCVdIGxnOm1sLSc+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUgYmctd2hpdGUgcHQtMjAgcGItMjAgdGV4dC1ibGFjayB3LWZ1bGwnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCBmbGV4IGxnOmZsZXgtcm93IGxnOm1sLTU2IG10LTEwIGJvcmRlciByb3VuZGVkLWxnIGxnOnctNy8xMic+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD0nbG9nbycgY2xhc3NOYW1lPSd3LTI0IGgtMTAgbWwtNiBtdC0xJyAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggY2xpZW50J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nIGgtMTIgbGc6dy1bNjAwcHhdIHctWzE1MHB4XSBwci0zIG91dGxpbmUtbm9uZSdcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TWFnbmlmeWluZ0dsYXNzSWNvbiBjbGFzc05hbWU9J3ctMTIgaC0xMiBwLTMnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbiBmbG9hdC1yaWdodCBtci0yMCBtdC0xMCc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ncmV5LWRlZmF1bHQgcHktMyBweC0xMiBtbC01IHJvdW5kZWQtbWQnPlNlbmQgTm90aWZpY2F0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hZGRDbGllbnQnPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ncmV5LWRlZmF1bHQgcHktMyBweC0xMiBtbC01IGxnOm10LTAgbXQtMyByb3VuZGVkLW1kJz5BZGQgQ2xpZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlciBsZzptbC0zMiBtbC01IGxnOm10LTIwIG10LTQwJz5cclxuICAgICAgICAgICAgPGgyPlJlcG9ydCB0eXBlIDo8L2gyPlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9J2ZpbHRlcicgaWQ9JycgY2xhc3NOYW1lPSdiZy1ncmV5LWRlZmF1bHQgb3V0bGluZS1ub25lIHB4LTYgcHktMyByb3VuZGVkLW1kJz5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdmaWx0ZXInIGNsYXNzTmFtZT0nYmctd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgUGFpZFxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2ZpbHRlcicgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICBVbnBhaWRcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0nZmlsdGVyJyBpZD0nJyBjbGFzc05hbWU9J2JnLWdyZXktZGVmYXVsdCBvdXRsaW5lLW5vbmUgcHgtNiBweS0zIG10LTEwIG1sLTYgcm91bmRlZC1tZCAnPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2ZpbHRlcicgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZmlsdGVyJyBjbGFzc05hbWU9J2JnLXdoaXRlJz5cclxuICAgICAgICAgICAgICAgIFdlZWtseVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxMb2FkZXIgLz4gXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6cHktMTYgbGc6cHgtMTAgcC00Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsZzptbC02IG10LTEwJz5cclxuXHJcblxyXG4gICB7Y2xpZW50TmFtZXNcclxuICAuZmlsdGVyKChjbGllbnQpID0+IGNsaWVudCAmJiBjbGllbnQuY29tcGFueSAmJiBjbGllbnQuY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpXHJcbiAgLm1hcCgoY2xpZW50LCBpbmRleCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYmctZ3JleS1saWdodCBteS02IHAtNiByb3VuZGVkLW1kJyBrZXk9e2luZGV4fT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT0ndy1mdWxsIGgtOCBjdXJzb3ItcG9pbnRlcic+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9jbGllbnRJbmZvLyR7Y2xpZW50Ll9pZH1gfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIHtpbmRleCArIDF9LiB7Y2xpZW50LmNvbXBhbnl9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8UGVuY2lsU3F1YXJlSWNvbiBjbGFzc05hbWU9J3ctNiBoLTYnIC8+XHJcbiAgICA8L2Rpdj5cclxuICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTJ4bCc+e2NsaWVudE5hbWVzLmxlbmd0aH0gY2xpZW50czwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJTaWRlYmFyIiwiRm9vdGVyIiwiTWFnbmlmeWluZ0dsYXNzSWNvbiIsIlBlbmNpbFNxdWFyZUljb24iLCJsb2dvIiwiSW1hZ2UiLCJMaW5rIiwiYXhpb3MiLCJMb2FkZXIiLCJSZXBvcnQiLCJjbGllbnROYW1lcyIsInNldENsaWVudE5hbWVzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoQ2xpZW50TGlzdCIsInJlc3BvbnNlIiwiZ2V0IiwiY2xpZW50cyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTZWFyY2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJidXR0b24iLCJocmVmIiwiaDIiLCJzZWxlY3QiLCJpZCIsIm9wdGlvbiIsInVsIiwiZmlsdGVyIiwiY2xpZW50IiwiY29tcGFueSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJpbmRleCIsImxpIiwiX2lkIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/report/page.jsx\n"));

/***/ })

});