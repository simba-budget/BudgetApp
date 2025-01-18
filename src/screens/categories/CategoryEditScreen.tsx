import { BottomSheetScreenContainer } from '@common/components';
import { CategoryEdit } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryEditScreenProps = StaticScreenProps<{ id: number }>;

const CategoryEditScreen = ({ route }: CategoryEditScreenProps) => (
  <BottomSheetScreenContainer>
    <CategoryEdit id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default CategoryEditScreen;
