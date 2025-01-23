"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Gamepad2, ShoppingCart, Database, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "../animations/FadeIn";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications with cutting-edge technologies. Specializing in React, Next.js, and full-stack solutions for businesses of all sizes.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    link: "/services/web-development",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Immersive gaming experiences using Unity and Unreal Engine. From mobile games to VR experiences, we bring your vision to life.",
    features: ["Cross-platform", "3D/2D Games", "Multiplayer Support"],
    link: "/services/game-development",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Scalable online stores with seamless payment integration. Built for growth with advanced analytics and inventory management.",
    features: ["Secure Payments", "Inventory Management", "Mobile Commerce"],
    link: "/services/ecommerce",
  },
  // {
  //   icon: Database,
  //   title: "Database Solutions",
  //   description: "Robust database architecture and optimization services to ensure your data is secure, efficient, and scalable.",
  //   features: ["Data Migration", "Performance Tuning", "Backup Solutions"],
  //   link: "/services/database",
  // },
  // {
  //   icon: Cloud,
  //   title: "Cloud Services",
  //   description: "Comprehensive cloud solutions using AWS, Azure, and Google Cloud. Optimize your infrastructure for performance and cost.",
  //   features: ["Cloud Migration", "DevOps", "Scalability"],
  //   link: "/services/cloud",
  // },
  // {
  //   icon: Shield,
  //   title: "Cybersecurity",
  //   description: "Protect your digital assets with our comprehensive security solutions and best practices implementation.",
  //   features: ["Security Audits", "Penetration Testing", "Compliance"],
  //   link: "/services/security",
  // },
];

export default function ServicesSection() {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-[var(--light-color)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to elevate your business
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="service-card"
              >
                <service.icon className="h-12 w-12 text-[var(--dark-color)] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--dark-color)]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--dark-color)] mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={service.link} className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full text-[var(--dark-color)] border-[var(--dark-color)] hover:bg-[var(--dark-color)] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}