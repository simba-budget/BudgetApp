import { BarChart, Text } from '@common/v2/components';
import { useHomeTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatPrice, formatShortPrice } from '@utils/price';
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
          <Text size="xxl" weight="medium" color="primary">
            {formatPrice(totalAmount, 'EUR')}
          </Text>
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
