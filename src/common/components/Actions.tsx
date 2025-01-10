import { IconName } from '@icons';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import Action from './Action';
import Text from './Text';

export interface ActionItem {
  onPress: () => void;
  title: string;
  description?: string;
  iconName: IconName;
}

export interface ActionsProps {
  items: ActionItem[];
  title: string;
}

const Actions = ({ items, title }: ActionsProps) => (
  <View style={[padding('horizontal')('m'), padding('top')('m'), gap('row')('xs')]}>
    <Text
      style={margin('bottom')('s')}
      textAlign="center"
      color="primary"
      size="m"
      weight="semiBold">
      {title}
    </Text>
    {items.map((item, index) => (
      <Action key={index} item={item} />
    ))}
  </View>
);

export default Actions;
