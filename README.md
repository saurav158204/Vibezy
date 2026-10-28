# 💗 Vibezy — Find Your People. Match Your Vibe.

> **A privacy-first, AI-powered social discovery platform designed to help people find friends, communities, and activity partners through shared thoughts, interests, and vibes — not just profile photos.**

Vibezy brings a warm, Valentine-inspired experience to social discovery. Its product vision combines anonymous-first connections, AI-assisted compatibility, privacy-aware conversations, interest-based communities, and safer real-world meetups in one place.

**Tagline:** *Find your people. Match your vibe.*

---

## ✨ Project Overview

Meeting people who genuinely share your interests can be difficult. Traditional social platforms often emphasize photos and public profiles, while users may have concerns about privacy, unwanted messages, and meeting strangers safely.

Vibezy is designed around a different idea: **match on thoughts, interests, goals, and energy before choosing what personal information to share.**

The planned experience includes:
- Anonymous-first onboarding with a personal vibe profile.
- Interest- and goal-based people and community discovery.
- An anonymous Thought Pool for sharing ideas and aspirations.
- AI-assisted compatibility matching and connection games.
- An AI Guardian concept for safer conversations.
- A double-blind identity reveal that requires mutual consent.
- Approximate-location discovery and small public-place meetups.
- Privacy controls, reporting, blocking, and account-data tools.

> **Project status:** This README describes the product specification and intended capabilities. Features should be considered implemented only when they are present and tested in the current codebase.

---

## 🎨 Design Direction — Valentine Glow

Vibezy uses a romantic, warm, modern visual identity inspired by love letters, soft glass surfaces, glowing hearts, and rose-toned gradients.

### Theme modes
- **Blush:** light mode and default theme.
- **Midnight Rose:** dark mode.

### Color palette

| Token | Hex | Intended use |
|---|---|---|
| Rose Red | `#E11D48` | Primary actions |
| Cherry | `#C9184A` | Deep accent |
| Hot Pink | `#FF4D6D` | Highlights and gradients |
| Blush | `#FFE5EC` | Soft backgrounds |
| Petal | `#FFC2D1` | Secondary surfaces |
| Cream | `#FFF8F5` | Warm light backgrounds |
| Wine | `#590D22` | Text and dark accents |
| Midnight Rose | `#1A0510` | Dark-mode background |
| Rose Gold | `#E8A598` | Premium accent |
| Gold Sparkle | `#F9C74F` | Small highlight details |

### Visual principles
- Frosted-glass cards with soft rose shadows and rounded corners.
- Subtle animated hearts, petals, and sparkles.
- Elegant **Playfair Display** headings, **Poppins** body text, and **Dancing Script** accents.
- Rounded pill controls, love-letter motifs, and heart-inspired icons.
- Responsive layouts with mobile bottom navigation and desktop sidebar patterns.
- Accessible focus states, keyboard navigation, meaningful labels, and reduced-motion support.

---

## 🚀 Planned Features

### 1. Landing Page
A welcoming introduction to Vibezy, including the core message, product explanation, how-it-works section, feature highlights, safety and privacy information, FAQ, and calls to action.

### 2. Anonymous-First Onboarding
- Choose an alias and avatar.
- Complete a short, card-based vibe quiz.
- Select interests and connection goals.
- Optionally share approximate location.
- Receive a personalized vibe tag and score.

Example goals include finding a gym partner, study buddy, language-exchange partner, creative collaborator, travel buddy, music partner, gaming group, or new friends.

### 3. Home & Discovery
- Discover people and communities with shared interests.
- View a compatibility score and a short explanation of why a connection may fit.
- Browse activity-oriented “Vibe Now” discovery.
- Respond to daily thought prompts.
- Filter by interests, goals, distance, and energy.

### 4. Public Thought Pool
Share anonymous thoughts, ambitions, and ideas as love-letter-style cards. Other users can react with a **Spark** or respond with an **Echo** to express interest in a connection.

A planned AI privacy scan checks content before submission and can highlight potential personal information with a safer rewrite suggestion.

### 5. AI Matchmaker
Compatibility is intended to consider interests, goals, vibe-quiz answers, and thoughts rather than relying on photos alone. Match cards can explain shared motivations and provide a next step to start a connection.

### 6. Connection Challenges
Matched users can play short, interactive prompts such as:
- Two Truths and a Vibe
- Build a Story Together
- This-or-That Rapid Fire

The challenge experience is intended to use shared interests to make the first conversation feel more natural.

### 7. Anonymous Chat & AI Guardian
- Alias-first real-time conversations.
- Typing indicators, read receipts, and emoji reactions.
- Conversation-starter suggestions from an AI Wingman.
- Planned safety screening for scams, harassment, toxicity, and personal-information sharing.
- Block, report, mute, and end-chat controls.

