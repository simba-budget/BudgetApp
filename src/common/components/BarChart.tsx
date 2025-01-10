import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import hexToRgba from 'hex-to-rgba';
import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { BarChart as RNBarChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

export interface BarChartItem extends Record<string, unknown> {
  label: string | number;
  value: number;
}

export interface BarChartProps {
  style?: Partial<ViewStyle>;
  height: number;
  width: number;
  data: ChartData;
  formatYLabel: (label: string) => string;
}

const BarChart = ({ style, width, height, data, formatYLabel }: BarChartProps) => {
  const chartConfig = useMemo<AbstractChartConfig>(
    () => ({ ...baseChartConfig, formatYLabel }),
    [formatYLabel],
  );

  return (
    <RNBarChart
      style={style}
      fromZero
      showBarTops={false}
      chartConfig={chartConfig}
      yAxisLabel=""
      yAxisSuffix=""
      data={data}
      width={width}
      height={height}
    />
  );
};

const baseChartConfig: AbstractChartConfig = {
  backgroundGradientFrom: colors.background.secondary,
  backgroundGradientTo: colors.background.secondary,
  decimalPlaces: 0,
  color: (opacity) => hexToRgba(colors.background.accent, opacity),
  labelColor: () => colors.text.tertiary,
  strokeWidth: 2,
  barPercentage: 0.25,
  fillShadowGradientOpacity: 1,
  fillShadowGradientToOpacity: 0.3,
  barRadius: 2,
  propsForHorizontalLabels: {
    translateY: 4,
    translateX: -4,
  },
  propsForLabels: {
    fontSize: fontSizes.xs.fontSize,
    fontFamily: fonts.urbanist.medium.fontFamily,
  },
  propsForBackgroundLines: {
    stroke: hexToRgba(colors.text.tertiary, 0.3),
    translateX: 56,
  },
};

export default BarChart;
