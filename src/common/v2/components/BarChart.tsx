import urbanistMedium from '@assets/fonts/Urbanist/Urbanist-Medium.ttf';
import { LinearGradient, useFont, vec } from '@shopify/react-native-skia';
import { sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import hexToRgba from 'hex-to-rgba';
import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Bar, CartesianChart } from 'victory-native';

export interface BarChartItem extends Record<string, unknown> {
  label: string | number;
  value: number;
}

export interface BarChartProps {
  style?: StyleProp<ViewStyle>;
  height?: number;
  data: BarChartItem[];
  formatYLabel: (value: number) => string;
  formatXLabel: (label: number | string) => string;
}

const BarChart = ({
  style,
  height = 175,
  data,
  formatXLabel,
  formatYLabel,
}: BarChartProps) => {
  const font = useFont(urbanistMedium, 12);

  const yAxis = useMemo(
    () => [
      {
        lineColor: colors.text.tertiary,
        font,
        labelColor: colors.text.tertiary,
        formatYLabel,
      },
    ],
    [font, formatYLabel],
  );

  const xAxis = useMemo(
    () => ({
      lineColor: colors.background.secondary,
      font,
      tickCount: data.length,
      labelColor: colors.text.tertiary,
      formatXLabel,
    }),
    [font, formatXLabel, data.length],
  );

  return (
    <View style={[style, { height }]}>
      <CartesianChart
        domainPadding={domainPadding}
        yAxis={yAxis}
        xAxis={xAxis}
        data={data}
        xKey="label"
        yKeys={['value']}>
        {({ points, chartBounds }) => (
          <Bar
            innerPadding={innerPadding}
            barCount={data.length}
            points={points.value}
            chartBounds={chartBounds}
            roundedCorners={roundedCorners}
            animate={{ type: 'timing', duration: 300 }}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, 400)}
              colors={[
                colors.background.accent,
                hexToRgba(colors.background.accent, 0.3),
              ]}
            />
          </Bar>
        )}
      </CartesianChart>
    </View>
  );
};

const innerPadding = 0.8;
const domainPadding = { left: sizes.s, right: sizes.s };
const roundedCorners = { topLeft: 2, topRight: 2 };

export default BarChart;
