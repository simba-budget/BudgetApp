import { Account } from '@api/clients/accounts/types';
import { Text } from '@common/v2/components';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface AccountsListItemProps {
  style?: StyleProp<ViewStyle>;
  account: Account;
  onPress?: () => void;
  isSelected?: boolean;
}

const AccountsListItem = ({
  style,
  onPress,
  isSelected = false,
  account,
}: AccountsListItemProps) => (
  <TouchableOpacity
    disabled={isSelected}
    style={[styles.container, isSelected && styles.selectedContainer, style]}
    onPress={onPress}>
    <Text>{JSON.stringify(account, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('m'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 12,
  },
  selectedContainer: {
    backgroundColor: '#000000',
  },
});

export default AccountsListItem;
