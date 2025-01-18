import { useCommonTranslations } from '@i18n/hooks';
import { sizes } from '@styles/lightTheme';
import xor from 'lodash/xor';
import React, { useCallback, useMemo, useState } from 'react';
import { ListRenderItemInfo, StyleProp, View, ViewStyle } from 'react-native';

import Text from '../Text';
import ValueContainer from '../ValueContainer';

import MultiSelectFooter from './MultiSelectFooter';
import SelectOption from './SelectOption';
import SelectSheet from './SelectSheet';
import { SelectOption as SelectOptionType } from './types';

export interface MultiSelectProps<T> {
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
  value?: T[] | null;
  onChange: (value: T[] | null) => void;
  options: SelectOptionType<T>[];
  title: string;
  onKeywordChange: (keyword: string) => void;
  label: string;
}

const MultiSelect = <T,>({
  style,
  value = [],
  options,
  onChange,
  isDisabled = false,
  isLoading = false,
  title,
  onKeywordChange,
  label,
}: MultiSelectProps<T>) => {
  const { t } = useCommonTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState<T[] | null>(value);

  const selectedOptions = useMemo<SelectOptionType<T>[]>(
    () => options.filter((option) => value?.includes(option.value)),
    [options, value],
  );

  const handleOnOptionPress = useCallback(
    (option: SelectOptionType<T>) => setLocalValue(xor(localValue, [option.value])),
    [localValue],
  );

  const handleOnSave = useCallback(() => {
    onChange(localValue);
    setIsOpen(false);
  }, [onChange, localValue]);

  const handleOnClose = useCallback(() => {
    setLocalValue(value);
    setIsOpen(false);
  }, [value]);

  const renderOption = useCallback(
    ({ item }: ListRenderItemInfo<SelectOptionType<T>>) => (
      <SelectOption
        isMulti
        isSelected={localValue?.includes(item.value)}
        option={item}
        onPress={() => handleOnOptionPress(item)}
      />
    ),
    [localValue, handleOnOptionPress],
  );

  const renderFooter = useCallback(
    () => <MultiSelectFooter onPress={handleOnSave} />,
    [handleOnSave],
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
          color={selectedOptions.length > 0 ? 'primary' : 'tertiary'}>
          {selectedOptions.length > 0
            ? selectedOptions.map((option) => option.label).join(', ')
            : t('Not set')}
        </Text>
      </ValueContainer>
      <SelectSheet
        onAddPress={console.log}
        paddingBottom={sizes.m}
        isLoading={isLoading}
        onKeywordChange={onKeywordChange}
        isOpen={isOpen}
        onClose={handleOnClose}
        title={title}
        options={options}
        renderOption={renderOption}
        renderFooter={renderFooter}
      />
    </View>
  );
};

export default MultiSelect;
