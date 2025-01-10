import { Goal } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type GoalScreenProps = StaticScreenProps<{ id: number }>;

const GoalScreen = ({ route }: GoalScreenProps) => (
  <ScreenContainer>
    <Goal id={route.params.id} />
  </ScreenContainer>
);

export default GoalScreen;
