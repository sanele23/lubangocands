'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = ['Security Services', 'Cleaning Services', 'Consulting', 'Security + Cleaning Bundle', 'Other']

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="font-display text-xl font-bold text-navy-900">Message Received!</h3>
        <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
          Thank you for reaching out. A member of our team will review your enquiry and get
          back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-100 shadow-card p-8"
      noValidate
      aria-label="Contact form"
    >
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-navy-900">Send Us a Message</h2>
        <p className="text-sm text-slate-500 mt-1">All fields marked with * are required.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
            placeholder="e.g. Thabo"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="lastName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
            placeholder="e.g. Nkosi"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
            placeholder="you@company.co.za"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
            placeholder="+27 XX XXX XXXX"
          />
        </div>

        <div className="sm:col-span-2 space-y-1.5">
          <label htmlFor="company" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
            placeholder="Your company name (optional)"
          />
        </div>

        <div className="sm:col-span-2 space-y-1.5">
          <label htmlFor="service" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 space-y-1.5">
          <label htmlFor="location" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Location / Area
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
            placeholder="e.g. Cape Town, Knysna, Uitenhage..."
          />
        </div>

        <div className="sm:col-span-2 space-y-1.5">
          <label htmlFor="message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
            Message / Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all resize-none"
            placeholder="Tell us about your premises, the number of guards or cleaners needed, frequency, any specific requirements..."
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-slate-400 leading-relaxed">
          By submitting, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-slate-600 transition-colors">privacy policy</a>.
          We never share your details.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl text-sm tracking-wide transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'loading' ? (
            <>
              <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
