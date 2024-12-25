import { ScreenContainer, StatusBar } from '@common/components';
import { CategoryAdd } from '@features/categories/containers';
import React from 'react';

const CategoryAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <CategoryAdd />
  </ScreenContainer>
);

export default CategoryAddScreen;
