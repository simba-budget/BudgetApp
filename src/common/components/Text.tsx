import { colors, fontSizes, themeTextColors } from '@styles/lightTheme';
import { FontSizes, ThemeTextColors } from '@styles/types';
import hexToRgba from 'hex-to-rgba';
import React, { FC, useMemo } from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

export interface TextProps extends RNTextProps {
  size?: keyof FontSizes;
  color?: keyof ThemeTextColors;
  opacity?: number;
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  textDecorationLine?: TextStyle['textDecorationLine'];
}

const Text: FC<TextProps> = (props) => {
  const {
    size = 's',
    color = 'primary',
    textAlign,
    textTransform,
    textDecorationLine,
    style,
    opacity = 1,
    children,
    ...rest
  } = props;

  const dynamicStyle = useMemo<TextStyle>(
    () => ({
      color: hexToRgba(colors[themeTextColors[color]], opacity),
      textAlign,
      textTransform,
      textDecorationLine,
      ...fontSizes[size],
    }),
    [color, textAlign, size, textTransform, opacity, textDecorationLine],
  );

  return (
    <RNText style={[dynamicStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
