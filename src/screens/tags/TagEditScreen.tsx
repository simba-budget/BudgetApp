import { SheetScreenContainer } from '@common/v2/components';
import { TagEdit } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <SheetScreenContainer>
    <TagEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default TagEditScreen;
