import { IconName } from '@icons';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import BottomSheet from './BottomSheet';
import { default as PickerOptionComponent } from './PickerOption';
import Text from './Text';

export interface PickerOption {
  iconName: IconName;
  title: string;
  isDisabled?: boolean;
  onPress: () => void;
  description?: string;
}

export interface PickerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: PickerOption[];
}

const Picker = ({ isOpen, onClose, options, title }: PickerProps) => (
  <BottomSheet isHandleHidden isSafeBottomArea isOpen={isOpen} onClose={onClose}>
    <View style={[padding('horizontal')('m'), padding('bottom')('m')]}>
      <Text
        style={margin('bottom')('m')}
        size="m"
        color="primary"
        textAlign="center"
        weight="semiBold">
        {title}
      </Text>
      <View style={gap('row')('xs')}>
        {options.map((option, index) => (
          <PickerOptionComponent option={option} key={index} />
        ))}
      </View>
    </View>
  </BottomSheet>
);

export default Picker;
