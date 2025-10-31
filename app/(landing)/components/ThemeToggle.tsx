"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "anomeye-theme";

const isValidTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const derived: Theme =
      isValidTheme(stored) ? stored : media.matches ? "dark" : "light";

    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync initial theme with stored preference after mount
    setTheme(derived);
    document.body.dataset.theme = derived;
    setMounted(true);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!isValidTheme(saved)) {
        const next: Theme = event.matches ? "dark" : "light";
        setTheme(next);
        document.body.dataset.theme = next;
      }
    };

    media.addEventListener("change", handleMediaChange);
    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      document.body.dataset.theme = next;
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color scheme"
      aria-pressed={theme === "dark"}
      className="glass-chip inline-flex min-w-[120px] items-center justify-center gap-2 rounded-full px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-primary)] transition duration-200 hover:border-[var(--brand-primary)] hover:text-[var(--text-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
      disabled={!mounted}
    >
      <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
