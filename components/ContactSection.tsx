'use client';

import { useState } from 'react';
import { getTranslations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  locale: string;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#1A1A1A]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-gray-300">{t.contactSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Image */}
          <motion.div
            className="flex items-center justify-center lg:order-2"
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/assets/about.svg"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t.needHelpTitle}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.needHelpDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder={t.firstName}
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 py-[12px] px-[16px] h-[56px]"
                />
                <Input
                  placeholder={t.lastName}
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 py-[12px] px-[16px] h-[56px]"
                />
              </div>

              <Input
                placeholder={t.phoneNumber}
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 py-[12px] px-[16px] h-[56px]"
              />

              <Input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 py-[12px] px-[16px] h-[56px]"
              />

              <Select onValueChange={(value) => handleChange('subject', value)}>
                <SelectTrigger className="bg-[#2a2a2a] border-gray-700 text-white h-[56px]">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="return">Return</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder={t.message}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={6}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 py-[12px] px-[16px]"
              />

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100"
              >
                {t.send}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
