import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vibezy | Connect Deeply. Reveal Safely.",
  description:
    "AI-powered, privacy-first social discovery for college students and introverts. Share thoughts, match on mindsets, and reveal identities with mutual consent.",
  keywords: [
    "social discovery",
    "privacy-first",
    "introverts",
    "college friends",
    "study buddies",
    "thought pool",
    "double blind reveal",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans selection:bg-rose-500/20 selection:text-rose-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
