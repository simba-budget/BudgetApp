import { ScreenContainer } from '@common/v2/components';
import { Category } from '@features/categories/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type CategoryScreenProps = StaticScreenProps<{ id: number }>;

const CategoryScreen = ({ route }: CategoryScreenProps) => (
  <ScreenContainer>
    <Category id={route.params.id} />
  </ScreenContainer>
);

export default CategoryScreen;
