import { i as __toESM } from "../_runtime.mjs";
import { q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isoWeekKey, s as localDateKey } from "./dates-CQ8B31mG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-client-date-D6ent2VH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useClientDate() {
	const [key, setKey] = (0, import_react.useState)(null);
	const [weekKey, setWeekKey] = (0, import_react.useState)(null);
	const [month, setMonth] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const now = /* @__PURE__ */ new Date();
		setKey(localDateKey(now));
		setWeekKey(isoWeekKey(now));
		setMonth(now.getMonth());
	}, []);
	return {
		key,
		weekKey,
		month
	};
}
//#endregion
export { useClientDate as t };
