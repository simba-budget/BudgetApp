import hexToRgba from 'hex-to-rgba';
import { FlexStyle } from 'react-native';

import {
  Colors,
  Fonts,
  FontSizes,
  GapProperty,
  Sizes,
  SpacingProperty,
  Theme,
  ThemeBackgroundsColors,
  ThemeColors,
  ThemeLayout,
  ThemeTextColors,
} from './types';

export const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: hexToRgba('#FFFFFF', 0),

  primary50: '#D3D7E8',
  primary100: '#5464B2',
  primary200: '#8D9CE4',
  primary300: '#384DAA',
  primary400: '#30449E',
  primary500: '#25388D',
  primary600: '#1F2F76',
  primary700: '#19255E',
  primary800: '#0C132F',
  primary900: '#0C132F',

  secondary50: '#D5FDF9',
  secondary100: '#BAFCF4',
  secondary200: '#97FBEF',
  secondary300: '#74FAEA',
  secondary400: '#52F8E4',
  secondary500: '#2FF7DF',
  secondary600: '#27CEBA',
  secondary700: '#1FA595',
  secondary800: '#187C70',
  secondary900: '#10524A',

  grey50: '#ECECEF',
  grey100: '#DFE0E4',
  grey200: '#CED0D6',
  grey300: '#BEC0C9',
  grey400: '#AEB1BB',
  grey500: '#9EA1AE',
  grey600: '#848691',
  grey700: '#696B74',
  grey800: '#4F5157',
  grey900: '#35363A',

  lightGrey50: '#FDFDFE',
  lightGrey100: '#FBFBFD',
  lightGrey200: '#F9F9FC',
  lightGrey300: '#F7F8FB',
  lightGrey400: '#F5F6FA',
  lightGrey500: '#F3F4F9',
  lightGrey600: '#CACBCF',
  lightGrey700: '#A2A3A6',
  lightGrey800: '#7A7A7D',
  lightGrey900: '#515153',

  success50: '#DCF7E1',
  success100: '#C5F2CD',
  success200: '#A8EBB3',
  success300: '#8BE59A',
  success400: '#6EDE81',
  success500: '#51D868',
  success600: '#44B457',
  success700: '#369045',
  success800: '#296C34',
  success900: '#1B4823',

  error50: '#FDDDDD',
  error100: '#FCC6C6',
  error200: '#FAA9A9',
  error300: '#F98C8C',
  error400: '#F77070',
  error500: '#F65353',
  error600: '#CD4545',
  error700: '#A43737',
  error800: '#7B2A2A',
  error900: '#521C1C',

  warning50: '#FFF5DD',
  warning100: '#FFECBA',
  warning200: '#FFE298',
  warning300: '#FFD876',
  warning400: '#FFCF53',
  warning500: '#FFC531',
  warning600: '#F0B212',
  warning700: '#AA8321',
  warning800: '#806319',
  warning900: '#554210',

  black50: '#CECFD2',
  black100: '#ADAEB5',
  black200: '#84868F',
  black300: '#5B5E6A',
  black400: '#323545',
  black500: '#090D20',
  black600: '#080B1B',
  black700: '#060915',
  black800: '#050710',
  black900: '#03040B',
};

export const sizes: Sizes = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const fonts: Fonts = {
  spaceGrotesk: {
    regular: {
      fontFamily: 'SpaceGrotesk-Regular',
    },
    medium: {
      fontFamily: 'SpaceGrotesk-Medium',
    },
    semiBold: {
      fontFamily: 'SpaceGrotesk-SemiBold',
    },
    bold: {
      fontFamily: 'SpaceGrotesk-Bold',
    },
  },
};

export const fontSizes: FontSizes = {
  xxs: { fontSize: 10, lineHeight: 14 },
  xs: { fontSize: 12, lineHeight: 16 },
  s: { fontSize: 14, lineHeight: 18 },
  m: { fontSize: 16, lineHeight: 20 },
  l: { fontSize: 18, lineHeight: 22 },
  xl: { fontSize: 20, lineHeight: 28 },
  xxl: { fontSize: 24, lineHeight: 32 },
  xxxl: { fontSize: 28, lineHeight: 36 },
};

const paddingPropertyMap: Record<SpacingProperty, keyof FlexStyle> = {
  full: 'padding',
  top: 'paddingTop',
  left: 'paddingLeft',
  right: 'paddingRight',
  bottom: 'paddingBottom',
  vertical: 'paddingVertical',
  horizontal: 'paddingHorizontal',
};

const marginPropertyMap: Record<SpacingProperty, keyof FlexStyle> = {
  full: 'margin',
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
  vertical: 'marginVertical',
  horizontal: 'marginHorizontal',
};

const gapPropertyMap: Record<GapProperty, keyof FlexStyle> = {
  full: 'gap',
  column: 'columnGap',
  row: 'rowGap',
};

export const padding = (property: SpacingProperty) => (key: keyof Sizes) => {
  return { [paddingPropertyMap[property]]: sizes[key] };
};

export const margin = (property: SpacingProperty) => (key: keyof Sizes) => {
  return { [marginPropertyMap[property]]: sizes[key] };
};

export const gap = (property: GapProperty) => (key: keyof Sizes) => {
  return { [gapPropertyMap[property]]: sizes[key] };
};

export const themeLayout: ThemeLayout = {
  padding: 'l',
  gap: 'm',
};

export const themeColors: ThemeColors = {
  backgroundLight: 'white',
  backgroundDark: 'primary500',
  textPrimaryDark: 'black500',
  textSecondaryDark: 'grey500',
  textPrimaryLight: 'white',
  textSecondaryLight: 'primary100',
  primary: 'primary400',
  secondary: 'secondary500',
};

export const themeTextColors: ThemeTextColors = {
  primary: 'black500',
  secondary: 'grey700',
  tertiary: 'grey500',
  highlightPrimary: 'primary500',
  highlightSecondary: 'secondary700',
  white: 'white',
  black: 'black',
  error: 'error700',
  warning: 'warning700',
  success: 'success700',
};

export const themeBackgroundsColors: ThemeBackgroundsColors = {
  primary: 'black500',
  secondary: 'grey700',
  tertiary: 'grey500',
  highlightPrimary: 'primary500',
  highlightSecondary: 'secondary700',
  white: 'white',
  black: 'black',
  error: 'error200',
  warning: 'warning200',
  success: 'success200',
};

export const theme: Theme = {
  layout: themeLayout,
  colors: themeColors,
  textColors: themeTextColors,
  backgroundColors: themeBackgroundsColors,
};
