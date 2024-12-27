import { ScreenContainer, StatusBar } from '@common/v2/components';
import { CategoryAdd } from '@features/categories/containers';
import React from 'react';

const CategoryAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <CategoryAdd />
  </ScreenContainer>
);

export default CategoryAddScreen;
