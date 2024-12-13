import { BaseModel, Translation } from '@api/types';

export type DocumentType = 'TERMS_AND_CONDITIONS' | 'PRIVACY_POLICY';

export interface DocumentTranslation extends Translation {
  content: string;
}

export interface Document extends BaseModel {
  type: DocumentType;
  translations: DocumentTranslation[];
}
