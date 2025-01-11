import { margin } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export interface ListFooterProps {
  isFetchingMore?: boolean;
}

const ListFooter = ({ isFetchingMore }: ListFooterProps) => {
  if (!isFetchingMore) return null;

  return (
    <ActivityIndicator
      style={margin('vertical')('m')}
      size="small"
      color={colors.text.primary}
    />
  );
};

export default ListFooter;
