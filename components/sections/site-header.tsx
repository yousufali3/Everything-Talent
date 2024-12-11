"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="h-8 w-8"
          >
            <circle cx="16" cy="16" r="8" fill="#4F46E5" />
            <circle cx="8" cy="16" r="6" fill="#EC4899" fillOpacity="0.8" />
            <circle cx="24" cy="16" r="6" fill="#14B8A6" fillOpacity="0.8" />
          </svg>
          <Link href="/" className="flex text-black items-center space-x-2">
            <span className="font-bold">Everything Talent</span>
          </Link>
        </div>

        {/* Nav for Desktop */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/use-cases"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Use Cases
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Blog
          </Link>
          <Link
            href="/support"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Support
          </Link>
        </nav>

        {/* Theme Toggle and Button */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button>
            Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 bg-background p-4 text-sm">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/use-cases"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Use Cases
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Blog
          </Link>
          <Link
            href="/support"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Support
          </Link>
        </nav>
      )}
    </header>
  );
}
