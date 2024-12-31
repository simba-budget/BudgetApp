import { Tag } from '@api/clients/tags/types';
import { Svg, Text } from '@common/v2/components';
import { center, flex1, rowCenter } from '@styles/common';
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

export interface TagsListItemProps {
  style?: StyleProp<ViewStyle>;
  tag: Tag;
  onPress: () => void;
}

const TagsListItem = ({ style, tag, onPress }: TagsListItemProps) => (
  <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Svg color={colors.text.primary} size={18} name="card" />
    </View>
    <View style={flex1}>
      <Text weight="semiBold" size="s" color="primary">
        {tag.name}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('vertical')('xs'),
    ...padding('horizontal')('xs'),
    borderRadius: 12,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
  iconContainer: {
    ...center,
    backgroundColor: colors.background.tertiary,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default TagsListItem;
