'use client';

import { getTranslations } from '@/lib/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface BrandsSectionProps {
  locale: string;
}

export default function BrandsSection({ locale }: BrandsSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const brands = [
    { name: 'Polo', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/oo1TwzAQTj.png' },
    { name: 'Rolex', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/2hDw3F8hGJ.png' },
    { name: 'Lacoste', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/WFeVQ3d5T5.png' },
    { name: 'Adidas', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/H4qGqnLJgr.png' },
    { name: 'Nike', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/CrStS8TQ8f.png' },
    { name: 'H&M', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/DS9fpTZShU.png' },
    { name: 'Gucci', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/W92hMJp6tC.png' },
    { name: 'Zara', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-15/unNmiyjfsd.png' },
  ];

  return (
    <section id="brands" dir={isRTL ? 'rtl' : 'ltr'} className="w-full pt-24 pb-24 px-4  bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[72px]">
        {/* Section Header */}
        <div className="w-full max-w-[1200px] flex flex-col gap-[4px] items-center text-center">
          <h2 className="w-full max-w-[536px] text-[40px] font-semibold leading-[60px] text-[#1a1a1a] font-poppins">
            {t.brandsTitle}
          </h2>
          <p className="w-full max-w-[950px] text-[20px] font-normal leading-[30px] text-[#8a8a8a] font-poppins">
            {t.brandsSubtitle}
          </p>
        </div>

        {/* Swiper Brands */}
        <div className="w-full">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.3}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4.8 },
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.name}>
                <div className="flex flex-col gap-[8px] justify-center items-center  max-w-full mx-auto">
                  <div
                    className="h-[344px] w-full rounded-[24px] hover:rounded-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${brand.image})` }}
                  />
                  <span className="h-[36px] text-[24px] font-semibold leading-[36px] text-[#1a1a1a] font-poppins">
                    {brand.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}