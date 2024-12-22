import { Button, ScreenContainer } from '@common/components';
import { useCreateAccessToken, useCreateLinkToken } from '@features/openBanking/hooks';
import React, { useEffect, useState } from 'react';
import {
  create,
  dismissLink,
  LinkIOSPresentationStyle,
  LinkLogLevel,
  LinkSuccess,
  open,
} from 'react-native-plaid-link-sdk';

const PlaidScreen = () => {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const { createLinkToken, isSubmitting } = useCreateLinkToken({ onSuccess: setLinkToken });
  const { createAccessToken } = useCreateAccessToken();

  useEffect(() => {
    if (!linkToken) {
      createLinkToken();
    } else {
      const tokenConfiguration = createLinkTokenConfiguration(linkToken);
      create(tokenConfiguration);
    }
  }, [linkToken, createLinkToken]);

  const createLinkTokenConfiguration = (token: string, noLoadingState: boolean = false) => {
    return {
      token: token,
      noLoadingState: noLoadingState,
    };
  };

  const createLinkOpenProps = () => ({
    onSuccess: async (response: LinkSuccess) => {
      const { publicToken, metadata } = response;
      if (!metadata.institution) return;
      return createAccessToken({ publicToken, institutionId: metadata.institution.id });
    },
    onExit: dismissLink,
    iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
    logLevel: LinkLogLevel.ERROR,
  });

  const handleOpenLink = () => {
    const openProps = createLinkOpenProps();
    open(openProps);
  };

  return (
    <ScreenContainer>
      <Button isLoading={isSubmitting} title="Open Link" onPress={handleOpenLink} />
    </ScreenContainer>
  );
};

export default PlaidScreen;
