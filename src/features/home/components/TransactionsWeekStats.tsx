import { AnimatedNumber, BarChart, Text } from '@common/components';
import { useHomeTranslations } from '@i18n/hooks';
import { rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatShortPrice } from '@utils/price';
import getSymbolFromCurrency from 'currency-symbol-map';
import React, { useCallback } from 'react';
import {
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

export interface TransactionsWeekStatsProps {
  style?: StyleProp<ViewStyle>;
  data: ChartData;
  totalAmount: number;
  isLoading: boolean;
}

const TransactionsWeekStats = ({
  style,
  data,
  totalAmount,
}: TransactionsWeekStatsProps) => {
  const { t } = useHomeTranslations();
  const { width } = useWindowDimensions();

  const formatYLabel = useCallback(
    (label: string) => formatShortPrice(Number(label), 'EUR'),
    [],
  );

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={styles.container}>
        <View style={[padding('horizontal')('l'), margin('bottom')('m')]}>
          <Text size="m" weight="medium" color="tertiary">
            {t('Weekly Expenses')}
          </Text>
          <View style={[rowCenter, gap('column')('xxs')]}>
            <AnimatedNumber
              size="xxl"
              color="primary"
              weight="semiBold"
              value={totalAmount}
            />
            <Text size="xxl" weight="semiBold" color="primary">
              {getSymbolFromCurrency('EUR')}
            </Text>
          </View>
        </View>
        <BarChart
          style={padding('left')('xs')}
          formatYLabel={formatYLabel}
          width={width - 66}
          height={175}
          data={data}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('vertical')('l'),
    borderRadius: 30,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
});

export default TransactionsWeekStats;
