'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslations } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = locale === 'ar';

  const navigation = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.brands, href: '#brands' },
    { name: t.features, href: '#features' },
    { name: t.testimonials, href: '#testimonials' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`}>
              <span className="text-3xl font-bold text-white">CLO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <Button 
              className="hidden md:inline-flex bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full"
            >
              {t.downloadApp}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gray-800 hover:bg-gray-700 text-white mt-4">
                {t.downloadApp}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}