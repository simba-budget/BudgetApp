import { ScreenContainer, StatusBar } from '@common/components';
import { GoalAdd } from '@features/goals/containers';
import React from 'react';

const GoalAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <GoalAdd />
  </ScreenContainer>
);

export default GoalAddScreen;
