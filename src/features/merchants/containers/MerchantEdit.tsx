import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { MerchantForm } from '../components';
import { useEditMerchant, useMerchant, useMerchantForm } from '../hooks';
import { mapSaveMerchantRequest } from '../map';
import { SaveMerchantRequest } from '../types';

export interface MerchantEditProps {
  id: number;
}

const MerchantEdit = ({ id }: MerchantEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<AccountNavigation>();
  const { merchant, isLoading } = useMerchant(id);
  const { handleSubmit, control, reset } = useMerchantForm();
  const { editMerchant, isSubmitting } = useEditMerchant({ onSuccess: goBack });

  const handleOnSubmit = (request: SaveMerchantRequest) => {
    return editMerchant({ id, ...request, accountId });
  };

  useEffect(() => {
    if (merchant) reset(mapSaveMerchantRequest(merchant));
  }, [merchant, reset]);

  return (
    <MerchantForm
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default MerchantEdit;
