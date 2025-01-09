import { SheetScreenContainer } from '@common/v2/components';
import { GoalEdit } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalEditScreenProps = StaticScreenProps<{ id: number }>;

const GoalEditScreen = ({ route }: GoalEditScreenProps) => (
  <SheetScreenContainer>
    <GoalEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default GoalEditScreen;
