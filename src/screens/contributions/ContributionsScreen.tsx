import { ScreenContainer } from '@common/components';
import { Contributions } from '@features/contributions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type ContributionsScreenProps = StaticScreenProps<{ goalId: number }>;

const ContributionsScreen = ({ route }: ContributionsScreenProps) => (
  <ScreenContainer>
    <Contributions goalId={route.params.goalId} />
  </ScreenContainer>
);

export default ContributionsScreen;
