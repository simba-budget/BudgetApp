import { SheetScreenContainer } from '@common/components';
import { GoalAdd } from '@features/goals/containers';
import React from 'react';

const GoalAddScreen = () => (
  <SheetScreenContainer isBottomSafe>
    <GoalAdd />
  </SheetScreenContainer>
);

export default GoalAddScreen;
