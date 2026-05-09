"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Clock,
  Settings,
  Leaf,
  HeartHandshake,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description:
      "All operations are fully licensed with comprehensive insurance coverage for your complete peace of mind.",
  },
  {
    icon: UserCheck,
    title: "Vetted & Trained Personnel",
    description:
      "Every team member undergoes rigorous background checks, PSIRA registration, and ongoing professional training.",
  },
  {
    icon: Clock,
    title: "24/7 Round-the-Clock Service",
    description:
      "Security threats and cleaning emergencies don't keep business hours. Neither do we.",
  },
  {
    icon: Settings,
    title: "Tailored Service Plans",
    description:
      "No two clients are alike. We design custom solutions aligned to your specific premises, budget, and requirements.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Approach",
    description:
      "We use professional-grade, environmentally responsible cleaning products that are safe for people and the planet.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Philosophy",
    description:
      "Your satisfaction isn't just a goal, it's our standard. We measure success by the relationships we build.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const featureItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Headline block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-600 mb-4">
              <span className="inline-block w-6 h-px bg-gold-500" />
              Why Lubango
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-navy-900">
              Why Businesses
              <br />
              <span className="text-gold-shimmer mt-8">Trust Lubango</span>
            </h2>

            <p className="mt-5 text-slate-500 text-base lg:text-lg leading-relaxed">
              We've built our reputation on one simple principle: do the job
              right, every single time. Here's what sets us apart from the rest.
            </p>

            <blockquote className="mt-8 pl-5 border-l-2 border-gold-500">
              <p className="text-navy-900 font-medium text-base italic leading-relaxed">
                &ldquo;Our commitment is keeping you safe and clean,
                always.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-slate-400 not-italic">
                , Lubango C&S Founding Principle
              </footer>
            </blockquote>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { value: "10+", label: "Years in Business" },
                { value: "100%", label: "Client Retention Focus" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="font-display text-3xl font-bold text-navy-900">
                    {value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={featureItem}
                className="group p-5 rounded-2xl border border-slate-100 bg-white hover:border-gold-500/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-900/5 border border-navy-900/8 flex items-center justify-center mb-4 group-hover:bg-gold-500/12 group-hover:border-gold-500/25 transition-all duration-300">
                  <Icon
                    className="w-5 h-5 text-navy-800 group-hover:text-gold-600 transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
