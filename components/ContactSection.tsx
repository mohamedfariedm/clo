'use client';

import { useState } from 'react';
import { getTranslations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-gray-300">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
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
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input
                  placeholder={t.lastName}
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>

              {/* Phone */}
              <Input
                placeholder={t.phoneNumber}
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />

              {/* Email */}
              <Input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />

              {/* Subject */}
              <Select onValueChange={(value) => handleChange('subject', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="return">Return</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                placeholder={t.message}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={6}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-100"
              >
                {t.send}
              </Button>
            </form>
          </div>

          {/* Contact Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2"
              alt="Contact Us"
              className="w-full max-w-md h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}