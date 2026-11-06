import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as matchesFilter, o as breedFilters, s as breeds } from "./router-Deiz_43c.mjs";
import { n as EggMark } from "./widgets-BKkOoTcR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breeds-CKSizYhJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BreedsPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [count, setCount] = (0, import_react.useState)(4);
	const [slug, setSlug] = (0, import_react.useState)(breeds[0]?.slug ?? "");
	const shown = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		return breeds.filter((breed) => {
			if (!matchesFilter(breed, filter)) return false;
			if (!needle) return true;
			return `${breed.name} ${breed.summary} ${breed.temperament}`.toLowerCase().includes(needle);
		});
	}, [filter, query]);
	const picked = breeds.find((breed) => breed.slug === slug) ?? breeds[0];
	const perWeek = picked ? Math.round(count * picked.eggsMid / 52) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
						children: "Twelve birds people actually keep"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl",
						children: "Breeds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Egg numbers are peak-season averages for a healthy hen, not a promise. Winter, molt, age, and a tiny run will cut them."
					})
				]
			}),
			picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-card p-4 md:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Flock math"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Hens", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								type: "number",
								min: 1,
								max: 30,
								value: count,
								onChange: (event) => {
									const next = Number(event.target.value);
									if (Number.isNaN(next)) return;
									setCount(Math.max(1, Math.min(30, Math.round(next))));
								}
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Breed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field",
								value: slug,
								onChange: (event) => setSlug(event.target.value),
								children: breeds.map((breed) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: breed.slug,
									children: breed.name
								}, breed.slug))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4",
						children: [
							"About ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl tabular-nums",
								children: perWeek
							}),
							" eggs a week in a good season — ",
							picked.eggsPerYear,
							" a year, on paper."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Hybrids peak hard and slow after the second year. Heritage hens lay fewer, longer."
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block max-w-md text-sm font-medium",
					children: ["Search", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Orpington, blue eggs, quiet…"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter breeds",
					children: breedFilters.map((item) => {
						const on = item.id === filter;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setFilter(item.id),
							className: on ? "min-h-11 rounded-full bg-barn px-4 text-sm text-card" : "min-h-11 rounded-full border border-line bg-card px-4 text-sm",
							children: item.label
						}, item.id);
					})
				})]
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No breed in this list matches. Clear the filter or try another word."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: shown.map((breed) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/breeds/$slug",
					params: { slug: breed.slug },
					className: "flex h-full flex-col rounded-xl border border-line bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl",
								children: breed.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EggMark, { color: breed.eggColor })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 text-sm text-muted",
							children: breed.temperament
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-3 text-sm",
							children: [
								breed.eggsPerYear,
								" eggs · ",
								breed.eggColorLabel,
								" · ",
								breed.hardiness
							]
						})
					]
				}) }, breed.slug))
			})
		]
	});
}
//#endregion
export { BreedsPage as component };
