import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  head: () => ({ meta: [{ title: "Start here · Chickens: Henhouse" }] }),
  component: StartPage,
});

const steps = [
  "Read your town rules (hen limit, roosters, setbacks).",
  "Order chicks from an NPIP hatchery — it tests for specified diseases and is not a guarantee they are disease-free — and ask about Marek’s vaccine.",
  "Set up the brooder the day before they arrive.",
  "Build predator-proof housing with hardware cloth and a buried apron.",
  "Feed the right ration for their age.",
  "Collect eggs often, refrigerate them promptly, and wash your hands. Children under 5 should not touch the birds.",
  "Latch the coop every night.",
];

function StartPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
        Volume 26
      </p>
      <h1 className="mt-2 text-4xl">New to chickens?</h1>
      <p className="mt-3 text-muted">
        The Education Revolution Pocket Guide, Volume 26: Chickens, by Blue and the Awesome Dudes.
        Free to read. Nothing here is for sale.
      </p>
      <ol className="mt-6 list-decimal space-y-3 pl-5">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="mt-8 text-sm">
        <Link to="/guide" className="font-medium text-rust-deep">
          Open the full guide
        </Link>
        <span className="text-muted"> · </span>
        <Link to="/glossary" className="font-medium text-rust-deep">
          Glossary
        </Link>
        <span className="text-muted"> · </span>
        <Link to="/timeline" className="font-medium text-rust-deep">
          Timeline
        </Link>
      </p>
    </article>
  );
}
