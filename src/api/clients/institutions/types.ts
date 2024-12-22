import { BaseModel } from '@api/types';

export interface Institution extends BaseModel {
  externalId: string;
  name: string;
  primaryColor: string;
  logo: string;
}
