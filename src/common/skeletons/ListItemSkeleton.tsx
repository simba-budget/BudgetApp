import { Skeleton, View } from '@common/components';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ListItemSkeletonProps {
  style?: StyleProp<ViewStyle>;
}

const ListItemSkeleton: FC<ListItemSkeletonProps> = (props) => {
  const { style } = props;

  return (
    <View direction="row" align="center" gap="xs" style={style}>
      <Skeleton width={46} height={46} borderRadius={23} />
      <View flex1 gap="xxs">
        <Skeleton width="70%" height={14} borderRadius={7} />
        <Skeleton width={50} height={12} borderRadius={6} />
      </View>
      <View gap="xxs" align="flex-end">
        <Skeleton width={90} height={14} borderRadius={7} />
        <Skeleton width={70} height={12} borderRadius={6} />
      </View>
    </View>
  );
};

export default ListItemSkeleton;
