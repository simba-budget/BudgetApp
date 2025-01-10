import hexToRgba from 'hex-to-rgba';

import { Colors, Fonts, FontSizes } from './types';

export const colors: Colors = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  background: {
    primary: '#131313',
    secondary: '#1A1A1A',
    tertiary: '#252525',
    accent: '#DAFC08',
    accentSecondary: '#CFF008',
    error: '#FF4545',
  },
  text: {
    accent: '#70820A',
    primary: '#FFFFFF',
    secondary: '#06080D',
    tertiary: '#8C8C8C',
    placeholder: '#8F8F8F',
    success: '#24F07D',
    error: '#FF4545',
    warning: '#FF9800',
  },
  border: {
    primary: hexToRgba('#FFFFFF', 0.075),
    accent: '#CAEA08',
    error: '#FF4545',
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
  xl: { fontSize: 24, lineHeight: 30 },
  xxl: { fontSize: 32, lineHeight: 40 },
};
