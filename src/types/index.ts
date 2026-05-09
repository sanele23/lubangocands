export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ServiceCard {
  id: string
  title: string
  description: string
  icon: string
  items: string[]
  href: string
  color: 'navy' | 'gold'
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Industry {
  label: string
  icon: string
}
