import { ScreenContainer } from '@common/v2/components';
import { GoalEdit } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalEditScreenProps = StaticScreenProps<{ id: number }>;

const GoalEditScreen = ({ route }: GoalEditScreenProps) => (
  <ScreenContainer>
    <GoalEdit id={route.params.id} />
  </ScreenContainer>
);

export default GoalEditScreen;
