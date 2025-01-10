import { TagDelete } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TagDeleteScreenProps = StaticScreenProps<{ id: number }>;

const TagDeleteScreen = ({ route }: TagDeleteScreenProps) => (
  <SheetScreenContainer>
    <TagDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default TagDeleteScreen;
