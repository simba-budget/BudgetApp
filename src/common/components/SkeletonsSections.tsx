import { justifyBetween, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import range from 'lodash/range';
import React, { ComponentType } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import Skeleton from './Skeleton';

export interface SkeletonsSectionsProps {
  style?: StyleProp<ViewStyle>;
  itemsCount?: number;
  sectionsCount?: number;
  noPadding?: boolean;
  ItemComponent: ComponentType;
}

const SkeletonsSections = ({
  style,
  ItemComponent,
  itemsCount = 2,
  sectionsCount = 5,
  noPadding = false,
}: SkeletonsSectionsProps) => (
  <View style={[!noPadding && padding('horizontal')('m'), gap('row')('m'), style]}>
    {range(sectionsCount).map((sectionIndex) => (
      <View key={sectionIndex} style={gap('row')('xs')}>
        <View style={[rowCenter, justifyBetween, margin('vertical')('xxxs')]}>
          <Skeleton height={12} width={70} borderRadius={6} />
          <Skeleton height={12} width={60} borderRadius={6} />
        </View>
        {range(itemsCount).map((itemIndex) => (
          <ItemComponent key={itemIndex} />
        ))}
      </View>
    ))}
  </View>
);

export default SkeletonsSections;
