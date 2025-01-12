import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { InvitationForm } from '../components';
import { useAddInvitation, useInvitationForm } from '../hooks';

const InvitationAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control, isValid } = useInvitationForm();

  const { addInvitation, isSubmitting } = useAddInvitation({
    onSuccess: goBack,
    accountId,
  });

  return (
    <InvitationForm
      isValid={isValid}
      onSubmit={handleSubmit(addInvitation)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default InvitationAdd;
