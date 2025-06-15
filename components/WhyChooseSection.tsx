'use client';

import { getTranslations } from '@/lib/i18n';
import { Store, Truck, Shield } from 'lucide-react';

interface WhyChooseSectionProps {
  locale: string;
}

export default function WhyChooseSection({ locale }: WhyChooseSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const features = [
    {
      icon: Store,
      title: t.feature1Title,
      description: t.feature1Description,
    },
    {
      icon: Truck,
      title: t.feature2Title,
      description: t.feature2Description,
    },
    {
      icon: Shield,
      title: t.feature3Title,
      description: t.feature3Description,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.whyChooseTitle}
          </h2>
          <p className="text-xl text-gray-300">
            {t.whyChooseSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="bg-gray-700 rounded-full p-4 w-fit mb-8">
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}