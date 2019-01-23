export interface IOffer {
  address: string;
  address_object: IAddressObject;
  category: string[];
  district: string;
  ending_date: string;
  financial: IFinancial;
  holding_period: any;
  id: string;
  isArchived: boolean;
  isComingSoon: boolean;
  isFeatured: boolean;
  isPublish: boolean;
  label: any[];
  mainPhoto: IMainPhoto;
  maturity_date: string;
  name: string;
  nice_url: string;
  status: string;
  title: string;
  type: string;
}


export interface IAddressObject {
  canton: string;
  city: string;
  country: string;
  district: string;
  street: string;
  street2: string;
  zip: string;
}

export interface IFinancial {
  annual_yield_or_roi: number;
  available_to_invest: number;
  bank_organisation_id: string;
  foxstone_fee: number;
  funded: number;
  holding_period: string;
  increment: number;
  interest_rate: number;
  investment_goal: number;
  loan_to_value: number;
  market_value: number;
  maturity: string;
  maximum_investment: number;
  minimum_investment: number;
  notary_fee: number;
  notary_organisation_id: string;
  rank: string;
  type?: string;
}

export interface IMediaType {
  availability: any[];
  custom_id: string;
  id: string;
  is_visible: boolean;
  scope: string;
  target: string[];
  title: string;
  type: string;
}

export interface IMainPhoto {
  add_datetime: string;
  description: string;
  id: string;
  index: number;
  label_text: string;
  media_type: IMediaType;
  media_type_id: string;
  title: string;
  url: string;
  weight: number;
}

