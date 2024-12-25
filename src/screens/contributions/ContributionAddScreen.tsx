import { ScreenContainer, StatusBar } from '@common/components';
import { ContributionAdd } from '@features/contributions/containers';
import { ContributionAddScreenProps } from '@navigation/types';
import React from 'react';

const ContributionAddScreen = ({ route }: ContributionAddScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <ContributionAdd goalId={route.params.goalId} />
  </ScreenContainer>
);

export default ContributionAddScreen;
