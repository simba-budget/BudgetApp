import { margin } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { default as RNMarkdown } from 'react-native-markdown-display';

export interface MarkdownProps {
  style?: StyleProp<ViewStyle>;
  content: string;
}

const Markdown = ({ style, content }: MarkdownProps) => (
  <View style={style}>
    <RNMarkdown style={styles} mergeStyle={false}>
      {content}
    </RNMarkdown>
  </View>
);

const styles = StyleSheet.create({
  heading1: {
    ...fonts.urbanist.bold,
    ...fontSizes.m,
    ...margin('bottom')('xxs'),
    color: colors.text.primary,
  },
  heading2: {
    ...fonts.urbanist.bold,
    ...fontSizes.m,
    ...margin('bottom')('xxs'),
    color: colors.text.primary,
  },
  heading3: {
    ...fonts.urbanist.bold,
    ...fontSizes.s,
    ...margin('bottom')('xxs'),
    color: colors.text.primary,
  },
  paragraph: {
    ...fonts.urbanist.regular,
    ...fontSizes.s,
    ...margin('bottom')('l'),
    color: colors.text.tertiary,
  },
  bullet_list: {
    ...fonts.urbanist.regular,
    ...fontSizes.s,
    ...margin('bottom')('l'),
    color: colors.text.tertiary,
  },
  bullet_list_icon: {
    ...fonts.urbanist.regular,
    ...fontSizes.s,
    ...margin('right')('xs'),
    color: colors.text.tertiary,
  },
  link: {
    ...fonts.urbanist.medium,
    ...fontSizes.s,
    textDecorationLine: 'underline',
    color: colors.text.accent,
  },
});

export default Markdown;
