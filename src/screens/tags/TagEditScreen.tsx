import { ScreenContainer } from '@common/v2/components';
import { TagEdit } from '@features/tags/containers';
import { TagEditScreenProps } from '@navigation/navigators/account';
import React from 'react';

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <ScreenContainer>
    <TagEdit id={route.params.id} />
  </ScreenContainer>
);

export default TagEditScreen;