### 8. Double-Blind Identity Reveal
Identity details are designed to remain hidden until **both users independently request a reveal**. A mutual request can trigger an animated reveal experience. Users should retain controls over future sharing.

### 9. Vibe Now Map
A map-based discovery experience for activities, communities, and people who are open to connecting. The specification calls for approximate, fuzzed location rather than precise live location.

### 10. Micro-Meetups
Create or join small meetups for activities in public places, with:
- Activity, time, venue, group-size, and vibe details.
- Public-venue suggestions and a safety checklist.
- Meetup sharing with a trusted contact.
- Venue details limited to confirmed attendees where appropriate.
- Post-meetup feedback and “Good Vibes” reliability indicators.

### 11. Communities
Join interest-based groups such as Travel Buddies, Music Lovers, Fitness Crew, Local Hangouts, Gaming Squad, and Study Buddies. Community features are intended to include membership controls and a community feed.

### 12. Profile, Settings & Safety Center
- Alias, vibe tag, interests, goals, and badges.
- Theme and notification preferences.
- Profile visibility and location-precision controls.
- Blocked-user management.
- Data export and account deletion options.
- Safety guidance, reporting, and emergency-contact setup.
- A basic, role-gated moderation area for reviewing reports.

---

## 🧠 AI Capabilities

The specification proposes using the **Anthropic Claude API from server-side route handlers only** for the following features:

| AI feature | Purpose |
|---|---|
| Privacy Leak Simulator | Identify possible personal information before content is posted and suggest a safer version |
| Smart Matchmaker | Rank potential connections using interests, goals, thoughts, and quiz answers |
| Connection Challenge Generator | Create structured mini-games based on shared interests |
| AI Guardian | Classify potentially unsafe chat messages and return allow/warn/block guidance |
| AI Wingman | Suggest conversation starters and icebreakers |
| Vibe Quiz Summarizer | Generate a vibe tag and compatibility-oriented summary |

AI responses should be schema-validated, rate-limited, handled gracefully when a provider is unavailable, and designed to avoid logging sensitive message content. AI output should support safety decisions rather than replace user controls or human moderation.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 App Router, TypeScript |
| Styling | Tailwind CSS, shadcn/ui (customized), Framer Motion |
| Icons | Lucide |
| Forms & validation | React Hook Form, Zod |
| Backend, database & authentication | Supabase |
| Data | PostgreSQL, with pgvector planned for embedding-based similarity |
| Realtime | Supabase Realtime |
| File storage | Supabase Storage |
| AI | Anthropic Claude API |
| Maps | Leaflet, OpenStreetMap |
| Optional SMS OTP | Twilio, controlled by environment configuration |
| Deployment target | Vercel |

---

## 🏗️ Architecture Notes

The intended architecture separates the client interface from trusted server-side operations:

1. **Next.js UI** renders responsive pages and interactive components.
2. **Server-side route handlers** validate inputs with Zod and call privileged services.
3. **Supabase Auth** manages passwordless OTP authentication and sessions.
4. **PostgreSQL + Row Level Security (RLS)** governs access to application data.
5. **Claude API** is called from the server only; secret API keys must never be exposed to the browser.
6. **Supabase Realtime** supports live chat and other real-time interactions.
7. **Leaflet + OpenStreetMap** powers map-based discovery, using approximate location data.

### Proposed database scope

The specification identifies these tables or data areas:

`profiles`, `vibe_answers`, `interests`, `user_interests`, `goals`, `user_goals`, `thoughts`, `sparks`, `matches`, `challenges`, `challenge_results`, `chats`, `messages`, `reveal_requests`, `communities`, `community_members`, `meetups`, `meetup_attendees`, `meetup_feedback`, `reports`, `blocks`, `safety_contacts`, `otp_attempts`, and `audit_log`.

The database implementation should include foreign keys, indexes, migration files, seed data, and explicit RLS policies. Real profile information should only be exposed through a carefully checked mutual-reveal flow.

---

## 🔐 Security & Privacy Principles

Privacy and safer connection design are central to Vibezy's intended experience.

- **Passwordless-first authentication:** email OTP through Supabase Auth, with optional Twilio SMS OTP if configured.
- **18+ age gate:** date-of-birth check during onboarding.
- **Secure sessions:** use secure, HTTP-only cookies and protected routes.
- **Server-side secrets:** never expose Supabase service-role credentials or the Anthropic API key to client-side code.
- **Row Level Security:** enable and test RLS policies for every applicable table.
- **Validation and sanitization:** validate API inputs and sanitize untrusted output.
- **Abuse protection:** rate-limit authentication, AI, posting, and messaging endpoints.
- **Location minimization:** show approximate or fuzzed location; avoid exposing exact location publicly.
- **Mutual-consent reveal:** keep identity details private until both participants opt in.
- **Safety controls:** provide blocking, reporting, and moderation workflows.
- **Data rights:** plan for user data export and account deletion.
- **Secure deployment:** use HTTPS, appropriate security headers, CSRF protections where applicable, and a strict Content Security Policy.

