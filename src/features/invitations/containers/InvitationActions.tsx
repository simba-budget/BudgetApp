import { Actions } from '@common/components';
import { ActionItem } from '@common/components/Actions';
import { useInvitationsTranslations } from '@i18n/hooks';
import {
  invitationDeleteRoute,
  invitationRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';

export interface InvitationActionsProps {
  id: number;
}

const InvitationActions = ({ id }: InvitationActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useInvitationsTranslations();

  const items = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View invitation details'),
        onPress: () => navigation.navigate(invitationRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete invitation'),
        onPress: () => navigation.push(invitationDeleteRoute, { id }),
      },
    ],
    [t, navigation, id],
  );

  return <Actions items={items} title={t('Invitation Actions')} />;
};

export default InvitationActions;
