import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Goals } from '@features/goals/containers';
import React from 'react';

const GoalsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Goals />
  </ScreenContainer>
);

export default GoalsScreen;
