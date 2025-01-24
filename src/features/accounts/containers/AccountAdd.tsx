import { useAccountsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { AccountForm } from '../components';
import { useAccountForm, useAddAccount } from '../hooks';

const AccountAdd = () => {
  const { t } = useAccountsTranslations();
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useAccountForm();
  const { addAccount, isSubmitting } = useAddAccount({ onSuccess: goBack });

  return (
    <AccountForm
      title={t('Add Account')}
      onSubmit={handleSubmit(addAccount)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default AccountAdd;
