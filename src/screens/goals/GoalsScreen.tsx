import { ScreenContainer, StatusBar } from '@common/components';
import { Goals } from '@features/goals/containers';
import React from 'react';

const GoalsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Goals />
  </ScreenContainer>
);

export default GoalsScreen;
