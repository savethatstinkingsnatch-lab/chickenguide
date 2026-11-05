import { useEffect } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type BirdSex = "hen" | "rooster" | "unknown";

export type Bird = {
  id: string;
  name: string;
  breed: string;
  sex: BirdSex;
  acquired: string;
  notes: string;
};

export type Note = {
  id: string;
  date: string;
  text: string;
};

type Persisted = {
  checks: Record<string, string[]>;
  birds: Bird[];
  eggs: Record<string, number>;
  notes: Note[];
  read: string[];
};

type State = Persisted & {
  hydrated: boolean;
  toggleCheck: (key: string, id: string) => void;
  addBird: (bird: Omit<Bird, "id">) => void;
  removeBird: (id: string) => void;
  setEggs: (date: string, count: number) => void;
  addNote: (date: string, text: string) => void;
  removeNote: (id: string) => void;
  toggleRead: (slug: string) => void;
  reset: () => void;
};

const empty: Persisted = {
  checks: {},
  birds: [],
  eggs: {},
  notes: [],
  read: [],
};

const memoryStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useCoop = create<State>()(
  persist(
    (set) => ({
      hydrated: false,
      ...empty,
      toggleCheck: (key, id) =>
        set((s) => {
          const cur = s.checks[key] ?? [];
          const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
          return { checks: { ...s.checks, [key]: next } };
        }),
      addBird: (bird) =>
        set((s) => ({
          birds: [{ ...bird, id: crypto.randomUUID() }, ...s.birds],
        })),
      removeBird: (id) => set((s) => ({ birds: s.birds.filter((b) => b.id !== id) })),
      setEggs: (date, count) =>
        set((s) => ({
          eggs: { ...s.eggs, [date]: Math.max(0, Math.min(99, Math.round(count))) },
        })),
      addNote: (date, text) =>
        set((s) => {
          const trimmed = text.trim();
          if (!trimmed) return s;
          const note: Note = { id: crypto.randomUUID(), date, text: trimmed };
          return { notes: [note, ...s.notes].slice(0, 40) };
        }),
      removeNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
      toggleRead: (slug) =>
        set((s) => ({
          read: s.read.includes(slug) ? s.read.filter((x) => x !== slug) : [...s.read, slug],
        })),
      reset: () => set({ ...empty }),
    }),
    {
      name: "henhouse-v1",
      skipHydration: true,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (s) => ({
        checks: s.checks,
        birds: s.birds,
        eggs: s.eggs,
        notes: s.notes,
        read: s.read,
      }),
    },
  ),
);

let hydrateStarted = false;

export function useHydrateCoop() {
  useEffect(() => {
    if (hydrateStarted) {
      if (useCoop.persist.hasHydrated()) useCoop.setState({ hydrated: true });
      return;
    }
    hydrateStarted = true;
    void Promise.resolve(useCoop.persist.rehydrate()).finally(() => {
      useCoop.setState({ hydrated: true });
    });
  }, []);
}
