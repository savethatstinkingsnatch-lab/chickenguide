import { useEffect, useState } from "react";
import { isoWeekKey, localDateKey } from "@/lib/dates";

export function useClientDate() {
  const [key, setKey] = useState<string | null>(null);
  const [weekKey, setWeekKey] = useState<string | null>(null);
  const [month, setMonth] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    setKey(localDateKey(now));
    setWeekKey(isoWeekKey(now));
    setMonth(now.getMonth());
  }, []);

  return { key, weekKey, month };
}
