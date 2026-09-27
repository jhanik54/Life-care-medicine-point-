import { BusinessData, ServiceItem, TrustPillar, PolicyItem, GalleryItem } from '../types';

export const businessData: BusinessData = {
  name: 'Life Care Medicine Point',
  nameEn: 'Life Care Medicine Point',
  banglaName: 'লাইফ কেয়ার মেডিসিন পয়েন্ট',
  mainTagline: 'শুধু মুনাফা অর্জন নয়—মানুষের সেবাই আমাদের মূল লক্ষ্য।',
  englishTagline: 'Your Wellness, Our Commitment.',
  subTagline: 'আপনার সুস্থতা, আমাদের অঙ্গীকার।',
  establishedDate: '০১ মে ২০২৫',
  establishedDateEn: '01 May 2025',
  businessType: 'ফার্মেসি, সার্জিক্যাল সামগ্রী ও মেডিকেল সরঞ্জাম',
  businessTypeEn: 'Pharmacy, Surgical Items & Medical Equipment',
  primaryService: '২৪ ঘণ্টা নিরবচ্ছিন্ন মেডিসিন সেবা',
  primaryServiceEn: '24-Hour Continuous Medicine Service',
  pharmacist: {
    name: 'মাহবুবুল আলম',
    nameEn: 'Mahbubul Alam',
    designation: 'DMLT, সি-গ্রেড ফার্মাসিস্ট',
    designationEn: 'DMLT, C-Grade Pharmacist',
    title: 'স্বত্বাধিকারী ও সি-গ্রেড ফার্মাসিস্ট',
    titleEn: 'Proprietor & C-Grade Pharmacist',
    business: 'লাইফ কেয়ার মেডিসিন পয়েন্ট',
    businessEn: 'Life Care Medicine Point',
    experience: 'দীর্ঘ সময় ধরে চিকিৎসা ও ওষুধ সেবার সাথে অত্যন্ত নিষ্ঠার সাথে সম্পৃক্ত। মানুষের প্রয়োজনের মুহূর্তে সঠিক, নিরাপদ ও মানসম্মত স্বাস্থ্যসেবা এবং সঠিক ওষুধ ব্যবস্থাপনায় দায়িত্বশীল সহযোগিতা করাই আমাদের মূল লক্ষ্য।',
    experienceEn: 'Extensively involved in healthcare and pharmacy management with high dedication. Committed to providing accurate, safe, and quality medicines and supportive guidance to patients during critical needs.',
    activities: [
      'লাইফ কেয়ার মেডিসিন পয়েন্টের সার্বিক পরিচালনা ও মান নিয়ন্ত্রণ',
      'প্রয়োজনীয় ও প্রেসক্রিপশন অনুযায়ী মানসম্মত জেনেরিক ওষুধের সরবরাহ',
      'রোগীদের প্রাথমিক স্বাস্থ্য সহায়তা ও রক্তচাপ/ডায়াবেটিস মনিটরিং',
      '২৪ ঘণ্টা নিরবচ্ছিন্ন জরুরি মেডিসিন সেবা প্রদান',
      'রোগীদের সঠিক ডোজ, সেবনবিধি ও স্বাস্থ্যসচেতনতায় আন্তরিক পরামর্শ'
    ],
    activitiesEn: [
      'Overall management and quality assurance of Life Care Medicine Point',
      'Dispensing authentic generic & branded prescription medicines',
      'First-aid assistance, blood pressure & glucose monitoring support',
      'Round-the-clock (24/7) emergency medicine availability',
      'Patient guidance on accurate dosage, precautions & wellness counseling'
    ],
    message: 'শুধু মুনাফা অর্জন নয়—মানুষের সেবাই আমাদের মূল লক্ষ্য। আপনার এবং আপনার পরিবারের জরুরি প্রয়োজনে সবসময় বিশ্বস্ততার সাথে পাশে আছি।',
    messageEn: 'Not merely profit-making—human service is our core objective. We stand by you and your family with utmost reliability in every health emergency.',
    regNote: 'প্রশিক্ষিত ও দায়িত্বশীল স্বাস্থ্যসেবা',
    regNoteEn: 'Trained & Responsible Healthcare Professional'
  },
  phones: {
    primary: '01815772951',
    alternative: '01615772951',
    whatsapp: '01984616410',
    whatsappUrl: 'https://wa.me/880198466410'
  },
  email: 'mahbubulam447@gmail.com',
  facebookUrl: 'https://www.facebook.com/share/1EiDRWNKNw/',
  hours: {
    openTime: 'সকাল ৭:০০ টা',
    closeTime: 'রাত ১:৩০ টা',
    days: 'সপ্তাহের ৭ দিন খোলা',
    daysEn: 'Open 7 Days a Week',
    serviceNote: '২৪ ঘণ্টা নিরবচ্ছিন্ন অন-কল ও জরুরি মেডিসিন সাপোর্ট',
    serviceNoteEn: '24 Hours Uninterrupted On-Call & Emergency Support'
  },
  address: {
    bangla: [
      'মিশন গেট',
      'পাগলা মার্কেট রোড',
      'আজিজিয়া মাদ্রাসা সংলগ্ন',
      'সারদাগঞ্জ, কাশিমপুর',
      'গাজীপুর সিটি, বাংলাদেশ।'
    ],
    english: [
      'Mission Gate',
      'Pagla Market Road',
      'Adjacent to Aziziya Madrasa',
      'Sardarganj, Kashimpur',
      'Gazipur City, Bangladesh.'
    ],
    plusCode: 'X79R+WQ4 Sardagonj',
    fullBangla: 'মিশন গেট, পাগলা মার্কেট রোড, আজিজিয়া মাদ্রাসা সংলগ্ন, সারদাগঞ্জ, কাশিমপুর, গাজীপুর সিটি, বাংলাদেশ।',
    fullEnglish: 'Mission Gate, Pagla Market Road, Adjacent to Aziziya Madrasa, Sardarganj, Kashimpur, Gazipur City, Bangladesh.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=X79R%2BWQ4+Sardagonj'
  },
  developer: {
    name: 'Junayed Hossain Anik',
    role: 'Full Stack Developer',
    roleEn: 'Full Stack Developer',
    position: 'CEO of JH Soft Corporation, Full Stack Developer',
    positionEn: 'CEO of JH Soft Corporation, Full Stack Developer',
    company: 'JH Soft Corporation',
    companyEn: 'JH Soft Corporation',
    url: 'https://www.jhsoft.online',
    image: '/images/developer.png',
    logo: '/images/jhsoft_logo.png',
    bioBn: 'আন্তর্জাতিক মানসম্পন্ন আধুনিক ওয়েব অ্যাপ্লিকেশন ও ডিজিটাল প্ল্যাটফর্ম ইঞ্জিনিয়ারিং।',
    bioEn: 'High-standard modern web application engineering and digital platform development.'
  }
};

