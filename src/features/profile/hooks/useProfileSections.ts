import { useLogout } from '@features/auth/hooks';
import { useProfileTranslations } from '@i18n/hooks';
import {
  AccountNavigation,
  toCategories,
  toExternalAccounts,
  toInvitations,
  toMembers,
  toMerchants,
  toTags,
} from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';

import { ProfileSectionProps } from '../types';

const useProfileSections = () => {
  const { logout } = useLogout();
  const navigation = useNavigation<AccountNavigation>();
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
        title: t('Account settings'),
        items: [
          {
            title: t('Categories'),
            iconName: 'card',
            onPress: () => toCategories(navigation),
          },
          {
            title: t('Merchants'),
            iconName: 'card',
            onPress: () => toMerchants(navigation),
          },
          {
            title: t('External Accounts'),
            iconName: 'card',
            onPress: () => toExternalAccounts(navigation),
          },
          {
            title: t('Invitations'),
            iconName: 'card',
            onPress: () => toInvitations(navigation),
          },
          {
            title: t('Members'),
            iconName: 'users',
            onPress: () => toMembers(navigation),
          },
          {
            title: t('Tags'),
            iconName: 'card',
            onPress: () => toTags(navigation),
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
            onPress: console.log,
            hideArrow: true,
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

export default useProfileSections;
