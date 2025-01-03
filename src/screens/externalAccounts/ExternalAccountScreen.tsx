import { ScreenContainer, StatusBar } from '@common/v2/components';
import { ExternalAccount } from '@features/externalAccounts/containers';
import { ExternalAccountScreenProps } from '@navigation/navigators/account';
import React from 'react';

const ExternalAccountScreen = ({ route }: ExternalAccountScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <ExternalAccount id={route.params.id} />
  </ScreenContainer>
);

export default ExternalAccountScreen;
