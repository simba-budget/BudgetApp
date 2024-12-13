import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import IconButton from './IconButton';
import { PickerOption as PickerOptionType } from './Picker';
import TextHeading from './TextHeading';

export interface PickerOptionProps<TKey> {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  option: PickerOptionType<TKey>;
}

const PickerOption = <TKey extends string>(props: PickerOptionProps<TKey>) => {
  const { style, option, onPress } = props;
  const { color = 'primary', iconName, label, isDisabled = false } = option;

  return (
    <TouchableOpacity
      style={[rowCenter, gap('column')('s'), style]}
      onPress={onPress}
      disabled={isDisabled}>
      <IconButton
        isDisabled
        iconColor={color}
        size="medium"
        variant="primary"
        iconName={iconName}
      />
      <TextHeading color={color}>{label}</TextHeading>
    </TouchableOpacity>
  );
};

export default PickerOption;
