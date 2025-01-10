import { TagActions } from '@features/tags/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TagActionsScreenProps = StaticScreenProps<{ id: number }>;

const TagActionsScreen = ({ route }: TagActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <TagActions id={route.params.id} />
  </SheetScreenContainer>
);

export default TagActionsScreen;
