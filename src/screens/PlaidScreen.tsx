import { Button, ScreenContainer } from '@common/v2/components';
import { useCreateInstitutionLink, useCreateLinkToken } from '@features/openBanking/hooks';
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
  const { createInstitutionLink } = useCreateInstitutionLink();

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
      const name = metadata.institution.name;
      const institutionId = metadata.institution.id;
      const accountsIds = metadata.accounts.map((account) => account.id);
      return createInstitutionLink({ publicToken, institutionId, accountsIds, name });
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
