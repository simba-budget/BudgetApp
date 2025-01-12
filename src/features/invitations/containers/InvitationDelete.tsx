import { Confirmation } from '@common/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteInvitation } from '../hooks';

export interface InvitationDeleteProps {
  id: number;
}

const InvitationDelete = ({ id }: InvitationDeleteProps) => {
  const { goBack, pop } = useNavigation<RootNavigation>();
  const { t } = useInvitationsTranslations();

  const { deleteInvitation, isSubmitting } = useDeleteInvitation({
    onSuccess: () => pop(2),
  });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteInvitation(id)}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this invitation?')}
    />
  );
};

export default InvitationDelete;