export const galleryImages: GalleryItem[] = [
  {
    id: 'store-main',
    src: '/images/store.png',
    title: 'লাইফ কেয়ার মেডিসিন পয়েন্ট - মূল ফার্মেসি ও সার্ভিস কাউন্টার',
    titleEn: 'Life Care Medicine Point - Main Pharmacy & Service Counter',
    caption: 'মিশন গেট, পাগলা মার্কেট রোড, আজিজিয়া মাদ্রাসা সংলগ্ন, সারদাগঞ্জ, কাশিমপুর, গাজীপুর।',
    captionEn: 'Mission Gate, Pagla Market Road, Adjacent to Aziziya Madrasa, Sardarganj, Kashimpur, Gazipur.',
    tag: 'মূল স্টোর',
    tagEn: 'Main Store'
  }
];

export const trustPillars: TrustPillar[] = [
  {
    id: '24h',
    title: '২৪ ঘণ্টা সেবা',
    titleEn: '24/7 Medicine Service',
    desc: 'দিন-রাত যেকোনো সময়ে জরুরি ওষুধের প্রয়োজনীয়তায় প্রস্তুত',
    descEn: 'Available day & night for all emergency medicine requirements',
    icon: 'Clock'
  },
  {
    id: 'pharmacist',
    title: 'প্রশিক্ষিত ফার্মাসিস্ট',
    titleEn: 'Certified Pharmacist',
    desc: 'সি-গ্রেড ফার্মাসিস্টের প্রত্যক্ষ তত্ত্বাবধানে সঠিক ওষুধ বিতরণ',
    descEn: 'Direct supervision by experienced & certified pharmacist',
    icon: 'UserCheck'
  },
  {
    id: 'quality',
    title: 'মানসম্মত ওষুধ',
    titleEn: '100% Genuine Medicine',
    desc: 'সরাসরি নির্ভরযোগ্য কোম্পানি থেকে সংগৃহীত মানসম্পন্ন ও সংরক্ষিত ওষুধ',
    descEn: 'Authentic medicines preserved under proper temperature control',
    icon: 'ShieldCheck'
  },
  {
    id: 'service',
    title: 'গ্রাহকসেবা',
    titleEn: 'Patient-First Care',
    desc: 'গ্রাহকদের প্রতি সম্মানজনক, দ্রুত ও আন্তরিক সেবা প্রদান',
    descEn: 'Fast, respectful, and compassionate patient assistance',
    icon: 'HeartHandshake'
  },
  {
    id: 'care',
    title: 'স্বাস্থ্যসেবায় আন্তরিকতা',
    titleEn: 'Sincere Healthcare',
    desc: 'শুধু ব্যবসা নয়—মানুষের কল্যাণে নিবেদিত স্বাস্থ্য সহায়তা',
    descEn: 'Dedicated to community health welfare beyond mere commerce',
    icon: 'Sparkles'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    number: 1,
    title: '২৪ ঘণ্টা ওষুধ সেবা',
    titleEn: '24-Hour Emergency Medicine',
    shortDesc: 'দিন-রাত যেকোনো জরুরি পরিস্থিতিতে প্রেসক্রিপশন অনুযায়ী প্রয়োজনীয় ওষুধ সরবরাহ।',
    shortDescEn: 'Round-the-clock availability of essential and emergency medicines as per prescription.',
    features: ['জরুরি কল সাপোর্ট', 'রাত-দিনের প্রস্তুতি', 'নির্ভরযোগ্য ডেলিভারি সহযোগিতা'],
    featuresEn: ['Emergency call support', 'Day & night readiness', 'Reliable counter support'],
    icon: 'Clock',
    category: 'medicine',
    categoryLabel: 'জরুরি সেবা',
    categoryLabelEn: 'Emergency Care',
    is24h: true
  },
  {
    id: 'srv-2',
    number: 2,
    title: 'দেশি ও বিদেশি ওষুধ সরবরাহ',
    titleEn: 'Local & Imported Genuine Medicines',
    shortDesc: 'শীর্ষস্থানীয় ফার্মাসিউটিক্যালস কোম্পানির আসল ও সংরক্ষিত অ্যান্টিবায়োটিক, ক্রনিক ও জেনারেল মেডিসিন।',
    shortDescEn: 'Original and authentic medicines from leading domestic and approved international manufacturers.',
    features: ['১০০% আসল ওষুধ', 'কোল্ড-চেইন সংরক্ষণ', 'সঠিক এক্সপায়ারি ট্র্যাকিং'],
    featuresEn: ['100% authentic products', 'Cold-chain storage', 'Strict expiry tracking'],
    icon: 'Pill',
    category: 'medicine',
    categoryLabel: 'ফার্মেসি',
    categoryLabelEn: 'Pharmacy'
  },
  {
    id: 'srv-3',
    number: 3,
    title: 'পুরুষ ও মহিলা স্বাস্থ্যসেবা পণ্য',
    titleEn: 'Men & Women Healthcare Products',
    shortDesc: 'মা ও শিশুর যত্ন, ব্যক্তিগত পরিচ্ছন্নতা এবং বিশেষ স্বাস্থ্যসেবা পণ্যের বিস্তৃত সংগ্রহ।',
    shortDescEn: 'Comprehensive range of maternal, infant, personal hygiene, and dedicated wellness essentials.',
    features: ['মা ও শিশু সামগ্রী', 'ব্যক্তিগত হাইজিন প্রোডাক্ট', 'নিউট্রিশন ও সাপ্লিমেন্ট'],
    featuresEn: ['Mother & child care', 'Personal hygiene products', 'Nutrition & supplements'],
    icon: 'Users',
    category: 'care',
    categoryLabel: 'স্বাস্থ্যপণ্য',
    categoryLabelEn: 'Health Products'
  },
  {
    id: 'srv-4',
    number: 4,
    title: 'রক্তচাপ (BP) মাপা',
    titleEn: 'Blood Pressure (BP) Monitoring',
    shortDesc: 'ডিজিটাল ও ম্যানুয়াল স্টেথোস্কোপিক পদ্ধতিতে নির্ভুল রক্তচাপ পরিমাপ ও রেকর্ড রাখা।',
    shortDescEn: 'Accurate blood pressure checkup using clinical equipment by our trained staff.',
    features: ['সঠিক পরিমাপ', 'নিয়মিত মনিটরিং সুবিধা', 'পরামর্শ সহযোগিতা'],
    featuresEn: ['Accurate readings', 'Periodic monitoring support', 'Basic guidance'],
    icon: 'Activity',
    category: 'diagnostic',
    categoryLabel: 'ডায়াগনস্টিক সাপোর্ট',
    categoryLabelEn: 'Diagnostic Support'
  },
  {
    id: 'srv-5',
    number: 5,
    title: 'রক্তের শর্করা / ডায়াবেটিস পরীক্ষা',
    titleEn: 'Blood Sugar / Glucose Testing',
    shortDesc: 'দ্রুত ও নির্ভরযোগ্য গ্লুকোমিটারের মাধ্যমে খালি পেটে ও খাবার পর ডায়াবেটিস পরীক্ষা।',
    shortDescEn: 'Quick and reliable fasting and random blood glucose testing with calibrated glucometers.',
    features: ['ইনস্ট্যান্ট রিপোর্ট', 'হাইজিনিক স্ট্রিপ ব্যবহার', 'লগবুক পরামর্শ'],
    featuresEn: ['Instant test results', 'Sterile single-use strips', 'Lifestyle tracking tips'],
    icon: 'Droplet',
    category: 'diagnostic',
    categoryLabel: 'ডায়াগনস্টিক সাপোর্ট',
    categoryLabelEn: 'Diagnostic Support'
  },
  {
    id: 'srv-6',
    number: 6,
    title: 'নেবুলাইজেশন সেবা',
    titleEn: 'Nebulization Therapy Service',
    shortDesc: 'হাঁপানি, শ্বাসকষ্ট ও ঠান্ডাজনিত সমস্যায় রোগীদের তাত্ক্ষণিক নেবুলাইজার সাপোর্ট প্রদান।',
    shortDescEn: 'Immediate nebulization assistance for asthma, acute respiratory distress, and breathing issues.',
    features: ['জীবাণুমুক্ত কিট', 'শান্ত পরিবেশ', 'তাত্ক্ষণিক সহায়তা'],
    featuresEn: ['Sterilized kit handling', 'Calm environment', 'Immediate relief assistance'],
    icon: 'Wind',
    category: 'care',
    categoryLabel: 'প্রাথমিক চিকিৎসা',
    categoryLabelEn: 'Primary Care'
  },
  {
    id: 'srv-7',
    number: 7,
    title: 'ড্রেসিং ও প্রাথমিক ক্ষত পরিচর্যা',
    titleEn: 'First Aid Dressing & Wound Care',
    shortDesc: 'ছোটখাটো কাটা-ছেঁড়া, পুড়ে যাওয়া বা আঘাতের প্রাথমিক জীবাণুমুক্ত ড্রেসিং ও ব্যান্ডেজিং।',
    shortDescEn: 'Sterile first aid dressing, antiseptics, and wound care management for cuts, burns, and minor injuries.',
    features: ['জীবাণুমুক্ত ব্যান্ডেজ', 'অ্যান্টিসেপটিক ওয়াশ', 'জরুরি প্রাথমিক চিকিৎসা'],
    featuresEn: ['Sterile bandages', 'Antiseptic cleansers', 'Prompt first-aid care'],
    icon: 'Bandage',
    category: 'care',
    categoryLabel: 'প্রাথমিক চিকিৎসা',
    categoryLabelEn: 'Primary Care'
  },
  {
    id: 'srv-8',
    number: 8,
    title: 'সার্জিক্যাল সামগ্রী',
    titleEn: 'Surgical Items & Disposables',
    shortDesc: 'ক্যানুলা, সিরিঞ্জ, স্যালাইন সেট, ক্যানোলা টেপ, গ্লাভস, ক্যাথেটার ও অন্যান্য সার্জিক্যাল সরঞ্জাম।',
    shortDescEn: 'Certified disposable surgical items including IV sets, syringes, sterile gloves, cannula, and catheters.',
    features: ['মেডিকেল গ্রেড সামগ্রী', 'জীবাণুমুক্ত প্যাকেজিং', 'হাসপাতাল স্ট্যান্ডার্ড'],
    featuresEn: ['Medical grade products', 'Hermetically sealed', 'Hospital-grade standard'],
    icon: 'Scissors',
    category: 'surgical',
    categoryLabel: 'সার্জিক্যাল',
    categoryLabelEn: 'Surgical Items'
  },
  {
    id: 'srv-9',
    number: 9,
    title: 'অভিজ্ঞতা অনুযায়ী স্বাস্থ্যসেবা সম্পর্কিত সহযোগিতা',
    titleEn: 'Professional Healthcare Assistance',
    shortDesc: 'ওষুধের সঠিক ব্যবহার, ডোজ, পার্শ্বপ্রতিক্রিয়া ও খাদ্যাভ্যাস সম্পর্কে ফার্মাসিস্টের অভিজ্ঞতাভিত্তিক দিকনির্দেশনা।',
    shortDescEn: 'Experienced pharmacist guidance on drug interactions, correct dosages, precautions, and dietary habits.',
    features: ['ডোজ গাইডেন্স', 'সঠিক সময় নির্ধারণ', 'পার্শ্বপ্রতিক্রিয়া সচেতনতা'],
    featuresEn: ['Dosage clarity', 'Timing schedule', 'Side-effects awareness'],
    icon: 'Award',
    category: 'care',
    categoryLabel: 'পরামর্শ সেবা',
    categoryLabelEn: 'Consultation'
  },
  {
    id: 'srv-10',
    number: 10,
    title: 'ডিজিটাল স্বাস্থ্যসেবা সম্পর্কিত সুবিধা',
    titleEn: 'Digital Healthcare Support',
    shortDesc: 'হোয়াটসঅ্যাপে প্রেসক্রিপশন পাঠানো, ডিজিটাল বিলিং এবং স্বাস্থ্য সংক্রান্ত তথ্য যাচাইয়ের সুবিধা।',
    shortDescEn: 'Convenient WhatsApp prescription sending, digital medicine records, and verification services.',
    features: ['হোয়াটসঅ্যাপ প্রেসক্রিপশন', 'স্মার্ট যোগাযোগ', 'দ্রুত রিপ্লাই'],
    featuresEn: ['WhatsApp prescription chat', 'Smart communication', 'Fast response'],
    icon: 'Smartphone',
    category: 'care',
    categoryLabel: 'ডিজিটাল সুবিধা',
    categoryLabelEn: 'Digital Support'
  },
  {
    id: 'srv-11',
    number: 11,
    title: 'ল্যাবরেটরি কালেকশন ও প্রয়োজনীয় সাপোর্ট',
    titleEn: 'Diagnostic Sample Support',
    shortDesc: 'রোগীদের ডায়াগনস্টিক পরীক্ষার স্যাম্পল কালেকশন পরামর্শ ও বিশ্বস্ত ল্যাব সাপোর্টে দিকনির্দেশনা।',
    shortDescEn: 'Guidance and supportive logistics for lab diagnostics, sample preparation, and testing recommendations.',
    features: ['সঠিক নির্দেশনা', 'রিপোর্ট সংক্রান্ত তথ্য', 'ল্যাব সহায়তা'],
    featuresEn: ['Accurate guidance', 'Report understanding', 'Lab coordination'],
    icon: 'FlaskConical',
    category: 'diagnostic',
    categoryLabel: 'ডায়াগনস্টিক সাপোর্ট',
    categoryLabelEn: 'Diagnostic Support'
  },
  {
    id: 'srv-12',
    number: 12,
    title: 'অন্যান্য প্রয়োজনীয় মেডিকেল ও হেলথকেয়ার পণ্য',
    titleEn: 'Medical Equipment & Healthcare Essentials',
    shortDesc: 'থার্মোমিটার, বিপি মেশিন, হট ওয়াটার ব্যাগ, অ্যারোমা হিউমিডিফায়ার, হুইলচেয়ার ও অর্থোপেডিক বেল্ট।',
    shortDescEn: 'Clinical thermometers, BP apparatus, glucometers, orthopedic supports, vaporizers, and medical accessories.',
    features: ['ওয়ারেন্টি সাপোর্ট', 'ব্যবহারবিধি প্রদর্শন', 'উন্নত স্থায়িত্ব'],
    featuresEn: ['Warranty support', 'Usage demonstration', 'High durability'],
    icon: 'Stethoscope',
    category: 'surgical',
    categoryLabel: 'মেডিকেল সরঞ্জাম',
    categoryLabelEn: 'Medical Devices'
  }
];

