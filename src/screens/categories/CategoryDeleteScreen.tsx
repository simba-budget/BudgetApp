import { BottomSheetScreenContainer } from '@common/components';
import { CategoryDelete } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryDeleteScreenProps = StaticScreenProps<{ id: number }>;

const CategoryDeleteScreen = ({ route }: CategoryDeleteScreenProps) => (
  <BottomSheetScreenContainer>
    <CategoryDelete id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default CategoryDeleteScreen;
