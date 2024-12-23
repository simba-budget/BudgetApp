import { Contribution } from '@api/clients/contributions/types';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import ContributionsListItem from './ContributionsListItem';

export interface ContributionsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  contributions: Contribution[];
  onContributionPress: (contribution: Contribution) => void;
}

const ContributionsList = ({
  onContributionPress,
  contributions,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: ContributionsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Contribution>) => (
      <ContributionsListItem onPress={() => onContributionPress(item)} contribution={item} />
    ),
    [onContributionPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('horizontal')('m'), gap('row')('s')]}
      onRefresh={onRefresh}
      style={style}
      data={contributions}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default ContributionsList;
