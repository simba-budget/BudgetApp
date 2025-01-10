import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { ActionItem } from './Actions';
import IconButton from './IconButton';
import Svg from './Svg';
import Text from './Text';

export interface ActionProps {
  style?: StyleProp<ViewStyle>;
  item: ActionItem;
}

const Action = ({ style, item }: ActionProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={item.onPress}>
    <IconButton size={40} iconSize={20} iconName={item.iconName} />
    <View style={[flex1, gap('row')('xxxs')]}>
      <Text color="primary" weight="semiBold" size="s">
        {item.title}
      </Text>
      {!!item.description && (
        <Text color="tertiary" weight="medium" size="xs">
          {item.description}
        </Text>
      )}
    </View>
    <Svg size={20} color={colors.text.tertiary} name="arrowRight" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('s'),
    borderRadius: 16,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default Action;
