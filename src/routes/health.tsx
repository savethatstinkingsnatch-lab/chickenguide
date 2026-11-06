import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { assess, symptomGroups, symptoms, type Urgency } from "@/data/health";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/health")({
  head: () => ({ meta: [{ title: "Health · Henhouse" }] }),
  component: HealthPage,
});

const urgencyCopy: Record<Urgency, string> = {
  watch: "Watch",
  soon: "Today",
  emergency: "Emergency",
};

function HealthPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const results = assess(selected);

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
          Not a diagnosis
        </p>
        <h1 className="mt-2 text-4xl">What you’re seeing</h1>
        <p className="mt-3 text-muted">
          Pick the signs in front of you. Matches are possible explanations to discuss with a
          veterinarian, not diagnoses. Several conditions share the same signs, and a checklist
          cannot tell them apart. This will not give you a drug dose.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-5">
          {symptomGroups.map((group) => (
            <section key={group}>
              <h2 className="text-xl">{group}</h2>
              <ul className="mt-2 flex flex-col gap-2">
                {symptoms
                  .filter((symptom) => symptom.group === group)
                  .map((symptom) => {
                    const on = selected.includes(symptom.id);
                    return (
                      <li key={symptom.id}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(symptom.id)}
                          className={
                            on
                              ? "min-h-11 w-full rounded-xl border border-rust-deep bg-paper-deep px-3 py-2 text-left text-sm font-medium"
                              : "min-h-11 w-full rounded-xl border border-line bg-card px-3 py-2 text-left text-sm"
                          }
                        >
                          {symptom.label}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </section>
          ))}
          {selected.length > 0 ? (
            <Button variant="ghost" onClick={() => setSelected([])}>
              Clear signs
            </Button>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start" aria-live="polite">
          <h2 className="text-xl">Possible explanations</h2>
          <p className="mt-1 text-sm text-muted">
            Talk these over with a poultry vet. This is not a diagnosis.
          </p>
          {selected.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              Start with the most obvious sign — blood in the droppings, a bird straining, or
              several birds sick at once.
            </p>
          ) : results.length === 0 ? (
            <p className="mt-3 text-sm">
              Those signs don’t point at one pattern in this list. Separate a bird who is fluffed
              or not eating, write down what you see, and call a vet if she is worse by evening.
            </p>
          ) : (
            <ul className="mt-3 flex flex-col gap-3">
              {results.map((result) => (
                <li key={result.id} className="rounded-xl border border-line bg-card p-4">
                  <p className="flex flex-wrap items-center gap-2">
                    <span
                      className={
                        result.urgency === "emergency"
                          ? "rounded-full bg-rust-deep px-2 py-0.5 text-xs font-semibold text-card"
                          : result.urgency === "soon"
                            ? "rounded-full border border-rust px-2 py-0.5 text-xs font-semibold text-rust-deep"
                            : "rounded-full border border-sage px-2 py-0.5 text-xs font-semibold text-sage"
                      }
                    >
                      {urgencyCopy[result.urgency]}
                    </span>
                    <span className="font-display text-xl">{result.name}</span>
                  </p>
                  <p className="mt-2 text-sm">{result.summary}</p>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                    {result.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
