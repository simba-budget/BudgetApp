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

import IconButton from './IconButton';
import { PickerOption as PickerOptionType } from './Picker';
import Svg from './Svg';
import Text from './Text';

export interface PickerOptionProps {
  style?: StyleProp<ViewStyle>;
  option: PickerOptionType;
}

const PickerOption = ({ style, option }: PickerOptionProps) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={option.onPress}
    disabled={option.isDisabled}>
    <IconButton iconName={option.iconName} />
    <View style={[flex1, gap('row')('xxxs')]}>
      <Text color="primary" weight="semiBold" size="s">
        {option.title}
      </Text>
      <Text color="tertiary" weight="medium" size="xs">
        {option.description}
      </Text>
    </View>
    <Svg size={20} color={colors.text.tertiary} name="arrowRight" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...padding('full')('s'),
    ...gap('column')('s'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default PickerOption;
