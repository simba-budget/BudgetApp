import { SheetScreenContainer } from '@common/components';
import { CategoryActions } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryActionsScreenProps = StaticScreenProps<{ id: number }>;

const CategoryActionsScreen = ({ route }: CategoryActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <CategoryActions id={route.params.id} />
  </SheetScreenContainer>
);

export default CategoryActionsScreen;
