export const languages = {
  en: 'English',
  ar: 'العربية'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    brands: 'Brands',
    features: 'Features',
    testimonials: 'Testimonials',
    contact: 'Contact US',
    downloadApp: 'Download App',
    
    // Hero Section
    heroTitle: 'Shop Top Brands. Anytime. Anywhere.',
    heroSubtitle: 'Discover fashion, beauty, and lifestyle products all in one place.',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Shopping made simple just 3 easy steps.',
    step1Title: 'Browse & Discover',
    step1Description: 'Explore a wide range of brands and products across fashion, beauty, and more. Use filters and search to find exactly what you need.',
    step2Title: 'Add to Bag',
    step2Description: 'Found something you love? Add it to your bag and continue shopping, or head straight to checkout.',
    step3Title: 'Place Your Order',
    step3Description: 'Choose your preferred payment method pay now or in installments. Enjoy fast, reliable delivery to your doorstep.',
    
    // Brands
    brandsTitle: 'Shop Your Favorite Brands',
    brandsSubtitle: 'Explore your favorite fashion labels and discover new ones all curated for you.',
    
    // Why Choose
    whyChooseTitle: 'Why Choose Clo?',
    whyChooseSubtitle: 'Top brands. Fast delivery. Easy, secure shopping.',
    feature1Title: 'Shop Top Brands in One Place',
    feature1Description: 'Discover fashion, beauty, and lifestyle products from trusted local and global names all in a single app.',
    feature2Title: 'Fast Delivery & Easy Payments',
    feature2Description: 'Get your orders quickly and choose how you pay instantly, later, or in easy installments.',
    feature3Title: 'Secure & Seamless Experience',
    feature3Description: 'Enjoy smooth navigation and peace of mind with secure checkout and data protection.',
    
    // Testimonials
    testimonialsTitle: 'What Our Users Say',
    testimonialsSubtitle: 'Real reviews from real users who trust Clo every day.',
    
    // CTA
    ctaTitle: 'Ready to Shop?',
    ctaSubtitle: 'Download Clo and start exploring top deals today.',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Have questions or need help? We\'re here for you.',
    needHelpTitle: 'Need Help?',
    needHelpDescription: 'Whether it\'s an issue with an order, a payment inquiry, or just general feedback our support team is ready to assist you.',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: 'Phone Number',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    
    // Footer
    footerCopyright: '2025 © CLO All rights reserved'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'حول',
    brands: 'العلامات التجارية',
    features: 'المميزات',
    testimonials: 'الشهادات',
    contact: 'اتصل بنا',
    downloadApp: 'تحميل التطبيق',
    
    // Hero Section
    heroTitle: 'تسوق أفضل العلامات التجارية. في أي وقت. في أي مكان.',
    heroSubtitle: 'اكتشف منتجات الموضة والجمال ونمط الحياة في مكان واحد.',
    
    // How It Works
    howItWorksTitle: 'كيفية العمل',
    howItWorksSubtitle: 'التسوق أصبح بسيطًا في 3 خطوات سهلة.',
    step1Title: 'تصفح واكتشف',
    step1Description: 'استكشف مجموعة واسعة من العلامات التجارية والمنتجات عبر الموضة والجمال والمزيد. استخدم المرشحات والبحث للعثور على ما تحتاجه بالضبط.',
    step2Title: 'أضف إلى الحقيبة',
    step2Description: 'وجدت شيئًا تحبه؟ أضفه إلى حقيبتك واستمر في التسوق، أو اذهب مباشرة إلى الدفع.',
    step3Title: 'اطلب طلبك',
    step3Description: 'اختر طريقة الدفع المفضلة لديك ادفع الآن أو بالتقسيط. استمتع بالتسليم السريع والموثوق إلى عتبة داركم.',
    
    // Brands
    brandsTitle: 'تسوق علامتك التجارية المفضلة',
    brandsSubtitle: 'استكشف علامات الموضة المفضلة لديك واكتشف علامات جديدة مختارة لك.',
    
    // Why Choose
    whyChooseTitle: 'لماذا تختار كلو؟',
    whyChooseSubtitle: 'أفضل العلامات التجارية. توصيل سريع. تسوق آمن وسهل.',
    feature1Title: 'تسوق أفضل العلامات التجارية في مكان واحد',
    feature1Description: 'اكتشف منتجات الموضة والجمال ونمط الحياة من أسماء محلية وعالمية موثوقة في تطبيق واحد.',
    feature2Title: 'توصيل سريع ومدفوعات سهلة',
    feature2Description: 'احصل على طلباتك بسرعة واختر كيفية الدفع فوريًا أو لاحقًا أو بالتقسيط السهل.',
    feature3Title: 'تجربة آمنة وسلسة',
    feature3Description: 'استمتع بالتنقل السلس وراحة البال مع الدفع الآمن وحماية البيانات.',
    
    // Testimonials
    testimonialsTitle: 'ما يقوله مستخدمونا',
    testimonialsSubtitle: 'مراجعات حقيقية من مستخدمين حقيقيين يثقون في كلو كل يوم.',
    
    // CTA
    ctaTitle: 'مستعد للتسوق؟',
    ctaSubtitle: 'حمل كلو وابدأ في استكشاف أفضل الصفقات اليوم.',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'لديك أسئلة أو تحتاج مساعدة؟ نحن هنا من أجلك.',
    needHelpTitle: 'تحتاج مساعدة؟',
    needHelpDescription: 'سواء كانت مشكلة في الطلب أو استفسار دفع أو مجرد ملاحظات عامة، فريق الدعم لدينا جاهز لمساعدتك.',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    phoneNumber: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Footer
    footerCopyright: '2025 © كلو جميع الحقوق محفوظة'
  }
};

export function getTranslations(locale: Language) {
  return translations[locale] || translations.en;
}