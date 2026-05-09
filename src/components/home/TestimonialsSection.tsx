"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: "1",
    quote:
      "Lubango has completely transformed how we manage building security. Their team is professional, always responsive, and genuinely invested in our safety. I cannot recommend them highly enough.",
    author: "Sarah M.",
    role: "Property Manager",
    company: "Cape Town CBD",
    rating: 5,
    initials: "SM",
  },
  {
    id: "2",
    quote:
      "The cleaning team is incredibly thorough and detail-oriented. Our office has never been cleaner. The fact that they show up consistently and on time, week after week, is invaluable to us.",
    author: "David K.",
    role: "Operations Director",
    company: "Knysna Business Park",
    rating: 5,
    initials: "DK",
  },
  {
    id: "3",
    quote:
      "We've used Lubango for both security and cleaning for over three years. Their integrated approach saves us significant time and budget. The communication is excellent and issues are resolved immediately.",
    author: "Nomsa P.",
    role: "Facilities Manager",
    company: "Industrial Complex, Uitenhage",
    rating: 5,
    initials: "NP",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="bg-slate-50 py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          description="Don't take our word for it. Here's what the businesses and property managers who rely on us every day have to say."
          align="center"
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map(
            ({ id, quote, author, role, company, rating, initials }) => (
              <motion.article
                key={id}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1] as [
                        number,
                        number,
                        number,
                        number,
                      ],
                    },
                  },
                }}
                className="relative bg-white rounded-2xl border border-slate-100 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="absolute top-5 right-6">
                  <Quote className="w-7 h-7 text-slate-100 fill-slate-100" />
                </div>

                {/* Stars */}
                <div
                  className="flex items-center gap-0.5 mb-5"
                  aria-label={`${rating} stars`}
                >
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-gold-500 fill-gold-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <div
                    className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-bold text-gold-400">
                      {initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">
                      {author}
                    </div>
                    <div className="text-xs text-slate-400">
                      {role} · {company}
                    </div>
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          Trusted by 500+ clients across Cape Town, Knysna &amp; Uitenhage
        </motion.p>
      </div>
    </section>
  );
}
