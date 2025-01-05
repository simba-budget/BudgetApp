import { ExternalAccount } from '@api/clients/externalAccounts/types';

export const formatExternalAccount = (externalAccount: ExternalAccount) => {
  return `${externalAccount.name} (****${externalAccount.mask})`;
};
