import { BottomSheetScreenContainer } from '@common/components';
import { GoalAdd } from '@features/goals/containers';
import React from 'react';

const GoalAddScreen = () => (
  <BottomSheetScreenContainer>
    <GoalAdd />
  </BottomSheetScreenContainer>
);

export default GoalAddScreen;
