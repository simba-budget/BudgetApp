import { BottomSheetScreenContainer } from '@common/components';
import { Tag } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagScreenProps = StaticScreenProps<{ id: number }>;

const TagScreen = ({ route }: TagScreenProps) => (
  <BottomSheetScreenContainer>
    <Tag id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default TagScreen;
