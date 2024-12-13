import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const baseWidth = 428;
const scaleMultiplier = width / baseWidth;

export const scale = (size: number) => {
  return Math.round(PixelRatio.roundToNearestPixel(size * scaleMultiplier));
};
