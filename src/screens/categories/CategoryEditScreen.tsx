import { ScreenContainer } from '@common/components';
import { CategoryEdit } from '@features/categories/containers';
import { CategoryEditScreenProps } from '@navigation/types';
import React from 'react';

const CategoryEditScreen = ({ route }: CategoryEditScreenProps) => (
  <ScreenContainer>
    <CategoryEdit id={route.params.id} />
  </ScreenContainer>
);

export default CategoryEditScreen;
