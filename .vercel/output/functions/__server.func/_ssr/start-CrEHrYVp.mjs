import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-CrEHrYVp.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Read your town rules (hen limit, roosters, setbacks).",
	"Order NPIP chicks; ask about Marek’s vaccine.",
	"Set up the brooder the day before they arrive.",
	"Build predator-proof housing with hardware cloth and a buried apron.",
	"Feed the right ration for their age.",
	"Collect eggs daily; wash hands.",
	"Latch the coop every night."
];
function StartPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
				children: "Volume 26"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl",
				children: "New to chickens?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "The Education Revolution Pocket Guide, Volume 26: Chickens, by Blue and the Awesome Dudes. Free to read. Nothing here is for sale."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 list-decimal space-y-3 pl-5",
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guide",
						className: "font-medium text-rust-deep",
						children: "Open the full guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/glossary",
						className: "font-medium text-rust-deep",
						children: "Glossary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/timeline",
						className: "font-medium text-rust-deep",
						children: "Timeline"
					})
				]
			})
		]
	});
}
//#endregion
export { StartPage as component };
