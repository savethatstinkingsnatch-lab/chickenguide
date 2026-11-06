import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, o as Minus } from "../_libs/lucide-react.mjs";
import { i as useCoop, u as chapters } from "./router-Bw6076gQ.mjs";
import { n as buttonVariants, t as Button } from "./button-HFY9zwJu.mjs";
import { c as sumEggs, i as formatShort, l as weeksSince, o as lastNDates, r as formatPretty } from "./dates-CQ8B31mG.mjs";
import { t as useClientDate } from "./use-client-date-D6ent2VH.mjs";
import { t as weekGuide } from "./timeline-CQe6rf89.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-xyjudjxg.js
var import_jsx_runtime = require_jsx_runtime();
var morningTasks = [
	{
		id: "open",
		label: "Open up and count",
		detail: "Every bird on its feet. A hen still on the roost after the others are down is the one to watch."
	},
	{
		id: "water",
		label: "Fresh water",
		detail: "Rinse slime off the drinker. In a freeze, swap ice for water before you do anything else."
	},
	{
		id: "feed",
		label: "The right feed",
		detail: "Starter, grower, or layer — not a mix of ages on layer feed. Scratch is a treat, not breakfast."
	},
	{
		id: "eggs",
		label: "Collect eggs",
		detail: "Twice a day in hot weather. Leaving eggs teaches broodiness and invites breakage and egg-eating."
	},
	{
		id: "scan",
		label: "Ten-second health scan",
		detail: "Bright eyes, dry nostrils, clean vents, even weight on both feet. Pale comb plus hiding is not “a quiet day.”"
	},
	{
		id: "shell",
		label: "Grit and oyster shell",
		detail: "Layers get oyster shell free-choice. Grit is for birds eating treats or whole grains, not a calcium source."
	}
];
var eveningTasks = [
	{
		id: "count",
		label: "Count them in",
		detail: "Do it before full dark. A missing hen is usually on a low branch, or already in trouble."
	},
	{
		id: "latch",
		label: "Latch the pop door",
		detail: "Raccoons open a simple slide. Use a carabiner, a spring clip, or a lock you can work with cold hands."
	},
	{
		id: "skirt",
		label: "Glance at the hardware cloth",
		detail: "Look for a new hole, a lifted apron, or bedding pulled through the wall. Chicken wire is not a lock."
	},
	{
		id: "bed",
		label: "Pull wet bedding",
		detail: "Moisture, not cold, is what makes a winter coop miserable. Replace the soggy spot, don’t seal the vents."
	}
];
var weeklyTasks = [
	{
		id: "sanitize",
		label: "Scrub the waterer",
		detail: "A film of algae is a health problem. Soap, rinse, dry, refill. Do the feeder if it’s caked."
	},
	{
		id: "clean",
		label: "Spot-clean the coop",
		detail: "Droppings under the roost come out. Deep litter only works if you keep adding carbon and it stays dry."
	},
	{
		id: "perimeter",
		label: "Walk the fence",
		detail: "Dig marks, sagging mesh, a gap at the gate. Predators study the place more carefully than you do."
	},
	{
		id: "dust",
		label: "Refresh the dust bath",
		detail: "Dry soil in a low box or a corner of the run. A handful of wood ash is plenty. Skip pool-grade diatomaceous earth."
	},
	{
		id: "vents",
		label: "Check air, not drafts",
		detail: "Vents above the roosts should smell like a barn, not ammonia. If your eyes sting, you need air and drier bedding."
	}
];
var seasonNotes = [
	{
		title: "January water",
		body: "Ice is the whole job. Swap waterers or use a listed poultry water heater — not a heat lamp in the coop. Wide roosts and dry air prevent more frostbite than any blanket."
	},
	{
		title: "February planning",
		body: "Days are still short, so laying stays low. If you want spring chicks, order from an NPIP hatchery now. Don’t start a brooder until you can keep it going for six weeks."
	},
	{
		title: "March mud",
		body: "Thaw plus rain makes a filthy run and a coccidiosis risk for young birds. Boards, gravel, or a covered corner beat a mud lot. Biosecurity matters as bird shows and swaps start up."
	},
	{
		title: "April predators",
		body: "Hungry parents are teaching kits and pups to hunt. Lock up before dusk, not “when we remember.” Collect eggs often — a forgotten egg is a broody hen."
	},
	{
		title: "May grass",
		body: "Short supervised range is a gift. Long, tough grass and stringy weeds can impact a crop. Shade and a second waterer belong in the plan before the first hot week."
	},
	{
		title: "June heat",
		body: "They don’t sweat. Panting and held-out wings on a hot afternoon can be normal; a bird still panting in the shade at dusk is not. Cool water, frozen bottles, and airflow beat electrolytes as a daily habit."
	},
	{
		title: "July shells",
		body: "Heat and age thin the shells. Keep oyster shell available, collect twice, and don’t store eggs in a hot coop. Wasps drown in waterers — give the birds a second drinker."
	},
	{
		title: "August molt",
		body: "Feathers on the ground and a pause in eggs are often molt, not illness, if the hen is bright and eating. Protein matters more than a lamp. Pin feathers are live tissue — don’t handle her roughly."
	},
	{
		title: "September rodents",
		body: "Mice move toward feed as nights cool. Metal cans with lids, no bag feed on the floor, and a clean-up under the feeder. Laying drops with the day length. That’s normal."
	},
	{
		title: "October drafts",
		body: "Close the north draft, leave the high vents. Check that the pop door still latches. Single large combs appreciate a thin coat of petroleum jelly before a hard freeze."
	},
	{
		title: "November freeze",
		body: "First hard freezes find the leak in your water plan. Deep litter can start now if you will actually turn and top it. A wet, sealed coop is colder than a dry, breezy one."
	},
	{
		title: "December cover",
		body: "Shortest days, fewest eggs. If you travel, the person covering needs to latch the coop, not just toss feed. Leave written notes: who is broody, who gets picked on, where the spare waterer is."
	}
];
function TodayPage() {
	const { key, weekKey, month } = useClientDate();
	const hydrated = useCoop((state) => state.hydrated);
	const checks = useCoop((state) => state.checks);
	const toggleCheck = useCoop((state) => state.toggleCheck);
	const birds = useCoop((state) => state.birds);
	const eggs = useCoop((state) => state.eggs);
	const setEggs = useCoop((state) => state.setEggs);
	const read = useCoop((state) => state.read);
	const todayCount = key ? eggs[key] ?? 0 : 0;
	const weekDates = key ? lastNDates(key, 7) : [];
	const weekTotal = sumEggs(eggs, weekDates);
	const nextChapter = chapters.find((chapter) => !read.includes(chapter.slug)) ?? chapters[0];
	const season = month == null ? null : seasonNotes[month];
	const youngest = youngestBird(birds);
	const stage = youngest == null ? null : weekGuide(Math.min(24, weeksSince(youngest.acquired)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "grid items-end gap-6 md:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
						children: "Field guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl md:text-5xl",
						children: "Henhouse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-lg",
						children: "The Education Revolution Pocket Guide, Volume 26: Chickens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "by Blue and the Awesome Dudes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-lg text-muted",
						children: "Water, feed, eggs, and the week your birds are actually in. The log stays on this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-ink",
						children: key ? formatPretty(key) : "Today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/start",
							className: "text-rust-deep",
							children: "Start here"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/glossary",
							className: "text-rust-deep",
							children: "Glossary"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/coop-door.jpg",
					alt: "A buff hen standing in the doorway of a wooden coop",
					width: 1792,
					height: 1008,
					className: "aspect-video w-full rounded-xl object-cover"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-4",
				"aria-label": "Flock snapshot",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Birds logged",
						value: hydrated ? String(birds.length) : "–"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Eggs today",
						value: hydrated && key ? String(todayCount) : "–"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Eggs, 7 days",
						value: hydrated && key ? String(weekTotal) : "–"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Chapters read",
						value: hydrated ? `${read.length}/${chapters.length}` : "–"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-line bg-card p-4 md:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: "Before dark"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Check what you actually did. It resets tomorrow."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskGroup, {
							title: "Morning",
							tasks: morningTasks,
							done: key ? checks[key] ?? [] : [],
							onToggle: (id) => key && toggleCheck(key, id),
							disabled: !key
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskGroup, {
							title: "Evening",
							tasks: eveningTasks,
							done: key ? checks[key] ?? [] : [],
							onToggle: (id) => key && toggleCheck(key, id),
							disabled: !key
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskGroup, {
							title: "This week",
							hint: "Resets Monday",
							tasks: weeklyTasks,
							done: weekKey ? checks[weekKey] ?? [] : [],
							onToggle: (id) => weekKey && toggleCheck(weekKey, id),
							disabled: !weekKey
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-line bg-card p-4 md:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl",
									children: "Eggs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "line",
											"aria-label": "One fewer egg today",
											disabled: !key,
											onClick: () => key && setEggs(key, todayCount - 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "min-w-16 text-center font-display text-4xl tabular-nums",
											children: hydrated && key ? todayCount : "–"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "line",
											"aria-label": "One more egg today",
											disabled: !key,
											onClick: () => key && setEggs(key, todayCount + 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeekBars, {
									dates: weekDates,
									eggs
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-line bg-paper-deep p-4 md:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
								children: season ? season.title : "In any month"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2",
								children: season ? season.body : "Dry bedding and clean water matter more than a heated coop."
							})]
						}),
						hydrated && youngest && stage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-line bg-card p-4 md:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-sage uppercase",
									children: "Youngest bird"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-2 text-2xl",
									children: [
										youngest.name,
										" · ",
										stage.label
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm",
									children: stage.milestone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/timeline",
									className: `${buttonVariants({ variant: "line" })} mt-4`,
									children: "Open that week"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-line bg-card p-4 md:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl",
									children: "From the box to the first egg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Heat, feed, and what not to do, one week at a time — arrival through week 24."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/timeline",
									className: `${buttonVariants({ variant: "primary" })} mt-4`,
									children: "Open the timeline"
								})
							]
						}),
						nextChapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-line bg-card p-4 md:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-muted uppercase",
									children: read.includes(nextChapter.slug) ? "Read again" : "Next in the guide"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl",
									children: nextChapter.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: nextChapter.dek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/guide/$slug",
									params: { slug: nextChapter.slug },
									className: `${buttonVariants({ variant: "line" })} mt-4`,
									children: [
										nextChapter.number,
										" · ",
										nextChapter.minutes,
										" min"
									]
								})
							]
						}) : null
					]
				})]
			})
		]
	});
}
function youngestBird(birds) {
	if (birds.length === 0) return null;
	return birds.reduce((young, bird) => bird.acquired > young.acquired ? bird : young);
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-card px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-3xl tabular-nums leading-none",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm text-muted",
			children: label
		})]
	});
}
function TaskGroup({ title, hint, tasks, done, onToggle, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "mt-5",
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
			className: "flex items-baseline gap-2 text-sm font-semibold",
			children: [title, hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-normal text-muted",
				children: hint
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 divide-y divide-line",
			children: tasks.map((task) => {
				const checked = done.includes(task.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 cursor-pointer gap-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "mt-1 size-5 accent-rust-deep",
						checked,
						onChange: () => onToggle(task.id)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: checked ? "text-muted line-through" : "font-medium",
						children: task.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-sm text-muted",
						children: task.detail
					})] })]
				}) }, task.id);
			})
		})]
	});
}
function WeekBars({ dates, eggs }) {
	if (dates.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-sm text-muted",
		children: "A week of bars shows up once today’s date is ready."
	});
	const max = Math.max(1, ...dates.map((date) => eggs[date] ?? 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 flex items-end gap-2",
		"aria-hidden": true,
		children: dates.map((date) => {
			const count = eggs[date] ?? 0;
			const height = count === 0 ? 8 : Math.max(12, Math.round(count / max * 96));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-24 w-full items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full rounded-sm bg-rust",
						style: { height },
						title: `${count} eggs`
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: formatShort(date)
				})]
			}, date);
		})
	});
}
//#endregion
export { TodayPage as component };
