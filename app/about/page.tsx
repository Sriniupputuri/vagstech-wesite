"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-8 Pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        {/* <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="gradient-text">About Vagstech</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Pioneering digital innovation with expertise and creativity
          </p>
        </FadeIn> */}

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn direction="right">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold mb-6 text-[var(--dark-color)]">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Vagstech, we're driven by a singular mission: to transform businesses through innovative digital solutions. We combine cutting-edge technology with creative excellence to deliver exceptional results that drive growth and success.
            </p>
            <p className="text-gray-600">
              Our team of experts works tirelessly to stay ahead of industry trends, ensuring our clients receive the most advanced and effective solutions for their digital needs.
            </p>
          </FadeIn>
        </div>

        {/* Values Section */}
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--dark-color)]">Our Values</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Innovation",
              description: "We constantly push boundaries to create cutting-edge solutions that set new industry standards."
            },
            {
              title: "Excellence",
              description: "We maintain the highest standards in everything we do, from code quality to client service."
            },
            {
              title: "Integrity",
              description: "We build trust through transparency, honesty, and ethical business practices."
            }
          ].map((value, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="service-card"
              >
                <h3 className="text-2xl font-bold mb-4 text-[var(--dark-color)]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Team Section */}
        {/* <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[var(--dark-color)]">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who drive our innovation and success
            </p>
          </div>
        </FadeIn> */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO & Founder",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
            },
            {
              name: "Michael Chen",
              role: "CTO",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
            },
            {
              name: "Emily Rodriguez",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
            }
          ].map((member, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-[var(--dark-color)]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div> */}
      </div>
    </div>
  );
}