import { BottomSheet } from '@common/v2/components';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import PickerOption from './PickerOption';
import { PickerOption as PickerOptionType } from './types';

export interface PickerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  options: PickerOptionType[];
}

const PickerSheet = ({ isOpen, onClose, options }: PickerSheetProps) => {
  const handleOnOptionPress = useCallback(
    (option: PickerOptionType) => {
      onClose();
      option.onPress();
    },
    [onClose],
  );

  return (
    <BottomSheet isSafeBottomArea isOpen={isOpen} onClose={onClose}>
      <View style={[padding('full')('m'), gap('row')('xs')]}>
        {options.map((option, index) => (
          <PickerOption
            onPress={() => handleOnOptionPress(option)}
            option={option}
            key={index}
          />
        ))}
      </View>
    </BottomSheet>
  );
};

export default PickerSheet;
