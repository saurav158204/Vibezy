# Vibezy: Specification & Architecture Document
*Connect Deeply. Reveal Safely.*
*Team Syntax Slayer | Affecio Hacks '26 | Problem Statement 03: Find Your People*

---

## 1. Product Overview & Vision

**Vibezy** is a privacy-first, Valentine's-aesthetic social discovery web application designed for college students, introverts, and thoughtful individuals seeking authentic friendships, study partners, and activity buddies without the burnout, superficiality, and risks of photo-swiping apps.

### Core Philosophy
- **Thought-First, Not Look-First**: Connections stem from shared thoughts, creative goals, and intellectual vibe compatibility.
- **Anonymity by Default**: Users interact exclusively via playful anonymous pseudonyms (e.g. *Velvet Starlight*, *Midnight Poet*). Real names, photos, and socials stay private.
- **Double-Blind Mutual Reveal**: Identity unlocks *only* when both participants explicitly click "Request Reveal". If only one person clicks, zero information is leaked.
- **AI Safety & Privacy Guardrails**: Continuous scanning for PII before posting, real-time toxicity/scam moderation in chats, and safe public venue meetups.

---

## 2. The 7-Step User Journey

1. **Public Thought Pool**: Share authentic reflections, daily prompt answers, and creative goals anonymously.
2. **Smart AI Matchmaker**: Compute deep compatibility (Vibe Score 0–100%) through semantic analysis of thoughts and goals.
3. **AI Privacy Leak Simulator**: Pre-post inspector that detects dorm rooms, phone numbers, and handles with 1-click safe rewrites.
4. **AI Connection Challenge**: A synchronous 60-second interactive icebreaker mini-game skipping awkward small talk.
5. **Anonymous Chat & AI Guardian**: Real-time messaging with AI toxicity/scam monitoring and an AI Wingman for starter prompts.
6. **Double-Blind Identity Reveal**: Profiles unlock simultaneously only when both members grant mutual consent.
7. **Safe Meetup & Reliability**: Curated campus venues (libraries, cafes) with safety checklists and "Good Vibes" reliability badges.

---

## 3. Visual Design System: "Midnight Romance & Rose Bloom"

### Color Palette
- **Rose Accents**:
  - Primary Rose: `#E11D48` (`rose-600`)
  - Vibrant Rose: `#F43F5E` (`rose-500`)
  - Soft Blush: `#FFF1F2` (`rose-50`), `#FFE4E6` (`rose-100`)
  - Lavender Mist: `#F3E8FF` (`purple-100`)
  - Champagne Gold: `#F59E0B` (`amber-500`) / `#FDE68A` (`amber-200`)
- **Midnight Romance (Dark Mode)**:
  - Deep Obsidian: `#09050E`
  - Velvet Purple-Black: `#12091A`
  - Elevated Card Background: `rgba(26, 12, 38, 0.7)` with `backdrop-blur-md`
  - Rose Border Glow: `rgba(244, 63, 94, 0.2)`
- **Glassmorphism**: Translucent card backgrounds (`bg-white/70` in light, `bg-black/40` in dark), delicate rose borders (`border-rose-200/50` or `border-rose-900/40`), and backdrop blur (`backdrop-blur-xl`).

### Typography & Iconography
- **Typography**: Modern elegant display headings paired with high-legibility geometric sans-serif body fonts.
- **Icons**: Lucide React (`Heart`, `Sparkles`, `ShieldCheck`, `EyeOff`, `MessageCircle`, `MapPin`, `Compass`, `Lock`).

---

## 4. Technical Architecture & Stack

- **Framework**: Next.js 15+ (App Router, Server Components & Route Handlers)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS v4, shadcn/ui, custom romantic design tokens
- **Animations**: Framer Motion for micro-interactions, floating badges, and smooth state transitions
- **Database & Auth**: Supabase (PostgreSQL, Supabase Auth, Row Level Security, Realtime WebSockets)
- **AI Engine**: Anthropic Claude API (invoked strictly through server-side `/api/ai/*` route handlers)
- **Mapping**: Leaflet + OpenStreetMap for public safe meetup suggestions
- **Forms & Validation**: React Hook Form + Zod
- **Deployment**: Vercel-ready with zero client-side secret exposure

---

## 5. Database Schema & Security (Supabase PostgreSQL)

```sql
-- Profiles: Holds both public aliases and private revealed credentials
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  anonymous_alias TEXT NOT NULL,
  avatar_seed TEXT NOT NULL,
  bio TEXT,
  interests TEXT[] DEFAULT '{}',
  college_campus TEXT,
  real_name TEXT,
  real_avatar_url TEXT,
  instagram_handle TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Thoughts: Public thought pool entries
CREATE TABLE thoughts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  anonymous_alias TEXT NOT NULL,
  avatar_seed TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  vibe_tags TEXT[] DEFAULT '{}',
  is_flagged BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Matches: Pairs of matched users
CREATE TABLE matches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_a_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  user_b_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  vibe_score INT NOT NULL,
  compatibility_reason TEXT,
  challenge_completed BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Double-Blind Reveals: Ensures simultaneous mutual unlock
CREATE TABLE reveals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  match_id UUID REFERENCES matches(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  wants_reveal BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(match_id, user_id)
);

-- Messages: Real-time chat messages
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  match_id UUID REFERENCES matches(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_redacted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### RLS Policies
1. **Thoughts**: Anyone authenticated can read unflagged thoughts; users can insert only their own thoughts.
2. **Reveals**: Users can only insert/view their own reveal requests. Real user profiles are queryable for a match ONLY when `COUNT(reveals) WHERE match_id = X AND wants_reveal = true` equals 2.
3. **Messages**: Users can only select/insert messages for matches where `auth.uid() IN (user_a_id, user_b_id)`.

---

## 6. Implementation Stages

| Stage | Focus Area | Deliverables | Status |
|---|---|---|---|
| **Stage 1** | **Design System, Shell & Landing** | Valentine's tokens, glassmorphism, fonts, navigation, application shell, premium landing page showcasing 7-step journey | **IN PROGRESS** |
| **Stage 2** | **Auth & Anonymous Profiles** | Supabase auth integration, alias generator, private/public profile separation | Upcoming |
| **Stage 3** | **Thought Pool & AI Leak Simulator** | Daily prompt pool, thought feed, PII scanner + 1-click rewrite route | Upcoming |
| **Stage 4** | **Smart Matchmaker & Challenge** | Semantic vibe scoring, 60-second connection challenge mini-game | Upcoming |
| **Stage 5** | **Realtime Chat, AI Guardian & Reveal** | Supabase realtime messaging, AI toxicity guardrail, double-blind unlock | Upcoming |
| **Stage 6** | **Safe Meetup Hub & Polish** | Leaflet venue map, safety checklists, Good Vibes reliability badges | Upcoming |
