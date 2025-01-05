"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-[var(--light-color)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Transform.</span><br />
              <span className="gradient-text">Innovate.</span><br />
              <span className="gradient-text">Excel.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              VAGSTECH IT SOLUTIONS - Your partner in digital transformation. We deliver cutting-edge technology solutions that drive growth and innovation.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--dark-color)] hover:bg-[var(--hover-color)] text-white px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                alt="Digital Innovation"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[var(--light-color)]/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--dark-color)]/10 rounded-full filter blur-3xl" />
    </section>
  );
}