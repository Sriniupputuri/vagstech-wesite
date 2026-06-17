"use client";

import Link from "next/link";
import { Code, Gamepad2, ShoppingCart, ArrowRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const services = [
  {
    icon: Code,
    title: "Web Development",
    tagline: "Fast, modern websites and web apps built to scale.",
    link: "/services/web-development",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    tagline: "Mobile and browser games built by our in-house studio.",
    link: "/services/game-development",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    tagline: "Online stores designed to convert visitors into buyers.",
    link: "/services/ecommerce",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-[#fffbf0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--dark-color)]">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--charcoal)] mt-2">
              Our Services
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <Link href={service.link} className="block group">
                <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 hover:border-[var(--accent-color)]/40 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-[var(--charcoal)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Arrow link */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--dark-color)] group-hover:gap-3 transition-all duration-200">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
