import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Tag } from '@features/tags/containers';
import { TagScreenProps } from '@navigation/navigators/account';
import React from 'react';

const TagScreen = ({ route }: TagScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Tag id={route.params.id} />
  </ScreenContainer>
);

export default TagScreen;
