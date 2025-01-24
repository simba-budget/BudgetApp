import { Svg, Text } from '@common/components';
import { center, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ProfileItemProps } from '../types';

const ProfileItem = ({
  title,
  iconName,
  onPress,
  subtitle,
  hideArrow = false,
  color,
}: ProfileItemProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Svg color={colors.text[color || 'primary']} size={18} name={iconName} />
    </View>
    <View style={flex1}>
      <Text weight="semiBold" size="s" color={color}>
        {title}
      </Text>
      {subtitle && (
        <Text weight="medium" size="xs" color="tertiary">
          {subtitle}
        </Text>
      )}
    </View>
    {!hideArrow && <Svg size={18} color={colors.text.tertiary} name="arrowRight" />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('xs'),
    borderRadius: 12,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
  iconContainer: {
    ...center,
    backgroundColor: colors.background.tertiary,
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});

export default ProfileItem;
