import { IconName } from '@icons';
import { flex1, rowCenter } from '@styles/common';
import { colors, gap, padding } from '@styles/lightTheme';
import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { backgroundColorMap, borderColorMap, iconColorMap, InputStatus } from './Input';
import Svg from './Svg';
import TextBody from './TextBody';

export interface ValueContainerProps {
  style?: StyleProp<ViewStyle>;
  label?: string | null;
  isFocused?: boolean;
  onClearPress?: () => void;
  onPress?: () => void;
  isError?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  iconName: IconName;
}

const ValueContainer: FC<ValueContainerProps> = (props) => {
  const {
    style,
    label,
    placeholder,
    isError,
    isDisabled = false,
    onClearPress,
    isFocused,
    iconName,
    onPress,
  } = props;

  const status = useMemo<InputStatus>(() => {
    if (isFocused) return 'focus';
    if (isError) return 'error';
    return 'default';
  }, [isFocused, isError]);

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      borderColor: colors[borderColorMap[status]],
      backgroundColor: colors[backgroundColorMap[status]],
    }),
    [status],
  );

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.container, containerStyle, style]}>
      <Svg size={22} color={iconColorMap[status]} name={iconName} />
      <TextBody style={flex1} color={label ? 'primary' : 'secondary'} weight="medium">
        {label ?? placeholder}
      </TextBody>
      {!!label && (
        <TouchableOpacity style={styles.clearButton} onPress={onClearPress}>
          <Svg size={14} name="clear" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('left')('s'),
    ...rowCenter,
    ...gap('column')('xs'),
    borderRadius: 12,
    height: 48,
    borderWidth: 1,
  },
  clearButton: {
    ...padding('horizontal')('s'),
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default ValueContainer;
