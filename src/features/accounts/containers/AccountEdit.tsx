import { SaveAccountRequest } from '@api/clients/accounts/types';
import { useAccountsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { AccountForm } from '../components';
import { useAccount, useAccountForm, useEditAccount } from '../hooks';
import { mapSaveAccountRequest } from '../map';

export interface AccountEditProps {
  id: number;
}

const AccountEdit = ({ id }: AccountEditProps) => {
  const { t } = useAccountsTranslations();
  const { goBack } = useNavigation<RootNavigation>();
  const { account, isLoading } = useAccount(id);
  const { handleSubmit, control, reset } = useAccountForm();
  const { editAccount, isSubmitting } = useEditAccount({ onSuccess: goBack });

  const handleOnSubmit = (request: SaveAccountRequest) => {
    return editAccount({ id, ...request });
  };

  useEffect(() => {
    if (account) reset(mapSaveAccountRequest(account));
  }, [account, reset]);

  return (
    <AccountForm
      title={t('Edit Account')}
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default AccountEdit;
