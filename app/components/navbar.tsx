"use client";

import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { handleSmoothScroll } from './smoothScroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 md:px-16 lg:px-40 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/log.png"
            alt="Devix Logo"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 rounded-md"
          />
          <span className="text-2xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Devix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["Services", "Features", "Products", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            onClick={() => handleSmoothScroll(null, "contact")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-screen bg-black/95 border-b border-slate-800 transition-all duration-300 flex flex-col items-center",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-6 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center gap-6 pt-20">
          {["Services", "Features", "Products", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors py-2 cursor-pointer text-lg"
              onClick={(e) => {
                handleSmoothScroll(e, item.toLowerCase());
                setIsMenuOpen(false); // Close mobile menu after clicking
              }}
            >
              {item}
            </a>
          ))}

          <Button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-11/12 mt-4"
            onClick={() => {
              handleSmoothScroll(null, "contact");
              setIsMenuOpen(false); // Close mobile menu after clicking
            }}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}