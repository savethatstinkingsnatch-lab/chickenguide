import { x as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useCoop, l as chapterBySlug, n as Route, u as chapters } from "./_ssr/router-Bw6076gQ.mjs";
import { n as buttonVariants, t as Button } from "./_ssr/button-HFY9zwJu.mjs";
import { r as Widget, t as AppLink } from "./_ssr/widgets-Dn7fAHfJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BUI7rJZ8.js
var import_jsx_runtime = require_jsx_runtime();
var art = {
	"the-brooder": {
		src: "/images/chicks.jpg",
		alt: "Day-old chicks on pine shavings under a warm brooder light"
	},
	housing: {
		src: "/images/coop-door.jpg",
		alt: "A hen standing in the doorway of a wooden coop"
	},
	eggs: {
		src: "/images/eggs.jpg",
		alt: "A wooden bowl of brown, cream, and blue-green eggs"
	}
};
function ChapterPage() {
	const { slug } = Route.useParams();
	const chapter = chapterBySlug(slug);
	const read = useCoop((state) => state.read);
	const toggleRead = useCoop((state) => state.toggleRead);
	const hydrated = useCoop((state) => state.hydrated);
	if (!chapter) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-4xl",
		children: "That chapter isn’t in the guide"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/guide",
		className: `${buttonVariants({ variant: "primary" })} mt-4`,
		children: "Back to the guide"
	})] });
	const index = chapters.findIndex((item) => item.slug === chapter.slug);
	const previous = chapters[index - 1];
	const next = chapters[index + 1];
	const photo = art[chapter.slug];
	const marked = hydrated && read.includes(chapter.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
				children: [
					"Chapter ",
					chapter.number,
					" · ",
					chapter.minutes,
					" min"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl",
				children: chapter.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: chapter.dek
			}),
			photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.src,
				alt: photo.alt,
				className: "mt-5 aspect-video w-full rounded-xl object-cover"
			}) : null,
			chapter.sections.map((section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: section.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-col gap-3",
						children: section.blocks.map((block, blockIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, `${section.heading}-${blockIndex}`))
					}),
					sectionIndex === 0 && chapter.widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Widget, { name: chapter.widget }) : null
				]
			}, section.heading)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: marked ? "sage" : "line",
					onClick: () => toggleRead(chapter.slug),
					children: marked ? "Marked as read" : "Mark as read"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				"aria-label": "Chapters",
				children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/guide/$slug",
					params: { slug: previous.slug },
					className: "rounded-xl border border-line bg-card px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-display text-xl",
						children: previous.title
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/guide/$slug",
					params: { slug: next.slug },
					className: "rounded-xl border border-line bg-card px-4 py-3 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-display text-xl",
						children: next.title
					})]
				}) : null]
			})
		]
	});
}
function BlockView({ block }) {
	if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text });
	if (block.type === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "list-disc space-y-2 pl-5",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	});
	if (block.type === "note") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "border-l-4 border-rust bg-paper-deep px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-widest text-rust-deep uppercase",
			children: "Field note"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1",
			children: block.text
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
		to: block.to,
		className: buttonVariants({
			variant: "line",
			size: "md"
		}),
		children: block.label
	});
}
//#endregion
export { ChapterPage as component };
