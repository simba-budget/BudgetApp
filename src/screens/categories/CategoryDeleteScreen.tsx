import { SheetScreenContainer } from '@common/components';
import { CategoryDelete } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryDeleteScreenProps = StaticScreenProps<{ id: number }>;

const CategoryDeleteScreen = ({ route }: CategoryDeleteScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <CategoryDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default CategoryDeleteScreen;
