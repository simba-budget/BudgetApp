import { SheetScreenContainer } from '@common/components';
import { TagActions } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TagActionsScreenProps = StaticScreenProps<{ id: number }>;

const TagActionsScreen = ({ route }: TagActionsScreenProps) => (
  <SheetScreenContainer>
    <TagActions id={route.params.id} />
  </SheetScreenContainer>
);

export default TagActionsScreen;
