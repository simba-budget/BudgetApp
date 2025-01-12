import { useHomeTranslations } from '@i18n/hooks';
import {
  goalAddRoute,
  membersAndInvitationsRoute,
  RootNavigation,
  toCategoryAdd,
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
        title: t('Create\nGoal'),
        iconName: 'squaresPlus',
        onPress: () => navigation.push(goalAddRoute),
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

export default useQuickActionItems;
