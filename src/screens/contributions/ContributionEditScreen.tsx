import { ScreenContainer } from '@common/v2/components';
import { ContributionEdit } from '@features/contributions/containers';
import { ContributionEditScreenProps } from '@navigation/navigators/account';
import React from 'react';

const ContributionEditScreen = ({ route }: ContributionEditScreenProps) => (
  <ScreenContainer>
    <ContributionEdit id={route.params.id} />
  </ScreenContainer>
);

export default ContributionEditScreen;
