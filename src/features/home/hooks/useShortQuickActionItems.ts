import { useHomeTranslations } from '@i18n/hooks';
import {
  categoryAddRoute,
  goalAddRoute,
  invitationAddRoute,
  membersAndInvitationsRoute,
  RootNavigation,
  transactionAddRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';

import { QuickActionItem } from '../types';

const useShortQuickActionItems = () => {
  const { t } = useHomeTranslations();
  const navigation = useNavigation<RootNavigation>();

  return useMemo<QuickActionItem[]>(
    () => [
      {
        title: t('Create\nTransaction'),
        iconName: 'arrowRightLeft',
        onPress: () => navigation.navigate(transactionAddRoute),
      },
      {
        title: t('Create\nCategory'),
        iconName: 'squaresPlus',
        onPress: () => navigation.navigate(categoryAddRoute),
      },
      {
        title: t('Invite\nMember'),
        iconName: 'userPlus',
        onPress: () => navigation.push(invitationAddRoute),
      },
      {
        title: t('View\nMembers'),
        iconName: 'users',
        onPress: () => navigation.navigate(membersAndInvitationsRoute),
      },
    ],
    [t, navigation],
  );
};

export default useShortQuickActionItems;
