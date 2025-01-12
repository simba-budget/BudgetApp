import { SheetScreenContainer } from '@common/components';
import { TagDelete } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagDeleteScreenProps = StaticScreenProps<{ id: number }>;

const TagDeleteScreen = ({ route }: TagDeleteScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <TagDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default TagDeleteScreen;
