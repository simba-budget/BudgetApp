import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import IconButton from './IconButton';
import { SelectOption as SelectOptionType } from './Select';
import Svg from './Svg';
import Text from './Text';

export interface SelectOptionProps {
  style?: StyleProp<ViewStyle>;
  option: SelectOptionType;
  onPress: () => void;
}

const SelectOption = ({ style, option, onPress }: SelectOptionProps) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
    disabled={option.isDisabled}>
    <IconButton iconName={option.iconName} />
    <Text style={flex1} color="primary" weight="semiBold" size="s">
      {option.label}
    </Text>
    <Svg size={20} color={colors.text.tertiary} name="arrowRight" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...padding('horizontal')('s'),
    ...padding('vertical')('xs'),
    ...gap('column')('s'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default SelectOption;
