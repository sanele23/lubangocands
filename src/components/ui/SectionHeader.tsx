'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase',
            isDark ? 'text-gold-400' : 'text-gold-600',
          )}
        >
          <span
            className={cn(
              'inline-block w-6 h-px',
              isDark ? 'bg-gold-400' : 'bg-gold-500',
            )}
          />
          {eyebrow}
          <span
            className={cn(
              'inline-block w-6 h-px',
              align === 'center' ? 'block' : 'hidden',
              isDark ? 'bg-gold-400' : 'bg-gold-500',
            )}
          />
        </span>
      )}

      <h2
        id={id}
        className={cn(
          'font-display font-bold leading-tight tracking-tight',
          'text-3xl sm:text-4xl lg:text-[2.75rem]',
          isDark ? 'text-white' : 'text-navy-900',
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {description && (
        <p
          className={cn(
            'text-base lg:text-lg leading-relaxed max-w-2xl',
            isDark ? 'text-slate-300' : 'text-slate-500',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
