"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageCircle, MapPin, Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "7-Step Journey", href: "/#journey", icon: Sparkles },
  { name: "Thought Pool", href: "/#thoughts", icon: MessageCircle },
  { name: "Privacy Simulator", href: "/#privacy", icon: ShieldCheck },
  { name: "Safe Meetups", href: "/#meetups", icon: MapPin },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Logo size="md" showTagline={false} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-rose-200/40 dark:border-rose-900/40 bg-white/40 dark:bg-black/20 px-3 py-1.5 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-300"
              >
                <Icon className="size-3.5 text-rose-500/70" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
          <Button variant="romantic" size="sm" asChild>
            <Link href="/thought-pool" className="flex items-center gap-1.5">
              <span>Start Vibe</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-b border-rose-200/40 dark:border-rose-900/40 bg-background/95 backdrop-blur-xl px-4 py-4"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-rose-500/10 hover:text-rose-600"
                  >
                    <Icon className="size-4 text-rose-500" />
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-rose-200/30 dark:border-rose-900/30 flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button variant="romantic" className="w-full justify-center" asChild>
                  <Link href="/thought-pool" onClick={() => setMobileMenuOpen(false)}>
                    Start Vibe
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
