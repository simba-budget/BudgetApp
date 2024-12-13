import { fonts } from '@styles/lightTheme';
import { Fonts } from '@styles/types';
import React, { FC, useMemo } from 'react';
import { TextStyle } from 'react-native';

import Text, { TextProps } from './Text';

export interface TextBodyProps extends TextProps {
  weight?: keyof Fonts['spaceGrotesk'];
}

const TextBody: FC<TextBodyProps> = (props) => {
  const { weight = 'regular', color = 'primary', style, ...rest } = props;

  const dynamicStyle = useMemo<TextStyle>(
    () => ({
      ...fonts.spaceGrotesk[weight],
    }),
    [weight],
  );

  return <Text style={[dynamicStyle, style]} color={color} {...rest} />;
};

export default TextBody;
