import { RootNavigation, toMemberEdit } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { MemberDetails } from '../components';
import { useMember } from '../hooks';

export interface MemberProps {
  id: number;
}

const Member = ({ id }: MemberProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { member, refetch, isRefetching, isLoading } = useMember(id);

  const handleOnEditPress = useCallback(
    () => toMemberEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <MemberDetails
      member={member}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Member;
