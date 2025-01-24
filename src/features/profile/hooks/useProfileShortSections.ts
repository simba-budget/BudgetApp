import { useLogout } from '@features/auth/hooks';
import { useProfileTranslations } from '@i18n/hooks';
import {
  accountDeleteRoute,
  RootNavigation,
  toCategories,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';

import { ProfileSectionProps } from '../types';

const useProfileShortSections = () => {
  const navigation = useNavigation<RootNavigation>();
  const { logout } = useLogout();
  const { t } = useProfileTranslations();

  return useMemo<ProfileSectionProps[]>(
    () => [
      {
        title: t('Profile settings'),
        items: [
          {
            title: t('Edit profile'),
            iconName: 'edit',
            onPress: () => toCategories(navigation),
          },
          {
            title: t('Language'),
            iconName: 'chat',
            onPress: () => toCategories(navigation),
          },
        ],
      },
      {
        title: t('Support'),
        items: [
          {
            title: t('FAQs'),
            iconName: 'chat',
            onPress: () => toCategories(navigation),
          },
          {
            title: t('Terms and conditions'),
            iconName: 'document',
            onPress: () => toCategories(navigation),
          },
          {
            title: t('Privacy policy'),
            iconName: 'document',
            onPress: () => toCategories(navigation),
          },
        ],
      },
      {
        title: 'Danger',
        items: [
          {
            title: t('Delete account'),
            iconName: 'delete',
            onPress: () => navigation.navigate(accountDeleteRoute),
            hideArrow: true,
            color: 'error',
          },
          {
            title: t('Sign Out'),
            iconName: 'logout',
            onPress: logout,
            hideArrow: true,
          },
        ],
      },
    ],
    [t, navigation, logout],
  );
};

export default useProfileShortSections;