Security controls must be implemented and tested before production use. Do not treat a UI-only safeguard as a substitute for server-side authorization.

---

## 💻 Getting Started

The steps below describe the intended setup. Exact commands for database migrations or seed scripts may need to be adjusted to match the files present in the repository.

### Prerequisites

- Node.js 20 or a version compatible with the project configuration.
- npm (or the package manager selected by the repository).
- A Supabase project.
- An Anthropic API key for AI features.
- Optional: Twilio credentials if SMS OTP is implemented and enabled.

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd vibezy
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with the repository URL. If your project folder has a different name, enter that directory instead.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root. Use `.env.example` as the reference when available.

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Anthropic Claude API — server-side only
ANTHROPIC_API_KEY=

# Optional Twilio SMS OTP
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
ENABLE_SMS_OTP=false

# Set additional application-specific variables here as needed.
```

**Important:** Never commit `.env.local` or real credentials. `NEXT_PUBLIC_` variables are exposed to the browser, so only use them for values designed to be public. Keep service-role and AI provider keys server-side.

### 4. Set up Supabase

1. Create a Supabase project.
2. Copy the project URL and anon key into your local environment.
3. Configure email OTP in Supabase Auth.
4. Apply the SQL migration files included in the repository, once available.
5. Run the seed script if the repository provides one.
6. Verify RLS policies and test access as both authenticated and unauthenticated users.
7. Configure storage and realtime policies for the features that use them.

Do not launch with permissive placeholder policies. Confirm that users cannot access another user's private data.

### 5. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 6. Run checks

Use the scripts defined in `package.json`. Common commands, if configured, may include:

```bash
npm run lint
npm run typecheck
npm run build
```

If a script is not defined in the current repository, add or update the script before running it.

---

## ☁️ Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables in the Vercel project settings.
4. Configure the production Supabase URL, authentication settings, email templates, and allowed redirect URLs.
5. Apply database migrations and seed only the appropriate production-safe data.
6. Deploy and test authentication, RLS, AI endpoints, chat permissions, location handling, and account deletion in the deployed environment.

Keep secrets in Vercel environment settings, not in source files. Use separate credentials and data environments for development and production where possible.

---

## 🧭 Suggested Build Roadmap

The project specification recommends building incrementally while keeping the app runnable:

1. Design system and landing page.
2. OTP authentication and protected sessions.
3. Onboarding and vibe quiz.
4. Home/discovery and communities.
5. Thought Pool and privacy scanner.
6. Matching and connection challenges.
7. Chat, AI Guardian, and AI Wingman.
8. Mutual-consent identity reveal.
9. Map, meetups, and safety tools.
10. Profile, settings, accessibility, and final polish.

---

## ♿ Accessibility & UX

The intended experience includes:
- Mobile-first responsive layouts.
- WCAG AA-conscious color contrast.
- Visible keyboard focus and keyboard-accessible controls.
- Appropriate ARIA labels and semantic structure.
- Reduced-motion support for decorative animations.
- Loading skeletons, clear error states, and friendly notifications.
- Helpful empty states and graceful handling of offline or provider failures.

---

## 🤝 Contributing

Contributions, feedback, and ideas are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Make focused changes and add tests where appropriate.
4. Run the available lint, type-check, test, and build scripts.
5. Open a pull request describing the change and any relevant security or privacy impact.

For changes involving authentication, personal data, location, AI moderation, or identity reveal, include security-focused testing.

---

## 🗺️ Roadmap & Implementation Status

Vibezy's product specification covers a broad set of social discovery and safety features. The current implementation status should be tracked against the actual repository, for example:

- [ ] Landing page and Valentine Glow design system
- [ ] Supabase email OTP authentication
- [ ] Onboarding and vibe quiz
- [ ] Discovery feed and communities
- [ ] Thought Pool and privacy scanning
- [ ] Matchmaking and connection challenges
- [ ] Realtime anonymous chat and AI Guardian
- [ ] Mutual identity reveal
- [ ] Map discovery and micro-meetups
- [ ] Safety center, moderation, and privacy settings
- [ ] RLS/security review and production deployment

Update these checkboxes as features are implemented and tested.

---

## 📄 License

Add your chosen license before distributing the project. Until a license is added to the repository, reuse and redistribution permissions may be unclear.

---

<p align="center">
  Made with 💗 for more thoughtful, safer connections.<br />
  <strong>Vibezy — Find your people. Match your vibe.</strong>
</p>
