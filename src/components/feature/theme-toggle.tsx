"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { ToggleButton } from "@/components/common/toggle-button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleButton
      onIcon={<Moon className="h-4 w-4" />}
      offIcon={<Sun className="h-4 w-4" />}
      defaultOn={theme === "dark"}
      onToggle={(isOn) => setTheme(isOn ? "dark" : "light")}
      label="Toggle theme"
    />
  );
}