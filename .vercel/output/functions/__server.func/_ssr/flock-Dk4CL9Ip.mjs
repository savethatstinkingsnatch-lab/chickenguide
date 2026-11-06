import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trash2 } from "../_libs/lucide-react.mjs";
import { i as useCoop, s as breeds } from "./router-Deiz_43c.mjs";
import { t as Button } from "./button-HFY9zwJu.mjs";
import { n as formatMonthDay, o as lastNDates, t as ageLabel } from "./dates-CQ8B31mG.mjs";
import { t as useClientDate } from "./use-client-date-D6ent2VH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flock-Dk4CL9Ip.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var breedOptions = [...breeds.map((breed) => breed.name), "Mixed / other"];
function FlockPage() {
	const { key } = useClientDate();
	const hydrated = useCoop((state) => state.hydrated);
	const birds = useCoop((state) => state.birds);
	const eggs = useCoop((state) => state.eggs);
	const notes = useCoop((state) => state.notes);
	const addBird = useCoop((state) => state.addBird);
	const removeBird = useCoop((state) => state.removeBird);
	const setEggs = useCoop((state) => state.setEggs);
	const addNote = useCoop((state) => state.addNote);
	const removeNote = useCoop((state) => state.removeNote);
	const reset = useCoop((state) => state.reset);
	const [name, setName] = (0, import_react.useState)("");
	const [breed, setBreed] = (0, import_react.useState)(breedOptions[0] ?? "Mixed / other");
	const [sex, setSex] = (0, import_react.useState)("hen");
	const [acquired, setAcquired] = (0, import_react.useState)("");
	const [birdNotes, setBirdNotes] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [confirmId, setConfirmId] = (0, import_react.useState)(null);
	const [journal, setJournal] = (0, import_react.useState)("");
	const [confirmReset, setConfirmReset] = (0, import_react.useState)(false);
	const dates = key ? lastNDates(key, 14) : [];
	(0, import_react.useEffect)(() => {
		if (key) setAcquired((current) => current || key);
	}, [key]);
	function onSubmit(event) {
		event.preventDefault();
		if (!name.trim()) {
			setError("Give the bird a name, even a temporary one.");
			return;
		}
		if (!acquired) {
			setError("Add the day they arrived or hatched.");
			return;
		}
		addBird({
			name: name.trim(),
			breed,
			sex,
			acquired,
			notes: birdNotes.trim()
		});
		setName("");
		setBirdNotes("");
		setError("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
						children: "On this device"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl",
						children: "Your flock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Names, ages, eggs, and a note for the person covering while you’re away. Nothing here is uploaded."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-card p-4 md:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Add a bird"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: name,
								onChange: (event) => setName(event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Breed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "field",
								value: breed,
								onChange: (event) => setBreed(event.target.value),
								children: breedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Sex", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "field",
								value: sex,
								onChange: (event) => setSex(event.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "hen",
										children: "Hen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rooster",
										children: "Rooster"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "unknown",
										children: "Not sure yet"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Arrived or hatched", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								type: "date",
								value: acquired,
								onChange: (event) => setAcquired(event.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium sm:col-span-2",
							children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: birdNotes,
								onChange: (event) => setBirdNotes(event.target.value),
								placeholder: "Band color, picked-on, broody in June…"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-rust-deep sm:col-span-2",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Add to flock"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Birds"
			}), !hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Loading the flock saved on this device."
			}) : birds.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 overflow-hidden rounded-xl border border-line bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/chicks.jpg",
					alt: "Three chicks on pine shavings",
					className: "aspect-video w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-4 text-sm text-muted",
					children: "No birds logged yet. Add the ones you have, or the ones that are on the way, so the timeline and the sitter notes have somewhere to start."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-3",
				children: birds.map((bird) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl border border-line bg-card p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl",
								children: bird.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									bird.breed,
									" · ",
									sexLabel(bird.sex),
									" · ",
									ageLabel(bird.acquired)
								]
							}),
							bird.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: bird.notes
							}) : null
						] }), confirmId === bird.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "primary",
								size: "sm",
								onClick: () => {
									removeBird(bird.id);
									setConfirmId(null);
								},
								children: "Remove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setConfirmId(null),
								children: "Keep"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "line",
							"aria-label": `Remove ${bird.name}`,
							onClick: () => setConfirmId(bird.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
						})]
					})
				}, bird.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-card p-4 md:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Egg log"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Fourteen days. The same numbers as Today."
					}),
					dates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "The dates appear in a moment."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-line",
						children: dates.slice().reverse().map((date) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: formatMonthDay(date)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": `Fewer eggs on ${formatMonthDay(date)}`,
										onClick: () => setEggs(date, (eggs[date] ?? 0) - 1),
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center tabular-nums",
										children: eggs[date] ?? 0
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": `More eggs on ${formatMonthDay(date)}`,
										onClick: () => setEggs(date, (eggs[date] ?? 0) + 1),
										children: "+"
									})
								]
							})]
						}, date))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-card p-4 md:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Sitter notes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3",
						onSubmit: (event) => {
							event.preventDefault();
							if (!key) return;
							addNote(key, journal);
							setJournal("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["What should someone know?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-28",
								value: journal,
								onChange: (event) => setJournal(event.target.value),
								placeholder: "Latch is the carabiner, not the slide. Dot is broody. Water heater plugs in on the left."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							type: "submit",
							disabled: !key || journal.trim().length === 0,
							children: "Save note"
						})]
					}),
					hydrated && notes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-col gap-3",
						children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-paper px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm break-words whitespace-pre-wrap",
									children: note.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									"aria-label": "Delete note",
									onClick: () => removeNote(note.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: formatMonthDay(note.date)
							})]
						}, note.id))
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "min-h-11 cursor-pointer font-medium text-ink",
						children: "Reset this device"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "Clears birds, eggs, notes, checklist ticks, and chapters marked read. This cannot be undone."
					}),
					confirmReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "primary",
							onClick: () => {
								reset();
								setConfirmReset(false);
							},
							children: "Erase the log"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setConfirmReset(false),
							children: "Cancel"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3",
						variant: "line",
						onClick: () => setConfirmReset(true),
						children: "Reset"
					})
				]
			})
		]
	});
}
function sexLabel(sex) {
	if (sex === "hen") return "Hen";
	if (sex === "rooster") return "Rooster";
	return "Sex unknown";
}
//#endregion
export { FlockPage as component };
