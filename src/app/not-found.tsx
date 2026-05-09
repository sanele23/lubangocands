import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="relative">
        <div className="font-display text-[8rem] sm:text-[12rem] font-bold text-white/[0.04] leading-none select-none">
          404
        </div>
        <div className="-mt-16 sm:-mt-24">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="mt-3 text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
            Coming Soon! :)
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm hover:bg-gold-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
