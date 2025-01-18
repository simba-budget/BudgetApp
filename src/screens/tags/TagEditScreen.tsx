import { BottomSheetScreenContainer } from '@common/components';
import { TagEdit } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const TagEditScreen = ({ route }: TagEditScreenProps) => (
  <BottomSheetScreenContainer>
    <TagEdit id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default TagEditScreen;
