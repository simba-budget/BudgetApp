import { Subscription } from '@api/clients/subscriptions/types';
import { Svg, Text } from '@common/v2/components';
import { alignEnd, center, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { getNextMonthDay } from '@utils/date';
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
    <View style={styles.iconContainer}>
      <Svg color={colors.text.primary} size={20} name="card" />
    </View>
    <View style={[flex1, gap('row')('xxxs')]}>
      <Text weight="semiBold" size="s" color="primary">
        {subscription.name}
      </Text>
      <Text numberOfLines={1} weight="semiBold" size="xs" color="tertiary">
        {subscription.description}
      </Text>
    </View>
    <View style={[alignEnd, gap('row')('xxxs')]}>
      <Text weight="bold" size="s" color="primary">
        {formatPrice(subscription.amount, subscription.currency)}
      </Text>
      <Text weight="medium" size="xs" color="tertiary">
        {getNextMonthDay(subscription.day)}
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
  iconContainer: {
    ...center,
    backgroundColor: colors.background.tertiary,
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});

export default SubscriptionsListItem;
