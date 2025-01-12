import { SheetScreenContainer } from '@common/components';
import { TagEdit } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <TagEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default TagEditScreen;
