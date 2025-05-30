import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { MerchantForm } from '../components';
import { useAddMerchant, useMerchantForm } from '../hooks';

const MerchantAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useMerchantForm();
  const { addMerchant, isSubmitting } = useAddMerchant({
    onSuccess: goBack,
    accountId,
  });

  return (
    <MerchantForm
      onSubmit={handleSubmit(addMerchant)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default MerchantAdd;
