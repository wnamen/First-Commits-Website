"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/partner", label: "Partner" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled
          ? "py-4 bg-black/80 backdrop-blur-xl border-b border-gray-900"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border border-white/20 rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
              <div className="absolute inset-1 border border-white/40 rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
              <div className="absolute inset-2 bg-white rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
            </div>
            <span className="text-lg font-medium tracking-tight">
              First Commits
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-5 right-5 h-px bg-white" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/apply"
              className="px-6 py-2.5 text-sm font-medium tracking-wide bg-white text-black transition-all duration-300 hover:bg-gray-100"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out-expo ${
            isMobileMenuOpen ? "max-h-80 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 text-lg tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 text-center text-sm font-medium tracking-wide bg-white text-black transition-all duration-300 hover:bg-gray-100"
            >
              Request Access
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
