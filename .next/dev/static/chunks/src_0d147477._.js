(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // Import usePathname
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navLinks = [
    {
        name: "Home",
        href: "/#carousel"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Services",
        href: "/services"
    },
    {
        name: "Why Us",
        href: "/#why-choose-us"
    },
    {
        name: "Testimonials",
        href: "/#testimonials"
    },
    {
        name: "Pricing",
        href: "/Pricing"
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHomePage = pathname === "/"; // Check if we are on Home Page
    // --- STATE ---
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- LOCK SCROLL (Mobile Menu) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isMobileMenuOpen
    ]);
    // --- COLOR CHANGE LOGIC ---
    // Runs on ALL pages to detect 'data-header-theme' attributes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const sections = document.querySelectorAll("[data-header-theme]");
            if (sections.length === 0) return;
            const observer = new IntersectionObserver({
                "Header.useEffect": (entries)=>{
                    entries.forEach({
                        "Header.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setTheme(entry.target.getAttribute("data-header-theme"));
                            }
                        }
                    }["Header.useEffect"]);
                }
            }["Header.useEffect"], {
                root: null,
                rootMargin: "-10% 0px -90% 0px",
                threshold: 0
            });
            sections.forEach({
                "Header.useEffect": (s)=>observer.observe(s)
            }["Header.useEffect"]);
            return ({
                "Header.useEffect": ()=>observer.disconnect()
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        pathname
    ]); // Re-run when page changes
    // =========================================================
    //  POSITIONING LOGIC
    // =========================================================
    // 1. Home Page: "!fixed" (Sticks to top as you scroll)
    // 2. Other Pages: "!absolute" (Sits at top, Transparent, Scrolls away)
    const positionClass = isHomePage ? "!fixed" : "!absolute";
    const containerClasses = `${positionClass} top-0 left-0 w-full bg-transparent z-[1001]`;
    // Color Logic
    // Works on all pages. If theme is 'dark', text is white.
    const isThemeDark = theme === "dark" || theme === "carousel";
    const headerTextColor = isThemeDark && !isMobileMenuOpen ? "text-white" : "text-[#1d1d1f]";
    const logoFilter = isThemeDark && !isMobileMenuOpen ? "brightness(0) invert(1)" : "none";
    const buttonColor = isThemeDark && !isMobileMenuOpen ? "text-white" : "text-[#1d1d1f]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `header transition-colors duration-300 ${containerClasses}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${headerTextColor}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "block relative h-8 w-28 md:h-10 md:w-32 cursor-pointer z-[1002]",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo.png",
                                alt: "Logo",
                                fill: true,
                                priority: true,
                                className: "object-contain object-left transition-all duration-300",
                                style: {
                                    filter: logoFilter
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]",
                                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "relative group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "py-2 block opacity-90 hover:opacity-100 transition-colors duration-300 group-hover:text-[#800000]",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-0 bottom-0 w-0 h-[1.5px] transition-all duration-300 ease-out group-hover:w-full group-hover:bg-[#800000] ${isThemeDark ? "bg-white" : "bg-[#800000]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.name, true, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact-us",
                                    className: `text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all border ${isThemeDark ? "border-white text-white hover:bg-white hover:text-black" : "bg-[#1d1d1f] text-white border-transparent hover:bg-[#800000]"}`,
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `lg:hidden ${positionClass} right-5 top-5 z-[9999] p-1.5 rounded-full transition-colors duration-300 ${buttonColor}`,
                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "3",
                            y1: "12",
                            x2: "21",
                            y2: "12",
                            className: `transition-transform duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "3",
                            y1: "6",
                            x2: "21",
                            y2: "6",
                            className: `transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "3",
                            y1: "18",
                            x2: "21",
                            y2: "18",
                            className: `transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-[5000] bg-white flex flex-col justify-center items-center transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-6 text-center w-full px-6",
                    children: [
                        navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setIsMobileMenuOpen(false),
                                className: `text-2xl font-semibold text-[#1d1d1f] tracking-tight hover:text-[#800000] transition-all duration-500 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
                                style: {
                                    transitionDelay: `${100 + index * 50}ms`
                                },
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-6 transition-all duration-700 delay-300 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact-us",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                className: "bg-[#1d1d1f] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#800000] transition-colors",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 156,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "V2WGOJWaLu/1r25jBG/uY/CT0AY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:23a226 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitContactForm",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40850311dd38fac7483105273e764a5e496602c744":"submitContactForm"},"src/app/actions/contact.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40850311dd38fac7483105273e764a5e496602c744", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitContactForm");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjsgXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL0NvbnRhY3RcIjsgICAgIFxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENvbnRhY3RGb3JtKGZvcm1EYXRhKSB7XG4gIC8vIC0tLSBERUJVRyBMT0dTIFNUQVJUIC0tLVxuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgY29uc29sZS5sb2coXCLwn5qAIFNUQVJUSU5HOiBQcm9jZXNzaW5nIENvbnRhY3QgRm9ybS4uLlwiKTtcblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGNvbnN0IHBob25lID0gZm9ybURhdGEuZ2V0KCdwaG9uZScpO1xuICBjb25zdCBzZXJ2aWNlID0gZm9ybURhdGEuZ2V0KCdzZXJ2aWNlJyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKTtcblxuICB0cnkge1xuICAgIC8vIFNURVAgMTogQ29ubmVjdCB0byBEYXRhYmFzZVxuICAgIGNvbnNvbGUubG9nKFwi8J+RiSBTVEVQIDE6IENvbm5lY3RpbmcgdG8gTW9uZ29EQi4uLlwiKTtcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcbiAgICBjb25zb2xlLmxvZyhcIuKchSBNb25nb0RCIENvbm5lY3RlZC5cIik7XG5cbiAgICAvLyBTVEVQIDI6IFNhdmUgdG8gRGF0YWJhc2VcbiAgICBjb25zb2xlLmxvZyhcIvCfkYkgU1RFUCAyOiBTYXZpbmcgdG8gQWRtaW4gUGFuZWwuLi5cIik7XG4gICAgYXdhaXQgQ29udGFjdC5jcmVhdGUoe1xuICAgICAgbmFtZSxcbiAgICAgIHBob25lLFxuICAgICAgc2VydmljZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCLinIUgRGF0YSBTYXZlZCB0byBNb25nb0RCLlwiKTtcblxuICAgIC8vIFNURVAgMzogU2VuZCBFbWFpbFxuICAgIGNvbnNvbGUubG9nKFwi8J+RiSBTVEVQIDM6IFByZXBhcmluZyBFbWFpbC4uLlwiKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBwYXNzd29yZHMgZXhpc3RcbiAgICBpZiAoIXByb2Nlc3MuZW52LkVNQUlMX1VTRVIgfHwgIXByb2Nlc3MuZW52LkVNQUlMX1BBU1MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBFbWFpbCBDcmVkZW50aWFscyBpbiAuZW52IGZpbGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBzZXJ2aWNlOiAnZ21haWwnLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFZlcmlmeSBjb25uZWN0aW9uXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIudmVyaWZ5KCk7XG4gICAgY29uc29sZS5sb2coXCLinIUgRW1haWwgU2VydmVyIFJlYWR5LlwiKTtcblxuICAgIC8vIFNlbmQgdGhlIG1haWxcbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICBmcm9tOiBgXCJBbCBGYXRlZW4gV2Vic2l0ZVwiIDwke3Byb2Nlc3MuZW52LkVNQUlMX1VTRVJ9PmAsXG4gICAgICBcbiAgICAgIC8vIPCfkYcgWU9VUiBFTUFJTCBJUyBIRVJFIChCYXNlZCBvbiB5b3VyIHByZXZpb3VzIG1lc3NhZ2UpXG4gICAgICB0bzogXCJha2hpbHJhbWFiM0BnbWFpbC5jb21cIiwgXG4gICAgICBcbiAgICAgIHN1YmplY3Q6IGDwn5SlIE5ldyBMZWFkOiAke3NlcnZpY2V9IC0gJHtuYW1lfWAsXG4gICAgICBcbiAgICAgIC8vIFByb2Zlc3Npb25hbCBIVE1MIERlc2lnblxuICAgICAgaHRtbDogYFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bzsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjsgYm9yZGVyLXJhZGl1czogOHB4OyBvdmVyZmxvdzogaGlkZGVuO1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjOyBwYWRkaW5nOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogI2ZmZmZmZjsgbWFyZ2luOiAwO1wiPk5ldyBXZWJzaXRlIElucXVpcnk8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1wiPlxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjMzc0MTUxO1wiPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzM3NDE1MTtcIj48c3Ryb25nPlNlcnZpY2U6PC9zdHJvbmc+ICR7c2VydmljZX08L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDIwcHggMDsgcGFkZGluZzogMTVweDsgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYjkxYzFjOyBib3JkZXItcmFkaXVzOiA0cHg7XCI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzExMTgyNztcIj5cbiAgICAgICAgICAgICAgICDwn5OeIFBob25lOiA8YSBocmVmPVwidGVsOiR7cGhvbmV9XCIgc3R5bGU9XCJjb2xvcjogI2I5MWMxYzsgdGV4dC1kZWNvcmF0aW9uOiBub25lO1wiPiR7cGhvbmV9PC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjMzc0MTUxO1wiPjxzdHJvbmc+TWVzc2FnZTo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7IHBhZGRpbmc6IDE1cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjsgY29sb3I6ICM0YjU1NjM7IGZvbnQtc3R5bGU6IGl0YWxpYztcIj5cbiAgICAgICAgICAgICAgXCIke21lc3NhZ2V9XCJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjsgcGFkZGluZzogMTVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNmI3MjgwO1wiPlxuICAgICAgICAgICAgU2VudCBmcm9tIEFsIEZhdGVlbiBXZWJzaXRlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICB9KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIuKchSBFbWFpbCBTZW50IFN1Y2Nlc3NmdWxseSB0byBha2hpbHJhbWFiM0BnbWFpbC5jb21cIik7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmVycm9yKFwi8J+SpSBFUlJPUjpcIiwgZXJyb3IpOyBcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTsgXG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQU1zQiw4TEFBQSJ9
}),
"[project]/src/app/Pricing/PricingPageContent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$23a226__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:23a226 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// --- DATA ---
const pricingTiers = {
    cleaning: [
        {
            name: "Residential & Villas",
            price: "499",
            suffix: "starting",
            desc: "Complete hygiene for villas.",
            features: [
                "General Villa Cleaning",
                "Upholstery Shampooing",
                "Mattress Sanitization",
                "Kitchen & Bath Scrubbing"
            ],
            limitations: [],
            isPopular: true
        },
        {
            name: "Floor Restoration",
            price: "299",
            suffix: "visit",
            desc: "Restore original shine.",
            features: [
                "Marble Polishing",
                "Granite & Ceramic Care",
                "Wooden Floor Restoration",
                "Buffing & Shine"
            ],
            limitations: [
                "Deep scratches vary"
            ],
            isPopular: false
        },
        {
            name: "Glass & Façade",
            price: "Custom",
            suffix: "quote",
            desc: "Crystal clear views.",
            features: [
                "Interior Glass Cleaning",
                "Exterior Rope Access",
                "Streak-Free Finish",
                "Hard Water Stain Removal"
            ],
            limitations: [],
            isPopular: false
        },
        {
            name: "Corporate Contract",
            price: "Custom",
            suffix: "month",
            desc: "Janitorial staffing.",
            features: [
                "Daily/Weekly Schedules",
                "Office Sanitation",
                "Pantry Management",
                "Dedicated Staffing"
            ],
            limitations: [],
            isPopular: false
        },
        {
            name: "Swimming Pools",
            price: "199",
            suffix: "visit",
            desc: "Hygienic aquatic environments.",
            features: [
                "Water Chemical Balancing",
                "Debris Vacuuming",
                "Tile Scrubbing",
                "Filter Maintenance"
            ],
            limitations: [],
            isPopular: false
        }
    ],
    pest: [
        {
            name: "De-Bugging",
            price: "149",
            suffix: "visit",
            desc: "Control for common pests.",
            features: [
                "Cockroach Gel Treatment",
                "Bed Bug Eradication",
                "Ant Spray",
                "Fly Control"
            ],
            limitations: [
                "Severe need 2 visits"
            ],
            isPopular: true
        },
        {
            name: "Termite Defense",
            price: "999",
            suffix: "starting",
            desc: "Structural protection.",
            features: [
                "Pre-Construction (Soil)",
                "Post-Construction (Drill)",
                "Foundation Barriers",
                "5-Year Warranty"
            ],
            limitations: [],
            isPopular: false
        },
        {
            name: "Rodent Control",
            price: "249",
            suffix: "visit",
            desc: "Trapping & exclusion.",
            features: [
                "Pulse Baiting Systems",
                "Mechanical Traps",
                "Entry Point Sealing",
                "Perimeter Defense"
            ],
            limitations: [],
            isPopular: false
        }
    ]
};
const faqs = [
    {
        q: "Do you offer annual contracts?",
        a: "Yes. Our 'Estate Contract' bundles cleaning, pool maintenance, and pest control into one monthly fee."
    },
    {
        q: "Is the Termite treatment guaranteed?",
        a: "Absolutely. Our drill-and-inject termite treatments come with a comprehensive warranty (up to 5 years)."
    },
    {
        q: "Do I need to leave the house?",
        a: "For general gel treatments, no. For strong spray treatments, we recommend vacating for 2-4 hours."
    },
    {
        q: "What is in 'Floor Restoration'?",
        a: "Stripping old wax/dirt, diamond polishing (for marble), and applying a fresh sealant."
    }
];
// --- ANIMATION HELPERS ---
const Reveal = ({ children, delay = 0 })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 15
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.5,
            delay,
            ease: "easeOut"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Reveal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.2
        }
    }
};
// --- SUB-COMPONENTS ---
const FaqItem = ({ question, answer })=>{
    _s1();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-gray-200 last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full py-5 flex items-center justify-between text-left hover:text-[#800000] transition-colors group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base font-semibold text-gray-800 group-hover:text-[#800000]",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `transition-transform duration-300 w-4 h-4 ${isOpen ? "rotate-180 text-[#800000]" : "text-gray-400"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pb-5 text-sm text-gray-500 leading-relaxed",
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(FaqItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c1 = FaqItem;
function PricingPageContent() {
    _s2();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cleaning");
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formStatus, setFormStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const openBooking = (planName)=>{
        setSelectedPlan(planName);
        setFormStatus("idle");
        setIsModalOpen(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PricingPageContent.useEffect": ()=>{
            if (isModalOpen) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "unset";
        }
    }["PricingPageContent.useEffect"], [
        isModalOpen
    ]);
    async function handleModalSubmit(e) {
        e.preventDefault();
        setFormStatus("submitting");
        const formData = new FormData(e.target);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$23a226__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitContactForm"])(formData);
        if (result.success) setFormStatus("success");
        else {
            setFormStatus("error");
            alert("Error. Please call us.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "why-choose-us",
        "data-header-theme": "light",
        className: "relative bg-white min-h-screen font-sans selection:bg-[#800000] selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                lineNumber: 185,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "text-[#1d1d1f] pt-24 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 md:px-12 lg:px-20 mb-12 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#800000] font-bold tracking-[0.2em] text-xs uppercase mb-4 inline-block",
                                    children: "Transparent Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight",
                                    children: "Choose your Service."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-lg text-[#86868b] max-w-xl mx-auto leading-relaxed font-medium mb-8",
                                    children: "Professional care for your property. Select a category below."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex w-full max-w-[300px] bg-gray-100 rounded-full p-1 shadow-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute top-1 bottom-1 bg-[#800000] rounded-full shadow-md z-0",
                                                layoutId: "activeTabBackground",
                                                initial: false,
                                                animate: {
                                                    left: activeTab === "cleaning" ? "4px" : "50%",
                                                    width: "calc(50% - 4px)"
                                                },
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab("cleaning"),
                                                className: `relative z-10 w-1/2 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200 
                    ${activeTab === "cleaning" ? "text-white" : "text-gray-500 hover:text-gray-900"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        size: 14,
                                                        className: activeTab === "cleaning" ? "text-white/80" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Cleaning"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab("pest"),
                                                className: `relative z-10 w-1/2 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200 
                    ${activeTab === "pest" ? "text-white" : "text-gray-500 hover:text-gray-900"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        size: 14,
                                                        className: activeTab === "pest" ? "text-white/80" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Pest Control"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 md:px-10 lg:px-16 mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10
                                },
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                                children: pricingTiers[activeTab].map((tier, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full relative p-6 rounded-3xl border flex flex-col transition-all duration-300 group
                    ${tier.isPopular ? "bg-[#1d1d1f] text-white border-[#800000] shadow-xl hover:-translate-y-1" : "bg-gray-50 text-[#1d1d1f] border-gray-200 hover:border-[#800000]/30 hover:shadow-lg hover:-translate-y-1"}`,
                                            children: [
                                                tier.isPopular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 bg-[#800000] text-white text-[9px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-bl-xl rounded-tr-2xl z-10",
                                                    children: "Popular"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 259,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold mb-1",
                                                            children: tier.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 266,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-medium leading-relaxed ${tier.isPopular ? "text-gray-400" : "text-gray-500"}`,
                                                            children: tier.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 pb-6 border-b border-gray-500/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-1",
                                                            children: [
                                                                tier.price !== "Custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg opacity-60 font-medium",
                                                                    children: "AED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-4xl font-bold tracking-tighter",
                                                                    children: tier.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-[10px] mt-1 uppercase tracking-widest font-semibold ${tier.isPopular ? "text-gray-500" : "text-gray-400"}`,
                                                            children: [
                                                                "/ ",
                                                                tier.suffix
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 278,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3 mb-8 flex-grow",
                                                    children: tier.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2.5 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: `w-4 h-4 shrink-0 mt-0.5 ${tier.isPopular ? "text-[#800000]" : "text-green-600"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: tier.isPopular ? "text-gray-300" : "text-gray-700 font-medium",
                                                                    children: f
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, f, true, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 285,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openBooking(tier.name),
                                                    className: `w-full py-3 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] text-center transition-all cursor-pointer
                      ${tier.isPopular ? "bg-white text-black hover:bg-gray-200" : "bg-[#1d1d1f] text-white hover:bg-[#800000]"}`,
                                                    children: "Choose Plan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this)
                                    }, tier.name, false, {
                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this))
                            }, activeTab, false, {
                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-[#f5f5f7] py-16 mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 md:px-12 lg:px-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-3xl font-bold text-[#1d1d1f]",
                                            children: "The Al Fateen Standard."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 text-[#800000]",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    fill: "currentColor",
                                                    size: 16
                                                }, i, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 p-4 border-b border-gray-100 bg-gray-50/50 text-[10px] font-bold uppercase tracking-widest text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-1",
                                                    children: "Feature"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-1 text-center",
                                                    children: "Others"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-1 text-center text-[#800000]",
                                                    children: "Al Fateen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this),
                                        [
                                            {
                                                label: "Chemicals",
                                                bad: "Harsh",
                                                good: "Organic"
                                            },
                                            {
                                                label: "Vetting",
                                                bad: "None",
                                                good: "Bg Checked"
                                            },
                                            {
                                                label: "Equipment",
                                                bad: "Basic",
                                                good: "Industrial"
                                            },
                                            {
                                                label: "Insurance",
                                                bad: "None",
                                                good: "Full"
                                            }
                                        ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 p-4 border-b border-gray-100 last:border-0 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-xs md:text-sm text-gray-900",
                                                        children: row.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-gray-400 text-xs",
                                                        children: row.bad
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center font-bold text-[#1d1d1f] text-xs flex items-center justify-center gap-1.5",
                                                        children: [
                                                            row.good,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                size: 14,
                                                                className: "text-[#800000]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 336,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 md:px-12 lg:px-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-12 gap-8 md:gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-2 text-[#1d1d1f]",
                                            children: "Questions?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>openBooking("General Query"),
                                            className: "text-[#800000] text-sm font-bold hover:underline",
                                            children: "Contact Support →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-8",
                                    children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                            question: faq.q,
                                            answer: faq.a
                                        }, i, false, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsModalOpen(false),
                            className: "absolute inset-0 bg-black/70 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: modalVariants,
                            initial: "hidden",
                            animate: "visible",
                            exit: "exit",
                            className: "relative bg-[#1d1d1f] text-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "absolute top-4 right-4 z-20 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "text-white",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex md:w-1/3 p-8 bg-[#800000] relative flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: "Request Callback"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-100/80 text-sm",
                                                    children: [
                                                        "Plan: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: selectedPlan
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 394,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-red-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 399,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "+971 50 123 4567"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 399,
                                                        columnNumber: 43
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 398,
                                                columnNumber: 20
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-2/3 p-8 bg-[#1d1d1f] flex items-center overflow-y-auto",
                                    children: formStatus === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full text-center space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 48,
                                                className: "mx-auto text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 408,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold",
                                                children: "Received"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 409,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400",
                                                children: "We will call you shortly."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 410,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsModalOpen(false),
                                                className: "text-[#800000] font-bold bg-white px-6 py-2 rounded-lg",
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 411,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                        lineNumber: 407,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleModalSubmit,
                                        className: "space-y-4 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:hidden mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold",
                                                    children: [
                                                        "Request: ",
                                                        selectedPlan
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 417,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 416,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold uppercase tracking-widest text-gray-500",
                                                                children: "Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 422,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                name: "name",
                                                                type: "text",
                                                                placeholder: "Name",
                                                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 423,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 421,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-bold uppercase tracking-widest text-gray-500",
                                                                children: "Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 426,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                name: "phone",
                                                                type: "tel",
                                                                placeholder: "050...",
                                                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 427,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 425,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 420,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-gray-500",
                                                        children: "Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 431,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "service",
                                                        defaultValue: selectedPlan,
                                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                className: "bg-[#1d1d1f] text-gray-400",
                                                                value: selectedPlan,
                                                                children: selectedPlan
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 433,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                className: "bg-[#1d1d1f]",
                                                                value: "Other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                                lineNumber: 434,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 432,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 430,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest text-gray-500",
                                                        children: "Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 438,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        name: "message",
                                                        rows: 2,
                                                        placeholder: "Optional details...",
                                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none resize-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                        lineNumber: 439,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 437,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: formStatus === "submitting",
                                                type: "submit",
                                                className: "w-full bg-white text-black hover:bg-gray-200 font-bold uppercase text-xs tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 mt-2",
                                                children: formStatus === "submitting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                    lineNumber: 442,
                                                    columnNumber: 56
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Send Request ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                            lineNumber: 442,
                                                            columnNumber: 110
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                                lineNumber: 441,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                        lineNumber: 414,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Pricing/PricingPageContent.jsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s2(PricingPageContent, "LM6y9cjYsZT3eKq0aNVcpVKBWmo=");
_c2 = PricingPageContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "FaqItem");
__turbopack_context__.k.register(_c2, "PricingPageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0d147477._.js.map