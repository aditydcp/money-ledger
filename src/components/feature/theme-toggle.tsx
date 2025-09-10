"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { ToggleButton } from "@/components/common/toggle-button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure client-side render before using theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent hydration mismatch by not rendering until mounted
    return null;
  }

  return (
    <ToggleButton
      onIcon={<Moon className="h-4 w-4" />}
      offIcon={<Sun className="h-4 w-4" />}
      defaultOn={theme === "dark"}
      onToggle={(isOn) => setTheme(isOn ? "dark" : "light")}
      label="Toggle theme"
      className={cn("fixed top-4 right-4 z-50 shadow-md", className)}
    />
  );
}