"use client";

import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";

interface ToggleButtonProps {
  onIcon: ReactNode;
  offIcon: ReactNode;
  defaultOn?: boolean;
  onToggle?: (isOn: boolean) => void;
  label?: string; // for accessibility
}

export function ToggleButton({
  onIcon,
  offIcon,
  defaultOn = false,
  onToggle,
  label = "Toggle",
}: ToggleButtonProps) {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label={label}
    >
      {isOn ? onIcon : offIcon}
      <span className="sr-only">{label}</span>
    </Button>
  );
}