import { SheetScreenContainer } from '@common/components';
import { GoalDelete } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalDeleteScreenProps = StaticScreenProps<{ id: number }>;

const GoalDeleteScreen = ({ route }: GoalDeleteScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <GoalDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default GoalDeleteScreen;
