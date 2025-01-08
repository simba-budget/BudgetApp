import { ScreenContainer } from '@common/v2/components';
import { Member } from '@features/members/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type MemberScreenProps = StaticScreenProps<{
  id: number;
}>;

const MemberScreen = ({ route }: MemberScreenProps) => (
  <ScreenContainer>
    <Member id={route.params.id} />
  </ScreenContainer>
);

export default MemberScreen;
