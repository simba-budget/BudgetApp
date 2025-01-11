import { Account } from '@api/clients/accounts/types';
import { AnimatedNumber, IconButton, Svg, Text } from '@common/components';
import { useHomeTranslations } from '@i18n/hooks';
import { center, flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import getSymbolFromCurrency from 'currency-symbol-map';
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
        <View style={flex1}>
          <TouchableOpacity style={styles.accountContainer} onPress={onAccountPress}>
            <Text weight="medium" size="s" color="secondary">
              {account.name}
            </Text>
            <Svg color={colors.text.accent} size={20} name="chevronDown" />
          </TouchableOpacity>
          <Text size="m" weight="medium" color="accent">
            {t('Total Balance')}
          </Text>
          <View style={[rowCenter, gap('column')('xxs')]}>
            <AnimatedNumber
              size="xxl"
              color="secondary"
              weight="semiBold"
              value={account.balance}
            />
            <Text size="xxl" weight="semiBold" color="secondary">
              {getSymbolFromCurrency(account.currency)}
            </Text>
          </View>
        </View>
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
    height: 290,
    borderRadius: 30,
    backgroundColor: colors.background.accent,
  },
  accountContainer: {
    ...rowCenter,
    ...gap('column')('xxs'),
    ...padding('horizontal')('s'),
    ...margin('bottom')('l'),
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
