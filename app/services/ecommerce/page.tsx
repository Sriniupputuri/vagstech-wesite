"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import {
  ShoppingBag, CreditCard, BarChart2, Package, Smartphone, Headphones, ArrowRight
} from "lucide-react";

const offerings = [
  {
    icon: ShoppingBag,
    title: "Custom Online Storefronts",
    description:
      "We build storefronts that reflect your brand — not generic templates. Whether it's Next.js with a headless CMS or a Shopify theme, we build for conversion and speed.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment Integration",
    description:
      "Stripe, Razorpay, PayPal, UPI — we wire up payment gateways with proper webhook handling, refund flows, and PCI-compliant checkout pages.",
  },
  {
    icon: Package,
    title: "Inventory & Order Management",
    description:
      "Track stock levels, manage SKUs, handle returns, and automate low-stock alerts. We integrate with your existing warehouse or build a lightweight system from scratch.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description:
      "More than half of online purchases happen on mobile. We design and test every store on real devices so your checkout flow never breaks on a small screen.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Sales Reporting",
    description:
      "See which products sell, where visitors drop off, and what drives repeat purchases. We set up Google Analytics 4, Meta Pixel, and custom dashboards.",
  },
  {
    icon: Headphones,
    title: "Ongoing Store Management",
    description:
      "New season, new products? We offer retainer plans for content updates, promotional banners, discount codes, and performance monitoring.",
  },
];

const stack = ["Next.js", "Shopify", "WooCommerce", "Stripe", "Razorpay", "Google Analytics 4"];

export default function Ecommerce() {
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
              Your Online Store, Built to Sell
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mb-8">
              We build e-commerce platforms that convert visitors into buyers and buyers into repeat customers — with fast checkout, clear product pages, and mobile-first design.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--dark-color)] hover:bg-[var(--hover-color)] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Launch Your Store <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-3xl font-extrabold mb-4">Ready to start selling?</h2>
            <p className="text-white/60 mb-8">
              Share your product catalogue and goals — we'll scope a store that fits your budget and timeline.
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
