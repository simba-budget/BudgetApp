import { BottomSheetScreenContainer } from '@common/components';
import { GoalDelete } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalDeleteScreenProps = StaticScreenProps<{ id: number }>;

const GoalDeleteScreen = ({ route }: GoalDeleteScreenProps) => (
  <BottomSheetScreenContainer>
    <GoalDelete id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default GoalDeleteScreen;
