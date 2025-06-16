'use client';

import { getTranslations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  return (
<section
  id="home"
  className="min-h-screen  flex items-center justify-center relative overflow-hidden"
  dir={isRTL ? 'rtl' : 'ltr'}
>
  {/* 🔹 Video Background (bottom layer) */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-[1]"
    //@ts-ignore
    autoPlay="autoplay"
    loop
    muted
    playsInline
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔹 Gradient Overlay (middle layer) */}
  <div className="absolute inset-0 w-full h-full z-[2] opacity-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 " />

  {/* 🔹 Foreground Content (top layer) */}
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
    <div className="">
      <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-white leading-tight">
        {t.heroTitle}
      </h1>
      <p className="text-xl sm:text-xl text-gray-300 max-w-2xl mx-auto mt-[15px]">
        {t.heroSubtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-[56px]">
        <span className=' bg-[url(/assets/appStoreBlackBorder.svg)] hover:bg-[url(/assets/appStoreBlackBorderHover.svg)] transition-all duration-500 w-[129.31px] h-[47.059px] bg-contain object-fit-contain bg-no-repeat '></span>
        <span className='bg-[url(/assets/googlePlayBlackBorder.svg)] hover:bg-[url(/assets/googlePlayBlackBorderHover.svg)] transition-all duration-500 w-[126.26px] h-[47.059px] bg-contain object-fit-contain bg-no-repeat '></span>

      </div>
    </div>
  </div>
</section>

  )
}