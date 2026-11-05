import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-HFY9zwJu.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			primary: "bg-rust-deep text-card hover:bg-barn",
			line: "border border-line bg-card text-ink hover:border-rust-deep",
			ghost: "bg-transparent text-ink hover:bg-paper-deep",
			sage: "bg-sage text-card hover:bg-barn"
		},
		size: {
			md: "min-h-11 px-4 text-sm",
			sm: "min-h-11 px-3 text-sm",
			icon: "size-11 shrink-0"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { buttonVariants as n, Button as t };
