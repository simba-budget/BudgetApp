import { Confirmation } from '@common/components';
import { useProfileTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteAccount } from '../hooks';

const AccountDelete = () => {
  const { goBack } = useNavigation<RootNavigation>();
  const { t } = useProfileTranslations();
  const { deleteAccount, isSubmitting } = useDeleteAccount();

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={deleteAccount}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this account?')}
    />
  );
};

export default AccountDelete;
