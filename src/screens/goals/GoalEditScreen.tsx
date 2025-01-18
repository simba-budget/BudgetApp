import { BottomSheetScreenContainer } from '@common/components';
import { GoalEdit } from '@features/goals/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type GoalEditScreenProps = StaticScreenProps<{ id: number }>;

const GoalEditScreen = ({ route }: GoalEditScreenProps) => (
  <BottomSheetScreenContainer>
    <GoalEdit id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default GoalEditScreen;
