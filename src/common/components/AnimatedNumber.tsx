import { Colors, Fonts, FontSizes } from '@styles/v2/types';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { AnimatedRollingNumber } from 'react-native-animated-rolling-numbers';
import { Easing } from 'react-native-reanimated';

export interface AnimatedNumberProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  value: number;
  size?: keyof FontSizes;
  color?: keyof Colors['text'];
  weight?: keyof Fonts['urbanist'];
}

const AnimatedNumber = ({
  style,
  textStyle,
  value,
  size = 's',
  color = 'primary',
  weight = 'regular',
}: AnimatedNumberProps) => {
  const dynamicStyle = useMemo<TextStyle>(
    () => ({
      ...fonts.urbanist[weight],
      ...fontSizes[size],
      color: colors.text[color],
    }),
    [color, weight, size],
  );

  return (
    <AnimatedRollingNumber
      containerStyle={style}
      showMinusSign
      toFixed={2}
      value={value}
      textStyle={[styles.text, dynamicStyle, textStyle]}
      spinningAnimationConfig={{ duration: 500, easing: Easing.bounce }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    letterSpacing: -1.2,
  },
});

export default AnimatedNumber;
