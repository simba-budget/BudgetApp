import { Merchant } from '@api/clients/merchants/types';
import { Avatar, Text } from '@common/components';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { getMerchantLogoUrl } from '../utils';

export interface MerchantsListItemProps {
  style?: StyleProp<ViewStyle>;
  merchant: Merchant;
  onPress: () => void;
}

const MerchantsListItem = ({ style, merchant, onPress }: MerchantsListItemProps) => (
  <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
    <Avatar size={36} initials={merchant.name} uri={getMerchantLogoUrl(merchant)} />
    <Text style={flex1} weight="semiBold" size="s" color="primary">
      {merchant.name}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('xs'),
    borderRadius: 12,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default MerchantsListItem;
