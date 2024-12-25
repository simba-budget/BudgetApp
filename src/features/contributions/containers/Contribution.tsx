import { toContributionEdit } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { ContributionDetails } from '../components';
import { useContribution } from '../hooks';

export interface ContributionProps {
  id: number;
}

const Contribution = ({ id }: ContributionProps) => {
  const navigation = useNavigation<MainNavigation>();
  const { contribution, refetch, isRefetching, isLoading } = useContribution(id);

  const handleOnEditPress = useCallback(
    () => toContributionEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <ContributionDetails
      contribution={contribution}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Contribution;
