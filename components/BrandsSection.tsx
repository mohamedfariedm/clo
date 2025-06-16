'use client';

import { getTranslations } from '@/lib/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface BrandsSectionProps {
  locale: string;
}

export default function BrandsSection({ locale }: BrandsSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const brands = [
    {
      key: 'polo',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses11.svg',
    },
    {
      key: 'rolex',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses111.svg',
    },
    {
      key: 'lacoste',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses112.svg',
    },
    {
      key: 'adidas',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses113.svg',
    },
    {
      key: 'nike',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses114.svg',
    },
    {
      key: 'h&m',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses115.svg',
    },
    {
      key: 'gucci',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses116.svg',
    },
    {
      key: 'zara',
      image: '/assets/brands/beautiful-brutal-tandned-hipster-man-black-shirt-hat-glasses117.svg',
    },
  ];

  return (
    <section id="brands" dir={isRTL ? 'rtl' : 'ltr'} className="w-full pt-24 pb-24 px-4  bg-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[72px] ">
        {/* Section Header */}
        <div className="w-full max-w-[1200px] flex flex-col gap-[4px] items-center text-center">
          <h2 className="w-full max-w-[536px] text-[40px] font-semibold leading-[60px] text-[#1a1a1a] ">
            {t.brandsTitle}
          </h2>
          <p className="w-full max-w-[950px] text-[20px] font-normal leading-[30px] text-[#8A8A8A] ">
            {t.brandsSubtitle}
          </p>
        </div>

        {/* Swiper Brands */}
        <div className="w-full lg:relative lg:-end-18 overflow-x-hidden ">
          <Swiper
            spaceBetween={24}
    loop={true}
    allowTouchMove={true}
    speed={500} // adjust to control smoothness
    autoplay={{
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4.8 },
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.key}>
                <div className="flex flex-col gap-[8px] justify-center items-center  max-w-full mx-auto">
                  <div
                    className="h-[344px] w-full rounded-[24px] lg:hover:rounded-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${brand.image})` }}
                  />
                  <span className="h-[36px] text-[24px] font-semibold leading-[36px] text-[#1a1a1a] ">
                    {
                      //@ts-ignore
                      t.brandNames?.[brand.key] ?? brand.key
                    }
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