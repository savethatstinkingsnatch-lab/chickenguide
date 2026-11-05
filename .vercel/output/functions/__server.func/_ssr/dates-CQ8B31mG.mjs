//#region node_modules/.nitro/vite/services/ssr/assets/dates-CQ8B31mG.js
function localDateKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function addDays(key, delta) {
	const [y, m, d] = key.split("-").map(Number);
	const dt = new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1);
	dt.setDate(dt.getDate() + delta);
	return localDateKey(dt);
}
function formatPretty(key) {
	const [y, m, d] = key.split("-").map(Number);
	return new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1).toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
}
function formatShort(key) {
	const [y, m, d] = key.split("-").map(Number);
	return new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1).toLocaleDateString("en-US", { weekday: "narrow" });
}
function formatMonthDay(key) {
	const [y, m, d] = key.split("-").map(Number);
	return new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
function isoWeekKey(d = /* @__PURE__ */ new Date()) {
	const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	const day = (date.getDay() + 6) % 7;
	date.setDate(date.getDate() - day + 3);
	const isoYear = date.getFullYear();
	const firstThursday = new Date(isoYear, 0, 4);
	const firstDay = (firstThursday.getDay() + 6) % 7;
	firstThursday.setDate(firstThursday.getDate() - firstDay + 3);
	const week = 1 + Math.round((date.getTime() - firstThursday.getTime()) / 6048e5);
	return `${isoYear}-W${String(week).padStart(2, "0")}`;
}
function daysSince(fromIso, today = /* @__PURE__ */ new Date()) {
	const [y, m, d] = fromIso.split("-").map(Number);
	if (!y || !m || !d) return 0;
	const start = new Date(y, m - 1, d);
	const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	return Math.round((now.getTime() - start.getTime()) / 864e5);
}
function weeksSince(fromIso, today = /* @__PURE__ */ new Date()) {
	return Math.max(0, Math.floor(daysSince(fromIso, today) / 7));
}
function ageLabel(fromIso, today = /* @__PURE__ */ new Date()) {
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
function lastNDates(endKey, n) {
	const out = [];
	for (let i = n - 1; i >= 0; i -= 1) out.push(addDays(endKey, -i));
	return out;
}
function sumEggs(eggs, keys) {
	return keys.reduce((acc, k) => acc + (eggs[k] ?? 0), 0);
}
//#endregion
export { isoWeekKey as a, sumEggs as c, formatShort as i, weeksSince as l, formatMonthDay as n, lastNDates as o, formatPretty as r, localDateKey as s, ageLabel as t };
