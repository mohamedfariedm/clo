// Add Zod and React Hook Form support
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
const saudiPhoneRegex = /^(05\d{8}|\+9665\d{8})$/;

export default function ContactSection({ locale }: ContactSectionProps) {
  const t = getTranslations(locale as 'en' | 'ar');
  const isRTL = locale === 'ar';

const schema = z.object({
  firstName: z.string().min(1, { message: t.validation.firstNameRequired }),
  lastName: z.string().min(1, { message: t.validation.lastNameRequired }),
  phone: z.string()
    .min(1, { message: t.validation.phoneRequired })
    .refine((val) => saudiPhoneRegex.test(val), {
      message: t.validation.phoneInvalid,
    }),
  email: z.string().email({ message: t.validation.emailInvalid }),
  subject: z.string().min(1, { message: t.validation.subjectRequired }),
  message: z.string().min(1, { message: t.validation.messageRequired }),
});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#1A1A1A] scroll-mt-[80px]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-semibold text-white mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-gray-300">{t.contactSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="flex items-center justify-center lg:order-2"
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/assets/footerImage.svg"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-6'>
                <Input
                  placeholder={t.firstName}
                  {...register('firstName')}
                  className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 h-[56px]"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

                </div>
                <div className='space-y-6'>
                <Input
                  placeholder={t.lastName}
                  {...register('lastName')}
                  className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 h-[56px]"
                />

              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
              </div>

              <Input
                placeholder={t.phoneNumber}
                {...register('phone')}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 h-[56px]"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

              <Input
                placeholder={t.email}
                {...register('email')}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 h-[56px]"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <Select onValueChange={(value) => setValue('subject', value)}>
                <SelectTrigger className="bg-[#2a2a2a] border-gray-700 text-white h-[56px]">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="return">Return</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

              <Textarea
                placeholder={t.message}
                {...register('message')}
                rows={6}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100">
                {t.send}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
