import { Account } from '@api/clients/accounts/types';
import { Svg, Text } from '@common/v2/components';
import { useHomeTranslations } from '@i18n/hooks';
import { center, flex1, row, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatPrice } from '@utils/price';
import hexToRgba from 'hex-to-rgba';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { QuickActionItem } from '../types';

export interface AccountSectionProps {
  style?: StyleProp<ViewStyle>;
  account: Account;
  quickActions: QuickActionItem[];
  onAccountPress: () => void;
}

const AccountSection = ({
  account,
  style,
  quickActions,
  onAccountPress,
}: AccountSectionProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={styles.container}>
        <View style={[row, gap('column')('s'), margin('bottom')('xxs')]}>
          <Text style={flex1} size="l" weight="medium" color="secondary">
            {account.name}
          </Text>
          <TouchableOpacity
            onPress={onAccountPress}
            style={styles.smallIconContainer}>
            <Svg size={18} color={colors.text.secondary} name="more" />
          </TouchableOpacity>
        </View>
        <Text size="m" weight="medium" color="accent">
          {t('Total Balance')}
        </Text>
        <Text
          style={margin('bottom')('l')}
          size="xxl"
          weight="medium"
          color="secondary">
          {formatPrice(account.balance, account.currency)}
        </Text>
        <View style={[rowCenter, gap('column')('s')]}>
          {quickActions.map((quickAction, index) => (
            <TouchableOpacity
              style={[flex1, center, gap('row')('xs')]}
              key={index}
              onPress={quickAction.onPress}>
              <View style={styles.iconContainer}>
                <Svg
                  color={colors.text.secondary}
                  size={24}
                  name={quickAction.iconName}
                />
              </View>
              <Text textAlign="center" weight="medium" size="xs" color="secondary">
                {quickAction.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('l'),
    borderRadius: 30,
    backgroundColor: colors.background.accent,
  },
  smallIconContainer: {
    ...center,
    backgroundColor: hexToRgba(colors.background.primary, 0.075),
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  iconContainer: {
    ...center,
    backgroundColor: hexToRgba(colors.background.primary, 0.075),
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});

export default AccountSection;
