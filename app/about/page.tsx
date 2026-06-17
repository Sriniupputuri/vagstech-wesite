"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { Gamepad2, Code, ShoppingCart, ArrowRight, MapPin, Zap, Heart, Shield } from "lucide-react";

const pillars = [
  {
    icon: Gamepad2,
    title: "Game Studio",
    description: "We publish our own mobile and browser games — Frogie is our latest title, built and shipped entirely in-house.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web apps and sites for clients who need something faster and smarter than a template.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online stores built to convert — with clean product pages, fast checkout, and mobile-first design.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Ship Fast, Iterate Often",
    description: "We believe in getting real product in front of real users early. Feedback beats speculation every time.",
  },
  {
    icon: Heart,
    title: "Craft at Every Level",
    description: "From the animation curve on a button to the architecture of a database — details matter and we sweat them.",
  },
  {
    icon: Shield,
    title: "Honest Partnership",
    description: "We tell clients what's actually possible in their budget and timeline. No overselling, no surprises after kickoff.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="py-20 bg-[#fffbf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--dark-color)]">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--charcoal)] mt-3 mb-5 max-w-3xl leading-tight">
              A Studio That Builds Things People Use
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              VAGSTECH IT SERVICES is a Hyderabad-based technology studio. We build mobile games, web applications, and e-commerce platforms — both our own products and custom solutions for clients.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
              <MapPin className="h-4 w-4 text-[var(--dark-color)]" />
              Banjara Hills, Hyderabad, Telangana, India
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--charcoal)] mb-3">
              What We Do
            </h2>
            <p className="text-gray-500 mb-12 max-w-xl">
              Three things, done well. We don't try to be everything to everyone.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-[#fffbf0] rounded-2xl p-6 border border-amber-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[var(--dark-color)]/10 flex items-center justify-center mb-4">
                    <p.icon className="h-5 w-5 text-[var(--dark-color)]" />
                  </div>
                  <h3 className="font-bold text-[var(--charcoal)] mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#fffbf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden bg-[var(--charcoal)] p-8">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: "radial-gradient(ellipse at top right, rgba(245,158,11,0.5) 0%, transparent 60%)" }}
                />
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {[
                    { label: "Games Published", value: "1+" },
                    { label: "Web Projects", value: "10+" },
                    { label: "Years Active", value: "2+" },
                    { label: "City", value: "HYD" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white/8 rounded-xl p-4 border border-white/10">
                      <p className="text-2xl font-extrabold text-[var(--accent-color)]">{value}</p>
                      <p className="text-white/60 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--dark-color)]">
                Our Mission
              </span>
              <h2 className="text-3xl font-extrabold text-[var(--charcoal)] mt-3 mb-5">
                Build things that last — then keep improving them.
              </h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                At VAGSTECH, we start with the end user. Whether it's a player on a mobile game or a customer on an e-commerce checkout — their experience drives every decision we make in design and engineering.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We're a small studio on purpose. Small means every project gets senior attention, honest timelines, and a team that actually cares about the outcome.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--charcoal)] mb-12">
              How We Work
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-[#fffbf0] rounded-2xl p-6 border border-amber-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[var(--dark-color)]/10 flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-[var(--dark-color)]" />
                  </div>
                  <h3 className="font-bold text-[var(--charcoal)] mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--charcoal)]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl font-extrabold mb-4">Want to work with us?</h2>
            <p className="text-white/60 mb-8">
              We're always open to new projects, collaborations, and good ideas. Drop us a message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--dark-color)] hover:bg-[var(--hover-color)] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
