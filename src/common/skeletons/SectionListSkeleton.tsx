import { View } from '@common/components';
import range from 'lodash/range';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import ListItemSkeleton from './ListItemSkeleton';
import SectionHeaderSkeleton from './SectionHeaderSkeleton';

export interface SectionListSkeletonProps {
  style?: StyleProp<ViewStyle>;
  itemsCount?: number;
}

const SectionListSkeleton: FC<SectionListSkeletonProps> = (props) => {
  const { style, itemsCount = 4 } = props;

  return (
    <View flex1 style={style}>
      <View gap="xl">
        {range(itemsCount).map((index) => (
          <View gap="m" key={index}>
            <SectionHeaderSkeleton />
            <ListItemSkeleton />
            <ListItemSkeleton />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SectionListSkeleton;
