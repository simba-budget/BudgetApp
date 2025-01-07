import { IconButton, Svg, Text } from '@common/v2/components';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { PickerOption as PickerOptionType } from './types';

export interface PickerOptionProps {
  style?: StyleProp<ViewStyle>;
  option: Omit<PickerOptionType, 'onPress'>;
  onPress: () => void;
}

const PickerOption = ({ style, option, onPress }: PickerOptionProps) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
    disabled={option.isDisabled}>
    <IconButton size={36} iconSize={18} iconName={option.iconName} />
    <View style={[flex1, gap('row')('xxxs')]}>
      <Text color="primary" weight="semiBold" size="s">
        {option.title}
      </Text>
      {!!option.description && (
        <Text color="tertiary" weight="medium" size="xs">
          {option.description}
        </Text>
      )}
    </View>
    <Svg size={18} color={colors.text.accent} name="arrowRight" />
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

export default PickerOption;
