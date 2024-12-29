import { ScreenContainer } from '@common/v2/components';
import { GoalEdit } from '@features/goals/containers';
import { GoalEditScreenProps } from '@navigation/navigators/account';
import React from 'react';

const GoalEditScreen = ({ route }: GoalEditScreenProps) => (
  <ScreenContainer>
    <GoalEdit id={route.params.id} />
  </ScreenContainer>
);

export default GoalEditScreen;
