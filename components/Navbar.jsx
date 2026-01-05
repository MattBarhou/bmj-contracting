"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiPhone, HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-200">
      <nav className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/bmj_logo.png"
              alt="BMJ Contracting"
              width={160}
              height={60}
              className="h-14 rounded-full w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-base-content/80 hover:text-primary hover:bg-primary/10 font-medium transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4162194163"
              className="flex items-center gap-2 text-base-content/80 hover:text-primary font-medium transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              (416) 219-4163
            </a>
            <Link
              href="mailto:info@bmjcontracting.ca?subject=Quote Request"
              className="btn btn-primary btn-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost btn-square"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-base-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base-content/80 hover:text-primary hover:bg-base-200 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-base-200 flex flex-col gap-3 px-4">
                <a
                  href="tel:4162194163"
                  className="flex items-center gap-2 text-base-content/80 hover:text-primary font-medium"
                >
                  <HiPhone className="w-5 h-5" />
                  (416) 219-4163
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary btn-block"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
