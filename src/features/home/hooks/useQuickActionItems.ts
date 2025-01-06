import { useHomeTranslations } from '@i18n/hooks';
import {
  AccountNavigation,
  toCategoryAdd,
  toInvitationAdd,
  toMembers,
  toTransactionAdd,
} from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';

import { QuickActionItem } from '../types';

const useQuickActionItems = () => {
  const { t } = useHomeTranslations();
  const navigation = useNavigation<AccountNavigation>();

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
        title: t('View\nMembers'),
        iconName: 'users',
        onPress: () => toMembers(navigation),
      },
    ],
    [t, navigation],
  );
};

export default useQuickActionItems;
