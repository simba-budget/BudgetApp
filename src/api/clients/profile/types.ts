import { BaseModel } from '@api/types';

export type ProfileStatus = 'ACTIVE' | 'BLOCKED';
export type ProfileRole = 'ROLE_ADMIN' | 'ROLE_USER';
export type Locale = 'EN';
export type PensionAccumulationType = 'CONSISTENTLY' | 'YES' | 'NO';

export type SocialInsuranceType =
  | 'FULL_TIME_WORK'
  | 'FULL_TIME_STUDIES'
  | 'PART_TIME_STUDIES'
  | 'INSURED_BY_STATE'
  | 'NONE';

export interface Profile extends BaseModel {
  roles: ProfileRole[];
  status: ProfileStatus;
  locale: Locale;
  email: string | null;
  phone: string;
  firstName: string;
  lastName: string;
  address: string | null;
  personalCode: string | null;
  unreadNotificationsCount: number;
  vat: string | null;
  vatIssueDate: string | null;
  socialInsuranceType: SocialInsuranceType | null;
  socialInsuranceStartDate: string | null;
  pensionAccumulationType: PensionAccumulationType | null;
  pensionAccumulationStartDate: string | null;
}

export interface SaveProfileRequest {
  email: string;
  firstName: string;
  lastName: string;
  personalCode?: string | null;
  address: string;
}

export interface SaveVatRequest {
  vat: string;
  vatIssueDate: string;
}

export interface SaveLocaleRequest {
  locale: Locale;
}

export interface SaveSocialInsuranceRequest {
  socialInsuranceType: SocialInsuranceType;
  socialInsuranceStartDate: string | null;
}

export interface SavePensionAccumulationRequest {
  pensionAccumulationType: PensionAccumulationType;
  pensionAccumulationStartDate: string | null;
}
