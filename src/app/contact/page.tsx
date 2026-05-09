import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us! Get a Free Quote",
  description:
    "Contact Lubango Security & Cleaning for a free, no-obligation quote. Serving Cape Town (Kuilsriver), Knysna, and Uitenhage. Call +27 76 534 0794 or email info@lubangocands.co.za.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+27 76 534 0794", "+27 72 485 1524"],
    href: "tel:+27765340794",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@lubangocands.co.za"],
    href: "mailto:info@lubangocands.co.za",
  },
  {
    icon: Clock,
    label: "Availability",
    lines: ["24/7 for emergencies", "Office: Mon–Fri 8am–5pm"],
  },
];

const offices = [
  {
    city: "Cape Town",
    address: "80 Ermington Crescent, Highbury Park, Kuilsriver",
  },
  { city: "Knysna", address: "606 Corcodia Street, Knysna" },
  { city: "Uitenhage", address: "5 Nzewuza Street, Kwanobuhle Uitenhage" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-4">
            <span className="inline-block w-6 h-px bg-gold-400" />
            Get in Touch
            <span className="inline-block w-6 h-px bg-gold-400" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Request a Free Quote
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your requirements and we'll get back to you within 24
            hours with a tailored, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-1">
                  Contact Details
                </h2>
                <p className="text-sm text-slate-500">
                  Reach us directly anytime.
                </p>
              </div>

              {contactDetails.map(({ icon: Icon, label, lines, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-900/6 border border-navy-900/10 flex items-center justify-center flex-shrink-0">
                    <Icon
                      className="w-4.5 h-4.5 text-navy-800"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      {label}
                    </div>
                    {lines.map((line) =>
                      href ? (
                        <a
                          key={line}
                          href={href}
                          className="block text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <div key={line} className="text-sm text-navy-900">
                          {line}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}

              {/* Offices */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  Our Offices
                </div>
                <div className="space-y-3">
                  {offices.map(({ city, address }) => (
                    <div key={city} className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-navy-900">
                          {city}
                        </div>
                        <div className="text-xs text-slate-500">{address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response promise */}
              <div className="p-4 rounded-xl bg-gold-50 border border-gold-200/60">
                <p className="text-xs text-gold-700 font-medium">
                  ⚡ We typically respond within{" "}
                  <strong>2–4 business hours</strong> during office hours, and
                  within 24 hours for enquiries received after hours.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
