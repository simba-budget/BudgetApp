import { Account, SaveAccountRequest } from '@api/clients/accounts/types';

export const mapSaveAccountRequest = (
  account?: Account | null,
): Partial<SaveAccountRequest> => ({
  name: account?.name ?? '',
  type: account?.type ?? 'PERSONAL',
  ...(account?.currency && { currencyId: account.currency.id }),
});
