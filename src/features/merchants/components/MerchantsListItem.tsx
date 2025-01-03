import { Merchant } from '@api/clients/merchants/types';
import { Avatar, Text } from '@common/v2/components';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { getMerchantLogoUrl } from '../utils';

export interface MerchantsListItemProps {
  style?: StyleProp<ViewStyle>;
  merchant: Merchant;
  onPress: () => void;
}

const MerchantsListItem = ({ style, merchant, onPress }: MerchantsListItemProps) => (
  <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
    <Avatar uri={getMerchantLogoUrl(merchant?.logo || null)} />
    <View style={flex1}>
      <Text weight="semiBold" size="s" color="primary">
        {merchant.name}
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

export default MerchantsListItem;
