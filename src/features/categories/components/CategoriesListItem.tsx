import { Category } from '@api/clients/categories/types';
import { Text } from '@common/v2/components';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface CategoriesListItemProps {
  style?: StyleProp<ViewStyle>;
  category: Category;
  onPress: () => void;
}

const CategoriesListItemProps = ({ style, category, onPress }: CategoriesListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{JSON.stringify(category, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('m'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 12,
  },
});

export default CategoriesListItemProps;
