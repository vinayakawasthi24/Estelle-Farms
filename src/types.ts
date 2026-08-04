export interface RoseVariety {
  id: string;
  name: string;
  tag: string;
  colorCategory: string;
  description: string;
  stemHeight: string;
  budSize: string;
  image: string;
  accentColor: string;
  bgTint: string;
}

export interface EthosPromise {
  number: string;
  title: string;
  content: string;
}

export interface EnquiryData {
  varietyId: string;
  stemCount: number;
  deliveryDate: string;
  purpose: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export type ViewMode = 'desktop' | 'mobile' | 'split';
