"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Anchor } from "lucide-react";

const NAV_LINKS = [
  { label: "Đặt Vấn Đề", href: "#dat-van-de" },
  { label: "Lý Luận Cốt Lõi", href: "#ly-luan-cot-loi" },
  { label: "Vận Dụng Thực Tiễn", href: "#van-dung-thuc-tien" },
  { label: "Bài Học & Giải Pháp", href: "#bai-hoc-giai-phap" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-2xl" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          id="header-logo-btn"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #8B0000, #b30000)" }}>
            <Anchor className="w-4 h-4 text-yellow-300" />
          </div>
          <span className="font-playfair font-bold text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif", color: "#D4AF37", letterSpacing: "0.15em" }}>
            HCM202
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              id={`nav-${link.href.slice(1)}`}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${active === link.href
                  ? "text-yellow-300"
                  : "text-gray-400 hover:text-gray-100"
                }`}
              style={
                active === link.href
                  ? {
                    background: "rgba(139,0,0,0.35)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }
                  : { background: "transparent", border: "1px solid transparent" }
              }
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t"
            style={{ borderTopColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  id={`mobile-nav-${link.href.slice(1)}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${active === link.href
                      ? "text-yellow-300"
                      : "text-gray-400 hover:text-gray-100 hover:bg-white/5"
                    }`}
                  style={active === link.href ? { background: "rgba(139,0,0,0.3)" } : {}}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
