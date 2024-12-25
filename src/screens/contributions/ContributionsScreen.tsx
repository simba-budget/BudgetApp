import { ScreenContainer, StatusBar } from '@common/components';
import { Contributions } from '@features/contributions/containers';
import { ContributionsScreenProps } from '@navigation/types';
import React from 'react';

const ContributionsScreen = ({ route }: ContributionsScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Contributions goalId={route.params.goalId} />
  </ScreenContainer>
);

export default ContributionsScreen;
