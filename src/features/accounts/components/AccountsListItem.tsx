import { Account } from '@api/clients/accounts/types';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

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
    <Text style={[isSelected && styles.selectedText]}>{JSON.stringify(account, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
  },
  selectedContainer: {
    backgroundColor: '#000000',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default AccountsListItem;
