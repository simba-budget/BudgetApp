import { ScreenContainer } from '@common/v2/components';
import { TagEdit } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <ScreenContainer>
    <TagEdit id={route.params.id} />
  </ScreenContainer>
);

export default TagEditScreen;
