import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { ShieldCheck, Heart, Lock, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-rose-200/40 dark:border-rose-900/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Vibezy is an AI-powered, privacy-first social discovery platform.
              We believe meaningful human connection should never cost you your personal privacy, dorm safety, or mental peace.
            </p>
            <div className="flex items-center gap-3 text-xs text-rose-600 dark:text-rose-400 font-medium">
              <span className="flex items-center gap-1">
                <Lock className="size-3.5" /> Double-Blind Reveal
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5" /> AI Privacy Guardrails
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Heart className="size-3.5 fill-current" /> Zero Photo Swiping
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-500">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#journey" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  7-Step Journey
                </Link>
              </li>
              <li>
                <Link href="/#thoughts" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Public Thought Pool
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Privacy Leak Simulator
                </Link>
              </li>
              <li>
                <Link href="/#meetups" className="hover:text-rose-600 dark:hover:text-rose-300 transition-colors">
                  Safe Campus Venues
                </Link>
              </li>
            </ul>
          </div>

          {/* Hackathon & Safety */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-500">
              Trust & Safety
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Crafted with care by <strong>Team Syntax Slayer</strong> for <em>Affecio Hacks &apos;26</em> (Problem Statement 03: Find Your People).
            </p>
            <div className="rounded-xl border border-rose-200/50 dark:border-rose-900/40 bg-rose-500/5 p-3">
              <div className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-300">
                <Sparkles className="size-3 text-amber-400" />
                <span>Good Vibes Guarantee</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Anonymous until both people consent. Strict server-side verification and PII redaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rose-200/30 dark:border-rose-900/30 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 Vibezy · All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-rose-500 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-rose-500 cursor-pointer">Community Guidelines</span>
            <span>·</span>
            <span className="hover:text-rose-500 cursor-pointer">Campus Ambassador</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
