import { useCommonTranslations } from '@i18n/hooks';
import React, { useCallback, useMemo, useState } from 'react';
import { ListRenderItemInfo, StyleProp, View, ViewStyle } from 'react-native';

import { useSafeBottomInset } from '../../hooks';
import Text from '../Text';
import ValueContainer from '../ValueContainer';

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
  label: string;
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
  label,
}: SingleSelectProps<T>) => {
  const { t } = useCommonTranslations();
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
      <ValueContainer
        isDisabled={isDisabled}
        iconName="calendar"
        label={label}
        onPress={() => setIsOpen(true)}>
        <Text
          weight="semiBold"
          size="s"
          color={selectedOption ? 'primary' : 'tertiary'}>
          {selectedOption?.label || t('Not set')}
        </Text>
      </ValueContainer>
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
