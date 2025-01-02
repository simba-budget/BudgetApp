import { Svg } from '@common/v2/components';
import { IconName } from '@icons';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';

export interface TabBarIconProps {
  focused: boolean;
  iconName: IconName;
}

const TabBarIcon = ({ focused, iconName }: TabBarIconProps) => (
  <Svg
    color={focused ? colors.text.accent : colors.text.tertiary}
    size={24}
    name={iconName}
  />
);

export default TabBarIcon;
