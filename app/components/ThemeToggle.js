"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("theme") !== "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("light", isLight);
  }, [isLight]);

  function toggleTheme() {
    const nextIsLight = !isLight;
    document.body.classList.toggle("light", nextIsLight);
    localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  }

  return (
    <button
      className="toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {isLight ? "☀" : "☾"}
    </button>
  );
}
