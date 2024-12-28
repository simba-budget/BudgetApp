import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Tags } from '@features/tags/containers';
import React from 'react';

const TagsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Tags />
  </ScreenContainer>
);

export default TagsScreen;
