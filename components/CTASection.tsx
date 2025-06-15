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
  
    <section className="py-20  bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-[1200px] h-auto lg:h-[554px] shrink-0 relative z-[265] mx-auto px-4">
  {/* Side image */}
  <div className="hidden lg:block w-[261px] h-[554px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/CO5i9iKSjA.png')] bg-cover bg-no-repeat md:absolute top-0 left-[225px] z-[274]" />

  {/* Background box */}
  <div className="w-full lg:w-[1200px] h-[300px] lg:h-[389px] bg-[#2a2a2a] rounded-[24px] md:absolute top-[100px] lg:top-[123px] left-0 z-[266]" />

  {/* Text and buttons */}
  <div className="relative z-[267] mt-[200px] lg:md:absolute lg:top-0 lg:left-[624px] flex flex-col items-start gap-10 w-full lg:w-[372px] px-2 lg:px-0">
    {/* Texts */}
    <div className="flex flex-col gap-1 justify-center items-start w-full">
      <span className="block w-full text-center lg:text-left text-[28px] lg:text-[40px] font-semibold leading-tight text-white font-poppins">
        Ready to Shop?
      </span>
      <span className="block text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px] text-[#dcdcdc] font-poppins">
        Download Clo and start exploring top deals today.
      </span>
    </div>

    {/* App buttons */}
    <div className="flex gap-4 items-center">
      <div className="w-[120px] lg:w-[129.306px] h-[40px] lg:h-[47.059px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/TrQgqORG8V.png')] bg-cover bg-no-repeat" />
      <div className="w-[120px] lg:w-[126.259px] h-[40px] lg:h-[47.059px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/qGMUaw9u3c.png')] bg-cover bg-no-repeat" />
    </div>
  </div>
</div>
    </section>

  </>
  );
}