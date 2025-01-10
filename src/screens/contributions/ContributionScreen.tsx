import { Contribution } from '@features/contributions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type ContributionScreenProps = StaticScreenProps<{ id: number }>;

const ContributionScreen = ({ route }: ContributionScreenProps) => (
  <ScreenContainer>
    <Contribution id={route.params.id} />
  </ScreenContainer>
);

export default ContributionScreen;
