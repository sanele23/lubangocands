import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { AboutSection } from '@/components/home/AboutSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTABanner } from '@/components/home/CTABanner'
import { FAQSection } from '@/components/home/FAQSection'

export const metadata: Metadata = {
  title: 'Professional Security & Cleaning Services | South Africa',
  description:
    'Lubango Security & Cleaning provides licensed security guarding, professional cleaning, and consulting services across Cape Town, Knysna, and Uitenhage. PSIRA registered. Available 24/7.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <AboutSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTABanner />
      <FAQSection />
    </>
  )
}
