import { useEffect, useState, type ReactNode } from "react";
import type { AppPath } from "@/data/chapters";
import { Link } from "@tanstack/react-router";

export function EggMark({ color, label }: { color: string; label?: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`egg egg-${color}`} aria-hidden />
      {label ? <span>{label}</span> : null}
    </span>
  );
}

export function AppLink({
  to,
  className,
  children,
}: {
  to: AppPath;
  className?: string;
  children: ReactNode;
}) {
  switch (to) {
    case "/":
      return (
        <Link to="/" className={className}>
          {children}
        </Link>
      );
    case "/timeline":
      return (
        <Link to="/timeline" className={className}>
          {children}
        </Link>
      );
    case "/guide":
      return (
        <Link to="/guide" className={className}>
          {children}
        </Link>
      );
    case "/breeds":
      return (
        <Link to="/breeds" className={className}>
          {children}
        </Link>
      );
    case "/health":
      return (
        <Link to="/health" className={className}>
          {children}
        </Link>
      );
    case "/flock":
      return (
        <Link to="/flock" className={className}>
          {children}
        </Link>
      );
    default:
      return null;
  }
}

export function SpaceWidget() {
  const [birds, setBirds] = useState(4);
  const [size, setSize] = useState<"bantam" | "standard" | "heavy">("standard");
  const coopEach = size === "heavy" ? 5 : 4;
  const runEach = size === "heavy" ? 12 : 10;
  const roost = 10;
  const nests = Math.max(1, Math.ceil(birds / 4));

  return (
    <section className="my-6 rounded-xl border border-line bg-card p-4 md:p-5">
      <h3 className="text-xl">Floor, nests, roost</h3>
      <p className="mt-1 text-sm text-muted">
        Planning guidelines, not a code minimum. About 4 sq ft of coop and 10 of run is a common
        target; University of Minnesota Extension cites about 3–5 sq ft indoors. A bantam is not
        automatically fine in less space, and time outside does not fix a tight run.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Birds
          <input
            className="field"
            type="number"
            min={1}
            max={40}
            value={birds}
            onChange={(event) => setBirds(clampCount(event.target.value))}
          />
        </label>
        <label className="text-sm font-medium">
          Size
          <select
            className="field"
            value={size}
            onChange={(event) => setSize(event.target.value as typeof size)}
          >
            <option value="bantam">Bantam — same floor guideline</option>
            <option value="standard">Standard</option>
            <option value="heavy">Heavy — roomier end of the range</option>
          </select>
        </label>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
        <Figure label="Coop floor" value={`${birds * coopEach} sq ft`} />
        <Figure label="Run" value={`${birds * runEach} sq ft`} />
        <Figure label="Nest boxes" value={String(nests)} />
        <Figure label="Roost" value={`${Math.ceil((birds * roost) / 12)} ft`} />
      </dl>
    </section>
  );
}

export function FeedWidget() {
  const [birds, setBirds] = useState(6);
  const [stage, setStage] = useState<"chick" | "grower" | "layer">("layer");
  const pounds = stage === "chick" ? 0.07 : stage === "grower" ? 0.15 : 0.25;
  const daily = birds * pounds;
  const bagDays = daily > 0 ? Math.round(50 / daily) : 0;
  const waterPints = stage === "layer" ? birds * 1.5 : birds * 0.5;

  return (
    <section className="my-6 rounded-xl border border-line bg-card p-4 md:p-5">
      <h3 className="text-xl">Bag and water math</h3>
      <p className="mt-1 text-sm text-muted">
        A rough daily average. Chicks eat less at the start and more by week six. Heat can double
        the water.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Birds
          <input
            className="field"
            type="number"
            min={1}
            max={40}
            value={birds}
            onChange={(event) => setBirds(clampCount(event.target.value))}
          />
        </label>
        <label className="text-sm font-medium">
          Stage
          <select
            className="field"
            value={stage}
            onChange={(event) => setStage(event.target.value as typeof stage)}
          >
            <option value="chick">Chicks on starter</option>
            <option value="grower">Pullets on grower</option>
            <option value="layer">Laying hens</option>
          </select>
        </label>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
        <Figure label="Feed per day" value={`${daily.toFixed(1)} lb`} />
        <Figure label="A 50 lb bag" value={`~${bagDays} days`} />
        <Figure label="Water per day" value={`~${waterPints.toFixed(0)} pt`} />
      </dl>
    </section>
  );
}

const daylight = [
  { month: "January", hours: 9.5 },
  { month: "February", hours: 10.5 },
  { month: "March", hours: 12 },
  { month: "April", hours: 13.3 },
  { month: "May", hours: 14.5 },
  { month: "June", hours: 15 },
  { month: "July", hours: 14.7 },
  { month: "August", hours: 13.7 },
  { month: "September", hours: 12.3 },
  { month: "October", hours: 11 },
  { month: "November", hours: 9.8 },
  { month: "December", hours: 9.2 },
];

export function DaylightWidget() {
  const [month, setMonth] = useState<number | null>(null);
  useEffect(() => setMonth(new Date().getMonth()), []);
  const index = month ?? 0;
  const current = daylight[index] ?? daylight[0];
  const hours = current?.hours ?? 14;

  return (
    <section className="my-6 rounded-xl border border-line bg-card p-4 md:p-5">
      <h3 className="text-xl">Day length and laying</h3>
      <p className="mt-1 text-sm text-muted">
        Approximate daylight near 40°N — Chicago, New York, northern California. Farther north is
        shorter in winter. Laying often slows as days shorten. More than about 12 hours can maintain
        production; keepers who add light commonly aim for 14–16 hours total.
      </p>
      <label className="mt-4 block text-sm font-medium">
        Month
        <select
          className="field"
          value={index}
          onChange={(event) => setMonth(Number(event.target.value))}
        >
          {daylight.map((item, index) => (
            <option key={item.month} value={index}>
              {item.month}
            </option>
          ))}
        </select>
      </label>
      <p className="mt-4 text-sm">
        About <span className="tabular-nums font-medium">{hours} hours</span> of light.{" "}
        {hours < 12
          ? "Days this short are when laying often declines. If you add light, many keepers aim for 14–16 hours total, in the morning, so dusk still sends them to the roost."
          : hours < 14
            ? "More than about 12 hours can keep some hens laying. If you add light, a common target is 14–16 hours total, added in the morning."
            : "This sits in the 14–16 hour range many keepers aim for if they supplement. Molt and age can still pause eggs."}{" "}
        Don’t leave a lamp on all night.
      </p>
    </section>
  );
}

function Figure({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-paper px-3 py-3">
      <dt className="text-muted">{label}</dt>
      <dd className="mt-1 font-display text-2xl tabular-nums">{value}</dd>
    </div>
  );
}

function clampCount(value: string) {
  const next = Number(value);
  if (Number.isNaN(next)) return 1;
  return Math.max(1, Math.min(40, Math.round(next)));
}

export function Widget({ name }: { name: "space" | "feed" | "daylight" }) {
  if (name === "space") return <SpaceWidget />;
  if (name === "feed") return <FeedWidget />;
  return <DaylightWidget />;
}
