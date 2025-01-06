import { Account } from '@api/clients/accounts/types';
import { Profile } from '@api/clients/profile/types';
import { Avatar, Badge, Button, Text } from '@common/v2/components';
import { useHomeTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { getInitials } from '@utils/string';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface AccountDetailsProps {
  style?: StyleProp<ViewStyle>;
  profile: Profile;
  account: Account;
  onAccountEditPress: () => void;
}

const AccountDetails = ({
  profile,
  account,
  onAccountEditPress,
}: AccountDetailsProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[padding('full')('l'), center]}>
      <Avatar
        style={margin('bottom')('s')}
        size={64}
        initials={getInitials(`${profile.firstName} ${profile.lastName}`)}
      />
      <Text color="primary" size="l" weight="semiBold" textAlign="center">
        {`${profile.firstName} ${profile.lastName}`}
      </Text>
      <Text
        style={margin('bottom')('xs')}
        color="tertiary"
        size="s"
        weight="medium"
        textAlign="center">
        {profile.email}
      </Text>
      <Text
        style={margin('bottom')('xs')}
        color="primary"
        size="l"
        weight="semiBold"
        textAlign="center">
        {account.name}
      </Text>
      <Badge style={margin('bottom')('l')} color="success" title={t('OWNER')} />
      <Button
        onPress={onAccountEditPress}
        color="secondary"
        size="small"
        title={t('Manage Account')}
      />
    </View>
  );
};

export default AccountDetails;
