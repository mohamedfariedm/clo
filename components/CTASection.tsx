'use client';

import { getTranslations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  locale: string;
}

export default function CTASection({ locale }: CTASectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  return (<>
  
    <section className="py-20  bg-[#2a2a2a] md:bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-[1200px] h-auto lg:h-[554px] shrink-0 relative z-[265] mx-auto px-4 flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-0">
  {/* Side image */}
  <div className="block w-[50%] lg:w-[261px] h-[300px] lg:h-[554px] bg-[url('/assets/f2.svg')] bg-contain lg:bg-cover bg-no-repeat md:absolute top-0 left-[225px] z-[274]" />

  {/* Background box */}
  <div className="w-full lg:w-[1200px] h-auto lg:h-[389px] bg-[#2a2a2a] rounded-[24px] hidden md:block md:absolute top-[100px] lg:top-[123px] left-0 z-[266]" />

  {/* Text and buttons */}
  <div className="relative z-[267] lg:mt-[200px] lg:absolute lg:top-0 lg:left-[624px] flex flex-col items-center lg:items-start gap-10 w-full lg:w-[372px] px-2 lg:px-0">
    {/* Texts */}
    <div className="flex flex-col gap-1 justify-center items-center lg:items-start w-full">
      <span className="block w-full text-center lg:text-start text-[28px] lg:text-[40px] font-semibold leading-tight text-white font-poppins">
        {t.ctaTitle}
      </span>
      <span className="block text-[16px] lg:text-[20px] text-center lg:text-start leading-[26px] lg:leading-[30px] text-[#dcdcdc] font-poppins">
        {t.ctaSubtitle}
      </span>
    </div>

    {/* App buttons */}
            <div className="flex  sm:flex-row gap-4 justify-center items-center ">
        <span className=' bg-[url(/assets/appStoreBlackBorder.svg)] hover:bg-[url(/assets/appStoreBlackBorderHover.svg)] transition-all duration-500 w-[129.31px] h-[47.059px] bg-contain object-fit-contain bg-no-repeat '></span>
        <span className='bg-[url(/assets/googlePlayBlackBorder.svg)] hover:bg-[url(/assets/googlePlayBlackBorderHover.svg)] transition-all duration-500 w-[126.26px] h-[47.059px] bg-contain object-fit-contain bg-no-repeat '></span>

      </div>
  </div>
</div>
    </section>

  </>
  );
}