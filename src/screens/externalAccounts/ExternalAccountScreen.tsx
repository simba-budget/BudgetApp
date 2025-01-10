import { ExternalAccount } from '@features/externalAccounts/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type ExternalAccountScreenProps = StaticScreenProps<{ id: number }>;

const ExternalAccountScreen = ({ route }: ExternalAccountScreenProps) => (
  <ScreenContainer>
    <ExternalAccount id={route.params.id} />
  </ScreenContainer>
);

export default ExternalAccountScreen;
