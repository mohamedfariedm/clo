'use client';

import { getTranslations } from '@/lib/i18n';
import { Search, ShoppingBag, CreditCard } from 'lucide-react';

interface HowItWorksSectionProps {
  locale: string;
}

export default function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const steps = [
    {
      number: '01',
      title: t.step1Title,
      description: t.step1Description,
      icon: Search,
      image: '/assets/howItWorks1.svg'
    },
    {
      number: '02',
      title: t.step2Title,
      description: t.step2Description,
      icon: ShoppingBag,
      image: '/assets/howItWorks2.svg'
    },
    {
      number: '03',
      title: t.step3Title,
      description: t.step3Description,
      icon: CreditCard,
      image: '/assets/howItWorks3.svg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.howItWorksTitle}
          </h2>
          <p className="text-xl text-[#8A8A8A]">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven && !isRTL ? 'lg:flex-row-reverse' : ''
                } ${isEven && isRTL ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#8A8A8A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[400px] object-contain"
                    />                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}