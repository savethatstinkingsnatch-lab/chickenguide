import { createFileRoute, Link } from "@tanstack/react-router";
import { breedBySlug, breeds } from "@/data/breeds";
import { buttonVariants } from "@/components/ui/button";
import { EggMark } from "@/components/widgets";

export const Route = createFileRoute("/breeds/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${breedBySlug(params.slug)?.name ?? "Breed"} · Henhouse` }],
  }),
  component: BreedPage,
});

function BreedPage() {
  const { slug } = Route.useParams();
  const breed = breedBySlug(slug);

  if (!breed) {
    return (
      <div>
        <h1 className="text-4xl">That breed isn’t in this list</h1>
        <Link to="/breeds" className={`${buttonVariants({ variant: "primary" })} mt-4`}>
          All breeds
        </Link>
      </div>
    );
  }

  const related = breeds
    .filter(
      (item) =>
        item.slug !== breed.slug &&
        (item.purpose === breed.purpose || item.eggColor === breed.eggColor),
    )
    .slice(0, 3);

  const facts = [
    ["Purpose", breed.purpose],
    ["Eggs", breed.eggsPerYear],
    ["Shell", breed.eggColorLabel],
    ["Size", breed.size],
    ["Climate", breed.hardiness],
    ["Broody", breed.broody],
    ["Noise", breed.noise],
    ["First flock", breed.beginner ? "Forgiving" : "Needs a plan"],
  ];

  return (
    <article className="max-w-3xl">
      <Link to="/breeds" className="text-sm font-medium text-rust-deep">
        All breeds
      </Link>
      <div className="mt-3 flex items-end justify-between gap-3">
        <h1 className="text-4xl">{breed.name}</h1>
        <EggMark color={breed.eggColor} label={breed.eggColorLabel} />
      </div>
      <p className="mt-4 text-lg">{breed.summary}</p>
      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {facts.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-card px-3 py-3">
            <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
            <dd className="mt-1 font-medium">{value}</dd>
          </div>
        ))}
      </dl>
      <section className="mt-8">
        <h2 className="text-2xl">How to keep them</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {breed.keep.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl">Watch for</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {breed.watch.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {related.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-2xl">Nearby choices</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/breeds/$slug"
                  params={{ slug: item.slug }}
                  className="flex items-center justify-between rounded-xl border border-line bg-card px-4 py-3"
                >
                  <span className="font-display text-xl">{item.name}</span>
                  <span className="text-sm text-muted">{item.eggsPerYear} eggs</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
