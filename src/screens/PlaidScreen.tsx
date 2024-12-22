import { Button, ScreenContainer } from '@common/components';
import { useCreateLinkToken } from '@features/openBanking/hooks';
import React, { useEffect, useState } from 'react';
import {
  create,
  dismissLink,
  LinkExit,
  LinkIOSPresentationStyle,
  LinkLogLevel,
  LinkSuccess,
  open,
} from 'react-native-plaid-link-sdk';

const PlaidScreen = () => {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const { createLinkToken, isSubmitting } = useCreateLinkToken({ onSuccess: setLinkToken });

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

  const createLinkOpenProps = () => {
    return {
      onSuccess: async (success: LinkSuccess) => {
        console.log('success', success);
      },
      onExit: (linkExit: LinkExit) => {
        console.log('Exit: ', linkExit);
        dismissLink();
      },
      iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
      logLevel: LinkLogLevel.ERROR,
    };
  };

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
