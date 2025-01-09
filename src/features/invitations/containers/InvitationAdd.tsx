import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useInvitationsTranslations } from '@i18n/hooks';
import {
  invitationsRoute,
  RootNavigation,
  toSuccess,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { InvitationForm } from '../components';
import { useAddInvitation, useInvitationForm } from '../hooks';

const InvitationAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const navigation = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useInvitationForm();
  const { t } = useInvitationsTranslations();

  const handleOnSuccess = useCallback(
    () =>
      toSuccess(navigation, {
        title: t('Invitation is successfully sent!'),
        description: t('Lorem Ipsum is simply dummy text of the printing and'),
        onCtaPress: () => navigation.replace(invitationsRoute),
        ctaTitle: t('See All Invitations'),
        iconName: 'userPlus',
      }),
    [navigation, t],
  );

  const { addInvitation, isSubmitting } = useAddInvitation({
    onSuccess: handleOnSuccess,
    accountId,
  });

  return (
    <InvitationForm
      onSubmit={handleSubmit(addInvitation)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default InvitationAdd;
