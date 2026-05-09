'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Years of Experience', description: 'Proven track record since 2014' },
  { value: 500, suffix: '+', label: 'Clients Served', description: 'Businesses and residences protected' },
  { value: 3, suffix: '', label: 'Provinces Covered', description: 'Western Cape, Eastern Cape & Garden Route' },
  { value: 24, suffix: '/7', label: 'Hour Availability', description: 'Always on call for your safety' },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const frame = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(frame)
      else setCount(value)
    }
    requestAnimationFrame(frame)
  }, [inView, value])

  return (
    <span className="font-display text-4xl lg:text-5xl font-bold text-white tabular-nums">
      {count}
      <span className="text-gold-400">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-navy-800 border-y border-white/[0.06]" aria-label="Key statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center px-4 lg:px-8 ${
                index < stats.length - 1 ? 'lg:border-r lg:border-white/[0.08]' : ''
              }`}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <div className="mt-1 font-semibold text-white/90 text-sm lg:text-base">{stat.label}</div>
              <div className="mt-1 text-xs text-slate-400 leading-snug hidden sm:block">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
