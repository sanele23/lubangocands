import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart2,
  Search,
  FileCheck,
  Settings,
  Users,
  ArrowRight,
} from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Consulting Services: Security & Facility Management Advisory",
  description:
    "Strategic security audits, risk management advisory, compliance consulting, and facility management strategy services for South African businesses.",
};

const consultingServices = [
  {
    icon: Search,
    name: "Security Audits & Assessments",
    description:
      "Comprehensive evaluation of your current security posture: identifying vulnerabilities, gaps in coverage, and opportunities for improvement.",
  },
  {
    icon: BarChart2,
    name: "Risk Management Advisory",
    description:
      "Structured approach to identifying, assessing, and mitigating operational and security risks across your organisation.",
  },
  {
    icon: FileCheck,
    name: "Compliance Consulting",
    description:
      "Ensuring your security and facility management operations align with PSIRA, OHSA, and relevant industry regulatory standards.",
  },
  {
    icon: Settings,
    name: "Facility Management Strategy",
    description:
      "Optimising your cleaning and maintenance operations: from scheduling and cost efficiency to quality benchmarking and vendor management.",
  },
  {
    icon: Users,
    name: "Staff Training Programmes",
    description:
      "Professional development and upskilling programmes for your internal security and cleaning staff.",
  },
];

export default function ConsultingPage() {
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
                Strategic Security
                <br />
                Consulting
              </h1>
              <p className="mt-5 text-slate-300 text-lg leading-relaxed">
                Expert advisory helping South African organisations build
                smarter security frameworks and optimised facility management
                programmes, from assessment to implementation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold transition-all duration-200"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-t-2xl overflow-hidden self-end">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=85"
                alt="Business consulting and strategy session with security professionals"
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
              Advisory Areas
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
              Our Consulting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map(({ icon: Icon, name, description }) => (
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

          {/* Process image */}
          <div className="mt-14 relative h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80"
              alt="Consulting team reviewing security assessment with client"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="font-display text-xl sm:text-2xl font-bold text-white max-w-lg">
                  &ldquo;Every organisation has unique security challenges. Our
                  job is to find them.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
