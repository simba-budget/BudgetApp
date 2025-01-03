import { BarChart, Text } from '@common/v2/components';
import { BarChartItem } from '@common/v2/components/BarChart';
import { useHomeTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatWeekDay } from '@utils/date';
import { formatPrice, formatShortPrice } from '@utils/price';
import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface WeekStatisticProps {
  style?: StyleProp<ViewStyle>;
  data: BarChartItem[];
}

const WeekStatistic = ({ style, data }: WeekStatisticProps) => {
  const { t } = useHomeTranslations();

  const formatYLabel = useCallback(
    (value: number) => formatShortPrice(value, 'EUR'),
    [],
  );

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={styles.container}>
        <Text size="m" weight="medium" color="tertiary">
          {t('Weekly Expenses')}
        </Text>
        <Text
          style={margin('bottom')('l')}
          size="xxl"
          weight="medium"
          color="primary">
          {formatPrice(4754.4, 'EUR')}
        </Text>
        <BarChart
          formatYLabel={formatYLabel}
          formatXLabel={formatWeekDay}
          data={data}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('l'),
    borderRadius: 30,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
});

export default WeekStatistic;
