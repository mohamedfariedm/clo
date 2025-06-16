import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cairo, Poppins, Tajawal } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-cairo',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CLO - Shop Top Brands Anytime, Anywhere',
  description: 'Discover fashion, beauty, and lifestyle products from top brands all in one place. Fast delivery, secure payments, and seamless shopping experience.',
  keywords: 'shopping, fashion, beauty, lifestyle, brands, mobile app, CLO',
  authors: [{ name: 'CLO Team' }],
  openGraph: {
    title: 'CLO - Shop Top Brands Anytime, Anywhere',
    description: 'Discover fashion, beauty, and lifestyle products from top brands all in one place.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLO - Shop Top Brands Anytime, Anywhere',
    description: 'Discover fashion, beauty, and lifestyle products from top brands all in one place.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

const locales = ['en', 'ar'];

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale)) {
    notFound();
  }

  return (
    <html
      lang={params.locale}
      dir={params.locale === 'ar' ? 'rtl' : 'ltr'}
    >
<body
  className={`overflow-x-hidden ${
    params.locale === 'ar' ? tajawal.className : poppins.className
  }`}
>        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
