import { Colors } from '@styles/types';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import View, { ViewProps } from './View';

export type DividerVariant = 'primary' | 'secondary' | 'tertiary';

export interface DividerProps extends Omit<ViewProps, 'bgColor'> {
  variant?: DividerVariant;
}

const Divider: FC<DividerProps> = (props) => {
  const { variant = 'primary', style, ...rest } = props;

  return <View bgColor={bgColorMap[variant]} style={[styles.container, style]} {...rest} />;
};

const bgColorMap: Record<DividerVariant, keyof Colors> = {
  primary: 'grey50',
  secondary: 'primary300',
  tertiary: 'primary100',
};

const styles = StyleSheet.create({
  container: {
    height: 1,
  },
});

export default Divider;
