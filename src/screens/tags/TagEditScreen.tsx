import { ScreenContainer } from '@common/v2/components';
import { TagEdit } from '@features/tags/containers';
import { TagEditScreenProps } from '@navigation/types';
import React from 'react';

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <ScreenContainer>
    <TagEdit id={route.params.id} />
  </ScreenContainer>
);

export default TagEditScreen;
