import { ScreenContainer, StatusBar } from '@common/v2/components';
import { TagAdd } from '@features/tags/containers';
import React from 'react';

const TagAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <TagAdd />
  </ScreenContainer>
);

export default TagAddScreen;
