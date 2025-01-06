import { Category } from '@api/clients/categories/types';
import CategoriesListItem from '@features/categories/components/CategoriesListItem';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { IconName } from '@icons';
import { gap, margin, padding, sizes } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheet from './BottomSheet';
import { default as SelectOptionComponent } from './SelectOption';
import Text from './Text';

export interface SelectOption {
  iconName: IconName;
  label: string;
  isDisabled?: boolean;
  value: number;
}

export interface SelectProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: SelectOption[];
}

const Select = ({ isOpen, onClose, options, title }: SelectProps) => {
  const { bottom } = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectOption>) => (
      <SelectOptionComponent onPress={console.log} option={item} />
    ),
    [],
  );

  return (
    <BottomSheet isSafeBottomArea isOpen={isOpen} onClose={onClose}>
      <View style={padding('bottom')('m')}>
        <Text
          style={[margin('bottom')('m'), padding('horizontal')('m')]}
          size="m"
          color="primary"
          textAlign="center"
          weight="semiBold">
          {title}
        </Text>
        <BottomSheetFlatList
          keyExtractor={(option) => option.value.toString()}
          contentContainerStyle={[
            gap('row')('xs'),
            padding('horizontal')('m'),
            { paddingBottom: bottom + sizes.m, flexGrow: 1 },
          ]}
          data={options}
          renderItem={renderItem}
        />
      </View>
    </BottomSheet>
  );
};

export default Select;
