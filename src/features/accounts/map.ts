import { Account, SaveAccountRequest } from '@api/clients/accounts/types';

export const mapSaveAccountRequest = (account?: Account | null): SaveAccountRequest => ({
  name: account?.name ?? '',
  initialBudget: account?.initialBudget ?? 0,
  currency: account?.currency ?? 'EUR',
  type: account?.type ?? 'PERSONAL',
});
