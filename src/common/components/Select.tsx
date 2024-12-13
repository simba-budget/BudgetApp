import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';

import { scrollIndicatorInsets } from '../constants';

import BottomSheet from './BottomSheet';
import { Choice } from './Choices';
import ChoicesListItem from './ChoicesListItem';
import ValueContainer, { ValueContainerProps } from './ValueContainer';

export interface SelectProps<T>
  extends Omit<ValueContainerProps, 'label' | 'isFocused' | 'onPress' | 'onClearPress'> {
  iconSize?: number;
  choices: Choice<T>[];
  onBlur?: () => void;
  onFocus?: () => void;
  value?: T | null;
  onChange: (value?: T | null) => void;
  formatLabel?: (choice: Choice<T> | null) => string;
}

const Select = <T extends unknown>(props: SelectProps<T>) => {
  const {
    iconSize,
    choices,
    value,
    onChange,
    isDisabled = false,
    onBlur,
    onFocus,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleOnCLear = useCallback(() => {
    onChange?.(null);
    handleOnBlur();
  }, [onChange, handleOnBlur]);

  const handleOnChange = useCallback(
    (newValue: T) => {
      onChange(newValue);
      handleOnBlur();
    },
    [onChange, handleOnBlur],
  );

  const renderItem = useCallback(
    (info: ListRenderItemInfo<Choice<T>>) => (
      <ChoicesListItem
        isMulti={false}
        iconSize={iconSize}
        isSelected={value === info.item.value}
        isDisabled={isDisabled}
        onPress={() => handleOnChange(info.item.value)}
        choice={info.item}
      />
    ),
    [handleOnChange, isDisabled, iconSize, value],
  );

  return (
    <>
      <ValueContainer
        isFocused={isFocused}
        onPress={handleOnFocus}
        onClearPress={handleOnCLear}
        isDisabled={isDisabled}
        {...rest}
      />
      <BottomSheet onClose={handleOnBlur} snapPoints={[220]} isOpen={isFocused}>
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          scrollIndicatorInsets={scrollIndicatorInsets}
          bounces={false}
          renderItem={renderItem}
          data={choices}
          contentContainerStyle={styles.content}
        />
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    ...padding('top')('s'),
    ...padding('horizontal')('l'),
    ...gap('row')('xs'),
  },
});

export default Select;
