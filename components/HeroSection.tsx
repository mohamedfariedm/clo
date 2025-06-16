'use client';

import { getTranslations } from '@/lib/i18n';
import { motion, easeOut } from 'framer-motion'; // ✅

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariant = {
    hidden: { x: isRTL ? 100 : -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: easeOut } },
  };

  const subtitleVariant = {
    hidden: { x: isRTL ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: easeOut } },
  };

  const buttonsVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* 🔹 Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-[2] opacity-50 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

      {/* 🔹 Foreground Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-white leading-tight"
            variants={titleVariant}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-xl text-gray-300 max-w-2xl mx-auto mt-[15px]"
            variants={subtitleVariant}
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-[56px]"
            variants={buttonsVariant}
          >
            <span className="bg-[url(/assets/appStoreBlackBorder.svg)] hover:bg-[url(/assets/appStoreBlackBorderHover.svg)] transition-all duration-500 w-[129.31px] h-[47.059px] bg-contain bg-no-repeat" />
            <span className="bg-[url(/assets/googlePlayBlackBorder.svg)] hover:bg-[url(/assets/googlePlayBlackBorderHover.svg)] transition-all duration-500 w-[126.26px] h-[47.059px] bg-contain bg-no-repeat" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
