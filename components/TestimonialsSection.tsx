'use client';

import { getTranslations } from '@/lib/i18n';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  locale: string;
}

export default function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const testimonials = [
    {
      name: 'Omar Adel',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'I love the flexible payment options. It makes shopping way more convenient!',
      rating: 5,
    },
    {
      name: 'Sara Mahmoud',
      role: 'Fashion Enthusiast',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'Clo completely changed how I shop. Everything is fast, easy, and the brands are amazing!',
      rating: 5,
    },
    {
      name: 'Lina Rami',
      role: 'Stylist & Content Creator',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'The app is super smooth, and I always find what I\'m looking for. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Amina Khaled',
      role: 'Digital Marketer',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'Clo makes shopping so smooth. I love how easy it is to browse and buy.',
      rating: 5,
    },
    {
      name: 'Mohamed Zaki',
      role: 'Photographer',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'Everything I needed was right there. Great brands, great prices.',
      rating: 5,
    },
    {
      name: 'Sara Nader',
      role: 'Fashion Blogger',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      text: 'Honestly, I didn\'t expect it to be this good. The app feels premium.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.testimonialsTitle}
          </h2>
          <p className="text-xl text-gray-600">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}