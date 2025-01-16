import React, { useCallback, useMemo, useState } from 'react';
import {
  ListRenderItemInfo,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { useSafeBottomInset } from '../../hooks';
import Text from '../Text';

import SelectOption from './SelectOption';
import SelectSheet from './SelectSheet';
import { SelectOption as SelectOptionType } from './types';

export interface SingleSelectProps<T> {
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
  value?: T | null;
  onChange: (value: T | null) => void;
  options: SelectOptionType<T>[];
  title: string;
  onKeywordChange: (keyword: string) => void;
}

const SingleSelect = <T,>({
  style,
  value,
  options,
  onChange,
  isDisabled = false,
  isLoading = false,
  title,
  onKeywordChange,
}: SingleSelectProps<T>) => {
  const paddingBottom = useSafeBottomInset();
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = useMemo<SelectOptionType<T> | undefined>(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  const handleOnOptionPress = useCallback(
    (option: SelectOptionType<T>) => {
      onChange(option.value === value ? null : option.value);
      setIsOpen(false);
    },
    [value, onChange],
  );

  const renderOption = useCallback(
    ({ item }: ListRenderItemInfo<SelectOptionType<T>>) => (
      <SelectOption
        isSelected={item.value === value}
        option={item}
        onPress={() => handleOnOptionPress(item)}
      />
    ),
    [value, handleOnOptionPress],
  );

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => setIsOpen(true)} disabled={isDisabled}>
        <Text>Select: {selectedOption?.label}</Text>
      </TouchableOpacity>
      <SelectSheet
        paddingBottom={paddingBottom}
        isLoading={isLoading}
        onKeywordChange={onKeywordChange}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        options={options}
        renderOption={renderOption}
      />
    </View>
  );
};

export default SingleSelect;
