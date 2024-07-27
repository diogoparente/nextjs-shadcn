"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { Icon } from "../ui/icon";

export function ModeToggle() {
  const [rotate, setRotated] = useState(false);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onMouseEnter={() => setRotated(true)}
      onMouseLeave={() => setRotated(false)}
      onClick={toggleTheme}
    >
      {mounted ? (
        <div className={`${rotate && "rotate-12"}`}>
          <Icon size={24} icon={theme === "light" ? "coffee" : "beer"} />
          <span className="sr-only">Toggle theme</span>
        </div>
      ) : null}
    </Button>
  );
}
