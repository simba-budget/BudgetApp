import { Text } from '@common/v2/components';
import { gap } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import { ProfileSectionProps } from '../types';

import ProfileItem from './ProfileItem';

const ProfileSection = ({ title, items }: ProfileSectionProps) => (
  <View style={gap('row')('xs')}>
    <Text weight="semiBold" size="xs" color="tertiary">
      {title}
    </Text>
    {items.map((item, index) => (
      <ProfileItem {...item} key={index} />
    ))}
  </View>
);

export default ProfileSection;
