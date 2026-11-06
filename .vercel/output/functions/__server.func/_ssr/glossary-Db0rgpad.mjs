import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/glossary-Db0rgpad.js
var import_jsx_runtime = require_jsx_runtime();
var terms = [
	{
		term: "Pullet",
		meaning: "Young female before or just starting to lay."
	},
	{
		term: "Hen",
		meaning: "Adult female."
	},
	{
		term: "Rooster / cock",
		meaning: "Adult male."
	},
	{
		term: "Cockerel",
		meaning: "Young male."
	},
	{
		term: "NPIP",
		meaning: "National Poultry Improvement Plan: a voluntary USDA testing and certification program for specified poultry diseases. It reduces particular risks; it does not guarantee a bird is free of every disease."
	},
	{
		term: "Hardware cloth",
		meaning: "Welded wire mesh (use ~1/2 inch for predators)."
	},
	{
		term: "Apron",
		meaning: "Mesh buried outward from the run to stop diggers."
	},
	{
		term: "Bloom",
		meaning: "Natural coating on a fresh eggshell. Washing can damage it, so clean dirt carefully — and still refrigerate eggs after collection."
	},
	{
		term: "Layer feed",
		meaning: "Complete feed with extra calcium for laying hens."
	},
	{
		term: "Broody",
		meaning: "A hen who wants to sit eggs."
	},
	{
		term: "Molt",
		meaning: "Seasonal feather loss and laying pause."
	},
	{
		term: "Coccidiosis",
		meaning: "Gut parasite disease, mostly in damp young birds."
	},
	{
		term: "Marek’s disease",
		meaning: "A viral disease; hatchery vaccine is common."
	},
	{
		term: "Biosecurity",
		meaning: "Steps that keep disease out of your flock."
	}
];
function GlossaryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
				children: "Terms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl",
				children: "Glossary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"Short definitions for this volume.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/start",
						className: "font-medium text-rust-deep",
						children: "Start here"
					}),
					" ",
					"if the flock is still an idea."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6 divide-y divide-line rounded-xl border border-line bg-card",
				children: terms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-xl",
						children: item.term
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm",
						children: item.meaning
					})]
				}, item.term))
			})
		]
	});
}
//#endregion
export { GlossaryPage as component };
