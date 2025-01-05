"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Code, Laptop, Zap } from "lucide-react";

export default function WebDevelopment() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="gradient-text">Web Development Services</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Creating powerful, scalable, and beautiful web solutions
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Code,
              title: "Custom Development",
              description: "Tailored web applications built with modern technologies and best practices."
            },
            {
              icon: Laptop,
              title: "Responsive Design",
              description: "Beautiful interfaces that work seamlessly across all devices and screen sizes."
            },
            {
              icon: Zap,
              title: "Performance Optimization",
              description: "Lightning-fast loading times and optimal user experience."
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