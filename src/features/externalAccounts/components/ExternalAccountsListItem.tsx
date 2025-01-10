import { ExternalAccount } from '@api/clients/externalAccounts/types';
import { IconButton, Text } from '@common/components';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatMask } from '@utils/card';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface ExternalAccountsListItemProps {
  style?: StyleProp<ViewStyle>;
  externalAccount: ExternalAccount;
  onPress: () => void;
}

const ExternalAccountsListItem = ({
  style,
  externalAccount,
  onPress,
}: ExternalAccountsListItemProps) => (
  <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
    <IconButton size={40} iconSize={20} iconName="card" isDisabled />
    <View style={[flex1, gap('row')('xxs')]}>
      <Text weight="semiBold" size="s" color="primary">
        {externalAccount.name}
      </Text>
      <Text numberOfLines={1} weight="semiBold" size="xs" color="tertiary">
        {formatMask(externalAccount.mask)}
      </Text>
    </View>
  </TouchableOpacity>
);

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
});

export default ExternalAccountsListItem;
