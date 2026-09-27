export type Language = 'bn' | 'en';
export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  features: string[];
  featuresEn: string[];
  icon: string;
  category: 'medicine' | 'diagnostic' | 'care' | 'surgical';
  categoryLabel: string;
  categoryLabelEn: string;
  is24h?: boolean;
}

export interface TrustPillar {
  id: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  icon: string;
}

export interface PolicyItem {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  details: string[];
  detailsEn: string[];
  icon: string;
}

export interface PharmacistInfo {
  name: string;
  nameEn: string;
  designation: string;
  designationEn: string;
  title: string;
  titleEn: string;
  business: string;
  businessEn: string;
  experience: string;
  experienceEn: string;
  activities: string[];
  activitiesEn: string[];
  message: string;
  messageEn: string;
  regNote?: string;
  regNoteEn?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  titleEn: string;
  caption: string;
  captionEn: string;
  tag: string;
  tagEn: string;
}

export interface DeveloperInfo {
  name: string;
  role: string;
  roleEn: string;
  position: string;
  positionEn: string;
  company: string;
  companyEn: string;
  url: string;
  image: string;
  logo: string;
  bioBn: string;
  bioEn: string;
}

export interface BusinessData {
  name: string;
  nameEn: string;
  banglaName: string;
  mainTagline: string;
  englishTagline: string;
  subTagline: string;
  establishedDate: string;
  establishedDateEn: string;
  businessType: string;
  businessTypeEn: string;
  primaryService: string;
  primaryServiceEn: string;
  pharmacist: PharmacistInfo;
  phones: {
    primary: string;
    alternative: string;
    whatsapp: string;
    whatsappUrl: string;
  };
  email: string;
  facebookUrl: string;
  hours: {
    openTime: string;
    closeTime: string;
    days: string;
    daysEn: string;
    serviceNote: string;
    serviceNoteEn: string;
  };
  address: {
    bangla: string[];
    english: string[];
    plusCode: string;
    fullBangla: string;
    fullEnglish: string;
    mapUrl: string;
  };
  developer: DeveloperInfo;
}
