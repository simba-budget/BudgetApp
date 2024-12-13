import range from 'lodash/range';
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import ListItemSkeleton from './ListItemSkeleton';

export interface ListSkeletonProps {
  style?: StyleProp<ViewStyle>;
  ItemSkeletonComponent?: FC;
  itemsCount?: number;
}

const ListSkeleton: FC<ListSkeletonProps> = (props) => {
  const { style, itemsCount = 4, ItemSkeletonComponent = ListItemSkeleton } = props;

  return (
    <View style={style}>
      {range(itemsCount).map((index) => (
        <ItemSkeletonComponent key={index} />
      ))}
    </View>
  );
};

export default ListSkeleton;
