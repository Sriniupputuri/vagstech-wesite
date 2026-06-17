"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Maximize2, Gamepad2, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FrogiGamePage() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Games
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Game frame */}
        {!playing ? (
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d1a0f] mb-8"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.15) 0%, transparent 70%)" }}
              />
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-6 select-none">🐸</div>
                <Button
                  onClick={() => setPlaying(true)}
                  className="bg-[var(--accent-color)] hover:bg-[var(--dark-color)] text-white font-bold px-6 py-3 text-base rounded-xl shadow-lg shadow-amber-500/30 gap-2"
                >
                  <Play className="h-6 w-6 fill-white" />
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/10 mb-8"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://vagstech.com/games/frogie/"
              title="Frogie — Cross the Road"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              scrolling="no"
            />
          </div>
        )}

        {/* All metadata below the frame */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-color)]">Web Game</span>
              <span className="text-xs bg-green-400/15 text-green-300 border border-green-400/20 px-2.5 py-0.5 rounded-full">Available</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Frogie — Cross the Road</h1>
            <p className="text-white/50 mt-2 max-w-2xl text-sm leading-relaxed">
              Help Frogie cross the road! Dodge cars, hop across logs, and make it safely to the other side. A casual arcade game with increasing difficulty — how far can you go?
            </p>
          </div>

          <a
            href="https://vagstech.com/games/frogie/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new tab"
            className="flex-shrink-0 p-2 rounded-lg border border-white/10 hover:border-white/30 text-white/40 hover:text-white transition-all"
          >
            <Maximize2 className="h-5 w-5" />
          </a>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/70">
            <Globe className="h-4 w-4 text-[var(--accent-color)]" />
            Browser · No download
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/70">
            <Gamepad2 className="h-4 w-4 text-[var(--accent-color)]" />
            Arcade
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/70">
            <Star className="h-4 w-4 text-[var(--accent-color)]" />
            VAGSTECH Studio
          </div>
        </div>

        {/* Controls */}
        <div className="border-t border-white/8 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Controls</p>
          <div className="flex flex-wrap gap-3 text-xs text-white/50">
            <span className="bg-white/5 rounded-lg px-3 py-2">⬆ ⬇ ⬅ ➡  Arrow keys or WASD</span>
            <span className="bg-white/5 rounded-lg px-3 py-2">📱 Swipe on mobile</span>
            <span className="bg-white/5 rounded-lg px-3 py-2">🖥 Works in full screen</span>
          </div>
        </div>
      </div>
    </div>
  );
}
