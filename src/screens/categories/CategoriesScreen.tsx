import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Categories } from '@features/categories/containers';
import React from 'react';

const CategoriesScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Categories />
  </ScreenContainer>
);

export default CategoriesScreen;
