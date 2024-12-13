import { fonts, fontSizes, margin, themeTextColors } from '@styles/lightTheme';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { default as RNMarkdown } from 'react-native-markdown-display';

import View from './View';

export interface MarkdownProps {
  style?: StyleProp<ViewStyle>;
  content: string;
}

const Markdown: FC<MarkdownProps> = (props) => {
  const { style, content } = props;

  return (
    <View style={style}>
      <RNMarkdown style={styles} mergeStyle={false}>
        {content}
      </RNMarkdown>
    </View>
  );
};

const styles = StyleSheet.create({
  heading1: {
    ...fonts.spaceGrotesk.bold,
    ...fontSizes.m,
    ...margin('bottom')('xxs'),
    color: themeTextColors.primary,
  },
  heading2: {
    ...fonts.spaceGrotesk.bold,
    ...fontSizes.m,
    ...margin('bottom')('xxs'),
    color: themeTextColors.primary,
  },
  heading3: {
    ...fonts.spaceGrotesk.bold,
    ...fontSizes.s,
    ...margin('bottom')('xxs'),
    color: themeTextColors.primary,
  },
  paragraph: {
    ...fonts.spaceGrotesk.regular,
    ...fontSizes.s,
    ...margin('bottom')('l'),
    color: themeTextColors.secondary,
  },
  bullet_list: {
    ...fonts.spaceGrotesk.regular,
    ...fontSizes.s,
    ...margin('bottom')('l'),
    color: themeTextColors.secondary,
  },
  bullet_list_icon: {
    ...fonts.spaceGrotesk.regular,
    ...fontSizes.s,
    ...margin('right')('xs'),
    color: themeTextColors.secondary,
  },
  link: {
    ...fonts.spaceGrotesk.medium,
    ...fontSizes.s,
    textDecorationLine: 'underline',
    color: themeTextColors.highlightPrimary,
  },
});

export default Markdown;
