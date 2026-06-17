"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#fffbf0]">
      {/* subtle warm blobs */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-[var(--charcoal)]">
              We Build<br />
              Games &amp;<br />
              Apps.
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
              <span className="font-semibold text-[var(--dark-color)]">VAGSTECH IT SERVICES</span> — a Hyderabad-based studio that designs, develops, and ships mobile games and apps used by real people.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/games">
                <Button className="bg-[var(--dark-color)] hover:bg-[var(--hover-color)] text-white px-8 py-6 text-base font-semibold rounded-lg shadow-md">
                  See Our Games
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  className="bg-[var(--charcoal)] hover:bg-[var(--charcoal)]/80 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-md"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — tech card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float">
              <div className="relative rounded-2xl overflow-hidden bg-[var(--charcoal)] p-6 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--dark-color)]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--dark-color)]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                  <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                    <Gamepad2 className="h-7 w-7 text-[var(--accent-color)] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">Games</p>
                      <p className="text-white/60 text-xs">Published</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                    <Code className="h-7 w-7 text-[var(--accent-color)] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">Web Apps</p>
                      <p className="text-white/60 text-xs">Delivered</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-4 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/70 text-xs font-medium">Latest Release</span>
                  </div>
                  <p className="text-white font-bold">VAGS Runner</p>
                  <p className="text-white/60 text-sm">Available on Android &amp; iOS</p>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {["Unity", "React Native", "Next.js", "Unreal Engine"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[var(--dark-color)]/30 text-amber-200 text-xs px-3 py-1 rounded-full border border-[var(--dark-color)]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
