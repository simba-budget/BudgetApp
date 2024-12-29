import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Contribution } from '@features/contributions/containers';
import { ContributionScreenProps } from '@navigation/navigators/account';
import React from 'react';

const ContributionScreen = ({ route }: ContributionScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Contribution id={route.params.id} />
  </ScreenContainer>
);

export default ContributionScreen;
