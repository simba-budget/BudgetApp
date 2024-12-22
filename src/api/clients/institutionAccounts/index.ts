import httpClient from '@api/httpClient';
import { ListRequest, ListResponse } from '@api/types';

import { InstitutionAccount, InstitutionAccountsFilter } from './types';

const url = '/institution-accounts';

export const getInstitutionAccounts = (request: ListRequest<InstitutionAccountsFilter>) => {
  const params = { ...request.filter };
  return httpClient.get<void, ListResponse<InstitutionAccount>>(url, { params });
};
