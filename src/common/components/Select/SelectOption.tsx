import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Checkbox from '../Checkbox';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Text from '../Text';

import { SelectOption as SelectOptionType } from './types';

export interface SelectOptionProps<T> {
  style?: StyleProp<ViewStyle>;
  option: SelectOptionType<T>;
  onPress: () => void;
  isMulti?: boolean;
  isSelected?: boolean;
}

const SelectOption = <T,>({
  style,
  option,
  onPress,
  isMulti = false,
  isSelected = false,
}: SelectOptionProps<T>) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
    disabled={option.isDisabled}>
    <IconButton size={36} iconSize={18} isDisabled iconName={option.iconName} />
    <Text style={flex1} color="primary" weight="semiBold" size="s">
      {option.label}
    </Text>
    {isMulti ? (
      <Checkbox value={isSelected} isDisabled />
    ) : (
      <Radio value={isSelected} isDisabled />
    )}
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
});

export default SelectOption;
