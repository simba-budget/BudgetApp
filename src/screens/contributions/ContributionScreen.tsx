import { ScreenContainer, StatusBar } from '@common/components';
import { Contribution } from '@features/contributions/containers';
import { ContributionScreenProps } from '@navigation/types';
import React from 'react';

const ContributionScreen = ({ route }: ContributionScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Contribution id={route.params.id} />
  </ScreenContainer>
);

export default ContributionScreen;
