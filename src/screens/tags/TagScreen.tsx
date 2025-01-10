import { Tag } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TagScreenProps = StaticScreenProps<{ id: number }>;

const TagScreen = ({ route }: TagScreenProps) => (
  <SheetScreenContainer>
    <Tag id={route.params.id} />
  </SheetScreenContainer>
);

export default TagScreen;
