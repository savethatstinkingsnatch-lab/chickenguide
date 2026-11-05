export function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function addDays(key: string, delta: number) {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1);
  dt.setDate(dt.getDate() + delta);
  return localDateKey(dt);
}

export function formatPretty(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function formatShort(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString("en-US", { weekday: "narrow" });
}

export function formatMonthDay(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function isoWeekKey(d = new Date()) {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - day + 3);
  const isoYear = date.getFullYear();
  const firstThursday = new Date(isoYear, 0, 4);
  const firstDay = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - firstDay + 3);
  const week = 1 + Math.round((date.getTime() - firstThursday.getTime()) / 604800000);
  return `${isoYear}-W${String(week).padStart(2, "0")}`;
}

export function daysSince(fromIso: string, today = new Date()) {
  const [y, m, d] = fromIso.split("-").map(Number);
  if (!y || !m || !d) return 0;
  const start = new Date(y, m - 1, d);
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((now.getTime() - start.getTime()) / 86400000);
}

export function weeksSince(fromIso: string, today = new Date()) {
  return Math.max(0, Math.floor(daysSince(fromIso, today) / 7));
}

export function ageLabel(fromIso: string, today = new Date()) {
  const days = daysSince(fromIso, today);
  if (days < 0) return "not here yet";
  if (days < 14) return days === 1 ? "1 day" : `${days} days`;
  const weeks = Math.floor(days / 7);
  if (weeks < 16) return weeks === 1 ? "1 week" : `${weeks} weeks`;
  const months = Math.floor(days / 30.44);
  if (months < 24) return months === 1 ? "1 month" : `${months} months`;
  const years = Math.floor(days / 365.25);
  const rem = Math.floor((days - years * 365.25) / 30.44);
  if (rem <= 0) return years === 1 ? "1 year" : `${years} years`;
  return `${years} yr ${rem} mo`;
}

export function lastNDates(endKey: string, n: number) {
  const out: string[] = [];
  for (let i = n - 1; i >= 0; i -= 1) out.push(addDays(endKey, -i));
  return out;
}

export function sumEggs(eggs: Record<string, number>, keys: string[]) {
  return keys.reduce((acc, k) => acc + (eggs[k] ?? 0), 0);
}
