import { Account } from '@api/clients/accounts/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import AccountsListItem from './AccountsListItem';

export interface AccountsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  accounts: Account[];
  onAccountPress: (account: Account) => void;
}

const AccountsList = ({
  onAccountPress,
  accounts,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: AccountsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Account>) => (
      <AccountsListItem onPress={() => onAccountPress(item)} account={item} />
    ),
    [onAccountPress],
  );

  return (
    <FlatList
      isSafeBottomArea
      onRefresh={onRefresh}
      style={style}
      data={accounts}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default AccountsList;
