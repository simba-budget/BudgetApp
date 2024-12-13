import { colors } from '@styles/lightTheme';
import { FontSizes, ThemeTextColors } from '@styles/types';
import { getInitials } from '@utils/string';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Image from 'react-native-fast-image';

import TextHeading from './TextHeading';
import View from './View';

export type AvatarSize = 'medium' | 'large';
export type AvatarVariant = 'primary' | 'secondary' | 'tertiary';

export interface AvatarProps {
  style?: StyleProp<ViewStyle>;
  size?: AvatarSize;
  fullName: string;
  uri?: string | null;
  variant?: AvatarVariant;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { style, uri, size = 'medium', fullName, variant = 'tertiary' } = props;

  return (
    <View
      align="center"
      justify="center"
      style={[containerSizeMap[size], containerVariantMap[variant], styles.container, style]}>
      {!!uri && <Image resizeMode="cover" style={styles.image} source={{ uri }} />}
      {!uri && (
        <TextHeading color={placeholderColorMap[variant]} size={placeholderSizeMap[size]}>
          {getInitials(fullName)}
        </TextHeading>
      )}
    </View>
  );
};

const containerSizeMap: Record<AvatarSize, ViewStyle> = {
  medium: {
    height: 46,
    width: 46,
    borderRadius: 23,
  },
  large: {
    height: 52,
    width: 52,
    borderRadius: 26,
  },
};

const placeholderSizeMap: Record<AvatarSize, keyof FontSizes> = {
  medium: 's',
  large: 'l',
};

const placeholderColorMap: Record<AvatarVariant, keyof ThemeTextColors> = {
  primary: 'white',
  secondary: 'primary',
  tertiary: 'highlightPrimary',
};

const containerVariantMap: Record<AvatarVariant, ViewStyle> = {
  primary: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },
  secondary: {
    backgroundColor: colors.lightGrey500,
    borderColor: colors.lightGrey500,
  },
  tertiary: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
