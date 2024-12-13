import { center, flex1, rowCenter } from '@styles/common';
import { colors, margin } from '@styles/lightTheme';
import { scale } from '@styles/utils';
import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import Svg from './Svg';

export interface CheckboxProps {
  style?: StyleProp<ViewStyle>;
  value?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  onChange?: (isChecked: boolean) => void;
  onBlur?: () => void;
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { style, onChange, onBlur, value = false, isDisabled = false, children } = props;

  const handleOnPress = () => {
    onChange?.(!value);
    onBlur?.();
  };

  return (
    <TouchableOpacity onPress={handleOnPress} disabled={isDisabled} style={[rowCenter, style]}>
      <View style={[styles.checkbox, value && styles.activeCheckbox]}>
        {value && <Svg color="white" size={14} name="check" />}
      </View>
      {!!children && <View style={[flex1, margin('left')('xs')]}>{children}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    ...center,
    width: scale(20),
    height: scale(20),
    borderRadius: scale(6),
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.grey500,
  },
  activeCheckbox: {
    borderColor: colors.primary500,
    backgroundColor: colors.primary500,
  },
});

export default Checkbox;
