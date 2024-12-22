import httpClient from '@api/httpClient';
import { ListResponse } from '@api/types';

import { Institution } from './types';

const url = '/institutions';

export const getInstitutions = () => {
  return httpClient.get<void, ListResponse<Institution>>(url);
};
