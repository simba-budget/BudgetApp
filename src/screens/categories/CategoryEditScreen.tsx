import { ScreenContainer } from '@common/v2/components';
import { CategoryEdit } from '@features/categories/containers';
import { CategoryEditScreenProps } from '@navigation/navigators/account';
import React from 'react';

const CategoryEditScreen = ({ route }: CategoryEditScreenProps) => (
  <ScreenContainer>
    <CategoryEdit id={route.params.id} />
  </ScreenContainer>
);

export default CategoryEditScreen;
