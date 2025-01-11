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

export type SpacingProperty =
  | 'full'
  | 'top'
  | 'right'
  | 'left'
  | 'bottom'
  | 'horizontal'
  | 'vertical';

export type GapProperty = 'full' | 'row' | 'column';
