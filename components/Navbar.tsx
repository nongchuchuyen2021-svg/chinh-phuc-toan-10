"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isSoundEnabled, setSoundEnabled, playClick } from "@/lib/sound";

export default function Navbar() {
  const pathname = usePathname();
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClick();
  };

  const navLinks = [
    { href: "/", label: "Trang chủ", icon: "🏠" },
    { href: "/cong-thuc", label: "Sổ tay Công thức", icon: "📑", badge: "Hot" },
    { href: "/casio", label: "Tips Casio 580", icon: "⚡" },
    { href: "/thi-thu", label: "Thi thử trực tuyến", icon: "🏆", highlight: true },
    { href: "/on-tap", label: "Ôn câu sai", icon: "🎯" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-void-border/80 bg-void/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => playClick()}
          className="group flex items-center gap-3 transition"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-violet p-0.5 shadow-glow-cyan">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-void-card text-lg transition group-hover:bg-transparent">
              📐
            </div>
          </div>
          <div>
            <span className="block font-display text-lg font-bold leading-tight tracking-tight text-star sm:text-xl">
              Chinh Phục{" "}
              <span className="bg-gradient-to-r from-cyan-glow via-violet-glow to-amber bg-clip-text text-transparent">
                Toán 10
              </span>
            </span>
            <span className="block font-mono text-[10px] text-star-mute group-hover:text-cyan transition-colors">
              THPT Na Rì · Kết nối tri thức
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => playClick()}
                className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan/15 text-cyan-glow shadow-glow-cyan border border-cyan/40"
                    : link.highlight
                    ? "bg-gradient-to-r from-violet/20 to-cyan/20 text-star border border-violet/40 hover:border-cyan/50 hover:shadow-glow-violet"
                    : "text-star-soft hover:bg-void-subtle hover:text-star border border-transparent"
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-amber/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-amber-glow border border-amber/30">
                    {link.badge}
                  </span>
                )}
                {link.highlight && !isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            title={soundOn ? "Tắt âm thanh hiệu ứng" : "Bật âm thanh hiệu ứng"}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border text-sm transition-all duration-200 ${
              soundOn
                ? "border-cyan/30 bg-cyan/10 text-cyan-glow hover:bg-cyan/20 hover:border-cyan/50"
                : "border-void-border bg-void-card text-star-mute hover:text-star hover:border-void-subtle"
            }`}
          >
            {soundOn ? "🔊" : "🔇"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-void-border bg-void-card text-star-soft hover:text-star md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-void-border/70 bg-void-card/95 px-4 py-3 backdrop-blur-xl md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold transition ${
                    isActive
                      ? "bg-cyan/15 text-cyan-glow border border-cyan/40"
                      : "text-star-soft hover:bg-void-subtle hover:text-star"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="rounded-full bg-amber/20 px-2 py-0.5 font-mono text-[9px] font-bold text-amber-glow">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
