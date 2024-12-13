import { BaseModel } from '@api/types';

export type ProfileStatus = 'ACTIVE' | 'BLOCKED';
export type ProfileRole = 'ROLE_ADMIN' | 'ROLE_USER';
export type Locale = 'EN';

export interface Profile extends BaseModel {
  roles: ProfileRole[];
  status: ProfileStatus;
  locale: Locale;
  email: string;
  firstName: string;
  lastName: string;
  unreadNotificationsCount: number;
}

export interface SaveProfileRequest {
  email: string;
  firstName: string;
  lastName: string;
}

export interface SaveLocaleRequest {
  locale: Locale;
}
