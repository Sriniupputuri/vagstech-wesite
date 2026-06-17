"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Code, Gamepad2, ShoppingCart, ArrowRight } from "lucide-react";

const activePill =
  "px-4 py-2 rounded-full bg-[var(--dark-color)] text-white font-semibold text-sm shadow-md shadow-amber-200/40 transition-all duration-200";
const inactiveLink =
  "px-4 py-2 rounded-full text-[var(--dark-color)] font-medium text-sm hover:bg-[var(--dark-color)]/10 transition-all duration-200";

const services = [
  {
    href: "/services/web-development",
    icon: Code,
    label: "Web Development",
    desc: "Fast, modern websites and web apps built to scale.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    href: "/services/game-development",
    icon: Gamepad2,
    label: "Game Development",
    desc: "Mobile and browser games built by our in-house studio.",
    color: "bg-green-50 text-green-600",
  },
  {
    href: "/services/ecommerce",
    icon: ShoppingCart,
    label: "E-commerce",
    desc: "Online stores designed to convert visitors into buyers.",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const clean = pathname.replace(/\/$/, "") || "/";
  const isActive = (href: string) => clean === href;
  const isServicesActive = clean.startsWith("/services");

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaOpen(false);
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/games", label: "Games" },
  ];

  return (
    <nav ref={navRef} className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center select-none font-logo font-bold tracking-widest text-lg leading-none">
              <span className="text-[var(--dark-color)]">VAGS</span><span className="text-[var(--charcoal)]">TECH</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={isActive(href) ? activePill : inactiveLink}>
                {label}
              </Link>
            ))}

            {/* Services trigger */}
            <button
              onClick={() => setMegaOpen((o) => !o)}
              className={`${isServicesActive ? activePill : inactiveLink} flex items-center gap-1`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
            </button>

            <Link href="/contact" className={isActive("/contact") ? activePill : inactiveLink}>
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="p-2 rounded-lg text-[var(--dark-color)] hover:bg-[var(--dark-color)]/10 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mega menu panel ── */}
      {megaOpen && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl shadow-gray-200/60 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Our Services
            </p>
            <div className="grid grid-cols-3 gap-4">
              {services.map(({ href, icon: Icon, label, desc, color }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMegaOpen(false)}
                  className={`group flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
                    isActive(href)
                      ? "border-[var(--dark-color)]/30 bg-amber-50/60"
                      : "border-gray-100 hover:border-[var(--accent-color)]/30 hover:bg-amber-50/40"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-[var(--charcoal)] text-sm">{label}</p>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[var(--dark-color)] group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 pb-4 pt-2">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={
                  isActive(href)
                    ? "px-4 py-2.5 rounded-xl bg-[var(--dark-color)] text-white font-semibold text-sm"
                    : "px-4 py-2.5 rounded-xl text-[var(--dark-color)] font-medium text-sm hover:bg-[var(--dark-color)]/10"
                }
              >
                {label}
              </Link>
            ))}

            {/* Mobile services list */}
            <div className={`px-4 py-2.5 rounded-xl text-sm font-medium ${isServicesActive ? "bg-[var(--dark-color)] text-white" : "text-[var(--dark-color)]"}`}>
              Services
            </div>
            <div className="pl-2 space-y-1">
              {services.map(({ href, icon: Icon, label, color }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive(href)
                      ? "bg-amber-50 text-[var(--dark-color)] font-semibold border border-[var(--dark-color)]/20"
                      : "text-[var(--dark-color)]/70 hover:bg-[var(--dark-color)]/5"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  {label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/contact")
                  ? "px-4 py-2.5 rounded-xl bg-[var(--dark-color)] text-white font-semibold text-sm"
                  : "px-4 py-2.5 rounded-xl text-[var(--dark-color)] font-medium text-sm hover:bg-[var(--dark-color)]/10"
              }
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
