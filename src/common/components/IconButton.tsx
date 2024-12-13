import View from '@common/components/View';
import { IconName } from '@icons';
import { center } from '@styles/common';
import { colors, sizes } from '@styles/lightTheme';
import { Colors, ThemeTextColors } from '@styles/types';
import React, { FC, useMemo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Svg from './Svg';

export type IconButtonSize = 'medium' | 'small';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  iconName: IconName;
  iconColor?: keyof ThemeTextColors;
  backgroundColor?: keyof Colors;
  borderColor?: keyof Colors;
  isIndicatorVisible?: boolean;
  isLoading?: boolean;
}

const IconButton: FC<ButtonProps> = (props) => {
  const {
    onPress,
    style,
    backgroundColor,
    borderColor,
    iconColor,
    iconName,
    size = 'medium',
    variant = 'primary',
    isDisabled = false,
    isIndicatorVisible = false,
    isLoading = false,
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
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        (isLoading || isDisabled) && styles.disabledContainer,
        containerStyle,
        style,
      ]}
      disabled={isDisabled}>
      {isLoading ? (
        <ActivityIndicator
          size={iconSizeMap[size]}
          color={iconColor ?? iconColorMap[variant]}
        />
      ) : (
        <Svg
          color={iconColor ?? iconColorMap[variant]}
          size={iconSizeMap[size]}
          name={iconName}
        />
      )}
      {isIndicatorVisible && (
        <View
          bgColor={indicatorColorMap[variant]}
          style={[styles.indicator, indicatorSizeMap[size]]}
        />
      )}
    </TouchableOpacity>
  );
};

const containerSizeMap: Record<IconButtonSize, ViewStyle> = {
  small: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  medium: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
};

const containerVariantMap: Record<IconButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: colors.lightGrey500,
    borderColor: colors.lightGrey500,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  tertiary: {
    backgroundColor: colors.primary400,
    borderColor: colors.primary400,
  },
};

const iconSizeMap: Record<IconButtonSize, number> = {
  small: 18,
  medium: 20,
};

const indicatorSizeMap: Record<IconButtonSize, ViewStyle> = {
  small: {
    top: sizes.xs,
    right: sizes.xs,
  },
  medium: {
    top: sizes.xs + sizes.xxxs,
    right: sizes.xs + sizes.xxxs,
  },
};

const iconColorMap: Record<IconButtonVariant, keyof ThemeTextColors> = {
  primary: 'primary',
  secondary: 'primary',
  tertiary: 'white',
};

const indicatorColorMap: Record<IconButtonVariant, keyof Colors> = {
  primary: 'error500',
  secondary: 'error500',
  tertiary: 'error500',
};

const styles = StyleSheet.create({
  container: {
    ...center,
    borderWidth: 1,
    position: 'relative',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
  },
  disabledContainer: {
    opacity: 0.75,
  },
});

export default IconButton;
