import React from 'react';

import { ExternalAccountDetails } from '../components';
import { useExternalAccount } from '../hooks';

export interface ExternalAccountProps {
  id: number;
}

const ExternalAccount = ({ id }: ExternalAccountProps) => {
  const { externalAccount, refetch, isRefetching, isLoading } =
    useExternalAccount(id);

  return (
    <ExternalAccountDetails
      externalAccount={externalAccount}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
    />
  );
};

export default ExternalAccount;
