import { IconName } from '@icons';
import { ThemeTextColors } from '@styles/types';
import React, { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface SvgIconProps
  extends Omit<SvgProps, 'disabled' | 'width' | 'height' | 'color'> {
  name: IconName;
  color?: keyof ThemeTextColors;
  size?: number;
}

const Svg: FC<SvgIconProps> = () => {
  return <></>;
};

export default Svg;
