import { createFileRoute, Link } from "@tanstack/react-router";
import { chapterBySlug, chapters, type Block } from "@/data/chapters";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { AppLink, Widget } from "@/components/widgets";
import { useCoop } from "@/lib/store";

export const Route = createFileRoute("/guide/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${chapterBySlug(params.slug)?.title ?? "Guide"} · Henhouse` }],
  }),
  component: ChapterPage,
});

const art: Record<string, { src: string; alt: string }> = {
  "the-brooder": {
    src: "/images/chicks.jpg",
    alt: "Day-old chicks on pine shavings under a warm brooder light",
  },
  housing: {
    src: "/images/coop-door.jpg",
    alt: "A hen standing in the doorway of a wooden coop",
  },
  eggs: {
    src: "/images/eggs.jpg",
    alt: "A wooden bowl of brown, cream, and blue-green eggs",
  },
};

function ChapterPage() {
  const { slug } = Route.useParams();
  const chapter = chapterBySlug(slug);
  const read = useCoop((state) => state.read);
  const toggleRead = useCoop((state) => state.toggleRead);
  const hydrated = useCoop((state) => state.hydrated);

  if (!chapter) {
    return (
      <div>
        <h1 className="text-4xl">That chapter isn’t in the guide</h1>
        <Link to="/guide" className={`${buttonVariants({ variant: "primary" })} mt-4`}>
          Back to the guide
        </Link>
      </div>
    );
  }

  const index = chapters.findIndex((item) => item.slug === chapter.slug);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  const photo = art[chapter.slug];
  const marked = hydrated && read.includes(chapter.slug);

  return (
    <article className="max-w-3xl">
      <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">
        Chapter {chapter.number} · {chapter.minutes} min
      </p>
      <h1 className="mt-2 text-4xl">{chapter.title}</h1>
      <p className="mt-3 text-lg text-muted">{chapter.dek}</p>
      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="mt-5 aspect-video w-full rounded-xl object-cover"
        />
      ) : null}

      {chapter.sections.map((section, sectionIndex) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-2xl">{section.heading}</h2>
          <div className="mt-3 flex flex-col gap-3">
            {section.blocks.map((block, blockIndex) => (
              <BlockView key={`${section.heading}-${blockIndex}`} block={block} />
            ))}
          </div>
          {sectionIndex === 0 && chapter.widget ? <Widget name={chapter.widget} /> : null}
        </section>
      ))}

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant={marked ? "sage" : "line"} onClick={() => toggleRead(chapter.slug)}>
          {marked ? "Marked as read" : "Mark as read"}
        </Button>
      </div>

      <nav className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Chapters">
        {previous ? (
          <Link
            to="/guide/$slug"
            params={{ slug: previous.slug }}
            className="rounded-xl border border-line bg-card px-4 py-3"
          >
            <span className="text-xs text-muted">Previous</span>
            <span className="mt-1 block font-display text-xl">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/guide/$slug"
            params={{ slug: next.slug }}
            className="rounded-xl border border-line bg-card px-4 py-3 sm:text-right"
          >
            <span className="text-xs text-muted">Next</span>
            <span className="mt-1 block font-display text-xl">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "note") {
    return (
      <aside className="border-l-4 border-rust bg-paper-deep px-4 py-3">
        <p className="text-xs font-semibold tracking-widest text-rust-deep uppercase">Field note</p>
        <p className="mt-1">{block.text}</p>
      </aside>
    );
  }
  return (
    <AppLink to={block.to} className={buttonVariants({ variant: "line", size: "md" })}>
      {block.label}
    </AppLink>
  );
}
