import { Account } from '@api/clients/accounts/types';
import { useAccountsTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatPrice } from '@utils/price';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Badge, IconButton, Text } from 'src/common/components';

export interface AccountsListItemProps {
  style?: StyleProp<ViewStyle>;
  account: Account;
  onPress: () => void;
  isSelected?: boolean;
}

const AccountsListItem = ({
  style,
  account,
  onPress,
  isSelected = false,
}: AccountsListItemProps) => {
  const { t } = useAccountsTranslations();

  return (
    <TouchableOpacity
      disabled={isSelected}
      style={[styles.container, style]}
      onPress={onPress}>
      <IconButton iconName="card" />
      <View style={[flex1, gap('row')('xxxs')]}>
        <Text size="s" color="primary" weight="semiBold">
          {account.name}
        </Text>
        <Text size="xs" color="tertiary" weight="medium">
          {`${t('Balance: ')}${formatPrice(account.balance, account.currency)}`}
        </Text>
      </View>
      <Badge color="success" title="Owner" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('s'),
    ...gap('column')('s'),
    ...rowCenter,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
  selectedContainer: {},
});

export default AccountsListItem;
