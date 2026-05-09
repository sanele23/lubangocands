"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Shield,
  Sparkles,
  BarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    label: "Security Services",
    href: "/services/security",
    icon: Shield,
    desc: "Guards, patrols & site security",
  },
  {
    label: "Cleaning Services",
    href: "/services/cleaning",
    icon: Sparkles,
    desc: "Commercial & residential cleaning",
  },
  {
    label: "Consulting",
    href: "/services/consulting",
    icon: BarChart2,
    desc: "Strategy & compliance advisory",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent",
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-18 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 focus-visible:outline-none"
          >
            <Image
              src="/lubango-logo-bg.png"
              alt="Lubango Security & Cleaning logo"
              width={108}
              height={108}
              className="rounded-lg object-contain bg-white/5 p-1"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-[0.95rem] tracking-tight">
                LUBANGO
              </span>
              <span className="text-gold-400 text-xs font-semibold tracking-[0.15em] uppercase mt-1.5">
                Security &amp; Cleaning
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (item.hasDropdown) {
                return (
                  <li key={item.label} ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      onKeyDown={(e) =>
                        e.key === "Escape" && setServicesOpen(false)
                      }
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400",
                        isActive
                          ? "text-gold-400"
                          : "text-white/80 hover:text-white hover:bg-white/8",
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-72 rounded-2xl bg-navy-800 border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden"
                          role="menu"
                        >
                          <div className="p-2">
                            {services.map(
                              ({ label, href, icon: Icon, desc }) => (
                                <Link
                                  key={href}
                                  href={href}
                                  role="menuitem"
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/8 transition-colors duration-150 group"
                                >
                                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-navy-700 border border-white/[0.06] flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                                    <Icon
                                      className="w-4.5 h-4.5 text-gold-400"
                                      strokeWidth={1.75}
                                    />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-white">
                                      {label}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-0.5">
                                      {desc}
                                    </div>
                                  </div>
                                </Link>
                              ),
                            )}
                          </div>
                          <div className="px-4 py-3 bg-navy-950/50 border-t border-white/[0.06]">
                            <Link
                              href="/services"
                              className="text-xs text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                            >
                              View all services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400",
                      isActive
                        ? "text-gold-400 bg-white/8"
                        : "text-white/80 hover:text-white hover:bg-white/8",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+27765340794"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors duration-150"
              aria-label="Call us"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+27 76 534 0794</span>
            </a>
            <Link
              href="/contact"
              className="ml-1 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-navy-900 font-semibold rounded-lg text-sm tracking-wide transition-all duration-200 hover:bg-gold-400 hover:shadow-gold hover:-translate-y-0.5 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-navy-900 border-l border-white/[0.08] flex flex-col lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/lubango-logo.png"
                    alt="Lubango Security & Cleaning logo"
                    width={32}
                    height={32}
                    className="rounded-lg object-contain"
                  />
                  <span className="font-display font-bold text-white text-sm">
                    LUBANGO C&S
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/70 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  if (item.hasDropdown) {
                    return (
                      <div key={item.label}>
                        <div className="px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-widest mt-4 mb-1">
                          Services
                        </div>
                        {services.map(({ label, href, icon: Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/8 text-sm font-medium transition-colors"
                          >
                            <Icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                            {label}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "text-gold-400 bg-white/8"
                          : "text-white/70 hover:text-white hover:bg-white/8",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-5 border-t border-white/[0.08] space-y-3">
                <a
                  href="tel:+27765340794"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/8 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  +27 76 534 0794
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 bg-gold-500 text-navy-900 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
