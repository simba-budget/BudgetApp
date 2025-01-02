import { useHomeTranslations } from '@i18n/hooks';
import {
  AccountNavigation,
  toCategories,
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
        title: t('Invitation'),
        iconName: 'document',
        onPress: () => toInvitationAdd(navigation),
      },
      {
        title: t('Transaction'),
        iconName: 'card',
        onPress: () => toTransactionAdd(navigation),
      },
      {
        title: t('Categories'),
        iconName: 'chart',
        onPress: () => toCategories(navigation),
      },
      {
        title: t('Members'),
        iconName: 'users',
        onPress: () => toMembers(navigation),
      },
    ],
    [t, navigation],
  );
};

export default useQuickActionItems;
