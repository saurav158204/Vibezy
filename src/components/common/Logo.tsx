import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({ size = "md", showTagline = false }: LogoProps) {
  const iconSizes = {
    sm: "size-5",
    md: "size-6",
    lg: "size-8",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link href="/" className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
      <div className="relative flex items-center justify-center">
        <div className="gradient-rose rounded-xl p-2 text-white shadow-md shadow-rose-500/30 transition-shadow duration-300 group-hover:shadow-rose-500/60">
          <Heart className={`${iconSizes[size]} fill-white/90 text-white`} />
        </div>
        <Sparkles className="absolute -top-1 -right-1 size-3.5 text-amber-300 animate-pulse" />
      </div>

      <div className="flex flex-col">
        <span className={`font-serif font-bold tracking-tight text-gradient-rose ${textSizes[size]}`}>
          Vibezy
        </span>
        {showTagline && (
          <span className="text-[10px] font-medium tracking-wider uppercase text-rose-500/80 dark:text-rose-400/80 -mt-1">
            Connect Deeply · Reveal Safely
          </span>
        )}
      </div>
    </Link>
  );
}
