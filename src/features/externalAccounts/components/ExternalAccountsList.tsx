import { ExternalAccount } from '@api/clients/externalAccounts/types';
import { FlatList } from '@common/components';
import { useSafeBottomInset } from '@common/hooks';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import ExternalAccountsListItem from './ExternalAccountsListItem';

export interface ExternalAccountsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  externalAccounts: ExternalAccount[];
  onExternalAccountPress: (externalAccount: ExternalAccount) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const ExternalAccountsList = ({
  onExternalAccountPress,
  externalAccounts,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
}: ExternalAccountsListProps) => {
  const paddingBottom = useSafeBottomInset();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ExternalAccount>) => (
      <ExternalAccountsListItem
        onPress={() => onExternalAccountPress(item)}
        externalAccount={item}
      />
    ),
    [onExternalAccountPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('top')('xxs'), { paddingBottom }]}
      keyExtractor={(externalAccount) => externalAccount.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={externalAccounts}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default ExternalAccountsList;
