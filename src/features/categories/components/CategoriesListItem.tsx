import { Category } from '@api/clients/categories/types';
import { IconButton, Text } from '@common/components';
import {
  categoryActionsRoute,
  categoryRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface CategoriesListItemProps {
  style?: StyleProp<ViewStyle>;
  category: Category;
}

const CategoriesListItemProps = ({ style, category }: CategoriesListItemProps) => {
  const { navigate } = useNavigation<RootNavigation>();

  return (
    <TouchableOpacity
      style={[style, styles.container]}
      onLongPress={() => navigate(categoryActionsRoute, { id: category.id })}
      onPress={() => navigate(categoryRoute, { id: category.id })}>
      <IconButton iconName="card" size={36} iconSize={18} isDisabled />
      <Text style={flex1} weight="semiBold" size="s" color="primary">
        {category.name}
      </Text>
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

export default CategoriesListItemProps;
