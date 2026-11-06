import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/widgets-BKkOoTcR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EggMark({ color, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `egg egg-${color}`,
			"aria-hidden": true
		}), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }) : null]
	});
}
function AppLink({ to, className, children }) {
	switch (to) {
		case "/": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className,
			children
		});
		case "/timeline": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/timeline",
			className,
			children
		});
		case "/guide": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/guide",
			className,
			children
		});
		case "/breeds": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/breeds",
			className,
			children
		});
		case "/health": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/health",
			className,
			children
		});
		case "/flock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/flock",
			className,
			children
		});
		default: return null;
	}
}
function SpaceWidget() {
	const [birds, setBirds] = (0, import_react.useState)(4);
	const [size, setSize] = (0, import_react.useState)("standard");
	const coopEach = size === "heavy" ? 5 : 4;
	const runEach = size === "heavy" ? 12 : 10;
	const roost = 10;
	const nests = Math.max(1, Math.ceil(birds / 4));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-6 rounded-xl border border-line bg-card p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "Floor, nests, roost"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Planning guidelines, not a code minimum. About 4 sq ft of coop and 10 of run is a common target; University of Minnesota Extension cites about 3–5 sq ft indoors. A bantam is not automatically fine in less space, and time outside does not fix a tight run."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: ["Birds", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						type: "number",
						min: 1,
						max: 40,
						value: birds,
						onChange: (event) => setBirds(clampCount(event.target.value))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: ["Size", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field",
						value: size,
						onChange: (event) => setSize(event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bantam",
								children: "Bantam — same floor guideline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "standard",
								children: "Standard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "heavy",
								children: "Heavy — roomier end of the range"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Coop floor",
						value: `${birds * coopEach} sq ft`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Run",
						value: `${birds * runEach} sq ft`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Nest boxes",
						value: String(nests)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Roost",
						value: `${Math.ceil(birds * roost / 12)} ft`
					})
				]
			})
		]
	});
}
function FeedWidget() {
	const [birds, setBirds] = (0, import_react.useState)(6);
	const [stage, setStage] = (0, import_react.useState)("layer");
	const daily = birds * (stage === "chick" ? .07 : stage === "grower" ? .15 : .25);
	const bagDays = daily > 0 ? Math.round(50 / daily) : 0;
	const waterPints = stage === "layer" ? birds * 1.5 : birds * .5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-6 rounded-xl border border-line bg-card p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "Bag and water math"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "A rough daily average. Chicks eat less at the start and more by week six. Heat can double the water."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: ["Birds", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						type: "number",
						min: 1,
						max: 40,
						value: birds,
						onChange: (event) => setBirds(clampCount(event.target.value))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: ["Stage", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field",
						value: stage,
						onChange: (event) => setStage(event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "chick",
								children: "Chicks on starter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "grower",
								children: "Pullets on grower"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "layer",
								children: "Laying hens"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Feed per day",
						value: `${daily.toFixed(1)} lb`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "A 50 lb bag",
						value: `~${bagDays} days`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Water per day",
						value: `~${waterPints.toFixed(0)} pt`
					})
				]
			})
		]
	});
}
var daylight = [
	{
		month: "January",
		hours: 9.5
	},
	{
		month: "February",
		hours: 10.5
	},
	{
		month: "March",
		hours: 12
	},
	{
		month: "April",
		hours: 13.3
	},
	{
		month: "May",
		hours: 14.5
	},
	{
		month: "June",
		hours: 15
	},
	{
		month: "July",
		hours: 14.7
	},
	{
		month: "August",
		hours: 13.7
	},
	{
		month: "September",
		hours: 12.3
	},
	{
		month: "October",
		hours: 11
	},
	{
		month: "November",
		hours: 9.8
	},
	{
		month: "December",
		hours: 9.2
	}
];
function DaylightWidget() {
	const [month, setMonth] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setMonth((/* @__PURE__ */ new Date()).getMonth()), []);
	const index = month ?? 0;
	const hours = (daylight[index] ?? daylight[0])?.hours ?? 14;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-6 rounded-xl border border-line bg-card p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "Day length and laying"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Approximate daylight near 40°N — Chicago, New York, northern California. Farther north is shorter in winter. Laying often slows as days shorten. More than about 12 hours can maintain production; keepers who add light commonly aim for 14–16 hours total."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm font-medium",
				children: ["Month", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "field",
					value: index,
					onChange: (event) => setMonth(Number(event.target.value)),
					children: daylight.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: index,
						children: item.month
					}, item.month))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm",
				children: [
					"About ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums font-medium",
						children: [hours, " hours"]
					}),
					" of light.",
					" ",
					hours < 12 ? "Days this short are when laying often declines. If you add light, many keepers aim for 14–16 hours total, in the morning, so dusk still sends them to the roost." : hours < 14 ? "More than about 12 hours can keep some hens laying. If you add light, a common target is 14–16 hours total, added in the morning." : "This sits in the 14–16 hour range many keepers aim for if they supplement. Molt and age can still pause eggs.",
					" ",
					"Don’t leave a lamp on all night."
				]
			})
		]
	});
}
function Figure({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-paper px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl tabular-nums",
			children: value
		})]
	});
}
function clampCount(value) {
	const next = Number(value);
	if (Number.isNaN(next)) return 1;
	return Math.max(1, Math.min(40, Math.round(next)));
}
function Widget({ name }) {
	if (name === "space") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpaceWidget, {});
	if (name === "feed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedWidget, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DaylightWidget, {});
}
//#endregion
export { EggMark as n, Widget as r, AppLink as t };
