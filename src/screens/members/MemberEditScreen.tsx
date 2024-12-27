import { ScreenContainer } from '@common/v2/components';
import { MemberEdit } from '@features/members/containers';
import { MemberEditScreenProps } from '@navigation/types';
import React from 'react';

const MemberEditScreen = ({ route }: MemberEditScreenProps) => (
  <ScreenContainer>
    <MemberEdit id={route.params.id} />
  </ScreenContainer>
);

export default MemberEditScreen;
