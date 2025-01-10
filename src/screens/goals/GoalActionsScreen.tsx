import { SheetScreenContainer } from '@common/components';
import { GoalActions } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalActionsScreenProps = StaticScreenProps<{ id: number }>;

const GoalActionsScreen = ({ route }: GoalActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <GoalActions id={route.params.id} />
  </SheetScreenContainer>
);

export default GoalActionsScreen;
