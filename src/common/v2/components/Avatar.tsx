import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';

export interface AvatarProps {
  style?: StyleProp<ViewStyle>;
  size?: number;
  uri: string | null;
}

const Avatar = ({ style, size = 42, uri }: AvatarProps) => (
  <View
    style={[
      styles.container,
      { width: size, height: size, borderRadius: size / 2 },
      style,
    ]}>
    <FastImage
      style={[styles.image, { borderRadius: size / 2 }]}
      resizeMode="cover"
      source={{ uri: uri ?? undefined }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.tertiary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
