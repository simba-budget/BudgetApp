import { Member } from '@features/members/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type MemberScreenProps = StaticScreenProps<{
  id: number;
}>;

const MemberScreen = ({ route }: MemberScreenProps) => (
  <ScreenContainer>
    <Member id={route.params.id} />
  </ScreenContainer>
);

export default MemberScreen;
