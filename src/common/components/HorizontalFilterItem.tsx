import { center } from '@styles/common';
import { colors, padding } from '@styles/lightTheme';
import { FontSizes } from '@styles/types';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import TextHeading from './TextHeading';

export type HorizontalFilterItemSize = 'medium' | 'large';

export interface HorizontalFilterItemProps {
  style?: StyleProp<ViewStyle>;
  isSelected?: boolean;
  onPress: () => void;
  label: string;
  size?: HorizontalFilterItemSize;
}

const HorizontalFilterItem: FC<HorizontalFilterItemProps> = (props) => {
  const { style, isSelected = false, label, onPress, size = 'medium' } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerSizeMap[size],
        isSelected && styles.selectedContainer,
        style,
      ]}
      onPress={onPress}
      disabled={isSelected}>
      <TextHeading color={isSelected ? 'white' : 'primary'} size={textSizeMap[size]}>
        {label}
      </TextHeading>
    </TouchableOpacity>
  );
};

const containerSizeMap: Record<HorizontalFilterItemSize, ViewStyle> = {
  medium: {
    ...padding('horizontal')('m'),
    height: 34,
    borderRadius: 17,
  },
  large: {
    ...padding('horizontal')('l'),
    height: 38,
    borderRadius: 19,
  },
};

const textSizeMap: Record<HorizontalFilterItemSize, keyof FontSizes> = {
  medium: 'xs',
  large: 'xs',
};

const styles = StyleSheet.create({
  container: {
    ...center,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.grey100,
  },
  selectedContainer: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },
});

export default HorizontalFilterItem;
