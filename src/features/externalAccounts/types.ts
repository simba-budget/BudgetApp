import { ExternalAccountsFilter as ApiExternalAccountsFilter } from '@api/clients/externalAccounts/types';

export type ExternalAccountsFilter = Omit<ApiExternalAccountsFilter, 'accountId'>;
