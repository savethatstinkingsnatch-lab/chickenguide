import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/glossary")({
  head: () => ({ meta: [{ title: "Glossary · Chickens: Henhouse" }] }),
  component: GlossaryPage,
});

const terms: { term: string; meaning: string }[] = [
  { term: "Pullet", meaning: "Young female before or just starting to lay." },
  { term: "Hen", meaning: "Adult female." },
  { term: "Rooster / cock", meaning: "Adult male." },
  { term: "Cockerel", meaning: "Young male." },
  {
    term: "NPIP",
    meaning: "National Poultry Improvement Plan (disease-tested hatcheries).",
  },
  {
    term: "Hardware cloth",
    meaning: "Welded wire mesh (use ~1/2 inch for predators).",
  },
  { term: "Apron", meaning: "Mesh buried outward from the run to stop diggers." },
  { term: "Bloom", meaning: "Natural coating on an unwashed eggshell." },
  { term: "Layer feed", meaning: "Complete feed with extra calcium for laying hens." },
  { term: "Broody", meaning: "A hen who wants to sit eggs." },
  { term: "Molt", meaning: "Seasonal feather loss and laying pause." },
  { term: "Coccidiosis", meaning: "Gut parasite disease, mostly in damp young birds." },
  { term: "Marek’s disease", meaning: "A viral disease; hatchery vaccine is common." },
  { term: "Biosecurity", meaning: "Steps that keep disease out of your flock." },
];

function GlossaryPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">Terms</p>
      <h1 className="mt-2 text-4xl">Glossary</h1>
      <p className="mt-3 text-muted">
        Short definitions for this volume.{" "}
        <Link to="/start" className="font-medium text-rust-deep">
          Start here
        </Link>{" "}
        if the flock is still an idea.
      </p>
      <dl className="mt-6 divide-y divide-line rounded-xl border border-line bg-card">
        {terms.map((item) => (
          <div key={item.term} className="px-4 py-3">
            <dt className="font-display text-xl">{item.term}</dt>
            <dd className="mt-1 text-sm">{item.meaning}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
