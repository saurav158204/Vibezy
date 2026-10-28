export interface AnonymousProfile {
  id: string;
  anonymousAlias: string;
  avatarSeed: string;
  collegeCampus?: string;
  bio?: string;
  interests: string[];
  goodVibesScore: number;
}

export interface Thought {
  id: string;
  userId: string;
  anonymousAlias: string;
  avatarSeed: string;
  content: string;
  category: "Creative Goal" | "Deep Question" | "Campus Life" | "Late Night Reflection" | "Study Partner";
  vibeTags: string[];
  createdAt: string;
  likesCount: number;
  matchScorePreview?: number;
}

export interface MatchProfile {
  id: string;
  matchId: string;
  anonymousAlias: string;
  avatarSeed: string;
  vibeScore: number;
  sharedInterests: string[];
  compatibilityReason: string;
  challengeCompleted: boolean;
  userARevealed: boolean;
  userBRevealed: boolean;
  revealedProfile?: {
    realName: string;
    avatarUrl: string;
    instagramHandle?: string;
    bio?: string;
  };
}

export interface LeakScanResult {
  hasLeak: boolean;
  detectedTypes: ("Dorm/Room" | "Phone Number" | "Social Handle" | "Exact Location")[];
  detectedSnippets: string[];
  safeRewrite: string;
  explanation: string;
}

export interface SafeVenue {
  id: string;
  name: string;
  category: "Campus Library" | "Cafe & Bakery" | "Student Union" | "Botanical Garden";
  address: string;
  safetyScore: number;
  openHours: string;
  recommendedFor: string;
}
