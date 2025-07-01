(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
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
        // Transform to expected structure
        const transformedServices = paginatedServices.map((service)=>{
            // Find provider user
            const providerUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.id === service.providerId);
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
            const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].find((s)=>s.id === contract.serviceId);
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
        return {
            totalUsers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].length,
            totalServices: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServices"].length,
            totalContracts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].length,
            totalRevenue: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].reduce((sum, contract)=>sum + contract.totalAmount, 0),
            activeUsers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].filter((user)=>user.isActive).length,
            pendingVerifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].filter((user)=>!user.isVerified).length,
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
    async createEstimationRequest (requestData) {
        await delay(500);
        const requestNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].length + 1;
        const newRequest = {
            id: requestNumber.toString(),
            ...requestData,
            status: 'Pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockServiceRequests"].push(newRequest);
        return {
            success: true,
            message: 'Estimation request created successfully',
            data: newRequest
        };
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
    async createEstimationRequest(requestData) {
        if (USE_MOCK_API) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApi"].createEstimationRequest(requestData);
        }
        return apiRequest('/estimation-requests', {
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
"[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminDashboardComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
function AdminDashboardComponent() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalUsers: 0,
        totalServices: 0,
        totalContracts: 0,
        totalRevenue: 0,
        activeUsers: 0,
        pendingVerifications: 0,
        recentActivity: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardComponent.useEffect": ()=>{
            fetchDashboardStats();
        }
    }["AdminDashboardComponent.useEffect"], []);
    const fetchDashboardStats = async ()=>{
        setLoading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getDashboardStats();
            // Ensure all required properties exist with fallback values
            setStats({
                totalUsers: result?.totalUsers || 0,
                totalServices: result?.totalServices || 0,
                totalContracts: result?.totalContracts || 0,
                totalRevenue: result?.totalRevenue || 0,
                activeUsers: result?.activeUsers || 0,
                pendingVerifications: result?.pendingVerifications || 0,
                recentActivity: result?.recentActivity || []
            });
        } catch (error) {
            console.error("Error fetching dashboard stats:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load dashboard statistics");
        } finally{
            setLoading(false);
        }
    };
    const StatCard = ({ title, value, description, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: Icon, trend, color = "blue" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 94,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: `h-4 w-4 text-${color}-600`
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 95,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold",
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 98,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this),
                        trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-xs text-green-600 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-3 w-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                trend
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                    lineNumber: 97,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
            lineNumber: 92,
            columnNumber: 5
        }, this);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Admin Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Overview of platform statistics and activities"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Total Users",
                            value: stats.totalUsers,
                            description: "Registered users",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                            trend: "+12% from last month",
                            color: "blue"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Active Users",
                            value: stats.activeUsers,
                            description: "Currently active",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                            trend: "+8% from last month",
                            color: "green"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Total Services",
                            value: stats.totalServices,
                            description: "Active services",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                            trend: "+15% from last month",
                            color: "purple"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Total Revenue",
                            value: `$${(stats.totalRevenue || 0).toLocaleString()}`,
                            description: "Platform revenue",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                            trend: "+20% from last month",
                            color: "yellow"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Quick Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Common administrative tasks"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            "Manage Users"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            "Manage Services"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            "View Contracts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "overview",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "overview",
                                    children: "Overview"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "verifications",
                                    children: "Pending Verifications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "activity",
                                    children: "Recent Activity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "overview",
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Platform Statistics"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Total Contracts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold",
                                                                    children: stats.totalContracts
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Pending Verifications"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "destructive",
                                                                    children: stats.pendingVerifications
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Average Rating"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "h-4 w-4 fill-yellow-400 text-yellow-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold",
                                                                            children: "4.8"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this),
                                                        "System Health"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "API Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "default",
                                                                    className: "bg-green-100 text-green-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "h-3 w-3 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Online"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Database"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "default",
                                                                    className: "bg-green-100 text-green-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "h-3 w-3 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                            lineNumber: 245,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Connected"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Payment Gateway"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "default",
                                                                    className: "bg-green-100 text-green-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "h-3 w-3 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Active"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "verifications",
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Pending Verifications"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: [
                                                    stats.pendingVerifications,
                                                    " items require verification"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-3 border rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: "Mike Wilson"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Professional Driving Service"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "outline",
                                                                    children: "Review"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    children: "Approve"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-3 border rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: "Sarah Johnson"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "House Cleaning Service"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "outline",
                                                                    children: "Review"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    children: "Approve"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "activity",
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this),
                                                "Recent Activity"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: stats.recentActivity.map((activity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 p-3 border rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-blue-500 rounded-full mt-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: activity.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: activity.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardComponent, "6fNVr2iF6424KIoHHb01yEPN2i8=");
_c = AdminDashboardComponent;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/dashboard/AdminDashboardComponent.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_a3b0b6db._.js.map