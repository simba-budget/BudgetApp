import { center, rowCenter } from '@styles/common';
import { margin } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import Svg from './Svg';

export interface CheckboxProps {
  style?: StyleProp<ViewStyle>;
  value?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  onChange?: (isChecked: boolean) => void;
  onBlur?: () => void;
}

const Checkbox = ({
  style,
  onChange,
  onBlur,
  value = false,
  isDisabled = false,
  children,
}: CheckboxProps) => {
  const handleOnPress = () => {
    onChange?.(!value);
    onBlur?.();
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      disabled={isDisabled}
      style={[rowCenter, style]}>
      <View style={[styles.checkbox, value && styles.activeCheckbox]}>
        {value && <Svg color={colors.text.secondary} size={14} name="check" />}
      </View>
      {!!children && <View style={[margin('left')('xs')]}>{children}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    ...center,
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: colors.background.tertiary,
    borderColor: colors.border.primary,
  },
  activeCheckbox: {
    borderColor: colors.border.accent,
    backgroundColor: colors.background.accent,
  },
});

export default Checkbox;
