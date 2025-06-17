'use client';

import { getTranslations } from '@/lib/i18n';
import { Store, Truck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section
      id="features"
      className="scroll-mt-[80px] py-20 bg-[#1A1A1A]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">
            {t.whyChooseTitle}
          </h2>
          <p className="text-xl text-gray-300">{t.whyChooseSubtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: false, amount: 0.4 }}
                className="bg-[url('/assets/featureCard.svg')] rounded-3xl p-8 hover:bg-[url('/assets/featureCardHover.svg')] bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
              >
                <div className="bg-[#434343] rounded-full p-4 w-fit mb-8">
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
