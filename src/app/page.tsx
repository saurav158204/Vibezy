"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Lock,
  EyeOff,
  MapPin,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Compass,
  Coffee,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  // --- State for Interactive Leak Simulator ---
  const [inputText, setInputText] = React.useState(
    "Hey! Anyone want to study calculus? I'm in South Hall Room 304, text my cell 555-0192 or DM me on IG @sarah_c22"
  );
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanResult, setScanResult] = React.useState<{
    leaks: string[];
    safeRewrite: string;
  }>({
    leaks: ["Dorm Location: South Hall Room 304", "Phone Number: 555-0192", "Social Handle: @sarah_c22"],
    safeRewrite: "Hey! Looking for a study partner to tackle calculus together around the campus library. Send me a message here!",
  });

  const handleSimulateScan = (text: string) => {
    setIsScanning(true);
    setTimeout(() => {
      const leaks: string[] = [];
      if (/room|hall|dorm|tower|block/i.test(text)) leaks.push("Dorm / Room details detected");
      if (/\b\d{3}[-.\s]??\d{3}[-.\s]??\d{4}\b|\b\d{10}\b/.test(text)) leaks.push("Phone Number detected");
      if (/@[\w_]+/i.test(text)) leaks.push("Social Handle (@handle) detected");

      setScanResult({
        leaks: leaks.length > 0 ? leaks : ["No critical PII leaks detected! Safe to post."],
        safeRewrite:
          leaks.length > 0
            ? "Hey everyone! Anyone interested in teaming up for calculus prep near the central study lounge? Connect with me here!"
            : text,
      });
      setIsScanning(false);
    }, 400);
  };

  // --- State for Double-Blind Reveal Simulator ---
  const [userARevealed, setUserARevealed] = React.useState(false);
  const [userBRevealed, setUserBRevealed] = React.useState(false);
  const isBothRevealed = userARevealed && userBRevealed;

  return (
    <div className="flex flex-col items-center w-full">
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Hackathon & Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-rose-300/40 dark:border-rose-900/60 bg-rose-500/10 px-4 py-1.5 text-xs font-medium text-rose-600 dark:text-rose-300 backdrop-blur-md mb-8"
        >
          <Sparkles className="size-3.5 text-amber-400" />
          <span>Affecio Hacks &apos;26 · Problem Statement 03: Find Your People</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline font-semibold">Team Syntax Slayer</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.15]"
        >
          Connect Deeply. <br />
          <span className="text-gradient-rose">Reveal Safely.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          The privacy-first social discovery platform for college students and introverts.
          Share authentic thoughts anonymously, discover genuine mindset matches with AI,
          and unlock real identities <em>only</em> when both of you consent.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <Button variant="romantic" size="lg" className="w-full sm:w-auto text-sm" asChild>
            <Link href="#thoughts" className="flex items-center justify-center gap-2">
              <Sparkles className="size-4" />
              <span>Explore Thought Pool</span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm" asChild>
            <Link href="#privacy" className="flex items-center justify-center gap-2">
              <ShieldCheck className="size-4 text-rose-500" />
              <span>Try Privacy Leak Simulator</span>
            </Link>
          </Button>
        </motion.div>

        {/* Live Simulation Card: The Vibe Match Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 w-full max-w-2xl"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-rose-500/30 via-pink-500/20 to-purple-500/30 shadow-2xl shadow-rose-950/20">
            <Card className="rounded-[22px] border-0 p-6 text-left relative overflow-hidden backdrop-blur-2xl">
              {/* Background watermark */}
              <Heart className="absolute -bottom-10 -right-10 size-48 text-rose-500/5 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-rose-200/40 dark:border-rose-900/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md shadow-rose-500/30">
                    VS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">Velvet Starlight</span>
                      <Badge variant="rose" className="text-[10px]">
                        Anonymous Alias
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Sophomore · Creative Writing & CS</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <div className="text-right">
                    <span className="text-xs font-semibold text-rose-500 block">Vibe Compatibility</span>
                    <span className="font-serif text-lg font-bold text-foreground">94% Match</span>
                  </div>
                  <div className="size-10 rounded-full border-2 border-rose-500 flex items-center justify-center text-xs font-bold text-rose-500 bg-rose-500/10">
                    94
                  </div>
                </div>
              </div>

              {/* Thought snippet */}
              <div className="my-4 p-4 rounded-xl bg-rose-500/5 border border-rose-200/30 dark:border-rose-900/30">
                <p className="text-xs uppercase tracking-wider font-semibold text-rose-500 mb-1">
                  Shared Daily Prompt: &ldquo;What project keeps you awake until 2 AM?&rdquo;
                </p>
                <p className="text-sm text-foreground/90 italic">
                  &ldquo;Building a low-fi pixel game about cozy rainy train stations, but stuck on the ambient soundtrack. Looking for someone who loves sound design or late-night brainstorms.&rdquo;
                </p>
              </div>

              {/* Reveal Status Indicator */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs pt-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Lock className="size-3.5 text-amber-500" />
                  <span>
                    Double-Blind Status: <strong>1 of 2 agreed</strong> · Real profile stays 100% hidden
                  </span>
                </div>
                <Badge variant="glow" className="cursor-pointer">
                  Protected by AI Guardian
                </Badge>
              </div>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* THE 7-STEP USER JOURNEY */}
      {/* ========================================================= */}
      <section id="journey" className="w-full py-20 bg-rose-500/[0.02] border-y border-rose-200/30 dark:border-rose-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="rose" className="mb-3">
              The Vibezy Blueprint
            </Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              A 7-Step Journey to <span className="text-gradient-rose">Safe Friendship</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Traditional apps force your face and personal data upfront. Vibezy reverses the flow:
              ideas first, mutual trust second, safe meetups always.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <Card className="p-6 relative group hover:border-rose-400/50 transition-all">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md shadow-rose-500/20">
                01
              </div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                Public Thought Pool
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Answer daily prompts and share intellectual queries or creative goals under a whimsical anonymous alias. No photos, zero superficial bias.
              </p>
              <div className="mt-4 text-xs font-semibold text-rose-500 flex items-center gap-1">
                <span>Prompt-driven discoverability</span>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 relative group hover:border-rose-400/50 transition-all">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md shadow-rose-500/20">
                02
              </div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                Smart AI Matchmaker
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Our Claude-powered semantic engine analyzes your core motivations, study habits, and interests to generate a Vibe Compatibility Score (0–100%).
              </p>
              <div className="mt-4 text-xs font-semibold text-rose-500 flex items-center gap-1">
                <span>Mindset-based similarity</span>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 relative group hover:border-rose-400/50 transition-all">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md shadow-rose-500/20">
                03
              </div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                AI Privacy Leak Simulator
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Before your post goes live, our client &amp; server inspector detects dorm rooms, phone numbers, or social handles, offering a 1-click safe rewrite.
              </p>
              <div className="mt-4 text-xs font-semibold text-rose-500 flex items-center gap-1">
                <span>Pre-post safety shield</span>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 relative group hover:border-rose-400/50 transition-all">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md shadow-rose-500/20">
                04
              </div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                60-Sec Connection Challenge
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Skip &ldquo;Hey, what&apos;s up&rdquo;. Jump into a synchronized 60-second cooperative mini-game or thought quiz designed to dissolve awkward first-message tension.
              </p>
              <div className="mt-4 text-xs font-semibold text-rose-500 flex items-center gap-1">
                <span>Playful icebreakers</span>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="p-6 relative group hover:border-rose-400/50 transition-all">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md shadow-rose-500/20">
                05
              </div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                Anonymous Chat &amp; AI Guardian
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Chat smoothly under your alias. The AI Guardian intercepts harassment, scams, or predatory language in real time, with an AI Wingman suggesting talking points.
              </p>
              <div className="mt-4 text-xs font-semibold text-rose-500 flex items-center gap-1">
                <span>Real-time safety moderation</span>
              </div>
            </Card>

            {/* Step 6 */}
            <Card className="p-6 relative group hover:border-rose-400/50 transition-all border-rose-500/40">
              <div className="size-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-sm mb-4 shadow-md shadow-amber-500/20">
                06
              </div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                Double-Blind Identity Reveal
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Both users must independently click &ldquo;Request Reveal&rdquo;. If only one clicks, the other never knows. Profiles, photos, and socials unlock only on mutual consent.
              </p>
              <div className="mt-4 text-xs font-semibold text-amber-500 flex items-center gap-1">
                <span>Zero one-sided vulnerability</span>
              </div>
            </Card>
          </div>

          {/* Step 7 Span Full Width */}
          <div className="mt-6">
            <Card className="p-6 md:p-8 border-rose-400/40 bg-gradient-to-r from-rose-500/5 via-pink-500/5 to-purple-500/5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-8 rounded-lg gradient-rose flex items-center justify-center text-white font-bold text-xs">
                      07
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      Safe Meetup Bridge &amp; Good Vibes Badges
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    Ready to meet in the real world? Vibezy recommends high-visibility, curated campus spots
                    (main libraries, student cafes, public quad spaces) with built-in safety checklists and reliability badges for members who respect boundaries.
                  </p>
                </div>
                <Button variant="romantic" asChild>
                  <Link href="#meetups" className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>View Campus Venues</span>
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE DEMO 1: AI PRIVACY LEAK SIMULATOR */}
      {/* ========================================================= */}
      <section id="privacy" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="rose" className="mb-2">
            Interactive Safety Tool
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            AI Privacy Leak <span className="text-gradient-rose">Simulator</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Never leak your dorm number or private phone number again. Test how Vibezy intercepts personal data and transforms it into a safe, engaging post before you publish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Box */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="size-4 text-amber-500" />
                <span>Your Draft Post (Simulated)</span>
              </h4>
              <span className="text-xs text-muted-foreground">Type or edit freely</span>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                handleSimulateScan(e.target.value);
              }}
              rows={5}
              className="w-full rounded-xl border border-rose-200/50 dark:border-rose-900/50 bg-background/50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 resize-none font-sans"
              placeholder="Type a draft post with personal details to see safety detection in action..."
            />

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs text-muted-foreground self-center mr-1">Sample presets:</span>
              <button
                type="button"
                onClick={() => {
                  const sample = "Hey! Room 204 at Maple Tower, text me at 917-555-0144 to study chem.";
                  setInputText(sample);
                  handleSimulateScan(sample);
                }}
                className="text-xs px-2.5 py-1 rounded-full border border-rose-200/50 dark:border-rose-900/50 hover:bg-rose-500/10 text-rose-600 dark:text-rose-300"
              >
                Dorm &amp; Phone leak
              </button>
              <button
                type="button"
                onClick={() => {
                  const sample = "Looking for study buddies for linear algebra. DM my Instagram @alex_99";
                  setInputText(sample);
                  handleSimulateScan(sample);
                }}
                className="text-xs px-2.5 py-1 rounded-full border border-rose-200/50 dark:border-rose-900/50 hover:bg-rose-500/10 text-rose-600 dark:text-rose-300"
              >
                Social handle leak
              </button>
            </div>
          </Card>

          {/* AI Guardian Output */}
          <Card className="p-6 space-y-5 border-rose-500/30">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck className="size-4 text-rose-500" />
                <span>AI Guardian Analysis</span>
              </h4>
              {isScanning ? (
                <span className="text-xs text-amber-500 animate-pulse">Scanning text...</span>
              ) : (
                <Badge variant={scanResult.leaks[0].includes("No critical") ? "rose" : "destructive"}>
                  {scanResult.leaks[0].includes("No critical") ? "Clean" : "Leaks Intercepted"}
                </Badge>
              )}
            </div>

            {/* Detected leaks pill list */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Intercepted Items:</p>
              <div className="flex flex-col gap-1.5">
                {scanResult.leaks.map((leak, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs py-1.5 px-3 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-300 font-medium"
                  >
                    <AlertTriangle className="size-3.5 shrink-0 text-amber-500" />
                    <span>{leak}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Rewrite */}
            <div className="pt-2 border-t border-rose-200/40 dark:border-rose-900/40 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                  <Sparkles className="size-3 text-amber-400" />
                  <span>AI Safe Rewrite (1-Click Safe to Post):</span>
                </p>
                <span className="text-[11px] text-muted-foreground">Preserves meaning &amp; vibe</span>
              </div>
              <div className="p-3.5 rounded-xl bg-background/80 border border-rose-300/40 dark:border-rose-900/40 text-sm text-foreground/90">
                &ldquo;{scanResult.safeRewrite}&rdquo;
              </div>
              <Button
                variant="romantic"
                size="sm"
                className="w-full text-xs mt-2"
                onClick={() => setInputText(scanResult.safeRewrite)}
              >
                Apply AI Safe Rewrite
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE DEMO 2: DOUBLE-BLIND REVEAL SIMULATOR */}
      {/* ========================================================= */}
      <section className="w-full py-20 bg-rose-500/[0.02] border-y border-rose-200/30 dark:border-rose-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="glow" className="mb-2">
              Consent-First Architecture
            </Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Double-Blind <span className="text-gradient-rose">Identity Reveal</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Try clicking reveal for User A and User B. Notice how no personal identity is ever revealed unless <em>both</em> consent simultaneously. Zero one-sided awkwardness.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* User A Card */}
                <div className="p-5 rounded-2xl border border-rose-200/50 dark:border-rose-900/50 bg-background/60 space-y-4 text-center">
                  <div className="size-16 rounded-full mx-auto gradient-rose flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {isBothRevealed ? "SJ" : "VS"}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {isBothRevealed ? "Sarah Jenkins (Real)" : "Velvet Starlight"}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {isBothRevealed ? "@sarah_c22 · CS Sophomore" : "Anonymous Peer · Campus Verified"}
                    </p>
                  </div>
                  <Button
                    variant={userARevealed ? "secondary" : "romantic"}
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => setUserARevealed(!userARevealed)}
                  >
                    {userARevealed ? "User A: Consent Granted ✓" : "User A: Request Reveal"}
                  </Button>
                </div>

                {/* User B Card */}
                <div className="p-5 rounded-2xl border border-rose-200/50 dark:border-rose-900/50 bg-background/60 space-y-4 text-center">
                  <div className="size-16 rounded-full mx-auto bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {isBothRevealed ? "DK" : "MP"}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {isBothRevealed ? "Devon Kim (Real)" : "Midnight Poet"}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {isBothRevealed ? "@devon_writes · Literature Junior" : "Anonymous Peer · Campus Verified"}
                    </p>
                  </div>
                  <Button
                    variant={userBRevealed ? "secondary" : "romantic"}
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => setUserBRevealed(!userBRevealed)}
                  >
                    {userBRevealed ? "User B: Consent Granted ✓" : "User B: Request Reveal"}
                  </Button>
                </div>
              </div>

              {/* Reveal Outcome Bar */}
              <div className="mt-8 p-4 rounded-xl border border-rose-200/40 dark:border-rose-900/40 bg-rose-500/5 text-center">
                {isBothRevealed ? (
                  <div className="flex flex-col items-center justify-center text-rose-600 dark:text-rose-300">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <CheckCircle2 className="size-4 text-emerald-500" />
                      <span>Mutual Consent Achieved! Identities &amp; Photos Unlocked!</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Both users agreed. You can now exchange social handles or propose a safe campus meetup.
                    </p>
                  </div>
                ) : userARevealed || userBRevealed ? (
                  <div className="flex flex-col items-center justify-center text-amber-600 dark:text-amber-300">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <Lock className="size-4" />
                      <span>One Consent Pending · Identity Remains 100% Concealed</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      The other party receives no notification that you requested a reveal until they also request it.
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <EyeOff className="size-4 text-rose-500" />
                    <span>Both profiles currently locked under anonymous pseudonyms.</span>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COMPARISON TABLE: TYPICAL APPS VS VIBEZY */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="rose" className="mb-2">
            The Difference
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Why Traditional Apps <span className="text-gradient-rose">Burn You Out</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            How Vibezy completely fixes the privacy and connection paradox for introverts and college students.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px] rounded-2xl border border-rose-200/40 dark:border-rose-900/40 glass-card p-6">
            <div className="grid grid-cols-3 pb-4 border-b border-rose-200/40 dark:border-rose-900/40 font-semibold text-sm">
              <div className="text-muted-foreground">Dimension</div>
              <div className="text-muted-foreground">Typical Swiping Apps</div>
              <div className="text-rose-500">Vibezy Platform</div>
            </div>

            <div className="divide-y divide-rose-200/20 dark:divide-rose-900/20 text-sm">
              <div className="grid grid-cols-3 py-4 items-center">
                <span className="font-medium text-foreground">First Impression</span>
                <span className="text-muted-foreground">Selfies &amp; superficial looks</span>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  Intellectual thoughts &amp; goals
                </span>
              </div>

              <div className="grid grid-cols-3 py-4 items-center">
                <span className="font-medium text-foreground">Privacy Protection</span>
                <span className="text-muted-foreground">Real photos &amp; colleges public</span>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  Anonymous aliases by default
                </span>
              </div>

              <div className="grid grid-cols-3 py-4 items-center">
                <span className="font-medium text-foreground">Pre-Post PII Leaks</span>
                <span className="text-muted-foreground">Zero checks; easy to leak dorms</span>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  AI Privacy Leak Simulator &amp; rewrites
                </span>
              </div>

              <div className="grid grid-cols-3 py-4 items-center">
                <span className="font-medium text-foreground">Breaking the Ice</span>
                <span className="text-muted-foreground">Awkward &ldquo;Hey&rdquo; &amp; ghosting</span>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  60-Second AI Connection Challenge
                </span>
              </div>

              <div className="grid grid-cols-3 py-4 items-center">
                <span className="font-medium text-foreground">Identity Reveal</span>
                <span className="text-muted-foreground">Exposed before saying hello</span>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  Double-Blind mutual consent only
                </span>
              </div>

              <div className="grid grid-cols-3 py-4 items-center">
                <span className="font-medium text-foreground">Offline Meetups</span>
                <span className="text-muted-foreground">Unregulated &amp; anxiety-inducing</span>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  Verified campus public spots &amp; checklists
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SAFE CAMPUS VENUES PREVIEW */}
      {/* ========================================================= */}
      <section id="meetups" className="w-full py-20 bg-rose-500/[0.02] border-t border-rose-200/30 dark:border-rose-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="rose" className="mb-2">
              Safe Bridge To Reality
            </Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Curated Public <span className="text-gradient-rose">Campus Meetups</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              When you and your match are ready to meet, Vibezy suggests verified public locations with high visibility, public staff, and open daylight hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white">
                <BookOpen className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Main Campus Library - 2nd Floor</h4>
                <p className="text-xs text-rose-500 font-medium">Quiet Study &amp; Discussion Commons</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Staffed front desks, natural lighting, coffee vending, and high student traffic. Ideal for first study sessions.
              </p>
              <div className="pt-2 border-t border-rose-200/30 dark:border-rose-900/30 flex items-center justify-between text-xs text-muted-foreground">
                <span>Safety Score: 9.8/10</span>
                <span>Open: 7 AM - Midnight</span>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white">
                <Coffee className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Student Union Bakery &amp; Cafe</h4>
                <p className="text-xs text-rose-500 font-medium">Casual Low-Pressure Coffee</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Central quad location with vibrant atmosphere, open patio seating, and delicious pastries. Great for 20-minute chat.
              </p>
              <div className="pt-2 border-t border-rose-200/30 dark:border-rose-900/30 flex items-center justify-between text-xs text-muted-foreground">
                <span>Safety Score: 9.6/10</span>
                <span>Open: 8 AM - 9 PM</span>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="size-10 rounded-xl gradient-rose flex items-center justify-center text-white">
                <Compass className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Innovation Hub Atrium</h4>
                <p className="text-xs text-rose-500 font-medium">Creative Collaboration Zone</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Whiteboards, charging pods, and project desks. Perfect for hackathon brainstorming, coding, and art collabs.
              </p>
              <div className="pt-2 border-t border-rose-200/30 dark:border-rose-900/30 flex items-center justify-between text-xs text-muted-foreground">
                <span>Safety Score: 9.7/10</span>
                <span>Open: 8 AM - 10 PM</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CALL TO ACTION (CTA) */}
      {/* ========================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-rose-300/40 dark:border-rose-800/40 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-purple-500/10 backdrop-blur-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Ready to be known for <br />
              <span className="text-gradient-rose">your thoughts first?</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Join students and introverts forming authentic friendships without the stress of forced identity exposure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button variant="romantic" size="lg" className="w-full sm:w-auto text-sm" asChild>
                <Link href="/thought-pool" className="flex items-center gap-2">
                  <Sparkles className="size-4" />
                  <span>Enter Thought Pool</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm" asChild>
                <Link href="#privacy">Learn About AI Guardrails</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
