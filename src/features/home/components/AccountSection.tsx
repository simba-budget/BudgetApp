import { Account } from '@api/clients/accounts/types';
import { IconButton, Svg, Text } from '@common/v2/components';
import { useHomeTranslations } from '@i18n/hooks';
import { center, flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
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
        <TouchableOpacity style={styles.accountContainer} onPress={onAccountPress}>
          <Text weight="medium" size="s" color="secondary">
            {account.name}
          </Text>
          <Svg color={colors.text.accent} size={20} name="chevronDown" />
        </TouchableOpacity>
        <Text
          style={margin('bottom')('xxs')}
          size="m"
          weight="medium"
          color="accent">
          {t('Total Balance')}
        </Text>
        <Text
          style={margin('bottom')('l')}
          size="xxl"
          weight="semiBold"
          color="secondary">
          {formatPrice(account.balance, account.currency)}
        </Text>
        <View style={styles.quickActionContainer}>
          {quickActions.map((quickAction, index) => (
            <View style={[flex1, center, gap('row')('xs')]} key={index}>
              <IconButton
                color="accent"
                size={56}
                iconSize={24}
                iconName={quickAction.iconName}
                onPress={quickAction.onPress}
              />
              <Text textAlign="center" weight="medium" size="xs" color="secondary">
                {quickAction.title}
              </Text>
            </View>
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
  accountContainer: {
    ...rowCenter,
    ...gap('column')('xxs'),
    ...padding('horizontal')('s'),
    ...margin('bottom')('m'),
    alignSelf: 'flex-start',
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background.accentSecondary,
    borderWidth: 1,
    borderColor: colors.border.accent,
  },
  quickActionContainer: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('vertical')('xs'),
    borderWidth: 1,
    borderColor: colors.border.accent,
    borderRadius: 20,
  },
});

export default AccountSection;
