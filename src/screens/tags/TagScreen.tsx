import { SheetScreenContainer } from '@common/components';
import { Tag } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagScreenProps = StaticScreenProps<{ id: number }>;

const TagScreen = ({ route }: TagScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <Tag id={route.params.id} />
  </SheetScreenContainer>
);

export default TagScreen;
