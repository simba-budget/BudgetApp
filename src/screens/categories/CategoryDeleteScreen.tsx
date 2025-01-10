import { CategoryDelete } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type CategoryDeleteScreenProps = StaticScreenProps<{ id: number }>;

const CategoryDeleteScreen = ({ route }: CategoryDeleteScreenProps) => (
  <SheetScreenContainer>
    <CategoryDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default CategoryDeleteScreen;
