import { SheetScreenContainer } from '@common/components';
import { GoalEdit } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalEditScreenProps = StaticScreenProps<{ id: number }>;

const GoalEditScreen = ({ route }: GoalEditScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <GoalEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default GoalEditScreen;
