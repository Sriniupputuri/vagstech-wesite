"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Gamepad2, Smartphone, Monitor } from "lucide-react";

export default function GameDevelopment() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="gradient-text">Game Development Services</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Creating immersive gaming experiences across platforms
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Gamepad2,
              title: "Console Games",
              description: "High-quality games for major gaming consoles with stunning graphics."
            },
            {
              icon: Smartphone,
              title: "Mobile Games",
              description: "Engaging mobile games optimized for iOS and Android platforms."
            },
            {
              icon: Monitor,
              title: "PC Games",
              description: "Feature-rich PC games with advanced gameplay mechanics."
            }
          ].map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="service-card">
                <service.icon className="h-12 w-12 text-[var(--dark-color)] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--dark-color)]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}