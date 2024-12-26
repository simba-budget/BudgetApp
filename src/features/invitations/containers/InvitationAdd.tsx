import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { InvitationForm } from '../components';
import { useAddInvitation, useInvitationForm } from '../hooks';

const InvitationAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<MainNavigation>();
  const { handleSubmit, control } = useInvitationForm();
  const { addInvitation, isSubmitting } = useAddInvitation({ onSuccess: goBack, accountId });

  return (
    <InvitationForm
      onSubmit={handleSubmit(addInvitation)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default InvitationAdd;
