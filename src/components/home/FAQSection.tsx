"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What areas do you service?",
    a: "We currently operate across Cape Town (Kuilsriver/Highbury Park), Knysna (Garden Route), and Uitenhage (Eastern Cape). We also consider projects in surrounding areas, contact us to discuss your location.",
  },
  {
    q: "Are your security guards PSIRA registered?",
    a: "Yes. All our security personnel hold valid PSIRA (Private Security Industry Regulatory Authority) registrations. We maintain strict compliance with South African security industry regulations and conduct regular audits.",
  },
  {
    q: "Do you offer once-off or contract-based services?",
    a: "We offer both. Whether you need a once-off deep clean, a specific event covered, or a comprehensive monthly service contract for security and cleaning, we have flexible options to suit your needs.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use professional-grade, eco-conscious cleaning solutions that are effective, safe for your environment, and compliant with health regulations. Products are selected based on your specific surface types and requirements.",
  },
  {
    q: "How quickly can you deploy a team after signing?",
    a: "In most cases, we can mobilise and begin services within 48–72 hours of signing an agreement and completing the site assessment. For urgent requirements, we work as fast as the situation allows.",
  },
  {
    q: "Is the initial consultation and quote free?",
    a: "Absolutely. All initial consultations, site assessments, and quotes are completely free with no obligation. We believe in building relationships first, the quote speaks for itself.",
  },
  {
    q: "Can you provide both security and cleaning for the same client?",
    a: "Yes, this is one of our key differentiators. Having a single trusted partner manage both security and cleaning means better coordination, unified reporting, and significant cost savings for you.",
  },
  {
    q: "Do you provide after-hours or weekend cleaning?",
    a: "Yes. We offer after-hours, early morning, and weekend cleaning schedules for businesses that prefer minimal disruption to their operations. We work around your timetable.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={`border-b border-slate-100 last:border-0 transition-colors duration-200 ${isOpen ? "bg-transparent" : ""}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus-visible:outline-none"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-navy-900"
              : "text-slate-700 group-hover:text-navy-900"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "bg-navy-900 border-navy-900 text-gold-400"
              : "border-slate-200 text-slate-400 group-hover:border-navy-900/30 group-hover:text-navy-900"
          }`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28 h-fit">
            <SectionHeader
              id="faq-heading"
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know before getting started with Lubango Security &amp; Cleaning."
              align="left"
            />

            <div className="mt-8 p-5 rounded-2xl bg-navy-900 border border-white/[0.06]">
              <p className="text-sm text-slate-300 leading-relaxed">
                Can't find your answer here?
              </p>
              <a
                href="mailto:info@lubangocands.co.za"
                className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
              >
                Email us directly →
              </a>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div role="list" aria-label="Frequently asked questions">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.q}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
