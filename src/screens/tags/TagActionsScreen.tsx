import { BottomSheetScreenContainer } from '@common/components';
import { TagActions } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagActionsScreenProps = StaticScreenProps<{ id: number }>;

const TagActionsScreen = ({ route }: TagActionsScreenProps) => (
  <BottomSheetScreenContainer>
    <TagActions id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default TagActionsScreen;
