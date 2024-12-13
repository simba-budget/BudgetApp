import Svg from '@common/components/Svg';
import { ThemeTextColors } from '@styles/types';
import range from 'lodash/range';
import React, { FC, useCallback, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import View from './View';

export interface RatingProps {
  style?: StyleProp<ViewStyle>;
  rating: number;
  total?: number;
}

const Rating: FC<RatingProps> = (props) => {
  const { style, rating, total = 5 } = props;
  const items = useMemo<number[]>(() => range(total), [total]);

  const getStarColor = useCallback<(index: number) => keyof ThemeTextColors>(
    (index) => (rating > index ? 'warning' : 'secondary'),
    [rating],
  );

  return (
    <View gap="xxs" style={[styles.container, style]} direction="row" align="center">
      {items.map((index) => (
        <Svg key={index} size={14} name="star" color={getStarColor(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
  },
});

export default Rating;
