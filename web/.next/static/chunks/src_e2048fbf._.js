(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/mocks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Mock data for standalone UI development
__turbopack_context__.s({
    "mockAvailability": (()=>mockAvailability),
    "mockCategories": (()=>mockCategories),
    "mockContracts": (()=>mockContracts),
    "mockDashboardStats": (()=>mockDashboardStats),
    "mockNotifications": (()=>mockNotifications),
    "mockRatings": (()=>mockRatings),
    "mockSearchFilters": (()=>mockSearchFilters),
    "mockServiceRequests": (()=>mockServiceRequests),
    "mockServices": (()=>mockServices),
    "mockUsers": (()=>mockUsers)
});
const mockUsers = [
    {
        id: '1',
        email: 'admin@serviceplatform.com',
        firstName: 'Admin',
        lastName: 'User',
        phoneNumber: '+1234567890',
        userType: 'Admin',
        isVerified: true,
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
        lastLoginAt: '2024-01-15T10:30:00Z'
    },
    {
        id: '2',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+1234567891',
        userType: 'Provider',
        isVerified: true,
        isActive: true,
        profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        bio: 'Professional housekeeper with 5+ years of experience. Specializing in deep cleaning and organization.',
        address: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA',
        skills: [
            'Deep Cleaning',
            'Organization',
            'Laundry',
            'Pet Care'
        ],
        hourlyRate: 25,
        rating: 4.8,
        reviewCount: 47,
        totalEarnings: 12500,
        totalServices: 89,
        createdAt: '2024-01-02T00:00:00Z',
        lastLoginAt: '2024-01-15T09:15:00Z'
    },
    {
        id: '3',
        email: 'jane.smith@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
        phoneNumber: '+1234567892',
        userType: 'Requester',
        isVerified: true,
        isActive: true,
        profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        address: '456 Oak Avenue',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90210',
        country: 'USA',
        createdAt: '2024-01-03T00:00:00Z',
        lastLoginAt: '2024-01-15T11:45:00Z'
    },
    {
        id: '4',
        email: 'mike.wilson@example.com',
        firstName: 'Mike',
        lastName: 'Wilson',
        phoneNumber: '+1234567893',
        userType: 'Provider',
        isVerified: false,
        isActive: true,
        bio: 'Experienced chef specializing in Italian and Mediterranean cuisine. Available for private events and meal prep.',
        address: '789 Pine Street',
        city: 'Chicago',
        state: 'IL',
        zipCode: '60601',
        country: 'USA',
        skills: [
            'Italian Cuisine',
            'Mediterranean Cuisine',
            'Meal Prep',
            'Event Catering'
        ],
        hourlyRate: 35,
        rating: 4.9,
        reviewCount: 23,
        totalEarnings: 8900,
        totalServices: 34,
        createdAt: '2024-01-04T00:00:00Z',
        lastLoginAt: '2024-01-14T16:20:00Z'
    },
    {
        id: '5',
        email: 'sarah.johnson@example.com',
        firstName: 'Sarah',
        lastName: 'Johnson',
        phoneNumber: '+1234567894',
        userType: 'Requester',
        isVerified: true,
        isActive: true,
        profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        address: '321 Elm Street',
        city: 'Miami',
        state: 'FL',
        zipCode: '33101',
        country: 'USA',
        createdAt: '2024-01-05T00:00:00Z',
        lastLoginAt: '2024-01-15T08:30:00Z'
    },
    {
        id: '6',
        email: 'david.brown@example.com',
        firstName: 'David',
        lastName: 'Brown',
        phoneNumber: '+1234567895',
        userType: 'Provider',
        isVerified: true,
        isActive: true,
        profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        bio: 'Professional driver with clean record. Specializing in airport transfers and business travel.',
        address: '654 Maple Drive',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98101',
        country: 'USA',
        skills: [
            'Airport Transfers',
            'Business Travel',
            'Luxury Vehicles',
            'Long Distance'
        ],
        hourlyRate: 30,
        rating: 4.7,
        reviewCount: 56,
        totalEarnings: 18200,
        totalServices: 124,
        createdAt: '2024-01-06T00:00:00Z',
        lastLoginAt: '2024-01-15T12:15:00Z'
    }
];
const mockCategories = [
    {
        id: '1',
        name: 'Housekeeping',
        description: 'Professional cleaning and housekeeping services',
        icon: '🏠',
        isActive: true,
        serviceCount: 15
    },
    {
        id: '2',
        name: 'Cooking',
        description: 'Chef and cooking services for events and daily meals',
        icon: '👨‍🍳',
        isActive: true,
        serviceCount: 8
    },
    {
        id: '3',
        name: 'Driving',
        description: 'Professional driving and transportation services',
        icon: '🚗',
        isActive: true,
        serviceCount: 12
    },
    {
        id: '4',
        name: 'Gardening',
        description: 'Landscaping and garden maintenance services',
        icon: '🌱',
        isActive: true,
        serviceCount: 6
    },
    {
        id: '5',
        name: 'Pet Care',
        description: 'Pet sitting, walking, and grooming services',
        icon: '🐕',
        isActive: true,
        serviceCount: 10
    },
    {
        id: '6',
        name: 'Tutoring',
        description: 'Educational tutoring and academic support',
        icon: '📚',
        isActive: true,
        serviceCount: 7
    }
];
const mockServices = [
    {
        id: '1',
        title: 'Professional House Cleaning',
        description: 'Comprehensive house cleaning service including dusting, vacuuming, mopping, and bathroom cleaning. Perfect for busy professionals.',
        categoryId: '1',
        categoryName: 'Housekeeping',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        hourlyRate: 25,
        weeklyRate: 400,
        monthlyRate: 1500,
        location: 'New York, NY',
        isAvailable: true,
        isVerified: true,
        rating: 4.8,
        reviewCount: 45,
        tags: [
            'cleaning',
            'housekeeping',
            'professional'
        ],
        images: [
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
        ],
        createdAt: '2024-01-05T00:00:00Z'
    },
    {
        id: '2',
        title: 'Private Chef Services',
        description: 'Experienced chef available for private events, dinner parties, and special occasions. Custom menu planning included.',
        categoryId: '2',
        categoryName: 'Cooking',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        hourlyRate: 50,
        weeklyRate: 800,
        monthlyRate: 3000,
        location: 'Los Angeles, CA',
        isAvailable: true,
        isVerified: true,
        rating: 4.9,
        reviewCount: 32,
        tags: [
            'chef',
            'cooking',
            'events'
        ],
        images: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
        ],
        createdAt: '2024-01-06T00:00:00Z'
    },
    {
        id: '3',
        title: 'Professional Driving Service',
        description: 'Safe and reliable driving service for business meetings, airport transfers, and special events.',
        categoryId: '3',
        categoryName: 'Driving',
        providerId: '4',
        providerName: 'Mike Wilson',
        providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        hourlyRate: 35,
        weeklyRate: 600,
        monthlyRate: 2200,
        location: 'Chicago, IL',
        isAvailable: true,
        isVerified: false,
        rating: 4.5,
        reviewCount: 18,
        tags: [
            'driving',
            'transportation',
            'professional'
        ],
        images: [
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
        ],
        createdAt: '2024-01-07T00:00:00Z'
    },
    {
        id: '4',
        title: 'Garden Maintenance',
        description: 'Complete garden maintenance including mowing, trimming, planting, and seasonal care.',
        categoryId: '4',
        categoryName: 'Gardening',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        hourlyRate: 30,
        weeklyRate: 500,
        monthlyRate: 1800,
        location: 'Miami, FL',
        isAvailable: true,
        isVerified: true,
        rating: 4.7,
        reviewCount: 28,
        tags: [
            'gardening',
            'landscaping',
            'maintenance'
        ],
        images: [
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop'
        ],
        createdAt: '2024-01-08T00:00:00Z'
    },
    {
        id: '5',
        title: 'One-Time Deep Cleaning',
        description: 'Comprehensive one-time deep cleaning service for homes and offices. Includes all areas and surfaces.',
        categoryId: '1',
        categoryName: 'Housekeeping',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        hourlyRate: 0,
        weeklyRate: 0,
        monthlyRate: 0,
        fixedPrice: 150,
        location: 'New York, NY',
        isAvailable: true,
        isVerified: true,
        rating: 4.9,
        reviewCount: 67,
        tags: [
            'cleaning',
            'deep-cleaning',
            'one-time'
        ],
        images: [
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
        ],
        createdAt: '2024-01-09T00:00:00Z'
    }
];
const mockServiceRequests = [
    {
        id: '1',
        serviceId: '1',
        serviceTitle: 'Professional House Cleaning',
        requesterId: '3',
        requesterName: 'Jane Smith',
        requesterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        requestType: 'Hourly',
        startDate: '2024-01-20T09:00:00Z',
        endDate: '2024-01-20T13:00:00Z',
        totalAmount: 100,
        status: 'Pending',
        description: 'Need weekly house cleaning service for my 2-bedroom apartment. Prefer morning hours.',
        specialRequirements: 'Please bring eco-friendly cleaning products',
        location: 'Los Angeles, CA',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T10:30:00Z'
    },
    {
        id: '2',
        serviceId: '2',
        serviceTitle: 'Private Chef Services',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        requesterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        providerId: '4',
        providerName: 'Mike Wilson',
        providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        requestType: 'FixedPrice',
        startDate: '2024-01-25T18:00:00Z',
        endDate: '2024-01-25T22:00:00Z',
        totalAmount: 200,
        status: 'Accepted',
        description: 'Dinner party for 8 people. Italian cuisine preferred.',
        specialRequirements: 'Vegetarian options needed for 2 guests',
        location: 'Miami, FL',
        createdAt: '2024-01-14T14:20:00Z',
        updatedAt: '2024-01-15T09:15:00Z'
    },
    {
        id: '3',
        serviceId: '3',
        serviceTitle: 'Professional Driving Service',
        requesterId: '3',
        requesterName: 'Jane Smith',
        requesterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        providerId: '6',
        providerName: 'David Brown',
        providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        requestType: 'Hourly',
        startDate: '2024-01-22T07:00:00Z',
        endDate: '2024-01-22T09:00:00Z',
        totalAmount: 70,
        status: 'InProgress',
        description: 'Airport pickup from LAX to downtown LA.',
        specialRequirements: 'Flight arrives at 6:30 AM, please arrive 15 minutes early',
        location: 'Los Angeles, CA',
        createdAt: '2024-01-13T16:45:00Z',
        updatedAt: '2024-01-15T11:30:00Z'
    },
    {
        id: '4',
        serviceId: '4',
        serviceTitle: 'Garden Maintenance',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        requesterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        requestType: 'Weekly',
        startDate: '2024-01-23T08:00:00Z',
        endDate: '2024-01-23T12:00:00Z',
        totalAmount: 500,
        status: 'Completed',
        description: 'Weekly garden maintenance including mowing, trimming, and watering.',
        specialRequirements: 'Please focus on the rose garden area',
        location: 'Miami, FL',
        createdAt: '2024-01-10T12:00:00Z',
        updatedAt: '2024-01-15T14:20:00Z'
    },
    {
        id: '5',
        serviceId: '5',
        serviceTitle: 'One-Time Deep Cleaning',
        requesterId: '3',
        requesterName: 'Jane Smith',
        requesterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        providerId: '2',
        providerName: 'John Doe',
        providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        requestType: 'FixedPrice',
        startDate: '2024-01-28T10:00:00Z',
        endDate: '2024-01-28T16:00:00Z',
        totalAmount: 150,
        status: 'Pending',
        description: 'Deep cleaning needed for move-out. 3-bedroom house.',
        specialRequirements: 'Include carpet cleaning and window washing',
        location: 'Los Angeles, CA',
        createdAt: '2024-01-15T13:45:00Z',
        updatedAt: '2024-01-15T13:45:00Z'
    }
];
const mockAvailability = [
    // John Doe's availability
    {
        id: '1',
        userId: '2',
        dayOfWeek: 1,
        startTime: '08:00',
        endTime: '17:00',
        isAvailable: true
    },
    {
        id: '2',
        userId: '2',
        dayOfWeek: 2,
        startTime: '08:00',
        endTime: '17:00',
        isAvailable: true
    },
    {
        id: '3',
        userId: '2',
        dayOfWeek: 3,
        startTime: '08:00',
        endTime: '17:00',
        isAvailable: true
    },
    {
        id: '4',
        userId: '2',
        dayOfWeek: 4,
        startTime: '08:00',
        endTime: '17:00',
        isAvailable: true
    },
    {
        id: '5',
        userId: '2',
        dayOfWeek: 5,
        startTime: '08:00',
        endTime: '17:00',
        isAvailable: true
    },
    {
        id: '6',
        userId: '2',
        dayOfWeek: 6,
        startTime: '09:00',
        endTime: '15:00',
        isAvailable: true
    },
    {
        id: '7',
        userId: '2',
        dayOfWeek: 0,
        startTime: '10:00',
        endTime: '14:00',
        isAvailable: false
    },
    // Mike Wilson's availability
    {
        id: '8',
        userId: '4',
        dayOfWeek: 1,
        startTime: '10:00',
        endTime: '20:00',
        isAvailable: true
    },
    {
        id: '9',
        userId: '4',
        dayOfWeek: 2,
        startTime: '10:00',
        endTime: '20:00',
        isAvailable: true
    },
    {
        id: '10',
        userId: '4',
        dayOfWeek: 3,
        startTime: '10:00',
        endTime: '20:00',
        isAvailable: true
    },
    {
        id: '11',
        userId: '4',
        dayOfWeek: 4,
        startTime: '10:00',
        endTime: '20:00',
        isAvailable: true
    },
    {
        id: '12',
        userId: '4',
        dayOfWeek: 5,
        startTime: '10:00',
        endTime: '20:00',
        isAvailable: true
    },
    {
        id: '13',
        userId: '4',
        dayOfWeek: 6,
        startTime: '12:00',
        endTime: '22:00',
        isAvailable: true
    },
    {
        id: '14',
        userId: '4',
        dayOfWeek: 0,
        startTime: '12:00',
        endTime: '18:00',
        isAvailable: true
    },
    // David Brown's availability
    {
        id: '15',
        userId: '6',
        dayOfWeek: 1,
        startTime: '06:00',
        endTime: '22:00',
        isAvailable: true
    },
    {
        id: '16',
        userId: '6',
        dayOfWeek: 2,
        startTime: '06:00',
        endTime: '22:00',
        isAvailable: true
    },
    {
        id: '17',
        userId: '6',
        dayOfWeek: 3,
        startTime: '06:00',
        endTime: '22:00',
        isAvailable: true
    },
    {
        id: '18',
        userId: '6',
        dayOfWeek: 4,
        startTime: '06:00',
        endTime: '22:00',
        isAvailable: true
    },
    {
        id: '19',
        userId: '6',
        dayOfWeek: 5,
        startTime: '06:00',
        endTime: '22:00',
        isAvailable: true
    },
    {
        id: '20',
        userId: '6',
        dayOfWeek: 6,
        startTime: '08:00',
        endTime: '20:00',
        isAvailable: true
    },
    {
        id: '21',
        userId: '6',
        dayOfWeek: 0,
        startTime: '08:00',
        endTime: '18:00',
        isAvailable: true
    }
];
const mockContracts = [
    {
        id: '1',
        serviceId: '1',
        serviceTitle: 'Professional House Cleaning',
        providerId: '2',
        providerName: 'John Doe',
        requesterId: '3',
        requesterName: 'Jane Smith',
        contractType: 'Hourly',
        startDate: '2024-01-20T09:00:00Z',
        endDate: '2024-01-20T13:00:00Z',
        totalAmount: 100,
        status: 'Active',
        paymentStatus: 'Paid',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T10:30:00Z'
    },
    {
        id: '2',
        serviceId: '2',
        serviceTitle: 'Private Chef Services',
        providerId: '4',
        providerName: 'Mike Wilson',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        contractType: 'FixedPrice',
        startDate: '2024-01-25T18:00:00Z',
        endDate: '2024-01-25T22:00:00Z',
        totalAmount: 200,
        status: 'Pending',
        paymentStatus: 'Pending',
        createdAt: '2024-01-14T14:20:00Z',
        updatedAt: '2024-01-15T09:15:00Z'
    },
    {
        id: '3',
        serviceId: '3',
        serviceTitle: 'Professional Driving Service',
        providerId: '6',
        providerName: 'David Brown',
        requesterId: '3',
        requesterName: 'Jane Smith',
        contractType: 'Hourly',
        startDate: '2024-01-22T07:00:00Z',
        endDate: '2024-01-22T09:00:00Z',
        totalAmount: 70,
        status: 'Active',
        paymentStatus: 'Paid',
        createdAt: '2024-01-13T16:45:00Z',
        updatedAt: '2024-01-15T11:30:00Z'
    },
    {
        id: '4',
        serviceId: '4',
        serviceTitle: 'Garden Maintenance',
        providerId: '2',
        providerName: 'John Doe',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        contractType: 'Weekly',
        startDate: '2024-01-23T08:00:00Z',
        endDate: '2024-01-23T12:00:00Z',
        totalAmount: 500,
        status: 'Completed',
        paymentStatus: 'Paid',
        createdAt: '2024-01-10T12:00:00Z',
        updatedAt: '2024-01-15T14:20:00Z'
    },
    {
        id: '5',
        serviceId: '1',
        serviceTitle: 'Professional House Cleaning',
        providerId: '2',
        providerName: 'John Doe',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        contractType: 'Weekly',
        startDate: '2024-01-16T09:00:00Z',
        endDate: '2024-01-16T13:00:00Z',
        totalAmount: 100,
        status: 'Completed',
        paymentStatus: 'Paid',
        createdAt: '2024-01-10T08:00:00Z',
        updatedAt: '2024-01-16T13:00:00Z'
    },
    {
        id: '6',
        serviceId: '3',
        serviceTitle: 'Professional Driving Service',
        providerId: '6',
        providerName: 'David Brown',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        contractType: 'Hourly',
        startDate: '2024-01-18T14:00:00Z',
        endDate: '2024-01-18T16:00:00Z',
        totalAmount: 60,
        status: 'Completed',
        paymentStatus: 'Paid',
        createdAt: '2024-01-12T10:00:00Z',
        updatedAt: '2024-01-18T16:00:00Z'
    }
];
const mockRatings = [
    {
        id: '1',
        serviceId: '1',
        contractId: '1',
        userId: '3',
        userName: 'Jane Smith',
        rating: 5,
        comment: 'Excellent service! John was very professional and thorough. The house looks spotless.',
        createdAt: '2024-01-16T14:30:00Z'
    },
    {
        id: '2',
        serviceId: '1',
        contractId: '5',
        userId: '5',
        userName: 'Sarah Johnson',
        rating: 4,
        comment: 'Good cleaning service. Very reliable and punctual.',
        createdAt: '2024-01-17T10:15:00Z'
    },
    {
        id: '3',
        serviceId: '2',
        contractId: '2',
        userId: '5',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'Amazing chef! The dinner party was a huge success. Everyone loved the food.',
        createdAt: '2024-01-26T20:30:00Z'
    },
    {
        id: '4',
        serviceId: '3',
        contractId: '3',
        userId: '3',
        userName: 'Jane Smith',
        rating: 4,
        comment: 'Professional driver, arrived on time and got me to the airport safely.',
        createdAt: '2024-01-22T09:30:00Z'
    },
    {
        id: '5',
        serviceId: '4',
        contractId: '4',
        userId: '5',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'Beautiful garden work! The roses look amazing and everything is well maintained.',
        createdAt: '2024-01-23T13:45:00Z'
    }
];
const mockNotifications = [
    {
        id: '1',
        userId: '2',
        title: 'New Service Request',
        message: 'Jane Smith has requested your Professional House Cleaning service.',
        type: 'Info',
        isRead: false,
        createdAt: '2024-01-15T10:30:00Z'
    },
    {
        id: '2',
        userId: '3',
        title: 'Service Accepted',
        message: 'John Doe has accepted your service request for Professional House Cleaning.',
        type: 'Success',
        isRead: true,
        createdAt: '2024-01-15T11:00:00Z'
    },
    {
        id: '3',
        userId: '4',
        title: 'Payment Received',
        message: 'Payment of $200 has been received for your Private Chef Services.',
        type: 'Success',
        isRead: false,
        createdAt: '2024-01-15T09:15:00Z'
    },
    {
        id: '4',
        userId: '5',
        title: 'Service Reminder',
        message: 'Your scheduled Garden Maintenance service is tomorrow at 8:00 AM.',
        type: 'Warning',
        isRead: false,
        createdAt: '2024-01-15T08:00:00Z'
    },
    {
        id: '5',
        userId: '6',
        title: 'New Review',
        message: 'Jane Smith left a 4-star review for your Professional Driving Service.',
        type: 'Info',
        isRead: true,
        createdAt: '2024-01-22T09:30:00Z'
    }
];
const mockDashboardStats = [
    // John Doe (Provider)
    {
        totalServices: 89,
        totalContracts: 67,
        totalEarnings: 12500,
        averageRating: 4.8,
        activeContracts: 2,
        pendingRequests: 1,
        completedServices: 65,
        upcomingServices: 3,
        totalHours: 320,
        monthlyEarnings: 2800
    },
    // Jane Smith (Requester)
    {
        totalServices: 0,
        totalContracts: 4,
        totalEarnings: 0,
        averageRating: 0,
        activeContracts: 2,
        pendingRequests: 0,
        completedServices: 2,
        upcomingServices: 0,
        totalHours: 0,
        monthlyEarnings: 0
    },
    // Mike Wilson (Provider)
    {
        totalServices: 34,
        totalContracts: 28,
        totalEarnings: 8900,
        averageRating: 4.9,
        activeContracts: 1,
        pendingRequests: 0,
        completedServices: 27,
        upcomingServices: 1,
        totalHours: 180,
        monthlyEarnings: 1200
    },
    // Sarah Johnson (Requester)
    {
        totalServices: 0,
        totalContracts: 3,
        totalEarnings: 0,
        averageRating: 0,
        activeContracts: 1,
        pendingRequests: 0,
        completedServices: 2,
        upcomingServices: 0,
        totalHours: 0,
        monthlyEarnings: 0
    },
    // David Brown (Provider)
    {
        totalServices: 124,
        totalContracts: 98,
        totalEarnings: 18200,
        averageRating: 4.7,
        activeContracts: 1,
        pendingRequests: 0,
        completedServices: 97,
        upcomingServices: 2,
        totalHours: 450,
        monthlyEarnings: 3200
    }
];
const mockSearchFilters = {
    categories: mockCategories,
    locations: [
        'New York, NY',
        'Los Angeles, CA',
        'Chicago, IL',
        'Miami, FL',
        'Seattle, WA',
        'Boston, MA',
        'San Francisco, CA',
        'Denver, CO'
    ],
    priceRanges: [
        {
            label: 'Under $25',
            min: 0,
            max: 25
        },
        {
            label: '$25 - $50',
            min: 25,
            max: 50
        },
        {
            label: '$50 - $100',
            min: 50,
            max: 100
        },
        {
            label: 'Over $100',
            min: 100,
            max: null
        }
    ],
    ratings: [
        1,
        2,
        3,
        4,
        5
    ],
    availability: [
        'Available Now',
        'Available Today',
        'Available This Week',
        'Available Next Week'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/mockApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Mock API service for standalone UI development
__turbopack_context__.s({
    "handleApiError": (()=>handleApiError),
    "handleApiSuccess": (()=>handleApiSuccess),
    "mockApi": (()=>mockApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mocks.ts [app-client] (ecmascript)");
;
// Simulate API delay
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const mockApi = {
    // Authentication
    async login (email, password) {
        await delay(1000);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.email === email);
        if (!user || password !== 'password') {
            throw new Error('Invalid email or password');
        }
        return {
            user,
            token: 'mock-jwt-token-' + Date.now(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };
    },
    async register (userData) {
        await delay(1500);
        const newUser = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].length + 1).toString(),
            ...userData,
            isVerified: false,
            isActive: true,
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString()
        };
        return {
            user: newUser,
            token: 'mock-jwt-token-' + Date.now(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };
    },
    async forgotPassword (email) {
        await delay(800);
        return {
            message: 'Password reset email sent successfully'
        };
    },
    // Users
    async getUsers (page = 1, limit = 10, search = '') {
        await delay(500);
        let filteredUsers = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"];
        if (search) {
            filteredUsers = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].filter((user)=>user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()));
        }
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedUsers = filteredUsers.slice(start, end);
        return {
            users: paginatedUsers,
            total: filteredUsers.length,
            page,
            limit,
            totalPages: Math.ceil(filteredUsers.length / limit)
        };
    },
    async updateUserStatus (userId, isActive) {
        await delay(300);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (user) {
            user.isActive = isActive;
        }
        return {
            message: 'User status updated successfully'
        };
    },
    async verifyUser (userId) {
        await delay(300);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (user) {
            user.isVerified = true;
        }
        return {
            message: 'User verified successfully'
        };
    },
    // Categories
    async getCategories () {
        await delay(300);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCategories"];
    },
    async createCategory (categoryData) {
        await delay(500);
        const newCategory = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCategories"].length + 1).toString(),
            ...categoryData,
            isActive: true,
            serviceCount: 0
        };
        return newCategory;
    },
    async updateCategory (id, categoryData) {
        await delay(300);
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCategories"].find((c)=>c.id === id);
        if (category) {
            Object.assign(category, categoryData);
        }
        return category;
    },
    async deleteCategory (id) {
        await delay(300);
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCategories"].findIndex((c)=>c.id === id);
        if (index > -1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCategories"].splice(index, 1);
        }
        return {
            message: 'Category deleted successfully'
        };
    },
    // Services
    async getServices (page = 1, limit = 10, filters = {}) {
        await delay(600);
        let filteredServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"];
        if (filters.categoryId) {
            filteredServices = filteredServices.filter((s)=>s.categoryId === filters.categoryId);
        }
        if (filters.search) {
            filteredServices = filteredServices.filter((s)=>s.title.toLowerCase().includes(filters.search.toLowerCase()) || s.description.toLowerCase().includes(filters.search.toLowerCase()));
        }
        if (filters.location) {
            filteredServices = filteredServices.filter((s)=>s.location.toLowerCase().includes(filters.location.toLowerCase()));
        }
        if (filters.minRating) {
            filteredServices = filteredServices.filter((s)=>s.rating >= filters.minRating);
        }
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedServices = filteredServices.slice(start, end);
        return {
            services: paginatedServices,
            total: filteredServices.length,
            page,
            limit,
            totalPages: Math.ceil(filteredServices.length / limit)
        };
    },
    async getServiceById (id) {
        await delay(300);
        const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === id);
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    },
    async updateServiceStatus (id, isVerified) {
        await delay(300);
        const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === id);
        if (service) {
            service.isVerified = isVerified;
        }
        return {
            message: 'Service status updated successfully'
        };
    },
    // Contracts
    async getContracts (page = 1, limit = 10, filters = {}) {
        await delay(500);
        let filteredContracts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"];
        if (filters.status) {
            filteredContracts = filteredContracts.filter((c)=>c.status === filters.status);
        }
        if (filters.userId) {
            filteredContracts = filteredContracts.filter((c)=>c.providerId === filters.userId || c.requesterId === filters.userId);
        }
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedContracts = filteredContracts.slice(start, end);
        return {
            contracts: paginatedContracts,
            total: filteredContracts.length,
            page,
            limit,
            totalPages: Math.ceil(filteredContracts.length / limit)
        };
    },
    async createContract (contractData) {
        await delay(800);
        const newContract = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].length + 1).toString(),
            ...contractData,
            status: 'Pending',
            paymentStatus: 'Pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        return newContract;
    },
    async updateContractStatus (id, status) {
        await delay(300);
        const contract = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].find((c)=>c.id === id);
        if (contract) {
            contract.status = status;
            contract.updatedAt = new Date().toISOString();
        }
        return {
            message: 'Contract status updated successfully'
        };
    },
    // Ratings
    async getServiceRatings (serviceId) {
        await delay(300);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRatings"].filter((r)=>r.serviceId === serviceId);
    },
    async createRating (ratingData) {
        await delay(500);
        const newRating = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRatings"].length + 1).toString(),
            ...ratingData,
            createdAt: new Date().toISOString()
        };
        return newRating;
    },
    // Notifications
    async getNotifications (userId) {
        await delay(300);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNotifications"].filter((n)=>n.userId === userId);
    },
    async markNotificationAsRead (id) {
        await delay(200);
        const notification = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNotifications"].find((n)=>n.id === id);
        if (notification) {
            notification.isRead = true;
        }
        return {
            message: 'Notification marked as read'
        };
    },
    // Dashboard
    async getDashboardStats () {
        await delay(400);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"];
    },
    // Search and Filters
    async getSearchFilters () {
        await delay(200);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSearchFilters"];
    },
    // Enhanced Dashboard
    async getDashboard (userId) {
        await delay(800);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        const userStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"].find((s)=>{
            if (user.userType === 'Provider') {
                return user.id === '2' || user.id === '4' || user.id === '6';
            } else {
                return user.id === '3' || user.id === '5';
            }
        }) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"][0];
        // Get user-specific data
        let userContracts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].filter((c)=>c.providerId === userId || c.requesterId === userId);
        let userServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].filter((s)=>s.providerId === userId);
        let userServiceRequests = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId || sr.requesterId === userId);
        let userAvailability = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].filter((a)=>a.userId === userId);
        return {
            user,
            stats: userStats,
            recentContracts: userContracts.slice(0, 5),
            recentServices: userServices.slice(0, 5),
            serviceRequests: userServiceRequests,
            availability: userAvailability
        };
    },
    // Service Requests
    async getServiceRequests (userId, filters = {}) {
        await delay(500);
        let filteredRequests = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId || sr.requesterId === userId);
        if (filters.status) {
            filteredRequests = filteredRequests.filter((sr)=>sr.status === filters.status);
        }
        if (filters.type) {
            filteredRequests = filteredRequests.filter((sr)=>sr.requestType === filters.type);
        }
        return {
            requests: filteredRequests,
            total: filteredRequests.length
        };
    },
    async getServiceRequestById (id) {
        await delay(300);
        const request = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].find((sr)=>sr.id === id);
        if (!request) {
            throw new Error('Service request not found');
        }
        return request;
    },
    async updateServiceRequestStatus (id, status) {
        await delay(300);
        const request = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].find((sr)=>sr.id === id);
        if (request) {
            request.status = status;
            request.updatedAt = new Date().toISOString();
        }
        return {
            message: 'Service request status updated successfully'
        };
    },
    async createServiceRequest (requestData) {
        await delay(500);
        const newRequest = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].length + 1).toString(),
            ...requestData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].push(newRequest);
        return newRequest;
    },
    // Availability Management
    async getAvailability (userId) {
        await delay(300);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].filter((a)=>a.userId === userId);
    },
    async updateAvailability (userId, availabilityData) {
        await delay(500);
        // Remove existing availability for user
        const existingIndexes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].map((a, index)=>a.userId === userId ? index : -1).filter((index)=>index !== -1);
        existingIndexes.reverse().forEach((index)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].splice(index, 1);
        });
        // Add new availability
        availabilityData.forEach((data)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].push({
                id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].length + 1).toString(),
                userId,
                ...data
            });
        });
        return {
            message: 'Availability updated successfully'
        };
    },
    // Enhanced User Profile
    async getUserProfile (userId) {
        await delay(300);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        // Get user's services, contracts, and ratings
        const userServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].filter((s)=>s.providerId === userId);
        const userContracts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].filter((c)=>c.providerId === userId || c.requesterId === userId);
        const userRatings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRatings"].filter((r)=>{
            const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === r.serviceId);
            return service?.providerId === userId;
        });
        return {
            user,
            services: userServices,
            contracts: userContracts,
            ratings: userRatings
        };
    },
    async updateUserProfile (userId, profileData) {
        await delay(500);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (user) {
            Object.assign(user, profileData);
        }
        return {
            message: 'Profile updated successfully'
        };
    },
    // Provider-specific endpoints
    async getProviderDashboard (userId) {
        await delay(800);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId && u.userType === 'Provider');
        if (!user) {
            throw new Error('Provider not found');
        }
        const userStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"].find((s)=>{
            return user.id === '2' || user.id === '4' || user.id === '6';
        }) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"][0];
        const pendingRequests = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId && sr.status === 'Pending');
        const upcomingServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId && (sr.status === 'Accepted' || sr.status === 'InProgress'));
        const completedServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId && sr.status === 'Completed');
        const userAvailability = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAvailability"].filter((a)=>a.userId === userId);
        return {
            user,
            stats: userStats,
            pendingRequests,
            upcomingServices,
            completedServices,
            availability: userAvailability
        };
    },
    // Requester-specific endpoints
    async getRequesterDashboard (userId) {
        await delay(800);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId && u.userType === 'Requester');
        if (!user) {
            throw new Error('Requester not found');
        }
        const userStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"].find((s)=>{
            return user.id === '3' || user.id === '5';
        }) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"][1];
        const activeServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.requesterId === userId && (sr.status === 'Accepted' || sr.status === 'InProgress'));
        const pastServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.requesterId === userId && sr.status === 'Completed');
        const pendingServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.requesterId === userId && sr.status === 'Pending');
        return {
            user,
            stats: userStats,
            activeServices,
            pastServices,
            pendingServices
        };
    }
};
const handleApiError = (error)=>{
    console.error('API Error:', error);
    if (error.message) {
        return {
            error: error.message
        };
    }
    return {
        error: 'An unexpected error occurred'
    };
};
const handleApiSuccess = (data)=>{
    return {
        data,
        success: true
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Unified API service that can use real backend or mock data
__turbopack_context__.s({
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockApi.ts [app-client] (ecmascript)");
;
// Configuration
const USE_MOCK_API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USE_MOCK_API === 'true' || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
// API client configuration
const apiClient = {
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
};
// Get auth token from localStorage
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return localStorage.getItem('authToken');
};
// Add auth header to requests
const getAuthHeaders = ()=>{
    const token = getAuthToken();
    return token ? {
        Authorization: `Bearer ${token}`
    } : {};
};
// Generic API request function
const apiRequest = async (endpoint, options = {})=>{
    const url = `${apiClient.baseURL}${endpoint}`;
    const authHeaders = getAuthHeaders();
    const headers = {
        ...apiClient.headers,
        ...authHeaders.Authorization && {
            Authorization: authHeaders.Authorization
        },
        ...options.headers
    };
    const response = await fetch(url, {
        ...options,
        headers
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
};
// API service class
class ApiService {
    // Authentication
    async login(email, password) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].login(email, password);
        }
        return apiRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        });
    }
    async register(userData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].register(userData);
        }
        return apiRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }
    async forgotPassword(email) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].forgotPassword(email);
        }
        return apiRequest('/auth/forgot-password', {
            method: 'POST',
            body: JSON.stringify({
                email
            })
        });
    }
    // Users
    async getUsers(page = 1, limit = 10, search = '') {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getUsers(page, limit, search);
        }
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            ...search && {
                search
            }
        });
        return apiRequest(`/users?${params}`);
    }
    async updateUserStatus(userId, isActive) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateUserStatus(userId, isActive);
        }
        return apiRequest(`/users/${userId}/status`, {
            method: 'PUT',
            body: JSON.stringify({
                isActive
            })
        });
    }
    async verifyUser(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].verifyUser(userId);
        }
        return apiRequest(`/users/${userId}/verify`, {
            method: 'PUT'
        });
    }
    // Categories
    async getCategories() {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getCategories();
        }
        return apiRequest('/categories');
    }
    async createCategory(categoryData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].createCategory(categoryData);
        }
        return apiRequest('/categories', {
            method: 'POST',
            body: JSON.stringify(categoryData)
        });
    }
    async updateCategory(id, categoryData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateCategory(id, categoryData);
        }
        return apiRequest(`/categories/${id}`, {
            method: 'PUT',
            body: JSON.stringify(categoryData)
        });
    }
    async deleteCategory(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].deleteCategory(id);
        }
        return apiRequest(`/categories/${id}`, {
            method: 'DELETE'
        });
    }
    // Services
    async getServices(page = 1, limit = 10, filters = {}) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getServices(page, limit, filters);
        }
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            ...filters
        });
        return apiRequest(`/services?${params}`);
    }
    async getServiceById(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getServiceById(id);
        }
        return apiRequest(`/services/${id}`);
    }
    async updateServiceStatus(id, isVerified) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateServiceStatus(id, isVerified);
        }
        return apiRequest(`/services/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({
                isVerified
            })
        });
    }
    // Contracts
    async getContracts(page = 1, limit = 10, filters = {}) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getContracts(page, limit, filters);
        }
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            ...filters
        });
        return apiRequest(`/contracts?${params}`);
    }
    async createContract(contractData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].createContract(contractData);
        }
        return apiRequest('/contracts', {
            method: 'POST',
            body: JSON.stringify(contractData)
        });
    }
    async updateContractStatus(id, status) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateContractStatus(id, status);
        }
        return apiRequest(`/contracts/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({
                status
            })
        });
    }
    // Ratings
    async getServiceRatings(serviceId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getServiceRatings(serviceId);
        }
        return apiRequest(`/services/${serviceId}/ratings`);
    }
    async createRating(ratingData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].createRating(ratingData);
        }
        return apiRequest('/ratings', {
            method: 'POST',
            body: JSON.stringify(ratingData)
        });
    }
    // Notifications
    async getNotifications(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getNotifications(userId);
        }
        return apiRequest(`/users/${userId}/notifications`);
    }
    async markNotificationAsRead(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].markNotificationAsRead(id);
        }
        return apiRequest(`/notifications/${id}/read`, {
            method: 'PUT'
        });
    }
    // Dashboard
    async getDashboardStats() {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getDashboardStats();
        }
        return apiRequest('/admin/dashboard/stats');
    }
    // Search and Filters
    async getSearchFilters() {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getSearchFilters();
        }
        return apiRequest('/services/filters');
    }
    // Enhanced Dashboard
    async getDashboard(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getDashboard(userId);
        }
        return apiRequest(`/dashboard/${userId}`);
    }
    async getProviderDashboard(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getProviderDashboard(userId);
        }
        return apiRequest(`/dashboard/provider/${userId}`);
    }
    async getRequesterDashboard(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getRequesterDashboard(userId);
        }
        return apiRequest(`/dashboard/requester/${userId}`);
    }
    // Service Requests
    async getServiceRequests(userId, filters = {}) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getServiceRequests(userId, filters);
        }
        const params = new URLSearchParams({
            userId,
            ...filters
        });
        return apiRequest(`/service-requests?${params}`);
    }
    async getServiceRequestById(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getServiceRequestById(id);
        }
        return apiRequest(`/service-requests/${id}`);
    }
    async updateServiceRequestStatus(id, status) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateServiceRequestStatus(id, status);
        }
        return apiRequest(`/service-requests/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({
                status
            })
        });
    }
    async createServiceRequest(requestData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].createServiceRequest(requestData);
        }
        return apiRequest('/service-requests', {
            method: 'POST',
            body: JSON.stringify(requestData)
        });
    }
    // Availability Management
    async getAvailability(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getAvailability(userId);
        }
        return apiRequest(`/availability/${userId}`);
    }
    async updateAvailability(userId, availabilityData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateAvailability(userId, availabilityData);
        }
        return apiRequest(`/availability/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                availability: availabilityData
            })
        });
    }
    // User Profile
    async getUserProfile(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].getUserProfile(userId);
        }
        return apiRequest(`/users/${userId}/profile`);
    }
    async updateUserProfile(userId, profileData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].updateUserProfile(userId, profileData);
        }
        return apiRequest(`/users/${userId}/profile`, {
            method: 'PUT',
            body: JSON.stringify(profileData)
        });
    }
}
const api = new ApiService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/availability/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AvailabilityPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/switch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
function AvailabilityPage() {
    _s();
    const [availability, setAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasChanges, setHasChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvailabilityPage.useEffect": ()=>{
            fetchAvailability();
        }
    }["AvailabilityPage.useEffect"], []);
    const fetchAvailability = async ()=>{
        setLoading(true);
        try {
            const userId = "2"; // John Doe (Provider) - in real app, get from auth context
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getAvailability(userId);
            setAvailability(result);
        } catch (error) {
            console.error("Error fetching availability:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleSave = async ()=>{
        setSaving(true);
        try {
            const userId = "2"; // In real app, get from auth context
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateAvailability(userId, availability);
            setHasChanges(false);
        // Show success message
        } catch (error) {
            console.error("Error updating availability:", error);
        // Show error message
        } finally{
            setSaving(false);
        }
    };
    const updateDayAvailability = (dayOfWeek, field, value)=>{
        const updatedAvailability = availability.map((day)=>{
            if (day.dayOfWeek === dayOfWeek) {
                return {
                    ...day,
                    [field]: value
                };
            }
            return day;
        });
        setAvailability(updatedAvailability);
        setHasChanges(true);
    };
    const getDayAvailability = (dayOfWeek)=>{
        return availability.find((day)=>day.dayOfWeek === dayOfWeek);
    };
    const formatTime = (timeString)=>{
        return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const getCurrentStatus = ()=>{
        const now = new Date();
        const currentDay = now.getDay();
        const currentTime = now.toTimeString().slice(0, 5);
        const todayAvailability = getDayAvailability(currentDay);
        if (!todayAvailability || !todayAvailability.isAvailable) {
            return {
                available: false,
                message: "Not available today"
            };
        }
        const isInRange = currentTime >= todayAvailability.startTime && currentTime <= todayAvailability.endTime;
        return {
            available: isInRange,
            message: isInRange ? "Available now" : "Available today",
            nextAvailable: todayAvailability.startTime
        };
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/app/availability/page.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/availability/page.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    const currentStatus = getCurrentStatus();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold text-gray-900",
                                            children: "Availability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Set your working hours and availability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: hasChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSave,
                                        disabled: saving,
                                        className: "bg-green-600 hover:bg-green-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            saving ? "Saving..." : "Save Changes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/availability/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/availability/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-full ${currentStatus.available ? 'bg-green-100' : 'bg-gray-100'}`,
                                                    children: currentStatus.available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "h-6 w-6 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/availability/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        className: "h-6 w-6 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/availability/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-lg",
                                                            children: currentStatus.available ? "Available Now" : "Currently Unavailable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: currentStatus.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentStatus.nextAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: [
                                                                "Next available: ",
                                                                formatTime(currentStatus.nextAvailable)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: currentStatus.available ? "default" : "secondary",
                                            children: currentStatus.available ? "Online" : "Offline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/availability/page.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/availability/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/availability/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        "Weekly Schedule"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Set your availability for each day of the week. Clients will only be able to book services during your available hours."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/availability/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: dayNames.map((dayName, index)=>{
                                        const dayAvailability = getDayAvailability(index);
                                        const isAvailable = dayAvailability?.isAvailable || false;
                                        const startTime = dayAvailability?.startTime || "09:00";
                                        const endTime = dayAvailability?.endTime || "17:00";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "font-medium",
                                                                children: dayName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/availability/page.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Switch, {
                                                                    checked: isAvailable,
                                                                    onCheckedChange: (checked)=>{
                                                                        if (checked && !dayAvailability) {
                                                                            // Add new availability for this day
                                                                            const newAvailability = {
                                                                                id: `temp-${index}`,
                                                                                userId: "2",
                                                                                dayOfWeek: index,
                                                                                startTime: "09:00",
                                                                                endTime: "17:00",
                                                                                isAvailable: true
                                                                            };
                                                                            setAvailability([
                                                                                ...availability,
                                                                                newAvailability
                                                                            ]);
                                                                        } else {
                                                                            updateDayAvailability(index, 'isAvailable', checked);
                                                                        }
                                                                        setHasChanges(true);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: isAvailable ? "Available" : "Unavailable"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "h-4 w-4 text-gray-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "time",
                                                                    value: startTime,
                                                                    onChange: (e)=>updateDayAvailability(index, 'startTime', e.target.value),
                                                                    className: "w-32"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500",
                                                                    children: "to"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "time",
                                                                    value: endTime,
                                                                    onChange: (e)=>updateDayAvailability(index, 'endTime', e.target.value),
                                                                    className: "w-32"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                formatTime(startTime),
                                                                " - ",
                                                                formatTime(endTime)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/availability/page.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, dayName, true, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 pt-6 border-t",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium mb-4",
                                            children: "Quick Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        // Set all weekdays to 9 AM - 5 PM
                                                        const weekdays = [
                                                            1,
                                                            2,
                                                            3,
                                                            4,
                                                            5
                                                        ]; // Monday to Friday
                                                        const updatedAvailability = availability.map((day)=>{
                                                            if (weekdays.includes(day.dayOfWeek)) {
                                                                return {
                                                                    ...day,
                                                                    isAvailable: true,
                                                                    startTime: "09:00",
                                                                    endTime: "17:00"
                                                                };
                                                            }
                                                            return day;
                                                        });
                                                        setAvailability(updatedAvailability);
                                                        setHasChanges(true);
                                                    },
                                                    children: "Set Weekdays (9 AM - 5 PM)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        // Set all days to unavailable
                                                        const updatedAvailability = availability.map((day)=>({
                                                                ...day,
                                                                isAvailable: false
                                                            }));
                                                        setAvailability(updatedAvailability);
                                                        setHasChanges(true);
                                                    },
                                                    children: "Clear All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        // Set all days to available
                                                        const updatedAvailability = availability.map((day)=>({
                                                                ...day,
                                                                isAvailable: true,
                                                                startTime: "09:00",
                                                                endTime: "17:00"
                                                            }));
                                                        setAvailability(updatedAvailability);
                                                        setHasChanges(true);
                                                    },
                                                    children: "Set All Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/availability/page.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/availability/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/availability/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/availability/page.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/availability/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/availability/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    "Tips for Setting Availability"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/availability/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/availability/page.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Set realistic hours that you can consistently maintain. It's better to have fewer hours that you can reliably provide."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/availability/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Consider your travel time between appointments when setting your schedule."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/availability/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "You can update your availability at any time, but changes will only affect new bookings."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/availability/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Setting consistent hours helps build trust with clients and improves your booking rate."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/availability/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/availability/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/availability/page.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/availability/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/availability/page.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/availability/page.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/availability/page.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(AvailabilityPage, "p5FNUsfdcrWb1gzMdb/0sW3VLMM=");
_c = AvailabilityPage;
var _c;
__turbopack_context__.k.register(_c, "AvailabilityPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e2048fbf._.js.map