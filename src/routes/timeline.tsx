import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MAX_WEEK, weekGuide } from "@/data/timeline";
import { Button } from "@/components/ui/button";
import { weeksSince } from "@/lib/dates";
import { useCoop } from "@/lib/store";

export const Route = createFileRoute("/timeline")({
  head: () => ({ meta: [{ title: "Timeline · Henhouse" }] }),
  component: TimelinePage,
});

const phases = ["Brooder", "Grow-out", "Point of lay"] as const;

function TimelinePage() {
  const hydrated = useCoop((state) => state.hydrated);
  const birds = useCoop((state) => state.birds);
  const [week, setWeek] = useState(0);
  const [followedFlock, setFollowedFlock] = useState(false);

  useEffect(() => {
    if (!hydrated || followedFlock || birds.length === 0) return;
    const ages = birds.map((bird) => weeksSince(bird.acquired));
    const youngest = Math.min(...ages);
    setWeek(Math.min(MAX_WEEK, youngest));
    setFollowedFlock(true);
  }, [hydrated, followedFlock, birds]);

  const guide = weekGuide(week);
  const image =
    week < 6
      ? { src: "/images/chicks.jpg", alt: "Day-old chicks on pine shavings under warm light" }
      : week < 18
        ? {
            src: "/images/coop-door.jpg",
            alt: "A hen standing in the doorway of a wooden coop",
          }
        : { src: "/images/eggs.jpg", alt: "A wooden bowl of brown, cream, and blue-green eggs" };

  return (
    <article className="flex flex-col gap-6">
      <header>
        <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
          Week by week
        </p>
        <h1 className="mt-2 text-4xl">From the box to the first egg</h1>
        <p className="mt-3 max-w-2xl text-muted">
          A keeper’s timeline for the first six months. Slide to the week you’re in. If you’ve
          logged birds, it starts at the youngest.
        </p>
      </header>

      <div className="flex flex-wrap gap-2" aria-label="Phase">
        {phases.map((phase) => (
          <span
            key={phase}
            className={
              phase === guide.phase
                ? "rounded-full bg-barn px-3 py-1 text-sm text-card"
                : "rounded-full border border-line px-3 py-1 text-sm text-muted"
            }
          >
            {phase}
          </span>
        ))}
      </div>

      <section className="rounded-xl border border-line bg-card p-4 md:p-6">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl">{guide.label}</h2>
          <p className="text-sm tabular-nums text-muted">
            {guide.week} / {MAX_WEEK}
          </p>
        </div>
        <label className="mt-2 block text-sm text-muted">
          Age in weeks
          <input
            type="range"
            min={0}
            max={MAX_WEEK}
            step={1}
            value={week}
            onChange={(event) => setWeek(Number(event.target.value))}
            aria-valuetext={guide.label}
          />
        </label>
        <div className="mt-2 flex gap-2">
          <Button variant="line" disabled={week <= 0} onClick={() => setWeek((value) => value - 1)}>
            Previous week
          </Button>
          <Button
            variant="line"
            disabled={week >= MAX_WEEK}
            onClick={() => setWeek((value) => value + 1)}
          >
            Next week
          </Button>
        </div>
        <p className="mt-4 text-lg">{guide.milestone}</p>
        <img
          src={image.src}
          alt={image.alt}
          className="mt-4 aspect-video w-full rounded-lg object-cover"
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-line bg-card p-4">
          <h3 className="text-xl">Heat</h3>
          <p className="mt-2 text-sm">{guide.heat}</p>
        </section>
        <section className="rounded-xl border border-line bg-card p-4">
          <h3 className="text-xl">Feed</h3>
          <p className="mt-2 text-sm">{guide.feed}</p>
        </section>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-line bg-card p-4">
          <h3 className="text-xl text-sage">Do</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            {guide.dos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-line bg-card p-4">
          <h3 className="text-xl text-rust-deep">Don’t</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            {guide.donts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {hydrated && birds.length > 0 && Math.min(...birds.map((bird) => weeksSince(bird.acquired))) > MAX_WEEK ? (
        <p className="text-sm text-muted">
          Your youngest logged bird is past this starter timeline. She’s on layer care: the eggs
          chapter and the daily list matter more than brooder math.
        </p>
      ) : null}
    </article>
  );
}
