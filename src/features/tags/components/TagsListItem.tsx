import { Tag } from '@api/clients/tags/types';
import { IconButton, Text } from '@common/v2/components';
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
    <IconButton backgroundColor="tertiary" size={42} iconName="card" isDisabled />
    <View style={flex1}>
      <Text weight="semiBold" size="s" color="primary">
        {tag.name}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('s'),
    ...gap('column')('s'),
    ...rowCenter,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default TagsListItem;
