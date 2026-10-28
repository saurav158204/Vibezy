"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ThoughtPoolPreview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
      </Button>

      <div className="space-y-4 text-center max-w-xl mx-auto mb-10">
        <Badge variant="rose">Stage 3 Integration</Badge>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Public Thought Pool
        </h1>
        <p className="text-sm text-muted-foreground">
          An anonymous space where college students and introverts share ideas, creative goals, and questions before being matched by AI.
        </p>
      </div>

      <Card className="p-8 text-center space-y-4">
        <div className="size-12 rounded-2xl gradient-rose flex items-center justify-center text-white mx-auto shadow-lg shadow-rose-500/30">
          <Sparkles className="size-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Thought Pool &amp; AI Leak Scanner</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Stage 1 (Design System, App Shell, and Landing Page) is complete. The full interactive Thought Pool feed, daily prompts, and Supabase integration will be unlocked in Stage 2 &amp; 3.
        </p>
        <Button variant="romantic" asChild>
          <Link href="/">Explore Landing Page</Link>
        </Button>
      </Card>
    </div>
  );
}
