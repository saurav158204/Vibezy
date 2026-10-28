"use client";

import * as React from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <Button variant="ghost" size="sm" className="opacity-0 w-[95px] h-8">
        <Sun className="size-3.5" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to Rose Bloom (Light)" : "Switch to Midnight Romance (Dark)"}
      className="relative flex items-center gap-1.5 px-2.5 rounded-full border border-rose-300/30 dark:border-rose-900/40 bg-white/40 dark:bg-black/30 backdrop-blur-md hover:bg-rose-500/10"
    >
      {isDark ? (
        <>
          <Moon className="size-3.5 text-rose-300" />
          <span className="text-xs font-medium text-rose-200">Midnight</span>
        </>
      ) : (
        <>
          <Sun className="size-3.5 text-rose-600" />
          <span className="text-xs font-medium text-rose-700">Rose</span>
        </>
      )}
      <Sparkles className="size-3 text-amber-400 opacity-80" />
    </Button>
  );
}
