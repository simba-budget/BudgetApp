import { ScreenContainer, StatusBar } from '@common/components';
import { Goal } from '@features/goals/containers';
import { GoalScreenProps } from '@navigation/types';
import React from 'react';

const GoalScreen = ({ route }: GoalScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Goal id={route.params.id} />
  </ScreenContainer>
);

export default GoalScreen;
