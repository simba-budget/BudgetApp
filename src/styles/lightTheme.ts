import { FlexStyle } from 'react-native';

import { GapProperty, Sizes, SpacingProperty } from './types';

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
