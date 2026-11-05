import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  breedFilters,
  breeds,
  matchesFilter,
  type BreedFilter,
} from "@/data/breeds";
import { EggMark } from "@/components/widgets";

export const Route = createFileRoute("/breeds/")({
  head: () => ({ meta: [{ title: "Breeds · Henhouse" }] }),
  component: BreedsPage,
});

function BreedsPage() {
  const [filter, setFilter] = useState<BreedFilter>("all");
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(4);
  const [slug, setSlug] = useState(breeds[0]?.slug ?? "");

  const shown = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return breeds.filter((breed) => {
      if (!matchesFilter(breed, filter)) return false;
      if (!needle) return true;
      return `${breed.name} ${breed.summary} ${breed.temperament}`.toLowerCase().includes(needle);
    });
  }, [filter, query]);

  const picked = breeds.find((breed) => breed.slug === slug) ?? breeds[0];
  const perWeek = picked ? Math.round((count * picked.eggsMid) / 52) : 0;

  return (
    <div className="flex flex-col gap-6">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
          Twelve birds people actually keep
        </p>
        <h1 className="mt-2 text-4xl">Breeds</h1>
        <p className="mt-3 text-muted">
          Egg numbers are peak-season averages for a healthy hen, not a promise. Winter, molt, age,
          and a tiny run will cut them.
        </p>
      </header>

      {picked ? (
        <section className="rounded-xl border border-line bg-card p-4 md:p-5">
          <h2 className="text-2xl">Flock math</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-[8rem_1fr]">
            <label className="text-sm font-medium">
              Hens
              <input
                className="field"
                type="number"
                min={1}
                max={30}
                value={count}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  if (Number.isNaN(next)) return;
                  setCount(Math.max(1, Math.min(30, Math.round(next))));
                }}
              />
            </label>
            <label className="text-sm font-medium">
              Breed
              <select className="field" value={slug} onChange={(event) => setSlug(event.target.value)}>
                {breeds.map((breed) => (
                  <option key={breed.slug} value={breed.slug}>
                    {breed.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="mt-4">
            About <span className="font-display text-3xl tabular-nums">{perWeek}</span> eggs a week
            in a good season — {picked.eggsPerYear} a year, on paper.
          </p>
          <p className="mt-1 text-sm text-muted">
            Hybrids peak hard and slow after the second year. Heritage hens lay fewer, longer.
          </p>
        </section>
      ) : null}

      <div className="flex flex-col gap-3">
        <label className="block max-w-md text-sm font-medium">
          Search
          <input
            className="field"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Orpington, blue eggs, quiet…"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter breeds">
          {breedFilters.map((item) => {
            const on = item.id === filter;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(item.id)}
                className={
                  on
                    ? "min-h-11 rounded-full bg-barn px-4 text-sm text-card"
                    : "min-h-11 rounded-full border border-line bg-card px-4 text-sm"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="text-muted">No breed in this list matches. Clear the filter or try another word.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {shown.map((breed) => (
            <li key={breed.slug}>
              <Link
                to="/breeds/$slug"
                params={{ slug: breed.slug }}
                className="flex h-full flex-col rounded-xl border border-line bg-card p-4"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-2xl">{breed.name}</span>
                  <EggMark color={breed.eggColor} />
                </span>
                <span className="mt-2 text-sm text-muted">{breed.temperament}</span>
                <span className="mt-3 text-sm">
                  {breed.eggsPerYear} eggs · {breed.eggColorLabel} · {breed.hardiness}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
