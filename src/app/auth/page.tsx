"use client";

import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AuthPreview() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:px-6">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
      </Button>

      <Card className="p-8 text-center space-y-4">
        <div className="size-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto">
          <Lock className="size-6" />
        </div>
        <Badge variant="glow">Stage 2: Supabase Auth</Badge>
        <h3 className="text-xl font-bold text-foreground">Anonymous Sign In &amp; Profile Setup</h3>
        <p className="text-sm text-muted-foreground">
          College email verification (.edu) and automatic playful anonymous alias generation (e.g. <em>Velvet Starlight</em>) will be implemented in Stage 2.
        </p>
        <Button variant="romantic" className="w-full" asChild>
          <Link href="/">Back to Landing Page</Link>
        </Button>
      </Card>
    </div>
  );
}
