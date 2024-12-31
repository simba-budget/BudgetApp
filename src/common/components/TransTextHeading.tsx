import { Fonts, ThemeTextColors } from '@styles/types';
import React, { FC, ReactElement, useMemo } from 'react';
import { Trans } from 'react-i18next';
import { TextStyle } from 'react-native';

import TextHeading, { TextHeadingProps } from './TextHeading';

export interface TransTextHeadingProps extends Omit<TextHeadingProps, 'children'> {
  ns: string;
  i18nKey: string;
  highlightedColor?: keyof ThemeTextColors;
  highlightedTextDecorationLine?: TextStyle['textDecorationLine'];
  highlightedFontWeight?: keyof Fonts['spaceGrotesk'];
  onHighlightedPress?: () => void;
}

const TransTextHeading: FC<TransTextHeadingProps> = (props) => {
  const {
    ns,
    i18nKey,
    onHighlightedPress,
    highlightedTextDecorationLine,
    highlightedColor = 'highlightPrimary',
    highlightedFontWeight = 'bold',
    ...rest
  } = props;

  const memoizedHighlightedText = useMemo<ReactElement>(
    () => (
      <TextHeading
        {...rest}
        onPress={onHighlightedPress}
        color={highlightedColor}
        weight={highlightedFontWeight}
        textDecorationLine={highlightedTextDecorationLine}
      />
    ),
    [
      rest,
      highlightedColor,
      onHighlightedPress,
      highlightedFontWeight,
      highlightedTextDecorationLine,
    ],
  );

  return (
    <TextHeading {...rest}>
      <Trans
        ns={ns}
        i18nKey={i18nKey}
        components={{ highlighted: memoizedHighlightedText }}
      />
    </TextHeading>
  );
};

export default TransTextHeading;
