import { TagEdit } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TagEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <SheetScreenContainer>
    <TagEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default TagEditScreen;
