import { Merchant } from '@api/clients/merchants/types';
import { FlatList } from '@common/components';
import { useSafeBottomInset } from '@common/hooks';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import MerchantsListItem from './MerchantsListItem';

export interface MerchantsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  merchants: Merchant[];
  onMerchantPress: (merchant: Merchant) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const MerchantsList = ({
  onMerchantPress,
  merchants,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  isFetchingMore,
  onFetchMore,
}: MerchantsListProps) => {
  const paddingBottom = useSafeBottomInset();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Merchant>) => (
      <MerchantsListItem onPress={() => onMerchantPress(item)} merchant={item} />
    ),
    [onMerchantPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('top')('xxs'), { paddingBottom }]}
      keyExtractor={(merchant) => merchant.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={merchants}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default MerchantsList;
