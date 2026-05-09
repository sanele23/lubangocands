import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, BarChart2, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Services: Security, Cleaning & Consulting",
  description:
    "Explore our comprehensive security, cleaning, and consulting services. PSIRA-registered guards, professional cleaning teams, and expert advisory, all under one roof.",
};

const services = [
  {
    icon: Shield,
    title: "Security Services",
    description:
      "PSIRA-registered security personnel providing comprehensive protection solutions for commercial, industrial, and residential premises across South Africa.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Professional security officer at commercial premises",
    offerings: [
      {
        name: "Roving & Static Guards",
        desc: "Mobile patrol officers and dedicated access control.",
      },
      {
        name: "Highway Security",
        desc: "Specialised personnel for road and highway monitoring.",
      },
      {
        name: "Office & Corporate Security",
        desc: "Professional guards with strict access protocols.",
      },
      {
        name: "Mall & Retail Security",
        desc: "Customer-facing security with loss prevention focus.",
      },
      {
        name: "Complex & Estate Security",
        desc: "Full residential estate security management.",
      },
      {
        name: "Building Security",
        desc: "End-to-end management for commercial buildings.",
      },
    ],
    href: "/services/security",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description:
      "Professional cleaning solutions for commercial and residential environments, using eco-conscious products and trained cleaning specialists.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Commercial cleaning professionals at work",
    offerings: [
      {
        name: "Office & Commercial Cleaning",
        desc: "Daily, weekly, or monthly programmes.",
      },
      { name: "Deep Cleaning", desc: "Thorough top-to-bottom sanitisation." },
      {
        name: "Carpet & Window Cleaning",
        desc: "Professional extraction and streak-free finish.",
      },
      {
        name: "Disinfection Services",
        desc: "Hospital-grade disinfection for health compliance.",
      },
      {
        name: "Domestic Cleaning",
        desc: "Regular housekeeping for residential properties.",
      },
      {
        name: "Post-Construction Clean",
        desc: "Specialist clean for newly built spaces.",
      },
    ],
    href: "/services/cleaning",
  },
  {
    icon: BarChart2,
    title: "Consulting Services",
    description:
      "Strategic advisory helping organisations develop robust security frameworks and optimised facility maintenance programmes.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Business consulting session with strategy discussion",
    offerings: [
      {
        name: "Security Audits",
        desc: "Comprehensive assessment of your security posture.",
      },
      {
        name: "Risk Management",
        desc: "Identifying and mitigating operational risk.",
      },
      {
        name: "Compliance Advisory",
        desc: "Alignment with PSIRA, OHSA, and regulations.",
      },
      {
        name: "Facility Strategy",
        desc: "Optimising cleaning and maintenance operations.",
      },
      { name: "Staff Training", desc: "Professional development programmes." },
    ],
    href: "/services/consulting",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-4">
            <span className="inline-block w-6 h-px bg-gold-400" />
            What We Offer
            <span className="inline-block w-6 h-px bg-gold-400" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive security, cleaning, and consulting solutions; all
            under one trusted roof.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map(
            (
              {
                icon: Icon,
                title,
                description,
                image,
                imageAlt,
                offerings,
                href,
              },
              index,
            ) => (
              <div
                key={title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Text */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900/8 border border-navy-900/10 mb-5">
                    <Icon
                      className="w-6 h-6 text-navy-800"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                    {title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {description}
                  </p>

                  <ul className="space-y-3 mb-8" role="list">
                    {offerings.map(({ name, desc }) => (
                      <li key={name} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
                        <div>
                          <span className="text-sm font-semibold text-navy-900">
                            {name}
                          </span>
                          <span className="text-sm text-slate-500">
                            {" "}
                            — {desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-xl font-semibold text-sm hover:bg-navy-700 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    View {title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Images */}
                <div
                  className={`relative h-72 sm:h-96 rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
