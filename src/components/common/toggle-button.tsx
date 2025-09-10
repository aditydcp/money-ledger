"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface ToggleButtonProps {
  onIcon: ReactNode;
  offIcon: ReactNode;
  defaultOn?: boolean;
  onToggle?: (isOn: boolean) => void;
  label?: string;
  className?: string;
}

export function ToggleButton({
  onIcon,
  offIcon,
  defaultOn = false,
  onToggle,
  label = "Toggle",
  className,
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
      className={cn(className)}
    >
      {isOn ? onIcon : offIcon}
      <span className="sr-only">{label}</span>
    </Button>
  );
}