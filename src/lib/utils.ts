import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAlias(): string {
  const adjectives = [
    "Velvet", "Midnight", "Starlight", "Silent", "Crimson", "Rosy", 
    "Cosmic", "Gentle", "Amber", "Serene", "Mystic", "Golden", "Blushing"
  ];
  const nouns = [
    "Poet", "Dreamer", "Thinker", "Stargazer", "Echo", "Whisper", 
    "Solace", "Compass", "Seeker", "Wanderer", "Muse", "Voyager"
  ];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
}
