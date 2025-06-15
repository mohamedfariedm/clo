'use client';

import { getTranslations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  locale: string;
}

export default function CTASection({ locale }: CTASectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  return (
    <section className="py-20 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gray-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
          
          {/* Phone Mockup */}
          <div className="absolute right-8 top-8 bottom-8 w-64 hidden lg:block">
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&dpr=2"
              alt="CLO App"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.ctaSubtitle}
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-900 text-white">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </Button>
              <Button className="bg-black hover:bg-gray-900 text-white">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}