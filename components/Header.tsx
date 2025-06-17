'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTranslations } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.brands, href: '#brands' },
    { name: t.features, href: '#features' },
    { name: t.testimonials, href: '#testimonials' },
    { name: t.contact, href: '#contact' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTrigger(prev => !prev);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'bg-[#1a1a1a54]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-8">
          {/* Logo */}
          <Link href={`/${locale}`}>
  <img
    src="/assets/logo.svg" // replace with your actual logo path
    alt="CLO Logo"
    width={73}
    height={72}
    className="w-[73px] h-[72px] object-contain"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
          <div className="flex items-center ltr:space-x-4 rtl:gap-4">
            <LanguageSwitcher currentLocale={locale} />

            {/* Animated Desktop Button */}
            <AnimatePresence mode="wait">
              <motion.div
                key={animationTrigger ? 'active-1' : 'active-2'}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="hidden md:inline-flex"
              >
                <Button className="bg-[#2a2a2a] hover:bg-[#434343] text-white px-6 py-2 rounded-full h-[56px] w-[148px]">
                  {t.downloadApp}
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Menu Button */}
            <Button
              ref={toggleButtonRef}
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(prev => !prev)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-black/95 backdrop-blur-sm rounded-lg mt-2 p-4"
          >
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
              <Button className="bg-[#2a2a2a] hover:bg-[#434343] text-white mt-4">
                {t.downloadApp}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
