import { ContributionAdd } from '@features/contributions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type ContributionAddScreenProps = StaticScreenProps<{ goalId: number }>;

const ContributionAddScreen = ({ route }: ContributionAddScreenProps) => (
  <ScreenContainer>
    <ContributionAdd goalId={route.params.goalId} />
  </ScreenContainer>
);

export default ContributionAddScreen;
