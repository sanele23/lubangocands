"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description:
      "We begin with a no-obligation conversation to understand your specific security and cleaning requirements, challenges, and goals.",
  },
  {
    number: "02",
    icon: Search,
    title: "Site Assessment",
    description:
      "Our specialists conduct a thorough on-site evaluation of your premises, identifying risks, access points, and cleaning priorities.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Custom Service Plan",
    description:
      "We design a tailored solution, scope of work, staffing, schedules, and pricing, aligned precisely to your needs and budget.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Professional Execution",
    description:
      "Our vetted and trained team delivers consistent, high-quality service. Regular reporting and reviews ensure ongoing excellence.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="bg-slate-50 py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="process-heading"
          eyebrow="Our Process"
          title="How We Work"
          description="A streamlined, four-step approach that gets you protected and serviced with minimal disruption."
          align="center"
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-10 left-0 right-0 h-px bg-slate-200 hidden lg:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500/60 to-gold-300/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 shadow-card flex flex-col items-center justify-center mb-5 transition-all duration-300 group-hover:border-gold-500/40">
                    <span className="font-display text-xs font-bold text-gold-500 tracking-wider">
                      {step.number}
                    </span>
                    <step.icon
                      className="w-6 h-6 text-navy-900 mt-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