export const policiesData: PolicyItem[] = [
  {
    id: 'customer-service',
    title: 'গ্রাহকসেবা নীতিমালা',
    titleEn: 'Customer Service Policy',
    summary: 'প্রতিটি গ্রাহকের স্বাস্থ্য ও নিরাপত্তাকে সর্বোচ্চ প্রাধান্য দিয়ে বিনম্র ও দায়িত্বশীল সেবা প্রদান।',
    summaryEn: 'Prioritizing patient safety, dignity, and courteous pharmaceutical service above all.',
    details: [
      'রোগীদের প্রেসক্রিপশন অত্যন্ত যত্নসহকারে পরীক্ষা করে সঠিক ওষুধ প্রদান করা হয়।',
      'ওষুধের বিকল্প জেনেরিক প্রয়োজন হলে কেবল রোগীর সম্মতি ও স্পষ্ট ব্যাখ্যা দিয়ে প্রদান করা হয়।',
      'যেকোনো জরুরি প্রয়োজনে রোগীকে দ্রুততম সময়ে সহযোগিতা প্রদানে আমাদের কর্মীরা অঙ্গীকারবদ্ধ।'
    ],
    detailsEn: [
      'Prescriptions are meticulously reviewed to ensure exact dosage and medication dispensing.',
      'Generic alternatives are only provided with transparent pharmacist guidance and customer consent.',
      'Staff members are strictly committed to fast, compassionate, and responsible emergency service.'
    ],
    icon: 'HeartHandshake'
  },
  {
    id: 'return-exchange',
    title: 'ওষুধ ফেরত ও পরিবর্তন নীতিমালা',
    titleEn: 'Return & Exchange Policy',
    summary: 'ওষুধের গুণগত মান ও ড্রাগ রেগুলেশন বজায় রেখে যৌক্তিক ফেরত ও পরিবর্তন সুবিধা।',
    summaryEn: 'Fair return and exchange procedures adhering strictly to drug safety and storage standards.',
    details: [
      'অব্যবহৃত, অক্ষত ফয়েল/প্যাকেজিং এবং বিক্রয় রসিদসহ নির্দিষ্ট সময়ের মধ্যে ওষুধ পরিবর্তনযোগ্য।',
      'তাপ সংবেদনশীল ওষুধ (যেমন: ইনসুলিন, ভ্যাকসিন, নির্দিষ্ট চোখের ড্রপ) গুণমান সুরক্ষার্থে ফেরত নেওয়া হয় না।',
      'কাটা পাতা বা ক্ষতিগ্রস্ত প্যাকেটের ক্ষেত্রে স্বাস্থ্য সুরক্ষার স্বার্থে ফেরত প্রযোজ্য নয়।'
    ],
    detailsEn: [
      'Unopened, undamaged medicine strips with sales receipt can be exchanged within standard grace periods.',
      'Temperature-sensitive products (e.g. insulin, vaccines, special refrigerated drops) cannot be returned once taken off-premises to safeguard drug efficacy.',
      'Cut strips or breached seals are strictly non-returnable in strict compliance with safety regulations.'
    ],
    icon: 'RotateCcw'
  },
  {
    id: 'prescription-policy',
    title: 'প্রেসক্রিপশন ও ড্রাগ ডিসপেন্সিং নীতিমালা',
    titleEn: 'Prescription & Dispensing Policy',
    summary: 'অ্যান্টিবায়োটিক ও নিয়ন্ত্রিত ওষুধের অপব্যবহার রোধে কঠোর মেডিকেল নিয়ম অনুসরণ।',
    summaryEn: 'Strict adherence to medical safety protocols preventing inappropriate antibiotic usage and controlled substances.',
    details: [
      'অ্যান্টিবায়োটিক এবং সিডিউল ড্রাগ কেবল রেজিস্টার্ড চিকিৎসকের বৈধ প্রেসক্রিপশন অনুযায়ী বিক্রয় করা হয়।',
      'প্রেসক্রিপশন ছাড়া অ্যান্টিবায়োটিক সেবন নিরুৎসাহিত করা হয় এবং পূর্ণ কোর্স সমাপ্তির গুরুত্ব বোঝানো হয়।',
      'মেয়াদোত্তীর্ণ ওষুধ কোনো অবস্থাতেই স্টোরে রাখা বা বিক্রয় করা হয় না; নিয়মিত এক্সপায়ারি নিরীক্ষা করা হয়।'
    ],
    detailsEn: [
      'Antibiotics and scheduled therapeutic drugs are dispensed only against valid registered physician prescriptions.',
      'Patients are advised against unprescribed antibiotic usage and educated on completing full treatment courses.',
      'Expired items are strictly quarantined and destroyed under pharmaceutical protocols with regular stock audits.'
    ],
    icon: 'FileText'
  },
  {
    id: 'privacy-policy',
    title: 'গ্রাহকের তথ্যের গোপনীয়তা ও সুরক্ষা',
    titleEn: 'Customer Privacy & Data Protection',
    summary: 'রোগীর প্রেসক্রিপশন, শারীরিক অবস্থা ও স্বাস্থ্য তথ্যের ১০০% গোপনীয়তা রক্ষা।',
    summaryEn: 'Absolute confidentiality and safeguarding of patient prescriptions, medical history, and personal contact info.',
    details: [
      'গ্রাহকের প্রেসক্রিপশন বা ব্যক্তিগত স্বাস্থ্য বিষয়ক কোনো তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।',
      'হোয়াটসঅ্যাপ বা ফোনে প্রেরিত প্রেসক্রিপশন কেবল ওষুধ সরবরাহের কাজেই ব্যবহৃত হয়।',
      'মহিলা গ্রাহকদের গোপনীয়তা ও স্বাচ্ছন্দ্য বজায় রাখতে সর্বোচ্চ শ্রদ্ধা প্রদর্শন করা হয়।'
    ],
    detailsEn: [
      'Customer medical prescriptions and personal details are never shared with any unauthorized third parties.',
      'Prescriptions submitted via WhatsApp or phone are utilized solely for authentic medicine fulfillment.',
      'Female customers are provided with private, respectful, and dignified healthcare communication.'
    ],
    icon: 'Lock'
  }
];

