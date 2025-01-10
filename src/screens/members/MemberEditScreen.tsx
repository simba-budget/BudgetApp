import { ScreenContainer } from '@common/components';
import { MemberEdit } from '@features/members/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type MemberEditScreenProps = StaticScreenProps<{ id: number }>;

const MemberEditScreen = ({ route }: MemberEditScreenProps) => (
  <ScreenContainer>
    <MemberEdit id={route.params.id} />
  </ScreenContainer>
);

export default MemberEditScreen;
