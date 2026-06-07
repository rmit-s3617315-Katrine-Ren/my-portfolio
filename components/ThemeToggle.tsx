"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useSound from 'use-sound';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [playOn] = useSound('/sounds/switch-on.mp3', {
    volume: 0.35,
  });
  const [playOff] = useSound('/sounds/switch-off.mp3', {
    volume: 0.35,
  });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  

  const trigger = () => {
      if (theme === "dark") {
        playOn();
      } else {
        playOff();
      }
      setTheme(theme === "dark" ? "light" : "dark");
    };
  

  return (
    <button
      onClick={trigger}
      className="rounded-md bg-stone-500 p-2 dark:bg-stone-800 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
