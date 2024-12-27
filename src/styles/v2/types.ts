export interface Colors {
  common: {
    white: string;
    black: string;
  };
  background: {
    primary: string;
    secondary: string;
    accent: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    placeholder: string;
  };
  border: {
    primary: string;
  };
}

export interface FontVariant {
  fontFamily: string;
}

export interface Fonts {
  urbanist: {
    light: FontVariant;
    regular: FontVariant;
    medium: FontVariant;
    semiBold: FontVariant;
    bold: FontVariant;
    black: FontVariant;
  };
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
}
