'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  ShoppingBag,
  Factory,
  Home,
  Stethoscope,
  Landmark,
  GraduationCap,
  Hotel,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const industries = [
  { icon: Building2, label: 'Corporate Offices' },
  { icon: ShoppingBag, label: 'Retail & Shopping Centres' },
  { icon: Factory, label: 'Industrial Facilities' },
  { icon: Home, label: 'Residential Complexes' },
  { icon: Stethoscope, label: 'Healthcare Facilities' },
  { icon: Landmark, label: 'Government Buildings' },
  { icon: GraduationCap, label: 'Educational Institutions' },
  { icon: Hotel, label: 'Hospitality & Hotels' },
]

export function IndustriesSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="industries-heading"
          eyebrow="Industries Served"
          title="Protecting Every Sector"
          description="Our services are tailored for a wide range of industries, each with unique security and cleanliness standards."
          align="center"
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          role="list"
          aria-label="Industries we serve"
        >
          {industries.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              role="listitem"
              variants={{
                hidden: { opacity: 0, scale: 0.94 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
              }}
              className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-slate-100 bg-white hover:border-gold-500/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900/5 border border-navy-900/8 flex items-center justify-center group-hover:bg-gold-500/12 group-hover:border-gold-500/25 transition-all duration-300">
                <Icon
                  className="w-6 h-6 text-navy-800 group-hover:text-gold-600 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-semibold text-navy-900 leading-snug">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