export const translations = {
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      services: 'সেবাসমূহ',
      pharmacist: 'ফার্মাসিস্ট পরিচিতি',
      service24h: '২৪ ঘণ্টা সেবা',
      gallery: 'গ্যালারি ও স্টোর',
      policies: 'নীতিমালা',
      location: 'লোকেশন ও যোগাযোগ',
      developer: 'ডেভেলপার',
      callBtn: 'জরুরি কল',
      whatsappBtn: 'হোয়াটসঅ্যাপ'
    },
    hero: {
      badge: '২৪ ঘণ্টা নিরবচ্ছিন্ন সেবা',
      heading: 'লাইফ কেয়ার মেডিসিন পয়েন্ট',
      tagline: 'শুধু মুনাফা অর্জন নয়—মানুষের সেবাই আমাদের মূল লক্ষ্য।',
      subtagline: 'আপনার সুস্থতা, আমাদের অঙ্গীকার।',
      desc: 'আপনার প্রয়োজনীয় প্রেসক্রিপশন ওষুধ, শিশু ও মা স্বাস্থ্যপণ্য, সার্জিক্যাল সামগ্রী এবং নির্ভরযোগ্য স্বাস্থ্য পরীক্ষা সহজলভ্য করতে আমরা আছি সার্বক্ষণিক পাশে।',
      ctaWhatsApp: 'WhatsApp এ প্রেসক্রিপশন পাঠান',
      ctaCall: 'এখনই কল করুন',
      ctaLearn: 'আমাদের সেবাসমূহ জানুন',
      pharmacistTag: 'প্রধান ফার্মাসিস্ট ও পরিচালক',
      hoursBadge: 'সপ্তাহের ৭ দিন সার্বক্ষণিক'
    },
    trust: {
      heading: 'কেন আমাদের ওপর আস্থা রাখবেন?',
      subheading: 'কাশিমপুর ও সারদাগঞ্জে আপনার স্বাস্থ্য সুরক্ষায় ৫টি দৃঢ় প্রতিশ্রুতি'
    },
    about: {
      badge: 'পরিচিতি',
      heading: 'আমাদের সম্পর্কে জানুন',
      estLabel: 'প্রতিষ্ঠা তারিখ',
      typeLabel: 'প্রতিষ্ঠানের ধরণ',
      mottoLabel: 'আমাদের মূলনীতি',
      desc1: 'লাইফ কেয়ার মেডিসিন পয়েন্ট একটি আধুনিক, পরিষ্কার-পরিচ্ছন্ন ও শতভাগ দায়িত্বশীল মেডিসিন পয়েন্ট। আমরা সারদাগঞ্জ, কাশিমপুর ও আশপাশের মানুষের চিকিৎসা প্রয়োজনের মুহূর্তে সঠিক ওষুধ ও স্বাস্থ্য সরঞ্জাম পৌঁছে দিতে নিবেদিত।',
      desc2: 'আমাদের এখানে প্রতিটি ওষুধ সঠিক তাপমাত্রা ও কোল্ড-চেইন বজায় রেখে সংরক্ষণ করা হয়। কোনো প্রকার নকল বা মানহীন ওষুধের স্থান আমাদের এখানে নেই। অভিজ্ঞ সি-গ্রেড ফার্মাসিস্টের সক্রিয় উপস্থিতিতে আমরা প্রতিটি রোগীর সঠিক যত্ন নিশ্চিত করি।',
      points: [
        '১০০% আসল ও রেজিস্টার্ড ফার্মাসিউটিক্যালসের ওষুধ',
        'উন্নত তাপমাত্রা নিয়ন্ত্রণ ও হাইজিনিক পরিবেশ',
        'জরুরি মুহূর্তে দ্রুত ও আন্তরিক সহযোগিতা',
        'ন্যায্য মূল্য ও রোগীদের প্রতি মানবিক দৃষ্টিভঙ্গি'
      ]
    },
    owner: {
      badge: 'নেতৃত্ব ও দক্ষতা',
      heading: 'মালিক ও ফার্মাসিস্ট পরিচিতি',
      subheading: 'রোগীদের সেবায় অভিজ্ঞ ও নিবেদিতপ্রাণ পেশাদার',
      expTitle: 'পেশাগত অঙ্গীকার ও অভিজ্ঞতা',
      activitiesTitle: 'প্রধান দায়িত্ব ও কার্যক্রমসমূহ',
      quoteTitle: 'মালিকের বাণী',
      facebookBtn: 'ফেসবুকে যুক্ত হন'
    },
    services: {
      badge: 'সেবাসমূহ',
      heading: 'আমাদের বহুমুখী স্বাস্থ্য ও মেডিসিন সেবা',
      subheading: 'জরুরি ওষুধ থেকে শুরু করে ডায়াগনস্টিক পরীক্ষা—সবকিছু এক ছাদের নিচে',
      filterAll: 'সকল সেবা (১২)',
      filterMedicine: 'ওষুধ ও জরুরি (২)',
      filterDiagnostic: 'ডায়াগনস্টিক ও পরীক্ষা (৩)',
      filterCare: 'প্রাথমিক চিকিৎসা ও কেয়ার (৫)',
      filterSurgical: 'সার্জিক্যাল ও সরঞ্জাম (২)',
      contactHelp: 'জরুরি প্রয়োজনে যেকোনো সেবার জন্য সরাসরি যোগাযোগ করুন:'
    },
    emergency: {
      badge: 'জরুরি স্বাস্থ্যসেবা',
      heading: '২৪ ঘণ্টা নিরবচ্ছিন্ন মেডিসিন সেবা',
      subheading: '"সবসময় আপনার পাশে"',
      desc: 'অসুখ-বিসুখ বা দুর্ঘটনা কোনো সময় মেনে আসে না। গভীর রাতে হঠাৎ প্রয়োজনীয় অ্যান্টিবায়োটিক, হাঁপানির ইনহেলার কিংবা শিশুর ওষুধ প্রয়োজন হলে যেকোনো সময় আমাদের সাথে যোগাযোগ করুন।',
      feature1Title: 'রাত-দিনের সক্রিয় সাপোর্ট',
      feature1Desc: 'সকাল ৭:০০ টা থেকে রাত ১:৩০ টা পর্যন্ত সরাসরি কাউন্টারে এবং গভীর রাতে জরুরি অন-কল সুবিধা।',
      feature2Title: 'হোয়াটসঅ্যাপে তাৎক্ষণিক সাড়া',
      feature2Desc: 'জরুরি প্রেসক্রিপশনের ছবি পাঠিয়ে ওষুধের প্রাপ্যতা নিশ্চিত করুন ও প্রস্তুত রাখুন।',
      feature3Title: 'জরুরি মেডিকেল সরঞ্জাম',
      feature3Desc: 'অক্সিজেন ক্যানুলা, নেবুলাইজার, স্যালাইন ও ব্যান্ডেজের তাৎক্ষণিক সংস্থান।',
      callNowBtn: 'জরুরি নম্বরে কল দিন (01815772951)',
      waBtn: 'WhatsApp চ্যাট শুরু করুন'
    },
    gallery: {
      badge: 'বাস্তব চিত্র',
      heading: 'আমাদের মেডিসিন পয়েন্ট ও পরিবেশ',
      subheading: 'একটি পরিষ্কার, গোছানো এবং আধুনিক স্বাস্থ্যসেবা কেন্দ্র',
      realPhotoBadge: 'আসল স্টোর ফটোগ্রাফ',
      viewFullBtn: 'বড় আকারে ছবি দেখুন',
      caption: 'লাইফ কেয়ার মেডিসিন পয়েন্ট - মিশন গেট, পাগলা মার্কেট রোড, সারদাগঞ্জ, কাশিমপুর, গাজীপুর।',
      features: [
        { label: 'সংরক্ষণ মান', val: 'আন্তর্জাতিক ড্রাগ স্টোরেজ মানদণ্ড' },
        { label: 'পরিচ্ছন্নতা', val: 'জীবাণুমুক্ত ও স্বাস্থ্যকর কাউন্টার' },
        { label: 'স্টক প্রাপ্যতা', val: 'সকল জরুরি লাইফ-সেভিং মেডিসিন' }
      ]
    },
    location: {
      badge: 'আমাদের ঠিকানা',
      heading: 'লোকেশন ও সময়সূচি',
      subheading: 'সহজেই আমাদের ফার্মেসিতে পৌঁছান',
      addressTitle: 'পূর্ণাঙ্গ ঠিকানা',
      hoursTitle: 'নিয়মিত সময়সূচি',
      openEveryday: 'সপ্তাহের ৭ দিন খোলা',
      hoursTime: 'সকাল ৭:০০ টা — রাত ১:৩০ টা',
      nightService: '২৪ ঘণ্টা অন-কল জরুরি সেবা চালু রয়েছে',
      plusCodeTitle: 'Google Maps প্লাস কোড',
      copyPlusCode: 'প্লাস কোড কপি করুন',
      copied: 'কপি হয়েছে!',
      getDirections: 'গুগল ম্যাপে ডিরেকশন পান',
      landmark: 'ল্যান্ডমার্ক: আজিজিয়া মাদ্রাসা সংলগ্ন ও মিশন গেট'
    },
    contact: {
      badge: 'যোগাযোগ',
      heading: 'সরাসরি আমাদের সাথে কথা বলুন',
      subheading: 'ওষুধের তথ্য, দাম বা প্রেসক্রিপশন পাঠাতে নিচের যেকোনো মাধ্যমে যুক্ত হন',
      phonePrimary: 'প্রধান মোবাইল নম্বর',
      phoneAlt: 'বিকল্প মোবাইল নম্বর',
      whatsappTitle: 'অফিসিয়াল হোয়াটসঅ্যাপ',
      emailTitle: 'ইমেইল ঠিকানা',
      formTitle: 'প্রেসক্রিপশন বা প্রয়োজনীয় ওষুধের জন্য বার্তা পাঠান',
      formDesc: 'ফর্মটি পূরণ করে সরাসরি আমাদের হোয়াটসঅ্যাপে বার্তা পাঠাতে পারেন।',
      namePlaceholder: 'আপনার নাম লিখুন',
      phonePlaceholder: 'মোবাইল নম্বর',
      msgPlaceholder: 'আপনার প্রয়োজনীয় ওষুধের নাম অথবা প্রশ্ন লিখুন...',
      sendWaBtn: 'হোয়াটসঅ্যাপে বার্তা পাঠান',
      disclaimer: 'দ্রষ্টব্য: রেজিস্টার্ড ডাক্তারের প্রেসক্রিপশন ছাড়া কোনো অ্যান্টিবায়োটিক বা শিডিউল ওষুধ দেওয়া হয় না।'
    },
    policies: {
      badge: 'স্বচ্ছতা ও নিয়মাবলী',
      heading: 'আমাদের ব্যবসায়িক নীতিমালা',
      subheading: 'দায়িত্বশীল ফার্মাসিউটিক্যাল সেবার জন্য আমাদের স্পষ্ট অঙ্গীকার'
    },
    developerSection: {
      badge: 'ডিজিটাল ক্রাফটসম্যানশিপ ও সফটওয়্যার ডেভেলপমেন্ট',
      heading: 'ওয়েবসাইটটি তৈরি করেছে কারা?',
      subheading: 'JH Soft Corporation — আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ্লিকেশন ও সফটওয়্যার সমাধান',
      companyBio: 'JH Soft Corporation একটি সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট প্রতিষ্ঠান, যেখানে আধুনিক প্রযুক্তি ব্যবহার করে ব্যবসা ও প্রতিষ্ঠানের জন্য দ্রুত, নিরাপদ, ব্যবহারবান্ধব এবং প্রফেশনাল ডিজিটাল সমাধান তৈরি করা হয়। লাইফ কেয়ার মেডিসিন পয়েন্টের এই পূর্ণাঙ্গ প্ল্যাটফর্মটি তাদের কারিগরি নির্দেশনায় সফলভাবে বাস্তবায়িত হয়েছে।',
      servicesHeading: 'আমরা কী ধরনের কাজ করি?',
      servicesSubheading: 'ব্যবসা ও এন্টারপ্রাইজের প্রয়োজনীয় সকল ডিজিটাল প্রযুক্তি সেবা',
      whyBadge: 'কেন আমাদের নির্বাচন করবেন?',
      whyHeading: 'কেন JH Soft Corporation?',
      whyDesc: 'আমরা প্রতিটি প্রোজেক্টে সর্বোচ্চ কারিগরি মান, আধুনিক পারফরম্যান্স অপ্টিমাইজেশন ও দীর্ঘস্থায়ী স্থায়িত্ব নিশ্চিত করি।',
      bannerHeading: 'আপনার ব্যবসার জন্য ওয়েবসাইট বা সফটওয়্যার দরকার?',
      bannerDesc: 'আপনার ব্যবসা বা প্রতিষ্ঠানের প্রয়োজন অনুযায়ী একটি আধুনিক, গতিশীল ও প্রফেশনাল ডিজিটাল সমাধান তৈরি করতে JH Soft Corporation-এর সাথে সরাসরি যোগাযোগ করুন।',
      ctaWebsite: 'JH Soft Corporation-এর ওয়েবসাইট দেখুন',
      ctaContact: 'ওয়েব ডেভেলপমেন্ট নিয়ে যোগাযোগ করুন'
    },
    footer: {
      quickLinks: 'দ্রুত লিংক',
      contactInfo: 'যোগাযোগের তথ্য',
      serviceHours: 'সেবার সময়',
      allRights: 'সর্বস্বত্ব সংরক্ষিত।',
      devCredit: 'Designed & Developed by'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      pharmacist: 'Owner & Pharmacist',
      service24h: '24/7 Service',
      gallery: 'Store Gallery',
      policies: 'Policies',
      location: 'Location & Contact',
      developer: 'Developer',
      callBtn: 'Emergency Call',
      whatsappBtn: 'WhatsApp'
    },
    hero: {
      badge: '24/7 Continuous Service',
      heading: 'Life Care Medicine Point',
      tagline: 'Your Wellness, Our Commitment.',
      subtagline: 'Not just profit-making—human service is our core mission.',
      desc: 'We are sincerely dedicated to making essential prescription medicines, maternal/infant care, surgical supplies, and reliable health diagnostics easily accessible for you and your family.',
      ctaWhatsApp: 'Send Prescription on WhatsApp',
      ctaCall: 'Call Now Directly',
      ctaLearn: 'Explore Services',
      pharmacistTag: 'Proprietor & Lead Pharmacist',
      hoursBadge: 'Open 7 Days a Week'
    },
    trust: {
      heading: 'Why Place Your Trust in Us?',
      subheading: '5 solid commitments ensuring your family’s healthcare safety in Gazipur'
    },
    about: {
      badge: 'About Us',
      heading: 'Discover Life Care Medicine Point',
      estLabel: 'Established Date',
      typeLabel: 'Business Category',
      mottoLabel: 'Core Philosophy',
      desc1: 'Life Care Medicine Point is a modern, hygienic, and patient-first healthcare pharmacy located in Sardarganj, Kashimpur, Gazipur. We serve our community with genuine pharmaceuticals, surgical goods, and supportive health checkups.',
      desc2: 'All medications are stored under strict temperature control adhering to cold-chain pharmaceutical guidelines. With an active, certified C-Grade Pharmacist on-site, we safeguard drug integrity and offer compassionate patient guidance.',
      points: [
        '100% genuine & registered pharmaceutical products',
        'Strict temperature monitoring & hygienic facility',
        'Rapid & sincere emergency assistance round the clock',
        'Transparent fair pricing with human-centered empathy'
      ]
    },
    owner: {
      badge: 'Leadership & Expertise',
      heading: 'Meet the Proprietor & Pharmacist',
      subheading: 'A dedicated, experienced healthcare professional committed to patient care',
      expTitle: 'Professional Background & Experience',
      activitiesTitle: 'Key Professional Roles & Responsibilities',
      quoteTitle: 'Proprietor Message',
      facebookBtn: 'Connect on Facebook'
    },
    services: {
      badge: 'Our Services',
      heading: 'Comprehensive Pharmacy & Healthcare Services',
      subheading: 'From emergency medicines to vital diagnostic support—all under one trusted roof',
      filterAll: 'All Services (12)',
      filterMedicine: 'Medicine & Emergency (2)',
      filterDiagnostic: 'Diagnostics & Tests (3)',
      filterCare: 'Care & First-Aid (5)',
      filterSurgical: 'Surgical & Devices (2)',
      contactHelp: 'Need immediate medicine support? Reach out directly:'
    },
    emergency: {
      badge: 'Emergency Healthcare',
      heading: '24-Hour Continuous Medicine Service',
      subheading: '"Always By Your Side"',
      desc: 'Health emergencies and sudden illnesses can occur at any hour. Whether you need an emergency antibiotic, asthma inhaler, or urgent baby medication late at night, we are here for you.',
      feature1Title: 'Day & Night Active Support',
      feature1Desc: 'Open daily from 7:00 AM to 1:30 AM with 24/7 on-call emergency dispatch assistance.',
      feature2Title: 'Instant WhatsApp Response',
      feature2Desc: 'Send a photo of your prescription to verify availability and have it packed instantly.',
      feature3Title: 'Emergency Medical Supplies',
      feature3Desc: 'Immediate availability of nebulizers, IV sets, sterile dressings, and saline infusions.',
      callNowBtn: 'Call Emergency Line (01815772951)',
      waBtn: 'Start WhatsApp Chat'
    },
    gallery: {
      badge: 'Real Facility',
      heading: 'Our Medicine Point & Atmosphere',
      subheading: 'A clean, well-organized, and modern healthcare outlet',
      realPhotoBadge: 'Authentic Store Photograph',
      viewFullBtn: 'View High-Res Photo',
      caption: 'Life Care Medicine Point - Mission Gate, Pagla Market Road, Sardarganj, Kashimpur, Gazipur.',
      features: [
        { label: 'Storage Standard', val: 'International Pharmaceutical Protocols' },
        { label: 'Hygiene Rating', val: 'Sanitized & Spotless Countertop' },
        { label: 'Stock Depth', val: 'Comprehensive Critical Life-Saving Drugs' }
      ]
    },
    location: {
      badge: 'Visit Us',
      heading: 'Location & Operational Schedule',
      subheading: 'Find our pharmacy easily in Kashimpur, Gazipur',
      addressTitle: 'Official Address',
      hoursTitle: 'Operational Hours',
      openEveryday: 'Open 7 Days a Week',
      hoursTime: '7:00 AM — 1:30 AM',
      nightService: '24-Hour On-Call Emergency Service is Active',
      plusCodeTitle: 'Google Maps Plus Code',
      copyPlusCode: 'Copy Plus Code',
      copied: 'Copied!',
      getDirections: 'Open in Google Maps',
      landmark: 'Landmark: Adjacent to Aziziya Madrasa & Mission Gate'
    },
    contact: {
      badge: 'Contact Us',
      heading: 'Connect With Us Directly',
      subheading: 'Inquire about medicine stock, prices, or send prescriptions through any of these channels',
      phonePrimary: 'Primary Phone Number',
      phoneAlt: 'Alternative Phone Number',
      whatsappTitle: 'Official WhatsApp',
      emailTitle: 'Email Address',
      formTitle: 'Send Medicine Inquiry or Prescription',
      formDesc: 'Fill out this quick form to generate a direct WhatsApp message to our pharmacist.',
      namePlaceholder: 'Your Name',
      phonePlaceholder: 'Phone Number',
      msgPlaceholder: 'List required medicines or your query...',
      sendWaBtn: 'Send via WhatsApp',
      disclaimer: 'Note: Antibiotics and scheduled prescription drugs will not be dispensed without a valid registered doctor prescription.'
    },
    policies: {
      badge: 'Transparency & Safety',
      heading: 'Business & Service Policies',
      subheading: 'Our clear commitment to ethical, safe, and legal pharmacy operations'
    },
    developerSection: {
      badge: 'Digital Craftsmanship & Software Development',
      heading: 'Who Built This Website?',
      subheading: 'JH Soft Corporation — Modern Websites, Web Applications & Software Solutions',
      companyBio: 'JH Soft Corporation is a software and web development agency creating fast, secure, user-friendly, and professional digital solutions for businesses and modern organizations. Life Care Medicine Point’s digital platform was architected and engineered under their technical leadership.',
      servicesHeading: 'What We Do',
      servicesSubheading: 'End-to-end digital engineering and software services for growing businesses',
      whyBadge: 'Why Partner With Us',
      whyHeading: 'Why Choose JH Soft Corporation?',
      whyDesc: 'We prioritize performance, modern engineering standards, accessibility, and long-term maintainability for every digital product.',
      bannerHeading: 'Need a Website or Software for Your Business?',
      bannerDesc: 'To build a modern, lightning-fast, and professional digital platform tailored to your specific business requirements, get in touch with JH Soft Corporation today.',
      ctaWebsite: 'Visit JH Soft Corporation Website',
      ctaContact: 'Contact for Web Development'
    },
    footer: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      serviceHours: 'Operating Hours',
      allRights: 'All rights reserved.',
      devCredit: 'Designed & Developed by'
    }
  }
};
