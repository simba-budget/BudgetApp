import httpClient from '@api/httpClient';
import { DataResponse } from '@api/types';

import { LinkTokenResponse } from './types';

const url = '/open-banking';

export const createLinkToken = () => {
  return httpClient.post<void, DataResponse<LinkTokenResponse>>(`${url}/link-token`);
};
