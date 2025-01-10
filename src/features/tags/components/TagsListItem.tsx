import { Tag } from '@api/clients/tags/types';
import {
  RootNavigation,
  tagActionsRoute,
  tagRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
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
import { IconButton, Text } from 'src/common/components';

export interface TagsListItemProps {
  style?: StyleProp<ViewStyle>;
  tag: Tag;
}

const TagsListItemProps = ({ style, tag }: TagsListItemProps) => {
  const { navigate } = useNavigation<RootNavigation>();

  return (
    <TouchableOpacity
      style={[style, styles.container]}
      onLongPress={() => navigate(tagActionsRoute, { id: tag.id })}
      onPress={() => navigate(tagRoute, { id: tag.id })}>
      <IconButton iconName="card" size={36} iconSize={18} isDisabled />
      <View style={flex1}>
        <Text weight="semiBold" size="s" color="primary">
          {tag.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

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

export default TagsListItemProps;
