import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { chapters } from "@/data/chapters";
import { useCoop } from "@/lib/store";

export const Route = createFileRoute("/guide/")({
  head: () => ({ meta: [{ title: "Guide · Henhouse" }] }),
  component: GuideIndex,
});

function GuideIndex() {
  const [query, setQuery] = useState("");
  const read = useCoop((state) => state.read);
  const hydrated = useCoop((state) => state.hydrated);
  const shown = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return chapters;
    return chapters.filter((chapter) =>
      `${chapter.title} ${chapter.dek} ${chapter.number}`.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <div className="flex flex-col gap-6">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
          Eight chapters
        </p>
        <h1 className="mt-2 text-4xl">The guide</h1>
        <p className="mt-3 text-muted">
          Written for the first flock: what to buy, how to house them, and the mistakes that
          actually cost birds. {hydrated ? `${read.length} of ${chapters.length} marked read.` : ""}
        </p>
      </header>

      <Link
        to="/timeline"
        className="block rounded-xl border border-line bg-barn px-4 py-4 text-card"
      >
        <p className="text-xs font-semibold tracking-widest text-straw uppercase">Timeline</p>
        <p className="mt-1 font-display text-2xl">Arrival through week 24</p>
        <p className="mt-1 text-sm">Heat, feed, and the don’ts, week by week.</p>
      </Link>

      <label className="block max-w-md text-sm font-medium">
        Search the chapters
        <input
          className="field"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Feed, coop, broody, frost…"
        />
      </label>

      {shown.length === 0 ? (
        <p className="text-muted">Nothing matches that. Try feed, coop, or eggs.</p>
      ) : (
        <ol className="divide-y divide-line rounded-xl border border-line bg-card">
          {shown.map((chapter) => {
            const done = hydrated && read.includes(chapter.slug);
            return (
              <li key={chapter.slug}>
                <Link
                  to="/guide/$slug"
                  params={{ slug: chapter.slug }}
                  className="flex items-start gap-4 px-4 py-4"
                >
                  <span className="font-display text-xl tabular-nums text-rust-deep">
                    {chapter.number}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-2xl">{chapter.title}</span>
                    <span className="mt-1 block text-sm text-muted">{chapter.dek}</span>
                    <span className="mt-2 block text-xs font-medium tracking-wide text-sage uppercase">
                      {chapter.minutes} min{done ? " · read" : ""}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
