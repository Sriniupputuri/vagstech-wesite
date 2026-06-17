"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Smartphone, Globe, BarChart3, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

const apps = [
  {
    title: "VAGS Sync",
    description: "A smart file and data sync app that keeps all your devices in perfect harmony — fast, encrypted, and built for everyday use.",
    platform: "Android / iOS / Web",
    category: "Productivity",
    icon: Layers,
    status: "Available",
    cta: "Learn More",
    link: "/contact",
  },
  {
    title: "VAGS Connect",
    description: "A streamlined business communication app — chat, share files, and manage projects all in one place, built for small teams.",
    platform: "Android / iOS",
    category: "Communication",
    icon: Globe,
    status: "Available",
    cta: "Learn More",
    link: "/contact",
  },
  {
    title: "VAGS Track",
    description: "A personal analytics and habit-tracking app that visualises your progress and keeps you on course toward your goals.",
    platform: "Android / iOS",
    category: "Lifestyle",
    icon: BarChart3,
    status: "Coming Soon",
    cta: "Get Notified",
    link: "/contact",
  },
];

export default function AppsPage() {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Our Apps</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Purposeful mobile and web apps built to solve real problems — designed for clarity, built for performance.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="service-card group cursor-pointer relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <app.icon className="h-10 w-10 text-[var(--dark-color)]" />
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      app.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-[var(--dark-color)]">
                  {app.title}
                </h3>

                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-[var(--light-color)] text-white px-2 py-1 rounded">
                    {app.category}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {app.platform}
                  </span>
                </div>

                <p className="text-gray-600 text-sm flex-1 mb-6">
                  {app.description}
                </p>

                <Link
                  href={app.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--dark-color)] hover:text-[var(--hover-color)] transition-colors duration-300"
                >
                  {app.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-20 text-center bg-gradient-to-r from-[var(--dark-color)] to-[var(--hover-color)] rounded-2xl p-12 text-white">
            <Smartphone className="h-14 w-14 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">Have an App Idea?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              From concept to launch, we handle the full lifecycle. Tell us what you want to build.
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
