import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useCoop, u as chapters } from "./router-Deiz_43c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-BcuAl0Is.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GuideIndex() {
	const [query, setQuery] = (0, import_react.useState)("");
	const read = useCoop((state) => state.read);
	const hydrated = useCoop((state) => state.hydrated);
	const shown = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		if (!needle) return chapters;
		return chapters.filter((chapter) => `${chapter.title} ${chapter.dek} ${chapter.number}`.toLowerCase().includes(needle));
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
						children: "Eight chapters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl",
						children: "The guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted",
						children: ["Written for the first flock: what to buy, how to house them, and the mistakes that actually cost birds. ", hydrated ? `${read.length} of ${chapters.length} marked read.` : ""]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/timeline",
				className: "block rounded-xl border border-line bg-barn px-4 py-4 text-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-straw uppercase",
						children: "Timeline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl",
						children: "Arrival through week 24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: "Heat, feed, and the don’ts, week by week."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block max-w-md text-sm font-medium",
				children: ["Search the chapters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Feed, coop, broody, frost…"
				})]
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Nothing matches that. Try feed, coop, or eggs."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "divide-y divide-line rounded-xl border border-line bg-card",
				children: shown.map((chapter) => {
					const done = hydrated && read.includes(chapter.slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/guide/$slug",
						params: { slug: chapter.slug },
						className: "flex items-start gap-4 px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tabular-nums text-rust-deep",
							children: chapter.number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-2xl",
									children: chapter.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: chapter.dek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 block text-xs font-medium tracking-wide text-sage uppercase",
									children: [
										chapter.minutes,
										" min",
										done ? " · read" : ""
									]
								})
							]
						})]
					}) }, chapter.slug);
				})
			})
		]
	});
}
//#endregion
export { GuideIndex as component };
