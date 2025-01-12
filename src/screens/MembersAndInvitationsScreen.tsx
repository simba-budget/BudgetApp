import { SheetScreenContainer, Tabs } from '@common/components';
import { Tab } from '@common/components/Tabs';
import { Invitations } from '@features/invitations/containers';
import { Members } from '@features/members/containers';
import { useMembersTranslations } from '@i18n/hooks';
import React, { useMemo } from 'react';

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
    <SheetScreenContainer minHeight="60%">
      <Tabs tabs={tabs} />
    </SheetScreenContainer>
  );
};

export default MembersAndInvitationsScreen;
