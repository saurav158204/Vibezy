"use client";

import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Valentine's Ambient Rose Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-Right Soft Rose Glow */}
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-gradient-to-br from-rose-500/15 to-pink-500/10 blur-[100px] dark:from-rose-600/20 dark:to-purple-900/15" />
        {/* Mid-Left Lavender/Blush Orb */}
        <div className="absolute top-1/3 -left-40 size-96 rounded-full bg-gradient-to-tr from-pink-400/10 to-rose-400/10 blur-[110px] dark:from-purple-950/30 dark:to-rose-900/20" />
        {/* Bottom Ambient Glow */}
        <div className="absolute -bottom-40 left-1/3 size-[30rem] rounded-full bg-gradient-to-t from-rose-500/10 to-transparent blur-[120px] dark:from-rose-950/25" />
      </div>

      {/* Main App Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
