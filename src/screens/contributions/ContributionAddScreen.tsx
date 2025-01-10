import { ScreenContainer } from '@common/components';
import { ContributionAdd } from '@features/contributions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type ContributionAddScreenProps = StaticScreenProps<{ goalId: number }>;

const ContributionAddScreen = ({ route }: ContributionAddScreenProps) => (
  <ScreenContainer>
    <ContributionAdd goalId={route.params.goalId} />
  </ScreenContainer>
);

export default ContributionAddScreen;
