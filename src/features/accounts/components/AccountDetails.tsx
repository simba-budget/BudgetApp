import { Profile } from '@api/clients/profile/types';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { getInitials } from '@utils/string';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Avatar, Text } from 'src/common/components';

export interface AccountDetailsProps {
  style?: StyleProp<ViewStyle>;
  profile: Profile;
}

const AccountDetails = ({ profile }: AccountDetailsProps) => (
  <View style={[padding('full')('l'), center]}>
    <Avatar
      style={margin('bottom')('s')}
      size={64}
      initials={getInitials(`${profile.firstName} ${profile.lastName}`)}
    />
    <Text color="primary" size="l" weight="semiBold" textAlign="center">
      {`${profile.firstName} ${profile.lastName}`}
    </Text>
    <Text color="tertiary" size="s" weight="medium" textAlign="center">
      {profile.email}
    </Text>
  </View>
);

export default AccountDetails;
