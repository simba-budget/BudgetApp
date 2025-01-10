import { SheetScreenContainer } from '@common/components';
import { CategoryEdit } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryEditScreenProps = StaticScreenProps<{ id: number }>;

const CategoryEditScreen = ({ route }: CategoryEditScreenProps) => (
  <SheetScreenContainer>
    <CategoryEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default CategoryEditScreen;
