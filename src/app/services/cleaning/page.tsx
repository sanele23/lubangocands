import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Wind,
  Droplets,
  Home,
  Car,
  Building2,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Cleaning Services: Commercial & Residential Cleaning",
  description:
    "Professional cleaning services including office cleaning, deep cleaning, carpet cleaning, disinfection, and domestic cleaning across Cape Town, Knysna, and Uitenhage.",
};

const cleaningServices = [
  {
    icon: Building2,
    name: "Office Cleaning",
    description:
      "Comprehensive daily, weekly, or bi-weekly cleaning programmes for corporate offices and open-plan environments.",
  },
  {
    icon: Sparkles,
    name: "Deep Cleaning",
    description:
      "Intensive top-to-bottom cleaning of all surfaces, fixtures, and hard-to-reach areas. Ideal for move-in/out or periodic resets.",
  },
  {
    icon: Wind,
    name: "Carpet Cleaning",
    description:
      "Professional hot water extraction and carpet treatment that removes deep-seated dirt, stains, and allergens.",
  },
  {
    icon: Droplets,
    name: "Window Cleaning",
    description:
      "Interior and exterior window cleaning using streak-free techniques, including reach-and-wash for multi-storey buildings.",
  },
  {
    icon: Layers,
    name: "Disinfection Services",
    description:
      "Hospital-grade fogging and surface disinfection services for health compliance and general sanitation.",
  },
  {
    icon: Home,
    name: "Domestic Cleaning",
    description:
      "Regular housekeeping for residential homes, townhouses, and apartment complexes with consistent, trusted cleaners.",
  },
  {
    icon: Building2,
    name: "Post-Construction Clean",
    description:
      "Specialist cleaning for newly completed or renovated spaces, removing construction dust, debris, and residue.",
  },
  {
    icon: Car,
    name: "Car Disinfection",
    description:
      "Full interior vehicle disinfection and sanitisation using safe, professional-grade products.",
  },
];

const highlights = [
  "Eco-Conscious Products",
  "Trained & Vetted Staff",
  "Flexible Scheduling",
  "Fully Insured",
  "No Disruption Approach",
  "Quality Guaranteed",
];

export default function CleaningPage() {
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
                Professional Cleaning
                <br />
                Services
              </h1>
              <p className="mt-5 text-slate-300 text-lg leading-relaxed">
                Commercial and residential cleaning services using eco-conscious
                products and trained specialists, delivering a genuinely clean
                environment, every time.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {highlights.map((b) => (
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
                Get a Cleaning Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-t-2xl overflow-hidden self-end">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=85"
                alt="Professional commercial cleaning team in a corporate office"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cleaningServices.map(({ icon: Icon, name, description }) => (
              <article
                key={name}
                className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-gold-500/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-900/6 border border-navy-900/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/12 group-hover:border-gold-500/25 transition-all duration-300">
                  <Icon
                    className="w-5 h-5 text-navy-800 group-hover:text-gold-600 transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-display text-sm font-bold text-navy-900 mb-1.5">
                  {name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500&auto=format&fit=crop&q=80",
                alt: "Office cleaning in progress",
              },
              {
                src: "https://images.unsplash.com/photo-1527515637462-cff94ead201b?w=500&auto=format&fit=crop&q=80",
                alt: "Professional deep cleaning service",
              },
              {
                src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=80",
                alt: "Window cleaning for commercial building",
              },
              {
                src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=80",
                alt: "Disinfection and sanitisation service",
              },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="relative h-48 rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
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
