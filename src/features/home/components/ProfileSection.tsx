import { Profile } from '@api/clients/profile/types';
import { IconButton, Text } from '@common/v2/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface ProfileSectionProps {
  style?: StyleProp<ViewStyle>;
  profile: Profile;
  onProfilePress: () => void;
  onNotificationsPress: () => void;
}

const ProfileSection = ({
  style,
  profile,
  onProfilePress,
  onNotificationsPress,
}: ProfileSectionProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[rowCenter, padding('horizontal')('m'), style]}>
      <TouchableOpacity
        onPress={onProfilePress}
        style={[rowCenter, flex1, gap('column')('s')]}>
        <IconButton onPress={onProfilePress} iconName="profile" />
        <View>
          <Text color="primary" size="m" weight="bold">
            {t('Welcome, {{firstName}}', { firstName: profile.firstName })}
          </Text>
          <Text color="tertiary" size="s" weight="medium">
            {profile.email}
          </Text>
        </View>
      </TouchableOpacity>
      <IconButton onPress={onNotificationsPress} iconName="notification" />
    </View>
  );
};

export default ProfileSection;
