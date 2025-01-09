import { SheetScreenContainer } from '@common/v2/components';
import { GoalDelete } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalDeleteScreenProps = StaticScreenProps<{ id: number }>;

const GoalDeleteScreen = ({ route }: GoalDeleteScreenProps) => (
  <SheetScreenContainer>
    <GoalDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default GoalDeleteScreen;
