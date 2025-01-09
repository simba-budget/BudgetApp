import { SheetScreenContainer } from '@common/v2/components';
import { CategoryDelete } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryDeleteScreenProps = StaticScreenProps<{ id: number }>;

const CategoryDeleteScreen = ({ route }: CategoryDeleteScreenProps) => (
  <SheetScreenContainer backgroundColor="secondary">
    <CategoryDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default CategoryDeleteScreen;
