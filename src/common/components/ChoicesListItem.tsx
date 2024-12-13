import { flex1, rowCenter } from '@styles/common';
import { colors, gap, padding } from '@styles/lightTheme';
import { scale } from '@styles/utils';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import Checkbox from './Checkbox';
import { Choice } from './Choices';
import Radio from './Radio';
import Svg from './Svg';
import TextBody from './TextBody';
import TextHeading from './TextHeading';

export interface ChoicesListItemProps<T> {
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
  isMulti: boolean;
  isSelected: boolean;
  isDisabled?: boolean;
  onPress: () => void;
  choice: Choice<T>;
}

const ChoicesListItem = <T extends unknown>(props: ChoicesListItemProps<T>) => {
  const { style, isSelected, onPress, isDisabled, choice, isMulti, iconSize = 22 } = props;

  const { description, label, iconName } = choice;

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer, style]}
      disabled={isDisabled || (isSelected && !isMulti)}
      onPress={onPress}>
      <View style={[flex1, rowCenter, gap('column')('s')]}>
        {iconName && <Svg name={iconName} size={iconSize} />}
        <View style={[gap('row')('xxs'), flex1]}>
          <TextHeading>{label}</TextHeading>
          {!!description && <TextBody size="xs">{description}</TextBody>}
        </View>
        {isMulti && <Checkbox isDisabled value={isSelected} />}
        {!isMulti && <Radio isDisabled value={isSelected} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('vertical')('s'),
    ...padding('horizontal')('m'),
    ...rowCenter,
    minHeight: scale(52),
    borderRadius: scale(14),
    borderWidth: 1,
    borderColor: colors.grey100,
  },
  selectedContainer: {
    backgroundColor: colors.lightGrey500,
    borderColor: colors.primary500,
  },
});

export default ChoicesListItem;
