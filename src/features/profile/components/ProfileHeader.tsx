import { Profile } from '@api/clients/profile/types';
import { Text } from '@common/v2/components';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { getInitials } from '@utils/string';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { getFullName } from '../utils';

export interface ProfileHeaderProps {
  style?: StyleProp<ViewStyle>;
  profile: Profile;
}

const ProfileHeader = ({ style, profile }: ProfileHeaderProps) => (
  <View style={[center, padding('vertical')('s'), style]}>
    <View style={styles.avatarContainer}>
      <Text weight="bold" color="primary" size="xl">
        {getInitials(getFullName(profile))}
      </Text>
    </View>
    <Text size="m" color="primary" weight="semiBold" textAlign="center">
      {getFullName(profile)}
    </Text>
    <Text size="s" color="tertiary" weight="medium" textAlign="center">
      {profile.email}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    ...center,
    ...margin('bottom')('xs'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});

export default ProfileHeader;
