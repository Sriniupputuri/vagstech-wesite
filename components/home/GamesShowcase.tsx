"use client";

import FadeIn from "@/components/animations/FadeIn";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const featuredGames = [
  {
    slug: "frogi",
    title: "Frogie",
    playable: true,
    link: "/games/frogi",
    color: "from-green-900 via-emerald-800 to-green-950",
    emoji: "🐸",
  },
  {
    slug: "runner",
    title: "VAGS Runner",
    playable: false,
    link: "/games",
    color: "from-blue-900 via-indigo-800 to-blue-950",
    emoji: "🏃",
  },
  {
    slug: "quest",
    title: "VAGS Quest",
    playable: false,
    link: "/games",
    color: "from-purple-900 via-violet-800 to-purple-950",
    emoji: "⚔️",
  },
  {
    slug: "puzzle",
    title: "VAGS Puzzle",
    playable: false,
    link: "/games",
    color: "from-amber-900 via-orange-800 to-amber-950",
    emoji: "🧩",
  },
];

export default function GamesShowcase() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#09090f]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.18) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-color)]">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                Our Games
              </h2>
            </div>
            <Link
              href="/games"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-200"
            >
              See All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* Game cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGames.map((game, i) => (
            <FadeIn key={game.slug} delay={i * 0.1}>
              <Link href={game.link} className="block group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${game.color}`} />

                  {/* Grid texture */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 41px)",
                    }}
                  />

                  {/* Emoji watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl opacity-25 group-hover:opacity-40 transition-opacity duration-300 select-none">
                      {game.emoji}
                    </span>
                  </div>

                  {/* Play button or coming soon */}
                  {game.playable ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[var(--accent-color)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--dark-color)] transition-all duration-300 shadow-xl shadow-amber-500/40">
                        <Play className="h-6 w-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-white/60 text-[11px] font-semibold tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <h3 className="text-white font-bold text-sm">{game.title}</h3>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile see all */}
        <FadeIn>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/games"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-200"
            >
              See All Games <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
