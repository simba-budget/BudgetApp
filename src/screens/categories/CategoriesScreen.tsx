import { ScreenContainer, StatusBar } from '@common/components';
import { Categories } from '@features/categories/containers';
import React from 'react';

const CategoriesScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Categories />
  </ScreenContainer>
);

export default CategoriesScreen;
