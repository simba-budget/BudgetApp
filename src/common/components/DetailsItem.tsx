import { Text } from '@common/components/index';
import { flex1, rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface DetailsItemProps<T> {
  style?: StyleProp<ViewStyle>;
  title: string;
  value?: T | null;
  formatValue?: (value: T) => ReactNode;
  placeholder?: string;
  valueColor?: keyof Colors['text'];
}

const DetailsItem = <T,>({
  style,
  title,
  value,
  valueColor = 'primary',
  formatValue,
  placeholder,
}: DetailsItemProps<T>) => {
  return (
    <View style={[rowCenter, gap('column')('s'), style]}>
      <Text color="tertiary" weight="medium" size="s" style={flex1}>
        {title}
      </Text>
      <Text color={!value ? 'tertiary' : valueColor} weight="semiBold" size="s">
        {!value ? placeholder : formatValue ? formatValue(value) : (value as string)}
      </Text>
    </View>
  );
};

export default DetailsItem;
