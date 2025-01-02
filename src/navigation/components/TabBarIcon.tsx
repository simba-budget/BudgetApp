import { Svg } from '@common/v2/components';
import { IconName } from '@icons';
import { center } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface TabBarIconProps {
  focused: boolean;
  iconName: IconName;
}

const TabBarIcon = ({ focused, iconName }: TabBarIconProps) => (
  <View style={[styles.container, focused && styles.focusedContainer]}>
    <Svg
      color={focused ? colors.text.secondary : colors.text.tertiary}
      size={24}
      name={iconName}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.background.tertiary,
  },
  focusedContainer: {
    backgroundColor: colors.background.accent,
  },
});

export default TabBarIcon;
