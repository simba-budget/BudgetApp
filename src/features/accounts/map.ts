import { Account, SaveAccountRequest } from '@api/clients/accounts/types';

export const mapSaveAccountRequest = (
  account?: Account | null,
): SaveAccountRequest => ({
  name: account?.name ?? '',
  initialBalance: account?.initialBalance ?? 0,
  currency: account?.currency ?? 'EUR',
  type: account?.type ?? 'PERSONAL',
});
