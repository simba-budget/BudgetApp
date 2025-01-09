import { useHomeTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  toCategoryAdd,
  toInvitationAdd,
  toMembers,
  toTagAdd,
  toTransactionAdd,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';

import { QuickActionItem } from '../types';

const useQuickActionItems = () => {
  const { t } = useHomeTranslations();
  const navigation = useNavigation<RootNavigation>();

  return useMemo<QuickActionItem[]>(
    () => [
      {
        title: t('Invite\nMember'),
        iconName: 'userPlus',
        onPress: () => toInvitationAdd(navigation),
      },
      {
        title: t('Create\nTransaction'),
        iconName: 'arrowRightLeft',
        onPress: () => toTransactionAdd(navigation),
      },
      {
        title: t('Create\nCategory'),
        iconName: 'squaresPlus',
        onPress: () => toCategoryAdd(navigation),
      },
      {
        title: t('Create\nTag'),
        iconName: 'squaresPlus',
        onPress: () => toTagAdd(navigation),
      },
      {
        title: t('View\nMembers'),
        iconName: 'users',
        onPress: () => toMembers(navigation),
      },
    ],
    [t, navigation],
  );
};

export default useQuickActionItems;
