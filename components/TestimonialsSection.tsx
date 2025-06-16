'use client';

import { getTranslations } from '@/lib/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

interface TestimonialsSectionProps {
  locale: string;
}

export default function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const images = [
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
];
  const testimonials = t.testimonialsList.map((testimonial: any, index: number) => ({
    ...testimonial,
    image: images[index % images.length],
    rating: 5,
  }));

  const columns = [[], [], []] as typeof testimonials[][];
  //@ts-ignore
  testimonials.forEach((t, i) => columns[i % 3].push(t));

  return (
    <section id="testimonials" className="py-20 bg-gray-100" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">{t.testimonialsTitle}</h2>
          <p className="text-xl text-[#8A8A8A]">{t.testimonialsSubtitle}</p>
        </div>

        {/* 🖥 Desktop - 3 Vertical Sliders */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {columns.map((column, colIndex) => (
               <Swiper
    key={colIndex}
    direction="vertical"
    slidesPerView={3}
    spaceBetween={20}
    loop={true}
    allowTouchMove={true}
    speed={1000} // adjust to control smoothness
    autoplay={{
      delay:colIndex+2*100,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: colIndex === 1, // reverse middle column
    }}
    modules={[Autoplay]}
    className="h-[600px]"
    freeMode={true}
>
              {column.map((testimonial:any, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover me-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    {/* <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div> */}

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
        </div>

        {/* 📱 Mobile - Single Horizontal Swiper */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
