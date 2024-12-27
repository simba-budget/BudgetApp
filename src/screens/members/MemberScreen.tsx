import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Member } from '@features/members/containers';
import { MemberScreenProps } from '@navigation/types';
import React from 'react';

const MemberScreen = ({ route }: MemberScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Member id={route.params.id} />
  </ScreenContainer>
);

export default MemberScreen;
