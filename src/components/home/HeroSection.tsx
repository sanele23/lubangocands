"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";

const trustBadges = [
  { icon: CheckCircle2, text: "PSIRA Registered" },
  { icon: CheckCircle2, text: "Fully Insured" },
  { icon: CheckCircle2, text: "24/7 Available" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900"
      aria-label="Hero"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Glow accents */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-navy-700/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/25">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-semibold text-gold-400 tracking-wide uppercase">
                South Africa&apos;s Trusted Partner
              </span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
              ))}
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] xl:text-[4.75rem] font-bold leading-[1.08] tracking-tight text-white"
          >
            Your Trusted Partner
            <br />
            for <span className="text-gold-shimmer">Security &amp;</span>
            <br />
            <span className="text-gold-shimmer">Cleaning</span> Services
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl"
          >
            Comprehensive security guarding and professional cleaning solutions
            across Cape Town, Knysna, and Uitenhage, built on integrity, trained
            personnel, and an unwavering commitment to your peace of mind.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm tracking-wide transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold active:scale-95"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-transparent text-white font-semibold rounded-xl text-sm tracking-wide border border-white/20 transition-all duration-200 hover:bg-white/8 hover:border-white/35 active:scale-95"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-gold-400" strokeWidth={2} />
                <span className="text-sm text-slate-300 font-medium">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Location chips */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <MapPin className="w-3 h-3" /> Serving:
            </span>
            {["Cape Town", "Knysna", "Uitenhage"].map((city) => (
              <span
                key={city}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/6 border border-white/[0.08] text-slate-300"
              >
                {city}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating service icons */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
      >
        {[
          {
            Icon: Shield,
            label: "Security",
            color: "from-navy-800 to-navy-700",
          },
          {
            Icon: Sparkles,
            label: "Cleaning",
            color: "from-navy-800 to-navy-700",
          },
        ].map(({ Icon, label, color }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05, y: -4 }}
            className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-br ${color} border border-white/[0.07] shadow-xl backdrop-blur-sm cursor-default`}
          >
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/25 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold-400" strokeWidth={1.75} />
            </div>
            <span className="text-xs font-semibold text-white/80 tracking-wide">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
