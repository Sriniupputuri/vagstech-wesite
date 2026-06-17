"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import {
  Smartphone, Globe, Gamepad2, Palette, BarChart2, Headphones, ArrowRight, Play
} from "lucide-react";

const offerings = [
  {
    icon: Smartphone,
    title: "Mobile Games (iOS & Android)",
    description:
      "We design and ship games for both major mobile platforms using Unity and React Native. From hyper-casual to mid-core — we handle engine, art pipeline, and store submission.",
  },
  {
    icon: Globe,
    title: "Browser Games (HTML5)",
    description:
      "Lightweight, instant-play games built with Pixi.js and WebGL. No downloads, no installs — players jump straight in from any device with a browser. Frogie is a live example.",
  },
  {
    icon: Gamepad2,
    title: "2D & 3D Game Design",
    description:
      "We scope and design the full game loop — mechanics, level design, difficulty curves, and reward systems — before a single line of engine code is written.",
  },
  {
    icon: Palette,
    title: "Art & Animation",
    description:
      "Characters, environments, UI — we handle 2D sprite work and animations in-house. Consistent visual style from concept to final asset.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Monetisation",
    description:
      "We integrate analytics (Firebase, GameAnalytics) and monetisation (ads, IAP) so you can track retention, ARPU, and funnel drop-offs from day one.",
  },
  {
    icon: Headphones,
    title: "Post-launch Support",
    description:
      "After ship we monitor crash reports, push updates, and iterate on content. Games that get updated get reviewed — we keep your title alive.",
  },
];

const stack = ["Unity", "Pixi.js", "React Native", "Unreal Engine", "Blender", "Firebase"];

export default function GameDevelopment() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-[#09090f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-color)]">
              Service
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-3 mb-5 max-w-3xl leading-tight">
              We Build Games People Actually Play
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mb-8">
              VAGSTECH is a Hyderabad-based game studio shipping mobile and browser games with real players. Frogie is our latest — cross the road, dodge traffic, go as far as you can.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              >
                Pitch Your Idea <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/games/frogi"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors duration-200"
              >
                <Play className="h-4 w-4 fill-white" />
                Play Frogie
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--charcoal)] mb-12">
              What We Offer
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#09090f] rounded-2xl p-6 border border-white/8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/15 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[var(--accent-color)]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-extrabold text-white mb-8">Our Stack</h2>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 border border-white/10 text-white/70 font-medium text-sm px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--charcoal)]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl font-extrabold mb-4">Have a game idea?</h2>
            <p className="text-white/60 mb-8">
              We love a good concept. Share your idea and let's figure out if we can build it — and how long it would take.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
