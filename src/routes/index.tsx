import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { chapters } from "@/data/chapters";
import { eveningTasks, morningTasks, seasonNotes, weeklyTasks } from "@/data/care";
import { weekGuide } from "@/data/timeline";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { formatPretty, formatShort, lastNDates, sumEggs, weeksSince } from "@/lib/dates";
import { useClientDate } from "@/lib/use-client-date";
import { useCoop } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Chickens: Henhouse" }] }),
  component: TodayPage,
});

function TodayPage() {
  const { key, weekKey, month } = useClientDate();
  const hydrated = useCoop((state) => state.hydrated);
  const checks = useCoop((state) => state.checks);
  const toggleCheck = useCoop((state) => state.toggleCheck);
  const birds = useCoop((state) => state.birds);
  const eggs = useCoop((state) => state.eggs);
  const setEggs = useCoop((state) => state.setEggs);
  const read = useCoop((state) => state.read);

  const todayCount = key ? (eggs[key] ?? 0) : 0;
  const weekDates = key ? lastNDates(key, 7) : [];
  const weekTotal = sumEggs(eggs, weekDates);
  const nextChapter = chapters.find((chapter) => !read.includes(chapter.slug)) ?? chapters[0];
  const season = month == null ? null : seasonNotes[month];
  const youngest = youngestBird(birds);
  const stage =
    youngest == null ? null : weekGuide(Math.min(24, weeksSince(youngest.acquired)));

  return (
    <div className="flex flex-col gap-8">
      <header className="grid items-end gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
            Field guide
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl">Henhouse</h1>
          <p className="mt-3 max-w-xl text-lg">
            The Education Revolution Pocket Guide, Volume 26: Chickens
          </p>
          <p className="mt-1 text-sm text-muted">by Blue and the Awesome Dudes</p>
          <p className="mt-3 max-w-xl text-lg text-muted">
            Water, feed, eggs, and the week your birds are actually in. The log stays on this
            device.
          </p>
          <p className="mt-3 text-sm text-ink">{key ? formatPretty(key) : "Today"}</p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
            <Link to="/start" className="text-rust-deep">
              Start here
            </Link>
            <Link to="/glossary" className="text-rust-deep">
              Glossary
            </Link>
          </p>
        </div>
        <img
          src="/images/coop-door.jpg"
          alt="A buff hen standing in the doorway of a wooden coop"
          width={1792}
          height={1008}
          className="aspect-video w-full rounded-xl object-cover"
        />
      </header>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Flock snapshot">
        <Stat label="Birds logged" value={hydrated ? String(birds.length) : "–"} />
        <Stat label="Eggs today" value={hydrated && key ? String(todayCount) : "–"} />
        <Stat label="Eggs, 7 days" value={hydrated && key ? String(weekTotal) : "–"} />
        <Stat
          label="Chapters read"
          value={hydrated ? `${read.length}/${chapters.length}` : "–"}
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-xl border border-line bg-card p-4 md:p-5">
          <h2 className="text-2xl">Before dark</h2>
          <p className="mt-1 text-sm text-muted">Check what you actually did. It resets tomorrow.</p>
          <TaskGroup
            title="Morning"
            tasks={morningTasks}
            done={key ? (checks[key] ?? []) : []}
            onToggle={(id) => key && toggleCheck(key, id)}
            disabled={!key}
          />
          <TaskGroup
            title="Evening"
            tasks={eveningTasks}
            done={key ? (checks[key] ?? []) : []}
            onToggle={(id) => key && toggleCheck(key, id)}
            disabled={!key}
          />
          <TaskGroup
            title="This week"
            hint="Resets Monday"
            tasks={weeklyTasks}
            done={weekKey ? (checks[weekKey] ?? []) : []}
            onToggle={(id) => weekKey && toggleCheck(weekKey, id)}
            disabled={!weekKey}
          />
        </section>

        <div className="flex flex-col gap-6">
          <section className="rounded-xl border border-line bg-card p-4 md:p-5">
            <h2 className="text-2xl">Eggs</h2>
            <div className="mt-4 flex items-center gap-3">
              <Button
                size="icon"
                variant="line"
                aria-label="One fewer egg today"
                disabled={!key}
                onClick={() => key && setEggs(key, todayCount - 1)}
              >
                <Minus className="size-4" />
              </Button>
              <p className="min-w-16 text-center font-display text-4xl tabular-nums">
                {hydrated && key ? todayCount : "–"}
              </p>
              <Button
                size="icon"
                variant="line"
                aria-label="One more egg today"
                disabled={!key}
                onClick={() => key && setEggs(key, todayCount + 1)}
              >
                <Plus className="size-4" />
              </Button>
            </div>
            <WeekBars dates={weekDates} eggs={eggs} />
          </section>

          <section className="rounded-xl border border-line bg-paper-deep p-4 md:p-5">
            <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
              {season ? season.title : "In any month"}
            </p>
            <p className="mt-2">
              {season
                ? season.body
                : "Dry bedding and clean water matter more than a heated coop."}
            </p>
          </section>

          {hydrated && youngest && stage ? (
            <section className="rounded-xl border border-line bg-card p-4 md:p-5">
              <p className="text-xs font-semibold tracking-widest text-sage uppercase">
                Youngest bird
              </p>
              <h2 className="mt-2 text-2xl">
                {youngest.name} · {stage.label}
              </h2>
              <p className="mt-2 text-sm">{stage.milestone}</p>
              <Link to="/timeline" className={`${buttonVariants({ variant: "line" })} mt-4`}>
                Open that week
              </Link>
            </section>
          ) : (
            <section className="rounded-xl border border-line bg-card p-4 md:p-5">
              <h2 className="text-2xl">From the box to the first egg</h2>
              <p className="mt-2 text-sm text-muted">
                Heat, feed, and what not to do, one week at a time — arrival through week 24.
              </p>
              <Link to="/timeline" className={`${buttonVariants({ variant: "primary" })} mt-4`}>
                Open the timeline
              </Link>
            </section>
          )}

          {nextChapter ? (
            <section className="rounded-xl border border-line bg-card p-4 md:p-5">
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                {read.includes(nextChapter.slug) ? "Read again" : "Next in the guide"}
              </p>
              <h2 className="mt-2 text-2xl">{nextChapter.title}</h2>
              <p className="mt-2 text-sm text-muted">{nextChapter.dek}</p>
              <Link
                to="/guide/$slug"
                params={{ slug: nextChapter.slug }}
                className={`${buttonVariants({ variant: "line" })} mt-4`}
              >
                {nextChapter.number} · {nextChapter.minutes} min
              </Link>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function youngestBird(birds: { name: string; acquired: string }[]) {
  if (birds.length === 0) return null;
  return birds.reduce((young, bird) => (bird.acquired > young.acquired ? bird : young));
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-card px-4 py-3">
      <div className="font-display text-3xl tabular-nums leading-none">{value}</div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

function TaskGroup({
  title,
  hint,
  tasks,
  done,
  onToggle,
  disabled,
}: {
  title: string;
  hint?: string;
  tasks: { id: string; label: string; detail: string }[];
  done: string[];
  onToggle: (id: string) => void;
  disabled: boolean;
}) {
  return (
    <fieldset className="mt-5" disabled={disabled}>
      <legend className="flex items-baseline gap-2 text-sm font-semibold">
        {title}
        {hint ? <span className="font-normal text-muted">{hint}</span> : null}
      </legend>
      <ul className="mt-2 divide-y divide-line">
        {tasks.map((task) => {
          const checked = done.includes(task.id);
          return (
            <li key={task.id}>
              <label className="flex min-h-11 cursor-pointer gap-3 py-2">
                <input
                  type="checkbox"
                  className="mt-1 size-5 accent-rust-deep"
                  checked={checked}
                  onChange={() => onToggle(task.id)}
                />
                <span>
                  <span className={checked ? "text-muted line-through" : "font-medium"}>
                    {task.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{task.detail}</span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

function WeekBars({ dates, eggs }: { dates: string[]; eggs: Record<string, number> }) {
  if (dates.length === 0) {
    return <p className="mt-4 text-sm text-muted">A week of bars shows up once today’s date is ready.</p>;
  }
  const max = Math.max(1, ...dates.map((date) => eggs[date] ?? 0));
  return (
    <div className="mt-5 flex items-end gap-2" aria-hidden>
      {dates.map((date) => {
        const count = eggs[date] ?? 0;
        const height = count === 0 ? 8 : Math.max(12, Math.round((count / max) * 96));
        return (
          <div key={date} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex h-24 w-full items-end">
              <div
                className="w-full rounded-sm bg-rust"
                style={{ height }}
                title={`${count} eggs`}
              />
            </div>
            <span className="text-xs text-muted">{formatShort(date)}</span>
          </div>
        );
      })}
    </div>
  );
}
