import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ComponentPropsWithRef } from 'react'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: false
  href?: undefined
}

interface LinkButtonProps extends ComponentPropsWithRef<typeof Link> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href: string
}

type Props = ButtonProps | LinkButtonProps

const variants = {
  primary:
    'bg-gold-500 text-navy-900 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-gold active:scale-95 focus-visible:ring-gold-400',
  secondary:
    'bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/40 active:scale-95 focus-visible:ring-white/40',
  outline:
    'bg-transparent text-navy-900 border border-navy-800/20 hover:bg-navy-900 hover:text-white hover:border-navy-900 active:scale-95 focus-visible:ring-navy-700',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
}

const base =
  'inline-flex items-center font-semibold rounded-lg tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

export function Button({ variant = 'primary', size = 'md', className, ...props }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href) {
    const { href, ...rest } = props as LinkButtonProps
    return <Link href={href} className={classes} {...rest} />
  }

  return <button className={classes} {...(props as ButtonProps)} />
}
