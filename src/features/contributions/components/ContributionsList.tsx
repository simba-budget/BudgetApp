import { Contribution } from '@api/clients/contributions/types';
import { FlatList } from '@common/components';
import { useSafeBottomInset } from '@common/hooks';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import ContributionsListItem from './ContributionsListItem';

export interface ContributionsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  contributions: Contribution[];
  onContributionPress: (contribution: Contribution) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const ContributionsList = ({
  onContributionPress,
  contributions,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
}: ContributionsListProps) => {
  const paddingBottom = useSafeBottomInset();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Contribution>) => (
      <ContributionsListItem
        onPress={() => onContributionPress(item)}
        contribution={item}
      />
    ),
    [onContributionPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('top')('xxs'), { paddingBottom }]}
      keyExtractor={(contribution) => contribution.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={contributions}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default ContributionsList;
