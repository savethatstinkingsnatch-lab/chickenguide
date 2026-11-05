import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { breeds } from "@/data/breeds";
import { Button } from "@/components/ui/button";
import { ageLabel, formatMonthDay, lastNDates } from "@/lib/dates";
import { useClientDate } from "@/lib/use-client-date";
import { useCoop, type BirdSex } from "@/lib/store";

export const Route = createFileRoute("/flock")({
  head: () => ({ meta: [{ title: "Flock · Henhouse" }] }),
  component: FlockPage,
});

const breedOptions = [...breeds.map((breed) => breed.name), "Mixed / other"];

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

  const [name, setName] = useState("");
  const [breed, setBreed] = useState(breedOptions[0] ?? "Mixed / other");
  const [sex, setSex] = useState<BirdSex>("hen");
  const [acquired, setAcquired] = useState("");
  const [birdNotes, setBirdNotes] = useState("");
  const [error, setError] = useState("");
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [journal, setJournal] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);

  const dates = key ? lastNDates(key, 14) : [];

  useEffect(() => {
    if (key) setAcquired((current) => current || key);
  }, [key]);

  function onSubmit(event: FormEvent) {
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
      notes: birdNotes.trim(),
    });
    setName("");
    setBirdNotes("");
    setError("");
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
          On this device
        </p>
        <h1 className="mt-2 text-4xl">Your flock</h1>
        <p className="mt-3 text-muted">
          Names, ages, eggs, and a note for the person covering while you’re away. Nothing here is
          uploaded.
        </p>
      </header>

      <section className="rounded-xl border border-line bg-card p-4 md:p-5">
        <h2 className="text-2xl">Add a bird</h2>
        <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={onSubmit}>
          <label className="text-sm font-medium">
            Name
            <input className="field" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label className="text-sm font-medium">
            Breed
            <select className="field" value={breed} onChange={(event) => setBreed(event.target.value)}>
              {breedOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Sex
            <select
              className="field"
              value={sex}
              onChange={(event) => setSex(event.target.value as BirdSex)}
            >
              <option value="hen">Hen</option>
              <option value="rooster">Rooster</option>
              <option value="unknown">Not sure yet</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Arrived or hatched
            <input
              className="field"
              type="date"
              value={acquired}
              onChange={(event) => setAcquired(event.target.value)}
              required
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Note
            <input
              className="field"
              value={birdNotes}
              onChange={(event) => setBirdNotes(event.target.value)}
              placeholder="Band color, picked-on, broody in June…"
            />
          </label>
          {error ? (
            <p className="text-sm text-rust-deep sm:col-span-2" role="alert">
              {error}
            </p>
          ) : null}
          <div className="sm:col-span-2">
            <Button type="submit">Add to flock</Button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-2xl">Birds</h2>
        {!hydrated ? (
          <p className="mt-3 text-sm text-muted">Loading the flock saved on this device.</p>
        ) : birds.length === 0 ? (
          <div className="mt-3 overflow-hidden rounded-xl border border-line bg-card">
            <img
              src="/images/chicks.jpg"
              alt="Three chicks on pine shavings"
              className="aspect-video w-full object-cover"
            />
            <p className="p-4 text-sm text-muted">
              No birds logged yet. Add the ones you have, or the ones that are on the way, so the
              timeline and the sitter notes have somewhere to start.
            </p>
          </div>
        ) : (
          <ul className="mt-3 flex flex-col gap-3">
            {birds.map((bird) => (
              <li key={bird.id} className="rounded-xl border border-line bg-card p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl">{bird.name}</h3>
                    <p className="text-sm text-muted">
                      {bird.breed} · {sexLabel(bird.sex)} · {ageLabel(bird.acquired)}
                    </p>
                    {bird.notes ? <p className="mt-2 text-sm">{bird.notes}</p> : null}
                  </div>
                  {confirmId === bird.id ? (
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          removeBird(bird.id);
                          setConfirmId(null);
                        }}
                      >
                        Remove
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setConfirmId(null)}>
                        Keep
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="icon"
                      variant="line"
                      aria-label={`Remove ${bird.name}`}
                      onClick={() => setConfirmId(bird.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border border-line bg-card p-4 md:p-5">
        <h2 className="text-2xl">Egg log</h2>
        <p className="mt-1 text-sm text-muted">Fourteen days. The same numbers as Today.</p>
        {dates.length === 0 ? (
          <p className="mt-3 text-sm text-muted">The dates appear in a moment.</p>
        ) : (
          <ul className="mt-3 divide-y divide-line">
            {dates
              .slice()
              .reverse()
              .map((date) => (
                <li key={date} className="flex items-center justify-between gap-3 py-2">
                  <span className="text-sm">{formatMonthDay(date)}</span>
                  <span className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Fewer eggs on ${formatMonthDay(date)}`}
                      onClick={() => setEggs(date, (eggs[date] ?? 0) - 1)}
                    >
                      −
                    </Button>
                    <span className="w-8 text-center tabular-nums">{eggs[date] ?? 0}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`More eggs on ${formatMonthDay(date)}`}
                      onClick={() => setEggs(date, (eggs[date] ?? 0) + 1)}
                    >
                      +
                    </Button>
                  </span>
                </li>
              ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border border-line bg-card p-4 md:p-5">
        <h2 className="text-2xl">Sitter notes</h2>
        <form
          className="mt-3"
          onSubmit={(event) => {
            event.preventDefault();
            if (!key) return;
            addNote(key, journal);
            setJournal("");
          }}
        >
          <label className="block text-sm font-medium">
            What should someone know?
            <textarea
              className="field min-h-28"
              value={journal}
              onChange={(event) => setJournal(event.target.value)}
              placeholder="Latch is the carabiner, not the slide. Dot is broody. Water heater plugs in on the left."
            />
          </label>
          <Button className="mt-3" type="submit" disabled={!key || journal.trim().length === 0}>
            Save note
          </Button>
        </form>
        {hydrated && notes.length > 0 ? (
          <ul className="mt-4 flex flex-col gap-3">
            {notes.map((note) => (
              <li key={note.id} className="rounded-lg bg-paper px-3 py-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm break-words whitespace-pre-wrap">{note.text}</p>
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="Delete note"
                    onClick={() => removeNote(note.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
                <p className="mt-1 text-xs text-muted">{formatMonthDay(note.date)}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <details className="text-sm text-muted">
        <summary className="min-h-11 cursor-pointer font-medium text-ink">Reset this device</summary>
        <p className="mt-2">
          Clears birds, eggs, notes, checklist ticks, and chapters marked read. This cannot be
          undone.
        </p>
        {confirmReset ? (
          <div className="mt-3 flex gap-2">
            <Button
              variant="primary"
              onClick={() => {
                reset();
                setConfirmReset(false);
              }}
            >
              Erase the log
            </Button>
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button className="mt-3" variant="line" onClick={() => setConfirmReset(true)}>
            Reset
          </Button>
        )}
      </details>
    </div>
  );
}

function sexLabel(sex: BirdSex) {
  if (sex === "hen") return "Hen";
  if (sex === "rooster") return "Rooster";
  return "Sex unknown";
}
