import { Category } from '@api/clients/categories/types';
import { IconButton, Text } from '@common/v2/components';
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

export interface CategoriesListItemProps {
  style?: StyleProp<ViewStyle>;
  category: Category;
  onPress: () => void;
}

const CategoriesListItemProps = ({
  style,
  category,
  onPress,
}: CategoriesListItemProps) => (
  <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
    <IconButton iconName="card" size={36} iconSize={18} isDisabled />
    <View style={flex1}>
      <Text weight="semiBold" size="s" color="primary">
        {category.name}
      </Text>
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

export default CategoriesListItemProps;
