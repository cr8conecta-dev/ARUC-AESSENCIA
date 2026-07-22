export interface HeadlineVariant {
  id: string;
  text: string;
}

export interface PainBullet {
  id: string; // Meaningful IDs
  text: string;
}

export interface JourneyCard {
  id: string;
  title: string;
  description: string;
  duration?: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  avatarUrl: string;
  text: string;
  beforeAfter?: string;
}

export interface ObjectionItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
