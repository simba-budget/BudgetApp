import { center } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import hexToRgba from 'hex-to-rgba';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Text from './Text';

export interface BadgeProps {
  style?: StyleProp<ViewStyle>;
  color?: keyof Colors['text'];
  title: string;
}

const Badge = ({ style, title, color = 'warning' }: BadgeProps) => (
  <View
    style={[
      styles.container,
      { backgroundColor: hexToRgba(colors.text[color], 0.25) },
      style,
    ]}>
    <Text weight="bold" size="xs" color={color}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    ...padding('horizontal')('xs'),
    height: 24,
    borderRadius: 12,
  },
});

export default Badge;
