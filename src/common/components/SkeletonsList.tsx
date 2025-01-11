import { gap, padding } from '@styles/lightTheme';
import range from 'lodash/range';
import React, { ComponentType } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface SkeletonsListProps {
  style?: StyleProp<ViewStyle>;
  itemsCount?: number;
  noPadding?: boolean;
  ItemComponent: ComponentType;
}

const SkeletonsList = ({
  style,
  ItemComponent,
  itemsCount = 5,
  noPadding = false,
}: SkeletonsListProps) => (
  <View style={[!noPadding && padding('horizontal')('m'), gap('row')('xs'), style]}>
    {range(itemsCount).map((index) => (
      <ItemComponent key={index} />
    ))}
  </View>
);

export default SkeletonsList;
