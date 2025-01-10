import { ScreenContainer } from '@common/components';
import { ExternalAccount } from '@features/externalAccounts/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type ExternalAccountScreenProps = StaticScreenProps<{ id: number }>;

const ExternalAccountScreen = ({ route }: ExternalAccountScreenProps) => (
  <ScreenContainer>
    <ExternalAccount id={route.params.id} />
  </ScreenContainer>
);

export default ExternalAccountScreen;
