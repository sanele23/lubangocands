"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To protect and empower South African communities through comprehensive, high-quality safety and maintenance services.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To be the most trusted and recommended security and cleaning partner across every province we operate in.",
  },
  {
    icon: Heart,
    label: "Our Values",
    text: "Integrity, reliability, excellence, and a client-first mindset in everything we do.",
  },
];

export function AboutSection() {
  return (
    <section
      className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual block */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="relative"
          >
            {/* Large decorative number */}
            <div className="absolute -top-6 -left-4 font-display text-[10rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
              10
            </div>

            <div className="relative grid grid-cols-2 gap-4">
              {/* Main card */}
              <div className="col-span-2 rounded-2xl bg-navy-800/60 border border-white/[0.07] p-8 backdrop-blur-sm">
                <p className="font-display text-2xl font-bold text-white leading-snug">
                  &ldquo;Protecting and empowering the communities we serve
                  since 2014.&rdquo;
                </p>
                <div className="mt-4 text-sm text-slate-400 leading-relaxed">
                  What started as a single-location operation in Cape Town has
                  grown into a multi-province service provider trusted by
                  hundreds of commercial and residential clients.
                </div>
              </div>

              {/* Stat cards */}
              {[
                {
                  value: "3",
                  unit: "Provinces",
                  sub: "Cape Town · Knysna · Uitenhage",
                },
                {
                  value: "500+",
                  unit: "Clients",
                  sub: "Businesses & residences",
                },
              ].map(({ value, unit, sub }) => (
                <div
                  key={unit}
                  className="rounded-2xl bg-navy-800/40 border border-white/[0.06] p-6 backdrop-blur-sm"
                >
                  <div className="font-display text-3xl font-bold text-white">
                    {value}
                  </div>
                  <div className="font-semibold text-white/80 text-sm mt-0.5">
                    {unit}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              delay: 0.1,
            }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-4">
              <span className="inline-block w-6 h-px bg-gold-400" />
              About Lubango C&S
            </span>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-white"
            >
              Built on Trust.
              <br />
              Delivered with Excellence.
            </h2>

            <p className="mt-5 text-slate-300 text-base leading-relaxed">
              Lubango Security &amp; Cleaning was founded with a clear purpose:
              to provide South African businesses and homeowners with
              professional, reliable security and cleaning services that
              genuinely make a difference.
            </p>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              We invest heavily in our people, from rigorous recruitment and
              background checks to ongoing skills development. Because we
              believe the best service starts with the best team.
            </p>

            {/* Values */}
            <div className="mt-8 space-y-4">
              {values.map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold-500/15 border border-gold-500/25 flex items-center justify-center mt-0.5">
                    <Icon
                      className="w-4 h-4 text-gold-400"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {label}
                    </div>
                    <div className="text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm tracking-wide transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold active:scale-95"
            >
              Our Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
