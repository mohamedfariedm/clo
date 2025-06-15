'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BrandsSection from '@/components/BrandsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home({ params }: { params: { locale: string } }) {
  const isRTL = params.locale === 'ar';

  useEffect(() => {
    // Set document direction based on locale
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = params.locale || 'en';
  }, [params.locale, isRTL]);

  return (
    <div className="min-h-screen bg-white">
      <Header locale={params.locale} />
      <main>
        <HeroSection locale={params.locale} />
        <HowItWorksSection locale={params.locale} />
        <BrandsSection locale={params.locale} />
        <WhyChooseSection locale={params.locale} />
        <TestimonialsSection locale={params.locale} />
        <CTASection locale={params.locale} />
        <ContactSection locale={params.locale} />
      </main>
      <Footer locale={params.locale} />
    </div>
  );
}