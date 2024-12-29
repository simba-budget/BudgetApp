import { ScreenContainer, StatusBar } from '@common/v2/components';
import { ContributionAdd } from '@features/contributions/containers';
import { ContributionAddScreenProps } from '@navigation/navigators/account';
import React from 'react';

const ContributionAddScreen = ({ route }: ContributionAddScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <ContributionAdd goalId={route.params.goalId} />
  </ScreenContainer>
);

export default ContributionAddScreen;
