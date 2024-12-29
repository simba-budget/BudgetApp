import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Goal } from '@features/goals/containers';
import { GoalScreenProps } from '@navigation/navigators/account';
import React from 'react';

const GoalScreen = ({ route }: GoalScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Goal id={route.params.id} />
  </ScreenContainer>
);

export default GoalScreen;
