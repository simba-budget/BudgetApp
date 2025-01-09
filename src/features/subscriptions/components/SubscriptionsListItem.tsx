import { Subscription } from '@api/clients/subscriptions/types';
import { Avatar, Text } from '@common/v2/components';
import { getMerchantLogoUrl } from '@features/merchants/utils';
import { alignEnd, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface SubscriptionsListItemProps {
  style?: StyleProp<ViewStyle>;
  subscription: Subscription;
  onPress: () => void;
}

const SubscriptionsListItem = ({
  style,
  subscription,
  onPress,
}: SubscriptionsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Avatar
      initials={subscription.name}
      size={40}
      uri={getMerchantLogoUrl(subscription.merchant)}
    />
    <View style={[flex1, gap('row')('xxs')]}>
      <Text weight="semiBold" size="s" color="primary">
        {subscription.name || subscription.merchant?.name}
      </Text>
      <Text numberOfLines={1} weight="semiBold" size="xs" color="tertiary">
        {subscription.description}
      </Text>
    </View>
    <View style={[alignEnd, gap('row')('xxs')]}>
      <Text weight="bold" size="s" color="primary">
        {formatPrice(subscription.amount, subscription.currency)}
      </Text>
      <Text weight="medium" size="xs" color="tertiary">
        {formatDate(subscription.startedAt)}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('s'),
    borderRadius: 16,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default SubscriptionsListItem;
