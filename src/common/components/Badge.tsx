import { colors, padding } from '@styles/lightTheme';
import { Colors, FontSizes, ThemeTextColors } from '@styles/types';
import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import TextHeading from './TextHeading';
import View from './View';

export type BadgeSize = 'small';
export type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'tertiaryOutline';

export interface BadgeProps {
  style?: StyleProp<ViewStyle>;
  size?: BadgeSize;
  variant?: BadgeVariant;
  label: string;
  color?: keyof ThemeTextColors;
  backgroundColor?: keyof Colors;
  borderColor?: keyof Colors;
}

const Badge: FC<BadgeProps> = (props) => {
  const {
    style,
    size = 'small',
    variant = 'primary',
    backgroundColor,
    borderColor,
    color,
    label,
  } = props;

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      ...containerSizeMap[size],
      ...containerVariantMap[variant],
      ...(backgroundColor && { backgroundColor: colors[backgroundColor] }),
      ...(borderColor && { borderColor: colors[borderColor] }),
    }),
    [size, variant, backgroundColor, borderColor],
  );

  return (
    <View align="center" justify="center" style={[styles.container, containerStyle, style]}>
      <TextHeading color={color ?? labelColorMap[variant]} size={labelSizeMap[size]}>
        {label}
      </TextHeading>
    </View>
  );
};

const containerSizeMap: Record<BadgeSize, ViewStyle> = {
  small: {
    ...padding('horizontal')('m'),
    height: 24,
    borderRadius: 12,
  },
};

const containerVariantMap: Record<BadgeVariant, ViewStyle> = {
  primary: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },
  secondary: {
    backgroundColor: colors.secondary500,
    borderColor: colors.secondary500,
  },
  tertiary: {
    backgroundColor: colors.grey500,
    borderColor: colors.grey500,
  },
  tertiaryOutline: {
    backgroundColor: colors.transparent,
    borderColor: colors.grey500,
  },
};

const labelSizeMap: Record<BadgeSize, keyof FontSizes> = {
  small: 'xs',
};

const labelColorMap: Record<BadgeVariant, keyof ThemeTextColors> = {
  primary: 'white',
  secondary: 'primary',
  tertiary: 'white',
  tertiaryOutline: 'primary',
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});

export default Badge;
