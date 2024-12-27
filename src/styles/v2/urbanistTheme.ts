import hexToRgba from 'hex-to-rgba';

import { Colors, Fonts, FontSizes } from './types';

export const colors: Colors = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  background: {
    primary: '#131313',
    secondary: '#1A1A1A',
    accent: '#CFF008',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#06080D',
    tertiary: '#8C8C8C',
    placeholder: '#8F8F8F',
  },
  border: {
    primary: hexToRgba('#FFFFFF', 0.05),
  },
};

export const fonts: Fonts = {
  urbanist: {
    light: {
      fontFamily: 'Urbanist-Light',
    },
    regular: {
      fontFamily: 'Urbanist-Regular',
    },
    medium: {
      fontFamily: 'Urbanist-Medium',
    },
    semiBold: {
      fontFamily: 'Urbanist-SemiBold',
    },
    bold: {
      fontFamily: 'Urbanist-Bold',
    },
    black: {
      fontFamily: 'Urbanist-Black',
    },
  },
};

export const fontSizes: FontSizes = {
  xxs: { fontSize: 10, lineHeight: 14 },
  xs: { fontSize: 12, lineHeight: 16 },
  s: { fontSize: 14, lineHeight: 20 },
  m: { fontSize: 16, lineHeight: 24 },
  l: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 30 },
  xxl: { fontSize: 24, lineHeight: 36 },
};
