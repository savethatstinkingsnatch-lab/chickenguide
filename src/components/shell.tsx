import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Bird, BookOpen, CalendarRange, Compass, Feather, Library, Stethoscope, Sun } from "lucide-react";
import { useHydrateCoop } from "@/lib/store";

type Destination =
  | "/"
  | "/start"
  | "/timeline"
  | "/guide"
  | "/breeds"
  | "/health"
  | "/flock"
  | "/glossary";

type Item = {
  to: Destination;
  label: string;
  short: string;
  icon: typeof Sun;
  exact: boolean;
  mobile: boolean;
};

const items: Item[] = [
  { to: "/", label: "Today", short: "Today", icon: Sun, exact: true, mobile: true },
  { to: "/start", label: "Start here", short: "Start", icon: Compass, exact: true, mobile: true },
  { to: "/timeline", label: "Timeline", short: "Weeks", icon: CalendarRange, exact: true, mobile: false },
  { to: "/guide", label: "Guide", short: "Guide", icon: BookOpen, exact: false, mobile: true },
  { to: "/breeds", label: "Breeds", short: "Breeds", icon: Feather, exact: false, mobile: true },
  { to: "/health", label: "Health", short: "Health", icon: Stethoscope, exact: true, mobile: true },
  { to: "/flock", label: "Flock", short: "Flock", icon: Bird, exact: true, mobile: true },
  { to: "/glossary", label: "Glossary", short: "Terms", icon: Library, exact: true, mobile: false },
];

function ItemLink({ item, variant }: { item: Item; variant: "side" | "tab" }) {
  const className = variant === "side" ? "nav-link" : "tab-link";
  const Icon = item.icon;
  const label = variant === "side" ? item.label : item.short;
  const inner = (
    <>
      <Icon className="size-5" aria-hidden />
      <span>{label}</span>
    </>
  );
  const opts = { exact: item.exact };
  switch (item.to) {
    case "/":
      return (
        <Link to="/" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/start":
      return (
        <Link to="/start" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/timeline":
      return (
        <Link to="/timeline" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/guide":
      return (
        <Link to="/guide" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/breeds":
      return (
        <Link to="/breeds" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/health":
      return (
        <Link to="/health" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/flock":
      return (
        <Link to="/flock" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    case "/glossary":
      return (
        <Link to="/glossary" activeOptions={opts} className={className}>
          {inner}
        </Link>
      );
    default:
      return null;
  }
}

export function Shell({ children }: { children: ReactNode }) {
  useHydrateCoop();

  return (
    <div className="min-h-screen md:grid md:grid-cols-[15.5rem_1fr]">
      <a href="#content" className="skip">
        Skip to content
      </a>
      <aside className="sticky top-0 hidden h-screen flex-col border-r border-line bg-card px-4 py-6 md:flex">
        <Link to="/" className="mb-8 flex items-center gap-3 px-2">
          <span className="flex size-11 items-center justify-center rounded-lg bg-barn text-straw">
            <Feather className="size-5" aria-hidden />
          </span>
          <span>
            <span className="block font-display text-2xl leading-none">Henhouse</span>
            <span className="text-sm text-muted">Field guide</span>
          </span>
        </Link>
        <nav className="flex flex-col gap-1" aria-label="Sections">
          {items.map((item) => (
            <ItemLink key={item.to} item={item} variant="side" />
          ))}
        </nav>
        <p className="mt-auto px-2 pt-6 text-sm text-muted">
          For backyard keepers. Not a veterinary diagnosis.
        </p>
      </aside>
      <div className="app-main mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-10">
        <div id="content">{children}</div>
        <footer className="mt-12 border-t border-line pt-4 text-sm text-muted">
          Husbandry for backyard flocks — not a diagnosis. Your ordinance, a poultry vet, and the
          state animal-health office outrank this guide. Blue and the Awesome Dudes are not
          responsible for illness, injury, citations, or flock loss. Part of The Education
          Revolution pocket guide series. Privacy: This guide does not collect your name, email, or
          any personal information. Your flock notes are saved only on your own device.
        </footer>
      </div>
      <nav className="tab-bar" aria-label="Sections">
        {items
          .filter((item) => item.mobile)
          .map((item) => (
            <ItemLink key={item.to} item={item} variant="tab" />
          ))}
      </nav>
    </div>
  );
}
