import { Member } from '@api/clients/members/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { toMember } from '@navigation/actions';
import { AccountNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useDebounce } from 'use-debounce';

import { MembersList, MembersSearch } from '../components';
import { useMembers } from '../hooks';
import { selectMembersFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Members = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectMembersFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { members, isLoading, isRefetching, refetch } = useMembers({
    accountId,
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnMemberPress = useCallback(
    (member: Member) => toMember(navigation, { id: member.id }),
    [navigation],
  );

  return (
    <SafeAreaView style={flex1}>
      <MembersSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <MembersList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        members={members}
        onMemberPress={handleOnMemberPress}
      />
    </SafeAreaView>
  );
};

export default Members;
