import { IconName } from '@icons';
import xor from 'lodash/xor';
import React, { useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import ChoicesListItem from './ChoicesListItem';
import View from './View';

export interface Choice<T> {
  label: string;
  value: T;
  description?: string;
  iconName?: IconName;
}

export interface BaseChoiceOptions<T> {
  isMulti: boolean;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  choices: Choice<T>[];
  isDisabled?: boolean;
}

export interface MultiChoiceOptions<T> extends BaseChoiceOptions<T> {
  isMulti: true;
  value?: T[] | null;
  onChange: (value?: T[] | null) => void;
}

export interface SingleChoiceOptions<T> extends BaseChoiceOptions<T> {
  isMulti: false;
  value?: T | null;
  onChange: (value?: T | null) => void;
}

export type ChoicesProps<T> = MultiChoiceOptions<T> | SingleChoiceOptions<T>;

const Choices = <T extends unknown>(props: ChoicesProps<T>) => {
  const { isDisabled = false, style, iconSize, choices, isMulti, onChange, value } = props;

  const getIsChoiceSelected = useCallback(
    (itemValue: T) => (isMulti ? (value?.includes(itemValue) ?? false) : value === itemValue),
    [isMulti, value],
  );

  const handleOnChoicePress = useCallback(
    (itemValue: T) => (isMulti ? onChange(xor(value, [itemValue])) : onChange(itemValue)),
    [isMulti, value, onChange],
  );

  return (
    <View gap="xs" style={style}>
      {choices.map((choice, index) => (
        <ChoicesListItem
          key={index}
          iconSize={iconSize}
          isMulti={isMulti}
          isSelected={getIsChoiceSelected(choice.value)}
          isDisabled={isDisabled}
          onPress={() => handleOnChoicePress(choice.value)}
          choice={choice}
        />
      ))}
    </View>
  );
};

export default Choices;
