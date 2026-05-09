"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, BarChart2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    id: "security",
    icon: Shield,
    title: "Security Services",
    description:
      "Professional PSIRA-registered security personnel providing comprehensive protection for your premises, people, and assets.",
    items: [
      "Roving & Static Guards",
      "Highway Security",
      "Mall & Complex Security",
      "Office & Building Security",
    ],
    href: "/services/security",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Professional security officer monitoring premises",
    dark: true,
  },
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Cleaning Services",
    description:
      "Meticulous commercial and residential cleaning using professional-grade, eco-conscious products for a spotless environment.",
    items: [
      "Office & Commercial Cleaning",
      "Deep & Spring Cleaning",
      "Carpet & Window Cleaning",
      "Disinfection Services",
    ],
    href: "/services/cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Professional cleaning team in a commercial space",
    dark: false,
    featured: true,
  },
  {
    id: "consulting",
    icon: BarChart2,
    title: "Consulting Services",
    description:
      "Strategic safety and facility management consulting to help organisations optimise their security posture and maintenance programmes.",
    items: [
      "Security Audits & Assessments",
      "Risk Management Advisory",
      "Compliance Consulting",
      "Facility Management Strategy",
    ],
    href: "/services/consulting",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Business consulting strategy session around a table",
    dark: true,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function ServicesOverview() {
  return (
    <section
      className="bg-slate-50 py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Comprehensive Protection <br class='hidden sm:block' /> &amp; Maintenance Solutions"
          description="From first-class security personnel to immaculate cleaning services, we deliver excellence across every engagement."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {services.map(
            ({
              id,
              icon: Icon,
              title,
              description,
              items,
              href,
              image,
              imageAlt,
              dark,
              featured,
            }) => (
              <motion.article
                key={id}
                variants={card}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                  dark
                    ? "bg-navy-900 shadow-lg hover:shadow-2xl hover:shadow-black/25"
                    : "bg-white shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* Service image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay, stronger at bottom so text is always readable */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      dark
                        ? "from-navy-900 via-navy-900/50 to-navy-900/10"
                        : "from-white/80 via-white/20 to-transparent"
                    }`}
                  />
                  {/* Icon badge on image */}
                  <div className="absolute bottom-4 left-5">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border backdrop-blur-sm ${
                        dark
                          ? "bg-navy-900/70 border-white/15"
                          : "bg-white/85 border-white/60 shadow-sm"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${dark ? "text-gold-400" : "text-navy-800"}`}
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                  {/* Top border accent shimmer on hover */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card content */}
                <div className="p-7">
                  <h3
                    className={`font-display text-xl font-bold mb-3 ${dark ? "text-white" : "text-navy-900"}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${dark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {description}
                  </p>

                  <ul className="space-y-2 mb-8" role="list">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <span
                          className={`inline-block w-1 h-1 rounded-full flex-shrink-0 ${
                            dark ? "bg-gold-400" : "bg-gold-500"
                          }`}
                        />
                        <span
                          className={dark ? "text-slate-300" : "text-slate-600"}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link ${
                      dark
                        ? "text-gold-400 hover:text-gold-300"
                        : "text-navy-900 hover:text-gold-600"
                    }`}
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ),
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-navy-800/20 text-navy-900 font-semibold text-sm hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-200 hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
