import { IconName } from '@icons';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import IconButton from './IconButton';
import Svg from './Svg';
import Text from './Text';

export interface ValueContainerProps {
  iconName: IconName;
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const ValueContainer = ({
  onPress,
  style,
  isDisabled = false,
  iconName,
  label,
  children,
}: ValueContainerProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, style]}
    disabled={isDisabled}>
    <IconButton size={36} iconSize={18} isDisabled iconName={iconName} />
    <Text style={flex1} size="s" weight="semiBold" color="primary">
      {label}
    </Text>
    <View style={[rowCenter, gap('column')('xs')]}>
      {children}
      <Svg color={colors.text.tertiary} size={16} name="arrowRight" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('xs'),
    borderRadius: 12,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default ValueContainer;
