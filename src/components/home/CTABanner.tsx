"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 py-20 lg:py-24"
      aria-label="Call to action"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(196,161,66,0.18),transparent)] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Decorative gold lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent to-gold-500/40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-l from-transparent to-gold-500/40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-5">
            <span className="inline-block w-6 h-px bg-gold-400" />
            Ready to Get Started?
            <span className="inline-block w-6 h-px bg-gold-400" />
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            Secure Your Premises.
            <br />
            <span className="text-gold-shimmer">Elevate Your Standard</span> of
            Clean.
          </h2>

          <p className="mt-5 text-slate-300 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            Join 500+ businesses across South Africa who trust Lubango for
            professional security guarding and spotless cleaning, every single
            day.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm tracking-wide transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold active:scale-95"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27765340794"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-transparent text-white font-semibold rounded-xl text-sm tracking-wide border border-white/20 transition-all duration-200 hover:bg-white/8 hover:border-white/35 active:scale-95"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              Call +27 76 534 0794
            </a>
          </div>

          {/* Trust tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            {[
              "No obligation",
              "Response within 24hrs",
              "Free site assessment",
              "Flexible contracts",
            ].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="inline-block w-1 h-1 rounded-full bg-gold-500" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
