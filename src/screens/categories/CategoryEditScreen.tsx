import { CategoryEdit } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type CategoryEditScreenProps = StaticScreenProps<{ id: number }>;

const CategoryEditScreen = ({ route }: CategoryEditScreenProps) => (
  <SheetScreenContainer>
    <CategoryEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default CategoryEditScreen;
