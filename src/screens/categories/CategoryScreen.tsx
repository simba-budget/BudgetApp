import { ScreenContainer } from '@common/v2/components';
import { Category } from '@features/categories/containers';
import { CategoryScreenProps } from '@navigation/types';
import React from 'react';

const CategoryScreen = ({ route }: CategoryScreenProps) => (
  <ScreenContainer>
    <Category id={route.params.id} />
  </ScreenContainer>
);

export default CategoryScreen;
