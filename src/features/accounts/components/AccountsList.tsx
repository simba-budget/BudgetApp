import { Account } from '@api/clients/accounts/types';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import AccountsListItem from './AccountsListItem';

export interface AccountsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  accounts: Account[];
  onAccountPress: (account: Account) => void;
  selectedAccountId?: number | null;
}

const AccountsList = ({
  selectedAccountId,
  onAccountPress,
  accounts,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: AccountsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Account>) => (
      <AccountsListItem
        onPress={() => onAccountPress(item)}
        account={item}
        isSelected={selectedAccountId === item.id}
      />
    ),
    [selectedAccountId, onAccountPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('horizontal')('m'), gap('row')('s')]}
      onRefresh={onRefresh}
      style={style}
      data={accounts}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default AccountsList;
