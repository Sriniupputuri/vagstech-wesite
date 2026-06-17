"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import {
  Code2, Smartphone, Zap, Search, Globe, RefreshCw, ArrowRight
} from "lucide-react";

const offerings = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "We build web apps tailored to your business — from internal dashboards to customer-facing platforms. Built with React, Next.js, and TypeScript for long-term maintainability.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Design",
    description:
      "Every site we ship works flawlessly on phones, tablets, and desktops. We design mobile-first so your users get the best experience regardless of their device.",
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description:
      "Slow sites lose users. We obsess over load times — code splitting, image optimisation, caching, and CDN delivery so your site scores high on Core Web Vitals.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    description:
      "Clean semantic HTML, proper meta tags, structured data, and server-side rendering where it counts — so search engines can find and rank your pages.",
  },
  {
    icon: Globe,
    title: "Static & Serverless Deployments",
    description:
      "We deploy to Netlify, Vercel, or your own infrastructure. Static exports mean near-zero hosting costs with global CDN speeds for most sites.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support & Maintenance",
    description:
      "We don't disappear after launch. We offer maintenance packages for updates, dependency upgrades, bug fixes, and feature additions as your business grows.",
  },
];

const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Netlify / Vercel"];

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-[#fffbf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--dark-color)]">
              Service
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--charcoal)] mt-3 mb-5 max-w-3xl leading-tight">
              We Build Websites That Actually Work
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mb-8">
              Fast, scalable, and built to last. VAGSTECH delivers web solutions for businesses that need more than a template — from landing pages to full-stack applications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--dark-color)] hover:bg-[var(--hover-color)] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
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
                <div className="bg-[#fffbf0] rounded-2xl p-6 border border-amber-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[var(--dark-color)]/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[var(--dark-color)]" />
                  </div>
                  <h3 className="font-bold text-[var(--charcoal)] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-[#fffbf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-extrabold text-[var(--charcoal)] mb-8">Our Stack</h2>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white border border-amber-200 text-[var(--charcoal)] font-medium text-sm px-4 py-2 rounded-full"
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
            <h2 className="text-3xl font-extrabold mb-4">Ready to build something?</h2>
            <p className="text-white/60 mb-8">
              Tell us about your project and we'll come back with a plan and a quote — no obligation.
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
