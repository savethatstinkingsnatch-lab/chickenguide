import { x as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as breedBySlug, r as Route$2, s as breeds } from "./_ssr/router-Bw6076gQ.mjs";
import { n as buttonVariants } from "./_ssr/button-HFY9zwJu.mjs";
import { n as EggMark } from "./_ssr/widgets-Dn7fAHfJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CXBqHoTk.js
var import_jsx_runtime = require_jsx_runtime();
function BreedPage() {
	const { slug } = Route$2.useParams();
	const breed = breedBySlug(slug);
	if (!breed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-4xl",
		children: "That breed isn’t in this list"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/breeds",
		className: `${buttonVariants({ variant: "primary" })} mt-4`,
		children: "All breeds"
	})] });
	const related = breeds.filter((item) => item.slug !== breed.slug && (item.purpose === breed.purpose || item.eggColor === breed.eggColor)).slice(0, 3);
	const facts = [
		["Purpose", breed.purpose],
		["Eggs", breed.eggsPerYear],
		["Shell", breed.eggColorLabel],
		["Size", breed.size],
		["Climate", breed.hardiness],
		["Broody", breed.broody],
		["Noise", breed.noise],
		["First flock", breed.beginner ? "Forgiving" : "Needs a plan"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/breeds",
				className: "text-sm font-medium text-rust-deep",
				children: "All breeds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl",
					children: breed.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EggMark, {
					color: breed.eggColor,
					label: breed.eggColorLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg",
				children: breed.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: facts.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-card px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-medium",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "How to keep them"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5",
					children: breed.keep.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Watch for"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5",
					children: breed.watch.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Nearby choices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/breeds/$slug",
						params: { slug: item.slug },
						className: "flex items-center justify-between rounded-xl border border-line bg-card px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [item.eggsPerYear, " eggs"]
						})]
					}) }, item.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { BreedPage as component };
