import { flex1 } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface CardOverlayProps {
  style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

const CardOverlay = ({ style }: CardOverlayProps) => {
  // @ts-ignore
  const opacityValue = style?.opacity ? style.opacity : new Animated.Value(0);

  const opacity = opacityValue.interpolate({
    inputRange: [0, 0.3],
    outputRange: [0, 0.7],
  });

  return <Animated.View style={[styles.container, { opacity }]} />;
};

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.common.black,
  },
});

export default CardOverlay;
