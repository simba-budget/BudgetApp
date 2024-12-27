import { Colors, Fonts, FontSizes } from '@styles/v2/types';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React, { FC, useMemo } from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

export interface TextProps extends RNTextProps {
  size?: keyof FontSizes;
  color?: keyof Colors['text'];
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  weight?: keyof Fonts['urbanist'];
}

const Text: FC<TextProps> = (props) => {
  const {
    size = 's',
    color = 'primary',
    weight = 'regular',
    textAlign,
    textTransform,
    style,
    children,
    ...rest
  } = props;

  const dynamicStyle = useMemo<TextStyle>(
    () => ({
      ...fonts.urbanist[weight],
      ...fontSizes[size],
      color: colors.text[color],
      textAlign,
      textTransform,
    }),
    [color, textAlign, textTransform, weight, size],
  );

  return (
    <RNText style={[dynamicStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
