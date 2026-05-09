import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const serviceLinks = [
  { label: "Security Guards", href: "/services/security#guards" },
  { label: "Roving Patrols", href: "/services/security#patrols" },
  { label: "Office Cleaning", href: "/services/cleaning#office" },
  { label: "Deep Cleaning", href: "/services/cleaning#deep" },
  { label: "Disinfection Services", href: "/services/cleaning#disinfection" },
  { label: "Consulting", href: "/services/consulting" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const locations = [
  "80 Ermington Crescent, Highbury Park, Kuilsriver",
  "606 Corcodia Street, Knysna",
  "5 Nzewuza Street, Kwanobuhle Uitenhage",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/lubango-logo-bg.png"
                alt="Lubango Security & Cleaning logo"
                width={60}
                height={60}
                className="rounded-xl object-contain bg-white/5 p-1"
              />
              <div>
                <div className="font-display font-bold text-white text-base tracking-tight">
                  LUBANGO
                </div>
                <div className="text-gold-400 text-[0.6rem] font-semibold tracking-[0.18em] uppercase -mt-0.5">
                  Security &amp; Cleaning
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for professional security and cleaning
              services across South Africa. Licensed, insured, and committed to
              excellence.
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/50 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/25 bg-gold-500/8">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gold-400 font-medium">
                Available 24/7
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-[0.18em] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-[0.18em] mb-5">
              Company
            </h3>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-[0.18em] mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href="tel:+27765340794"
                  className="flex items-start gap-2.5 group"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    <div>+27 76 534 0794</div>
                    <div>+27 72 485 1524</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lubangocands.co.za"
                  className="flex items-start gap-2.5 group"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors break-all">
                    info@lubangocands.co.za
                  </span>
                </a>
              </li>
              {locations.map((loc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-400">{loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Lubango Security &amp; Cleaning. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://www.psira.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-gold-400 transition-colors"
            >
              PSIRA Accredited <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
