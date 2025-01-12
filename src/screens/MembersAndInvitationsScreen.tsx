import { ScreenContainer, Tabs } from '@common/components';
import { Tab } from '@common/components/Tabs';
import { InvitationAddSection } from '@features/invitations/components';
import { Invitations } from '@features/invitations/containers';
import { Members } from '@features/members/containers';
import { useMembersTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

const MembersAndInvitationsScreen = () => {
  const { t } = useMembersTranslations();

  const tabs = useMemo<Tab[]>(
    () => [
      { title: t('Members'), children: <Members /> },
      { title: t('Invitations'), children: <Invitations /> },
    ],
    [t],
  );

  return (
    <ScreenContainer>
      <View style={[padding('horizontal')('m'), margin('bottom')('s')]}>
        <InvitationAddSection />
      </View>
      <Tabs tabs={tabs} />
    </ScreenContainer>
  );
};

export default MembersAndInvitationsScreen;
