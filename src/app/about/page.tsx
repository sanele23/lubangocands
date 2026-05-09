import type { Metadata } from "next";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us: Our Story, Mission & Values",
  description:
    "Learn about Lubango Security & Cleaning: our history, mission, values, and the dedicated team behind our professional security and cleaning services across South Africa.",
};

const timeline = [
  {
    year: "2014",
    title: "Founded in Cape Town",
    description:
      "Lubango C&S begins operations in Kuilsriver, Cape Town, with a small but dedicated team.",
  },
  {
    year: "2016",
    title: "Expanded to Knysna",
    description:
      "Growing demand leads to a new office in Knysna, extending our reach to the Garden Route.",
  },
  {
    year: "2019",
    title: "Eastern Cape Launch",
    description:
      "Third office opens in Uitenhage, bringing our services to the Eastern Cape province.",
  },
  {
    year: "2022",
    title: "Consulting Division",
    description:
      "We launch our Consulting Services division, offering strategic advisory to larger organisations.",
  },
  {
    year: "2024",
    title: "10 Years of Excellence",
    description:
      "A decade of protecting and maintaining South African businesses and residences.",
  },
];

const team = [
  { name: "Operations Director", role: "Security Division", initials: "OD" },
  { name: "Operations Director", role: "Cleaning Division", initials: "OD" },
  { name: "Regional Manager", role: "Cape Town", initials: "RM" },
  { name: "Regional Manager", role: "Knysna & Eastern Cape", initials: "RM" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-4">
            <span className="inline-block w-6 h-px bg-gold-400" />
            Who We Are
            <span className="inline-block w-6 h-px bg-gold-400" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Lubango C&S
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A decade of protecting South African businesses and residences;
            built on integrity, excellence, and a genuine care for the
            communities we serve.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                label: "Our Mission",
                color: "border-gold-500",
                text: "To protect and empower South African communities through comprehensive, high-quality security and cleaning services, delivered by trained and dedicated professionals.",
              },
              {
                label: "Our Vision",
                color: "border-navy-700",
                text: "To become the most trusted and recommended security and cleaning service provider across every province we operate in, setting the national benchmark for excellence.",
              },
              {
                label: "Our Values",
                color: "border-slate-300",
                text: "Integrity in every interaction. Reliability in every commitment. Excellence in every service. A client-first mindset in every decision we make.",
              },
            ].map(({ label, color, text }) => (
              <div
                key={label}
                className={`p-8 rounded-2xl border-l-4 bg-slate-50 border border-l-current ${color}`}
              >
                <h2 className="font-display text-lg font-bold text-navy-900 mb-3">
                  {label}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-600">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              A Decade in the Making
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-8 top-0 bottom-0 w-px bg-slate-200"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {timeline.map(({ year, title, description }) => (
                <div key={year} className="relative flex gap-6 pl-16">
                  <div className="absolute left-0 w-16 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-sm z-10" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-xs font-bold text-gold-600 tracking-wider uppercase mb-1">
                      {year}
                    </div>
                    <div className="font-semibold text-navy-900 text-sm mb-1">
                      {title}
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-navy-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-400">
              Accreditations & Compliance
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "PSIRA Registered",
              "SARS Compliant",
              "BEE Certified",
              "Fully Insured",
              "OHSA Compliant",
            ].map((badge) => (
              <div
                key={badge}
                className="px-5 py-2.5 rounded-full border border-gold-500/25 bg-gold-500/8 text-sm font-semibold text-gold-400"
              >
                ✓ {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
