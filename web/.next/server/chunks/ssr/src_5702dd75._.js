module.exports = {

"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/lib/mocks.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
        serviceCount: 16
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
    },
    {
        id: '6',
        title: 'Laundry and Dry Cleaning',
        description: 'Professional laundry and dry cleaning services for clothes, linens, and delicate fabrics. Pickup and delivery available. Pricing is estimated after inspection of items.',
        categoryId: '1',
        categoryName: 'Housekeeping',
        providerId: '4',
        providerName: 'Mike Wilson',
        providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        hourlyRate: 0,
        weeklyRate: 0,
        monthlyRate: 0,
        location: 'Chicago, IL',
        isAvailable: true,
        isVerified: true,
        rating: 4.6,
        reviewCount: 34,
        tags: [
            'laundry',
            'dry-cleaning',
            'pickup-delivery',
            'housekeeping',
            'inspection-based'
        ],
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop'
        ],
        contractTypes: [
            'Estimation'
        ],
        createdAt: '2024-01-10T00:00:00Z'
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
    },
    {
        id: '6',
        serviceId: '6',
        serviceTitle: 'Laundry and Dry Cleaning',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        requesterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        providerId: '4',
        providerName: 'Mike Wilson',
        providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        requestType: 'Estimation',
        startDate: '2024-01-30T09:00:00Z',
        endDate: '2024-01-30T17:00:00Z',
        totalAmount: 85,
        status: 'InProgress',
        description: 'Need laundry and dry cleaning service for various items including suits, dresses, and delicate fabrics. Require pickup and delivery.',
        specialRequirements: 'Please inspect items first and provide cost estimate. Use hypoallergenic detergent and handle delicate items carefully. Some items have stains that need special treatment.',
        location: 'Chicago, IL',
        createdAt: '2024-01-16T11:20:00Z',
        updatedAt: '2024-01-16T14:30:00Z'
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
    },
    {
        id: '7',
        serviceId: '6',
        serviceTitle: 'Laundry and Dry Cleaning',
        providerId: '4',
        providerName: 'Mike Wilson',
        requesterId: '5',
        requesterName: 'Sarah Johnson',
        contractType: 'Estimation',
        startDate: '2024-01-30T09:00:00Z',
        endDate: '2024-01-30T17:00:00Z',
        totalAmount: 85,
        status: 'Active',
        paymentStatus: 'Paid',
        createdAt: '2024-01-16T11:20:00Z',
        updatedAt: '2024-01-16T14:30:00Z'
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
    },
    {
        id: '6',
        serviceId: '6',
        contractId: '7',
        userId: '5',
        userName: 'Sarah Johnson',
        rating: 4,
        comment: 'Great laundry service! Provider inspected items first and gave accurate cost estimate. Very reliable pickup and delivery. Clothes come back clean and fresh.',
        createdAt: '2024-01-31T10:20:00Z'
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
}}),
"[project]/src/lib/mockApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Mock API service for standalone UI development
__turbopack_context__.s({
    "handleApiError": (()=>handleApiError),
    "handleApiSuccess": (()=>handleApiSuccess),
    "mockApi": (()=>mockApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mocks.ts [app-ssr] (ecmascript)");
;
// Simulate API delay
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const mockApi = {
    // Authentication
    async login (email, password) {
        await delay(1000);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.email === email);
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
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].length + 1).toString(),
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
        let filteredUsers = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"];
        if (search) {
            filteredUsers = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].filter((user)=>user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()));
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (user) {
            user.isActive = isActive;
        }
        return {
            message: 'User status updated successfully'
        };
    },
    async verifyUser (userId) {
        await delay(300);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCategories"];
    },
    async createCategory (categoryData) {
        await delay(500);
        const newCategory = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCategories"].length + 1).toString(),
            ...categoryData,
            isActive: true,
            serviceCount: 0
        };
        return newCategory;
    },
    async updateCategory (id, categoryData) {
        await delay(300);
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCategories"].find((c)=>c.id === id);
        if (category) {
            Object.assign(category, categoryData);
        }
        return category;
    },
    async deleteCategory (id) {
        await delay(300);
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCategories"].findIndex((c)=>c.id === id);
        if (index > -1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCategories"].splice(index, 1);
        }
        return {
            message: 'Category deleted successfully'
        };
    },
    // Services
    async getServices (page = 1, limit = 10, filters = {}) {
        await delay(600);
        let filteredServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"];
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
        // Transform to expected structure
        const transformedServices = paginatedServices.map((service)=>{
            // Find provider user
            const providerUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === service.providerId);
            return {
                ...service,
                provider: {
                    id: service.providerId,
                    firstName: providerUser?.firstName || service.providerName.split(' ')[0] || '',
                    lastName: providerUser?.lastName || service.providerName.split(' ')[1] || '',
                    profilePictureUrl: providerUser?.profilePicture || service.providerAvatar || ''
                },
                category: {
                    id: service.categoryId,
                    name: service.categoryName
                }
            };
        });
        return {
            services: transformedServices,
            total: filteredServices.length,
            page,
            limit,
            totalPages: Math.ceil(filteredServices.length / limit)
        };
    },
    async getServiceById (id) {
        await delay(300);
        const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === id);
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    },
    async updateServiceStatus (id, isVerified) {
        await delay(300);
        const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === id);
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
        let filteredContracts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"];
        if (filters.status) {
            filteredContracts = filteredContracts.filter((c)=>c.status === filters.status);
        }
        if (filters.userId) {
            filteredContracts = filteredContracts.filter((c)=>c.providerId === filters.userId || c.requesterId === filters.userId);
        }
        if (filters.contractType) {
            filteredContracts = filteredContracts.filter((c)=>c.contractType === filters.contractType);
        }
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filteredContracts = filteredContracts.filter((c)=>c.serviceTitle.toLowerCase().includes(searchTerm) || c.providerName.toLowerCase().includes(searchTerm) || c.requesterName.toLowerCase().includes(searchTerm));
        }
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedContracts = filteredContracts.slice(start, end);
        // Transform contracts to match the expected interface
        const transformedContracts = paginatedContracts.map((contract)=>{
            // Find the corresponding service for base price
            const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === contract.serviceId);
            return {
                id: contract.id,
                contractNumber: `CON-${contract.id.padStart(4, '0')}`,
                service: {
                    id: contract.serviceId,
                    title: contract.serviceTitle,
                    basePrice: service?.hourlyRate || 0,
                    currency: 'USD'
                },
                provider: {
                    id: contract.providerId,
                    firstName: contract.providerName.split(' ')[0] || '',
                    lastName: contract.providerName.split(' ')[1] || '',
                    profilePictureUrl: ''
                },
                requester: {
                    id: contract.requesterId,
                    firstName: contract.requesterName.split(' ')[0] || '',
                    lastName: contract.requesterName.split(' ')[1] || '',
                    profilePictureUrl: ''
                },
                contractType: contract.contractType,
                status: contract.status,
                totalAmount: contract.totalAmount,
                startDate: contract.startDate,
                endDate: contract.endDate,
                createdAt: contract.createdAt,
                paymentStatus: contract.paymentStatus
            };
        });
        return {
            contracts: transformedContracts,
            total: filteredContracts.length,
            page,
            limit,
            totalPages: Math.ceil(filteredContracts.length / limit)
        };
    },
    async createContract (contractData) {
        await delay(800);
        const newContract = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"].length + 1).toString(),
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
        const contract = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"].find((c)=>c.id === id);
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockRatings"].filter((r)=>r.serviceId === serviceId);
    },
    async createRating (ratingData) {
        await delay(500);
        const newRating = {
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockRatings"].length + 1).toString(),
            ...ratingData,
            createdAt: new Date().toISOString()
        };
        return newRating;
    },
    // Notifications
    async getNotifications (userId) {
        await delay(300);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotifications"].filter((n)=>n.userId === userId);
    },
    async markNotificationAsRead (id) {
        await delay(200);
        const notification = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotifications"].find((n)=>n.id === id);
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
        return {
            totalUsers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].length,
            totalServices: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].length,
            totalContracts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"].length,
            totalRevenue: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"].reduce((sum, contract)=>sum + contract.totalAmount, 0),
            activeUsers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].filter((user)=>user.isActive).length,
            pendingVerifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].filter((user)=>!user.isVerified).length,
            recentActivity: [
                {
                    type: 'user_registration',
                    message: 'New user registered: Sarah Johnson',
                    time: '2 hours ago'
                },
                {
                    type: 'service_created',
                    message: 'New service created: Professional House Cleaning',
                    time: '4 hours ago'
                },
                {
                    type: 'contract_completed',
                    message: 'Contract completed: Private Chef Services',
                    time: '6 hours ago'
                },
                {
                    type: 'payment_received',
                    message: 'Payment received: $200 for Garden Maintenance',
                    time: '8 hours ago'
                },
                {
                    type: 'user_verification',
                    message: 'User verified: Mike Wilson',
                    time: '1 day ago'
                }
            ]
        };
    },
    // Search and Filters
    async getSearchFilters () {
        await delay(200);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockSearchFilters"];
    },
    // Enhanced Dashboard
    async getDashboard (userId) {
        await delay(800);
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        const userStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"].find((s)=>{
            if (user.userType === 'Provider') {
                return user.id === '2' || user.id === '4' || user.id === '6';
            } else {
                return user.id === '3' || user.id === '5';
            }
        }) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"][0];
        // Get user-specific data
        let userContracts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"].filter((c)=>c.providerId === userId || c.requesterId === userId);
        let userServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].filter((s)=>s.providerId === userId);
        let userServiceRequests = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId || sr.requesterId === userId);
        let userAvailability = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].filter((a)=>a.userId === userId);
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
        let filteredRequests = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId || sr.requesterId === userId);
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
        const request = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].find((sr)=>sr.id === id);
        if (!request) {
            throw new Error('Service request not found');
        }
        return request;
    },
    async updateServiceRequestStatus (id, status) {
        await delay(300);
        const request = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].find((sr)=>sr.id === id);
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
            id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].length + 1).toString(),
            ...requestData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].push(newRequest);
        return newRequest;
    },
    // Availability Management
    async getAvailability (userId) {
        await delay(300);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].filter((a)=>a.userId === userId);
    },
    async updateAvailability (userId, availabilityData) {
        await delay(500);
        // Remove existing availability for user
        const existingIndexes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].map((a, index)=>a.userId === userId ? index : -1).filter((index)=>index !== -1);
        existingIndexes.reverse().forEach((index)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].splice(index, 1);
        });
        // Add new availability
        availabilityData.forEach((data)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].push({
                id: (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].length + 1).toString(),
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        // Get user's services, contracts, and ratings
        const userServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].filter((s)=>s.providerId === userId);
        const userContracts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockContracts"].filter((c)=>c.providerId === userId || c.requesterId === userId);
        const userRatings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockRatings"].filter((r)=>{
            const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === r.serviceId);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId && u.userType === 'Provider');
        if (!user) {
            throw new Error('Provider not found');
        }
        const userStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"].find((s)=>{
            return user.id === '2' || user.id === '4' || user.id === '6';
        }) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"][0];
        const pendingRequests = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId && sr.status === 'Pending');
        const upcomingServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId && (sr.status === 'Accepted' || sr.status === 'InProgress'));
        const completedServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.providerId === userId && sr.status === 'Completed');
        const userAvailability = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAvailability"].filter((a)=>a.userId === userId);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === userId && u.userType === 'Requester');
        if (!user) {
            throw new Error('Requester not found');
        }
        const userStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"].find((s)=>{
            return user.id === '3' || user.id === '5';
        }) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"][1];
        const activeServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.requesterId === userId && (sr.status === 'Accepted' || sr.status === 'InProgress'));
        const pastServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.requesterId === userId && sr.status === 'Completed');
        const pendingServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockServiceRequests"].filter((sr)=>sr.requesterId === userId && sr.status === 'Pending');
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
}}),
"[project]/src/lib/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Unified API service that can use real backend or mock data
__turbopack_context__.s({
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockApi.ts [app-ssr] (ecmascript)");
;
// Configuration
const USE_MOCK_API = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true' || !process.env.NEXT_PUBLIC_API_URL;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
// API client configuration
const apiClient = {
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
};
// Get auth token from localStorage
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    "TURBOPACK unreachable";
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].login(email, password);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].register(userData);
        }
        return apiRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }
    async forgotPassword(email) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].forgotPassword(email);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getUsers(page, limit, search);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateUserStatus(userId, isActive);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].verifyUser(userId);
        }
        return apiRequest(`/users/${userId}/verify`, {
            method: 'PUT'
        });
    }
    // Categories
    async getCategories() {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getCategories();
        }
        return apiRequest('/categories');
    }
    async createCategory(categoryData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].createCategory(categoryData);
        }
        return apiRequest('/categories', {
            method: 'POST',
            body: JSON.stringify(categoryData)
        });
    }
    async updateCategory(id, categoryData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateCategory(id, categoryData);
        }
        return apiRequest(`/categories/${id}`, {
            method: 'PUT',
            body: JSON.stringify(categoryData)
        });
    }
    async deleteCategory(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].deleteCategory(id);
        }
        return apiRequest(`/categories/${id}`, {
            method: 'DELETE'
        });
    }
    // Services
    async getServices(page = 1, limit = 10, filters = {}) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getServices(page, limit, filters);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getServiceById(id);
        }
        return apiRequest(`/services/${id}`);
    }
    async updateServiceStatus(id, isVerified) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateServiceStatus(id, isVerified);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getContracts(page, limit, filters);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].createContract(contractData);
        }
        return apiRequest('/contracts', {
            method: 'POST',
            body: JSON.stringify(contractData)
        });
    }
    async updateContractStatus(id, status) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateContractStatus(id, status);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getServiceRatings(serviceId);
        }
        return apiRequest(`/services/${serviceId}/ratings`);
    }
    async createRating(ratingData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].createRating(ratingData);
        }
        return apiRequest('/ratings', {
            method: 'POST',
            body: JSON.stringify(ratingData)
        });
    }
    // Notifications
    async getNotifications(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getNotifications(userId);
        }
        return apiRequest(`/users/${userId}/notifications`);
    }
    async markNotificationAsRead(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].markNotificationAsRead(id);
        }
        return apiRequest(`/notifications/${id}/read`, {
            method: 'PUT'
        });
    }
    // Dashboard
    async getDashboardStats() {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getDashboardStats();
        }
        return apiRequest('/admin/dashboard/stats');
    }
    // Search and Filters
    async getSearchFilters() {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getSearchFilters();
        }
        return apiRequest('/services/filters');
    }
    // Enhanced Dashboard
    async getDashboard(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getDashboard(userId);
        }
        return apiRequest(`/dashboard/${userId}`);
    }
    async getProviderDashboard(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getProviderDashboard(userId);
        }
        return apiRequest(`/dashboard/provider/${userId}`);
    }
    async getRequesterDashboard(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getRequesterDashboard(userId);
        }
        return apiRequest(`/dashboard/requester/${userId}`);
    }
    // Service Requests
    async getServiceRequests(userId, filters = {}) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getServiceRequests(userId, filters);
        }
        const params = new URLSearchParams({
            userId,
            ...filters
        });
        return apiRequest(`/service-requests?${params}`);
    }
    async getServiceRequestById(id) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getServiceRequestById(id);
        }
        return apiRequest(`/service-requests/${id}`);
    }
    async updateServiceRequestStatus(id, status) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateServiceRequestStatus(id, status);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].createServiceRequest(requestData);
        }
        return apiRequest('/service-requests', {
            method: 'POST',
            body: JSON.stringify(requestData)
        });
    }
    // Availability Management
    async getAvailability(userId) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getAvailability(userId);
        }
        return apiRequest(`/availability/${userId}`);
    }
    async updateAvailability(userId, availabilityData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateAvailability(userId, availabilityData);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].getUserProfile(userId);
        }
        return apiRequest(`/users/${userId}/profile`);
    }
    async updateUserProfile(userId, profileData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockApi"].updateUserProfile(userId, profileData);
        }
        return apiRequest(`/users/${userId}/profile`, {
            method: 'PUT',
            body: JSON.stringify(profileData)
        });
    }
}
const api = new ApiService();
}}),
"[project]/src/app/admin/services/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminServicesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/tooltip'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
;
;
;
;
;
function AdminServicesPage() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        try {
            const filters = {};
            if (searchTerm) filters.search = searchTerm;
            if (selectedCategory) filters.categoryId = selectedCategory;
            if (selectedStatus) filters.status = selectedStatus;
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getServices(1, 50, filters);
            setServices(result.services || []);
        } catch (error) {
            console.error("Error fetching services:", error);
        } finally{
            setLoading(false);
        }
    }, [
        searchTerm,
        selectedCategory,
        selectedStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchCategories();
        fetchServices();
    }, [
        fetchServices
    ]);
    const fetchCategories = async ()=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getCategories();
            setCategories(result || []);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    const handleSearch = ()=>{
        fetchServices();
    };
    const clearFilters = ()=>{
        setSearchTerm("");
        setSelectedCategory("");
        setSelectedStatus("");
        fetchServices();
    };
    const updateServiceStatus = async (serviceId, status)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].updateServiceStatus(serviceId, status === 'Active');
            fetchServices(); // Refresh the list
        } catch (error) {
            console.error("Error updating service status:", error);
        }
    };
    const updateVerificationStatus = async (serviceId, verificationStatus)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].updateServiceStatus(serviceId, verificationStatus === 'Verified');
            fetchServices(); // Refresh the list
        } catch (error) {
            console.error("Error updating verification status:", error);
        }
    };
    const getStatusBadge = (isActive)=>{
        return isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-green-100 text-green-800",
            children: "Active"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/page.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "secondary",
            children: "Inactive"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/page.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    };
    const getVerificationBadge = (isVerified)=>{
        return isVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-blue-100 text-blue-800",
            children: "Verified"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/page.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-yellow-100 text-yellow-800",
            children: "Pending"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/page.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    };
    const renderStars = (rating)=>{
        return Array.from({
            length: 5
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                className: `h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`
            }, i, false, {
                fileName: "[project]/src/app/admin/services/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Service Management"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Manage platform services and verifications"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    "Search & Filters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/services/page.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Search services...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                className: "pl-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: selectedCategory,
                                        onValueChange: setSelectedCategory,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "All Categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "all",
                                                        children: "All Categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this),
                                                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: category.id,
                                                            children: category.name
                                                        }, category.id, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: selectedStatus,
                                        onValueChange: setSelectedStatus,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "All Statuses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "all",
                                                        children: "All Statuses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "Active",
                                                        children: "Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "Inactive",
                                                        children: "Inactive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleSearch,
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Search"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                onClick: clearFilters,
                                                children: "Clear"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/services/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/page.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: [
                                        "Services (",
                                        services.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Manage service listings and verifications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-gray-600",
                                            children: "Loading services..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Provider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Rating"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Verification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                            children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: service.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipTrigger, {
                                                                                    asChild: true,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500 line-clamp-2 cursor-help",
                                                                                        children: service.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 264,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                    lineNumber: 263,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipContent, {
                                                                                    className: "max-w-xs",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm",
                                                                                        children: service.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 269,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                    lineNumber: 268,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                                            lineNumber: 262,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                        className: "h-6 w-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                                src: service.provider.profilePictureUrl
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 278,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                                children: [
                                                                                    service.provider.firstName[0],
                                                                                    service.provider.lastName[0]
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 279,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            service.provider.firstName,
                                                                            " ",
                                                                            service.provider.lastName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                children: service.category.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: service.basePrice
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 text-sm text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 299,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    service.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    renderStars(service.averageRating),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: [
                                                                            "(",
                                                                            service.totalReviews,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: getStatusBadge(service.isActive)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: getVerificationBadge(service.isVerified)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                                                asChild: true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "sm",
                                                                                    onClick: ()=>setSelectedService(service),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 326,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                    lineNumber: 321,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 320,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                                                className: "max-w-2xl",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                                                children: "Service Details"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                lineNumber: 331,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                                                children: [
                                                                                                    "View detailed information about ",
                                                                                                    service.title
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                lineNumber: 332,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 330,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "space-y-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                        className: "font-semibold text-lg",
                                                                                                        children: selectedService.title
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 339,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-gray-600",
                                                                                                        children: selectedService.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 340,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                lineNumber: 338,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "grid grid-cols-2 gap-4 text-sm",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "font-medium",
                                                                                                                children: "Provider"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 344,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-gray-600",
                                                                                                                children: [
                                                                                                                    selectedService.provider.firstName,
                                                                                                                    " ",
                                                                                                                    selectedService.provider.lastName
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 345,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 343,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "font-medium",
                                                                                                                children: "Category"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 350,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-gray-600",
                                                                                                                children: selectedService.category.name
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 351,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 349,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "font-medium",
                                                                                                                children: "Price"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 354,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-gray-600",
                                                                                                                children: [
                                                                                                                    "$",
                                                                                                                    selectedService.basePrice,
                                                                                                                    " ",
                                                                                                                    selectedService.currency
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 355,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 353,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "font-medium",
                                                                                                                children: "Location"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 360,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-gray-600",
                                                                                                                children: selectedService.location
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 361,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 359,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "font-medium",
                                                                                                                children: "Rating"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 364,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "flex items-center gap-1",
                                                                                                                children: [
                                                                                                                    renderStars(selectedService.averageRating),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                        className: "text-gray-600",
                                                                                                                        children: [
                                                                                                                            "(",
                                                                                                                            selectedService.totalReviews,
                                                                                                                            " reviews)"
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                        lineNumber: 367,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 365,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 363,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "font-medium",
                                                                                                                children: "Created"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 373,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "text-gray-600",
                                                                                                                children: new Date(selectedService.createdAt).toLocaleDateString()
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                                lineNumber: 374,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                        lineNumber: 372,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                                lineNumber: 342,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 337,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 329,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        onValueChange: (value)=>updateServiceStatus(service.id, value),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "w-24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "Status"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 385,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "true",
                                                                                        children: "Activate"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 389,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "false",
                                                                                        children: "Deactivate"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 390,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 388,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 384,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                        onValueChange: (value)=>updateVerificationStatus(service.id, value),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "w-24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "Verify"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                    lineNumber: 396,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "true",
                                                                                        children: "Verify"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 399,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "false",
                                                                                        children: "Unverify"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                        lineNumber: 400,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                                lineNumber: 398,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/services/page.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/services/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, service.id, true, {
                                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                !loading && services.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "No services found matching your criteria."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: clearFilters,
                                            className: "mt-4",
                                            children: "Clear Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/page.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/services/page.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/services/page.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_5702dd75._.js.map