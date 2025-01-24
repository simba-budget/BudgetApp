import { center } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from './Text';

export interface AvatarProps {
  style?: StyleProp<ViewStyle>;
  initials: string;
  size?: number;
  uri?: string | null;
}

const Avatar = ({ style, size = 46, uri, initials }: AvatarProps) => (
  <View
    style={[
      styles.container,
      { width: size, height: size, borderRadius: size / 2 },
      style,
    ]}>
    {uri ? (
      <FastImage
        style={[styles.image, { borderRadius: size / 2 }]}
        resizeMode="cover"
        source={{ uri }}
      />
    ) : (
      <Text size="m" textAlign="center" weight="bold" color="secondary">
        {initials}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.text.tertiary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
