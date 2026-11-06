import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useCoop } from "./router-Bw6076gQ.mjs";
import { t as Button } from "./button-HFY9zwJu.mjs";
import { l as weeksSince } from "./dates-CQ8B31mG.mjs";
import { t as weekGuide } from "./timeline-CQe6rf89.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-BAbkCjCK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var phases = [
	"Brooder",
	"Grow-out",
	"Point of lay"
];
function TimelinePage() {
	const hydrated = useCoop((state) => state.hydrated);
	const birds = useCoop((state) => state.birds);
	const [week, setWeek] = (0, import_react.useState)(0);
	const [followedFlock, setFollowedFlock] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!hydrated || followedFlock || birds.length === 0) return;
		const ages = birds.map((bird) => weeksSince(bird.acquired));
		const youngest = Math.min(...ages);
		setWeek(Math.min(24, youngest));
		setFollowedFlock(true);
	}, [
		hydrated,
		followedFlock,
		birds
	]);
	const guide = weekGuide(week);
	const image = week < 6 ? {
		src: "/images/chicks.jpg",
		alt: "Day-old chicks on pine shavings under warm light"
	} : week < 18 ? {
		src: "/images/coop-door.jpg",
		alt: "A hen standing in the doorway of a wooden coop"
	} : {
		src: "/images/eggs.jpg",
		alt: "A wooden bowl of brown, cream, and blue-green eggs"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
					children: "Week by week"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl",
					children: "From the box to the first egg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "A keeper’s timeline for the first six months. Slide to the week you’re in. If you’ve logged birds, it starts at the youngest."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				"aria-label": "Phase",
				children: phases.map((phase) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: phase === guide.phase ? "rounded-full bg-barn px-3 py-1 text-sm text-card" : "rounded-full border border-line px-3 py-1 text-sm text-muted",
					children: phase
				}, phase))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-card p-4 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl",
							children: guide.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-muted",
							children: [
								guide.week,
								" / ",
								24
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-2 block text-sm text-muted",
						children: ["Age in weeks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 24,
							step: 1,
							value: week,
							onChange: (event) => setWeek(Number(event.target.value)),
							"aria-valuetext": guide.label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							disabled: week <= 0,
							onClick: () => setWeek((value) => value - 1),
							children: "Previous week"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							disabled: week >= 24,
							onClick: () => setWeek((value) => value + 1),
							children: "Next week"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg",
						children: guide.milestone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.src,
						alt: image.alt,
						className: "mt-4 aspect-video w-full rounded-lg object-cover"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: "Heat"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: guide.heat
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: "Feed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: guide.feed
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-sage",
						children: "Do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm",
						children: guide.dos.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-rust-deep",
						children: "Don’t"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm",
						children: guide.donts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					})]
				})]
			}),
			hydrated && birds.length > 0 && Math.min(...birds.map((bird) => weeksSince(bird.acquired))) > 24 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Your youngest logged bird is past this starter timeline. She’s on layer care: the eggs chapter and the daily list matter more than brooder math."
			}) : null
		]
	});
}
//#endregion
export { TimelinePage as component };
