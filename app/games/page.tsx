"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Gamepad2, Play } from "lucide-react";
import Link from "next/link";

const games = [
  {
    slug: "frogi",
    title: "Frogie",
    playable: true,
    link: "/games/frogi",
    thumbnail: null,
    color: "from-green-900 via-emerald-800 to-green-950",
    emoji: "🐸",
  },
  {
    slug: "runner",
    title: "VAGS Runner",
    playable: false,
    link: "/contact",
    thumbnail: null,
    color: "from-blue-900 via-indigo-800 to-blue-950",
    emoji: "🏃",
  },
  {
    slug: "quest",
    title: "VAGS Quest",
    playable: false,
    link: "/contact",
    thumbnail: null,
    color: "from-purple-900 via-violet-800 to-purple-950",
    emoji: "⚔️",
  },
  {
    slug: "puzzle",
    title: "VAGS Puzzle",
    playable: false,
    link: "/contact",
    thumbnail: null,
    color: "from-amber-900 via-orange-800 to-amber-950",
    emoji: "🧩",
  },
];

export default function GamesPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Our Games</span>
          </h1>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            Built in-house by our studio.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <FadeIn key={game.slug} delay={index * 0.1}>
              <Link href={game.link} className="block group">
                {/* Card */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Thumbnail background */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${game.color}`} />

                  {/* Subtle grid texture overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 41px)"
                    }}
                  />

                  {/* Emoji / icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 select-none">
                      {game.emoji}
                    </span>
                  </div>

                  {/* Play button — center, visible on hover for playable */}
                  {game.playable ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--accent-color)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--dark-color)] transition-all duration-300 shadow-xl shadow-amber-500/40">
                        <Play className="h-7 w-7 text-white fill-white ml-1" />
                      </div>
                    </div>
                  ) : (
                    /* Coming soon overlay */
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-white/60 text-xs font-semibold tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <h3 className="text-white font-bold text-base leading-tight">
                      {game.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-20 text-center bg-gradient-to-r from-[var(--charcoal)] to-[var(--dark-color)] rounded-2xl p-12 text-white">
            <Gamepad2 className="h-14 w-14 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">Want a Custom Game?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              We build tailored gaming experiences for businesses and individuals. Reach out to discuss your idea.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--dark-color)] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
