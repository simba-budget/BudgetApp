import { Category } from '@api/clients/categories/types';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

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
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
  },
});

export default CategoriesListItemProps;
