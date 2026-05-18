"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Logo from '../public/images/vagstech_logo_transparent.png'
// import Logo from '../public/images/vg_icon.png'
// import bgLog from '../public/images/logo.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const ServicesDropdown = () => {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="nav-link flex items-center text-[var(--dark-color)]">
            Services <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="rounded-md bg-white shadow-lg z-50 border-none"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group relative flex h-[30px] border-[var(--dark-color)] items-center rounded-md px-4 text-[14px] hover:bg-[var(--dark-color)] hover:text-[var(--dark-color)] cursor-pointer">
              <Link href="/services/web-development" className="w-full" onClick={() => setIsOpen(!isOpen)}>
                Web Development
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group relative flex h-[30px] border-none items-center rounded-md pl-4 pr-4 text-[14px] hover:bg-[var(--dark-color)] hover:text-[var(--dark-color)] cursor-pointer">
              <Link href="/services/game-development" className="w-full" onClick={() => setIsOpen(!isOpen)}>
                Game Development
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group relative flex h-[30px] border-none items-center rounded-md pl-4 pr-4 text-[14px] hover:bg-[var(--dark-color)] hover:text-[var(--dark-color)] cursor-pointer">
              <Link href="/services/ecommerce" className="w-full" onClick={() => setIsOpen(!isOpen)}>
                E-commerce
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  };
// [var(--light-color)]
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[var(--dark-color)]">
              {/* VAGSTECH */}
              {/* <img src={Logo} alt="VAGSTECH" className="h-12 w-auto" /> */}
              <Image
                src={Logo} 
                alt="Logo"
                // layout="fill" 
                objectFit="cover"
                className="h-20 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-[var(--dark-color)] space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            {/* <Link href="/courses" className="nav-link">
            courses
            </Link> */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/web-development" className="w-full">
                    Web Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/game-development" className="w-full">
                    Game Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/ecommerce" className="w-full">
                    E-commerce
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <ServicesDropdown />
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--dark-color)]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {/* <Link
                href="/courses"
                className="block nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link> */}
              <div className="block nav-link py-2">
                Services
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/web-development"
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/game-development"
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    Game Development
                  </Link>
                  <Link
                    href="/services/ecommerce"
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    E-commerce
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className="block nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
