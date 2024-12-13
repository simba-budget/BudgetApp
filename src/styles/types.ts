export interface Colors {
  white: string;
  black: string;
  transparent: string;

  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;

  secondary50: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;

  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;

  lightGrey50: string;
  lightGrey100: string;
  lightGrey200: string;
  lightGrey300: string;
  lightGrey400: string;
  lightGrey500: string;
  lightGrey600: string;
  lightGrey700: string;
  lightGrey800: string;
  lightGrey900: string;

  success50: string;
  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success500: string;
  success600: string;
  success700: string;
  success800: string;
  success900: string;

  error50: string;
  error100: string;
  error200: string;
  error300: string;
  error400: string;
  error500: string;
  error600: string;
  error700: string;
  error800: string;
  error900: string;

  warning50: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;
  warning800: string;
  warning900: string;

  black50: string;
  black100: string;
  black200: string;
  black300: string;
  black400: string;
  black500: string;
  black600: string;
  black700: string;
  black800: string;
  black900: string;
}

export interface Sizes {
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface FontSizeVariant {
  lineHeight: number;
  fontSize: number;
}

export interface FontSizes {
  xxs: FontSizeVariant;
  xs: FontSizeVariant;
  s: FontSizeVariant;
  m: FontSizeVariant;
  l: FontSizeVariant;
  xl: FontSizeVariant;
  xxl: FontSizeVariant;
  xxxl: FontSizeVariant;
}

export interface FontVariant {
  fontFamily: string;
}

export interface Fonts {
  spaceGrotesk: {
    regular: FontVariant;
    medium: FontVariant;
    semiBold: FontVariant;
    bold: FontVariant;
  };
}

export type SpacingProperty =
  | 'full'
  | 'top'
  | 'right'
  | 'left'
  | 'bottom'
  | 'horizontal'
  | 'vertical';

export type GapProperty = 'full' | 'row' | 'column';

export interface ThemeLayout {
  padding: keyof Sizes;
  gap: keyof Sizes;
}

export interface ThemeBackgroundsColors {
  white: keyof Colors;
  black: keyof Colors;
  primary: string;
  secondary: string;
  tertiary: string;
  highlightPrimary: keyof Colors;
  highlightSecondary: keyof Colors;
  error: keyof Colors;
  warning: keyof Colors;
  success: keyof Colors;
}

export interface ThemeTextColors {
  primary: keyof Colors;
  secondary: keyof Colors;
  tertiary: keyof Colors;
  highlightPrimary: keyof Colors;
  highlightSecondary: keyof Colors;
  white: keyof Colors;
  black: keyof Colors;
  error: keyof Colors;
  warning: keyof Colors;
  success: keyof Colors;
}

export interface ThemeColors {
  backgroundLight: keyof Colors;
  backgroundDark: keyof Colors;
  textPrimaryDark: keyof Colors;
  textSecondaryDark: keyof Colors;
  textPrimaryLight: keyof Colors;
  textSecondaryLight: keyof Colors;
  primary: keyof Colors;
  secondary: keyof Colors;
}

export interface Theme {
  layout: ThemeLayout;
  colors: ThemeColors;
  textColors: ThemeTextColors;
  backgroundColors: ThemeBackgroundsColors;
}
