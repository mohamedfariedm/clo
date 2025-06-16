'use client';

import Link from 'next/link';
import { getTranslations } from '@/lib/i18n';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const navigation = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.brands, href: '#brands' },
    { name: t.features, href: '#features' },
    { name: t.testimonials, href: '#testimonials' },
    { name: t.contact, href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`}>
              <span className="text-4xl font-bold text-white">CLO</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-[#DCDCDC] hover:text-gray-400 transition-colors duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center lg:justify-start gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-400 transition-colors duration-200 text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white text-sm">
            {t.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}