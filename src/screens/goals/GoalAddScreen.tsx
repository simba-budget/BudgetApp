import { ScreenContainer, StatusBar } from '@common/v2/components';
import { GoalAdd } from '@features/goals/containers';
import React from 'react';

const GoalAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <GoalAdd />
  </ScreenContainer>
);

export default GoalAddScreen;
