import { ContributionEdit } from '@features/contributions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type ContributionEditScreenProps = StaticScreenProps<{ id: number }>;

const ContributionEditScreen = ({ route }: ContributionEditScreenProps) => (
  <ScreenContainer>
    <ContributionEdit id={route.params.id} />
  </ScreenContainer>
);

export default ContributionEditScreen;
