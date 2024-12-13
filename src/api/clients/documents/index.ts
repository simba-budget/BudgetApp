import httpClient from '@api/httpClient';
import { DataResponse } from '@api/types';

import { Document } from './types';

const url = '/documents';

export const getTermsAndConditions = () => {
  return httpClient.get<void, DataResponse<Document>>(`${url}/terms-and-conditions`);
};

export const getPrivacyPolicy = () => {
  return httpClient.get<void, DataResponse<Document>>(`${url}/privacy-policy`);
};
