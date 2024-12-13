import { center, flex1, rowCenter } from '@styles/common';
import { colors, margin } from '@styles/lightTheme';
import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface RadioProps {
  style?: StyleProp<ViewStyle>;
  value?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  onChange?: (isChecked: boolean) => void;
  onBlur?: () => void;
}

const Radio: FC<RadioProps> = (props) => {
  const { style, onChange, onBlur, value = false, isDisabled = false, children } = props;

  const handleOnPress = () => {
    onChange?.(!value);
    onBlur?.();
  };

  return (
    <TouchableOpacity onPress={handleOnPress} disabled={isDisabled} style={[rowCenter, style]}>
      <View style={[styles.radio, value && styles.activeRadio]}>
        {value && <View style={styles.selectedRadio} />}
      </View>
      {!!children && <View style={[flex1, margin('left')('xs')]}>{children}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radio: {
    ...center,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.grey500,
  },
  activeRadio: {
    borderColor: colors.primary500,
    backgroundColor: colors.primary500,
  },
  selectedRadio: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
});

export default Radio;
