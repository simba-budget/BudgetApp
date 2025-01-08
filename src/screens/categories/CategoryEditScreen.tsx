import { ScreenContainer } from '@common/v2/components';
import { CategoryEdit } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryEditScreenProps = StaticScreenProps<{ id: number }>;

const CategoryEditScreen = ({ route }: CategoryEditScreenProps) => (
  <ScreenContainer>
    <CategoryEdit id={route.params.id} />
  </ScreenContainer>
);

export default CategoryEditScreen;
