import { BottomSheetScreenContainer } from '@common/components';
import { Members } from '@features/members/containers';
import React from 'react';

const MembersScreen = () => (
  <BottomSheetScreenContainer>
    <Members />
  </BottomSheetScreenContainer>
);

export default MembersScreen;
