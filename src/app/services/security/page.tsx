import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Users,
  Car,
  Building2,
  Store,
  Home,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Security Services: PSIRA Registered Guards & Patrols",
  description:
    "Professional PSIRA-registered security services including roving guards, static posts, highway security, and mall security across Cape Town, Knysna, and Uitenhage.",
};

const securityServices = [
  {
    icon: Users,
    name: "Roving Guards",
    description:
      "Mobile patrol officers conducting scheduled and randomised patrols of your property perimeter, parking areas, and access points.",
  },
  {
    icon: Car,
    name: "Highway Security",
    description:
      "Specialised security personnel for road, toll, and highway monitoring and access management.",
  },
  {
    icon: Building2,
    name: "Office Security",
    description:
      "Professional front-of-house security with strict visitor management, access control, and CCTV monitoring protocols.",
  },
  {
    icon: Store,
    name: "Mall & Retail Security",
    description:
      "Customer-facing security officers trained in conflict resolution and retail loss prevention.",
  },
  {
    icon: Home,
    name: "Complex Security",
    description:
      "Full estate and residential complex security, from boom gate management to 24/7 guard deployment.",
  },
  {
    icon: Shield,
    name: "Building Security",
    description:
      "Comprehensive security management for multi-tenant commercial buildings and business parks.",
  },
];

const credentials = [
  "PSIRA Registered",
  "Background Checked Staff",
  "24/7 Availability",
  "Fully Insured",
  "Uniformed Personnel",
  "Trained in First Aid",
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            {/* Text */}
            <div className="pb-16 lg:pb-20">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-4">
                <span className="inline-block w-6 h-px bg-gold-400" />
                Our Services
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Professional Security
                <br />
                Services
              </h1>
              <p className="mt-5 text-slate-300 text-lg leading-relaxed">
                PSIRA-registered security personnel providing reliable,
                professional protection for your premises, people, and assets —
                24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {credentials.map((b) => (
                  <span
                    key={b}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gold-500/15 border border-gold-500/25 text-gold-400"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold transition-all duration-200"
              >
                Get a Security Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-t-2xl overflow-hidden self-end">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=85"
                alt="Professional security officer on duty at a commercial premises"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-600">
              Service Breakdown
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map(({ icon: Icon, name, description }) => (
              <article
                key={name}
                className="p-7 rounded-2xl border border-slate-100 bg-white hover:border-gold-500/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-900/6 border border-navy-900/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/12 group-hover:border-gold-500/25 transition-all duration-300">
                  <Icon
                    className="w-5 h-5 text-navy-800 group-hover:text-gold-600 transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-display text-base font-bold text-navy-900 mb-2">
                  {name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=600&auto=format&fit=crop&q=80",
                alt: "Access control and entry management",
              },
              {
                src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&auto=format&fit=crop&q=80",
                alt: "CCTV and surveillance monitoring",
              },
              {
                src: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=600&auto=format&fit=crop&q=80",
                alt: "Security personnel on patrol",
              },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="relative h-56 rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
